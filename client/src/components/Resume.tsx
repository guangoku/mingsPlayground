import { Fragment, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getBilingualText, rememberLandingScroll } from "@/lib/utils";
import { type Language, type BilingualText } from "@/lib/types";
import { RESUME_CARDS, RESUME_SUMMARY, type ResumeRow } from "@/lib/resume/data";
import SectionHeading from "./SectionHeading";
import WaveDivider from "./WaveDivider";

// Served from client/public - replace this file to update the downloadable resume.
const RESUME_PDF_URL = "/Mingyun_Guan_Resume.pdf";

interface ResumeProps {
  language: Language;
}

const splitParts = (text: string) => text.split(/\s*·\s*/);

/** A full-width closing bracket carries its own space, so "（无偿）·" needs no more. */
const endsWideBracket = (part: ReactNode) => typeof part === "string" && /[）」』】》]$/.test(part);

/**
 * Parts of a title joined with " · ". Each part is kept whole where it fits,
 * so a narrow line breaks between "Senior Data Engineer (Tech Lead) ·" and
 * "Data Platform" rather than mid-phrase; the dot stays with the part before.
 */
function Parts({ parts }: { parts: ReactNode[] }) {
  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>
          <span className="inline-block">
            {part}
            {i < parts.length - 1 && (
              <span className="text-muted-foreground">{endsWideBracket(part) ? "·" : " ·"}</span>
            )}
          </span>
          {i < parts.length - 1 && " "}
        </Fragment>
      ))}
    </>
  );
}

/** Body text with its **highlighted** phrases, a step darker than the body gray. */
function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(/\*\*(.+?)\*\*/).map((chunk, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="resume-em font-semibold">{chunk}</strong>
        ) : (
          <Fragment key={i}>{chunk}</Fragment>
        )
      )}
    </>
  );
}

/** Dates (or a label) to the left of the text on wider screens, above it on phones. */
function Row({ when, children }: { when: string; children: ReactNode }) {
  return (
    // 11rem fits the longest date in either language ("2017年10月 – 2024年12月").
    <div className="grid gap-1 sm:grid-cols-[11rem_minmax(0,1fr)] sm:items-baseline sm:gap-6">
      <p className="text-sm text-muted-foreground tabular-nums sm:whitespace-nowrap">{when}</p>
      <div className="min-w-0">{children}</div>
    </div>
  );
}

function RoleRow({
  row,
  t,
  Title,
}: {
  row: ResumeRow;
  t: (text: BilingualText) => string;
  Title: "h3" | "h4";
}) {
  return (
    <Row when={t(row.when)}>
      {row.title && (
        <Title className="font-medium text-foreground">
          <Parts parts={splitParts(t(row.title))} />
        </Title>
      )}
      {row.body && (
        <p className={`${row.title ? "mt-1" : ""} text-sm leading-relaxed text-muted-foreground`}>
          <Rich text={t(row.body)} />
        </p>
      )}
      {row.link && (
        <Link
          to={row.link.href}
          onClick={rememberLandingScroll}
          className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700 underline-offset-4 hover:underline dark:text-emerald-300"
        >
          {t(row.link.label)}
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </Link>
      )}
    </Row>
  );
}

export default function Resume({ language }: ResumeProps) {
  const t = (text: BilingualText) => getBilingualText(text, language);

  return (
    <section className="relative py-16 md:py-24 pb-24 md:pb-32 px-6 resume-bg" id="resume">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow={{ en: 'Experience', zh: '履历' }}
          title={{ en: 'Resume', zh: '简历' }}
          language={language}
          tone="light"
          accent="hsl(215 45% 45%)"
          testIdPrefix="resume"
        />
        <div className="text-center -mt-4 mb-12">
          <Button
            asChild
            className="rounded-full px-6 shadow-md transition-transform duration-300 hover:scale-[1.03]"
            data-testid="button-download-resume"
            style={{
              backgroundColor: 'hsl(var(--graphite-gray))',
              color: 'white',
              borderColor: 'hsl(var(--graphite-gray))'
            }}
          >
            <a href={RESUME_PDF_URL} download="Mingyun_Guan_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="h-4 w-4 mr-2" />
              {t({ en: 'Download PDF', zh: '下载 PDF' })}
            </a>
          </Button>
        </div>

        <div className="space-y-6 md:space-y-8">
          {/* Summary */}
          <Card className="resume-card" data-testid="resume-summary">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-lg md:text-xl font-semibold leading-snug text-foreground">
                <Parts parts={splitParts(t(RESUME_SUMMARY.title))} />
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                <Rich text={t(RESUME_SUMMARY.body)} />
              </p>
              <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 opacity-70" aria-hidden />
                {t(RESUME_SUMMARY.location)}
              </p>
            </CardContent>
          </Card>

          {RESUME_CARDS.map((card, cardIndex) => (
            <Card key={cardIndex} className="resume-card" data-testid={`resume-card-${cardIndex}`}>
              <CardContent className="p-6 md:p-8">
                {card.heading && (
                  <div className="mb-6 border-b border-border pb-6">
                    <Row when={t(card.heading.when)}>
                      <h3 className="text-lg font-semibold text-foreground">
                        <Parts parts={splitParts(t(card.heading.title))} />
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">{t(card.heading.note)}</p>
                    </Row>
                  </div>
                )}

                <div className="space-y-6">
                  {card.rows.map((row) => (
                    <RoleRow key={row.when.en} row={row} t={t} Title={card.heading ? "h4" : "h3"} />
                  ))}

                  {card.education && (
                    <Row when={t(card.education.when)}>
                      <ul className="space-y-1">
                        {card.education.degrees.map((degree) => {
                          const parts = splitParts(t(degree.title));
                          const school = parts.pop();
                          return (
                            <li key={degree.year} className="font-medium text-foreground">
                              {/* The year rides with the school, so it never wraps alone. */}
                              <Parts
                                parts={[
                                  ...parts,
                                  <>
                                    {school}
                                    <span className="font-normal text-muted-foreground">
                                      {" · "}
                                      {degree.year}
                                    </span>
                                  </>,
                                ]}
                              />
                            </li>
                          );
                        })}
                      </ul>
                    </Row>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <WaveDivider fill="hsl(var(--seam-contact))" />
    </section>
  );
}
