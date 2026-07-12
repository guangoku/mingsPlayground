import { Card, CardContent } from "@/components/ui/card";
import { Mail, Code, Linkedin, Camera } from "lucide-react";
import { getBilingualText } from "@/lib/utils";
import { type Language } from "@/lib/types";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

interface ContactProps {
  language: Language;
}

const contactLinks = [
  {
    id: 'linkedin',
    label: { en: 'LinkedIn', zh: '领英' },
    href: 'https://www.linkedin.com/in/mingyun-guan-founder-data/',
    icon: Linkedin,
    color: '#0077B5'
  },
  {
    id: 'email',
    label: { en: 'Email', zh: '邮箱' },
    href: 'mailto:guangoku@gmail.com',
    icon: Mail,
    color: '#EA4335'
  },
  {
    id: 'instagram',
    label: { en: 'Instagram', zh: 'Instagram' },
    href: 'https://www.instagram.com/mingyun__g?igsh=MW1jZ214bW5kbWlmeg%3D%3D&utm_source=qr',
    icon: Camera,
    color: '#E4405F'
  },
  {
    id: 'github',
    label: { en: 'GitHub', zh: 'GitHub' },
    href: 'https://github.com/guangoku',
    icon: Code,
    color: '#181717'
  }
];

export default function Contact({ language }: ContactProps) {
  const handleContactClick = (href: string, label: string) => {
    console.log(`Opening contact link: ${label} - ${href}`);
    window.open(href, '_blank', 'noopener noreferrer');
  };

  return (
    <section className="py-16 md:py-24 px-6 contact-bg grain" id="contact">
      <div className="relative z-[2] max-w-4xl mx-auto">
        <SectionHeading
          eyebrow={{ en: 'Say Hello', zh: '打个招呼' }}
          title={{ en: "Let's Connect", zh: '联系我' }}
          lede={{
            en: "Open to collaborations, opportunities, or just a good conversation.",
            zh: '欢迎合作、机会洽谈，或是简单地聊聊。'
          }}
          language={language}
          tone="dark"
          accent="hsl(35 90% 75%)"
          testIdPrefix="contact"
        />

        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-2xl mx-auto">
            {contactLinks.map((contact) => {
              const IconComponent = contact.icon;
              return (
                <Card
                  key={contact.id}
                  className="group cursor-pointer rounded-2xl bg-white/[0.08] border border-white/20 backdrop-blur-md shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.14] hover:border-white/35 hover:shadow-xl"
                  onClick={() => handleContactClick(contact.href, contact.label[language])}
                  data-testid={`card-contact-${contact.id}`}
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white/10 border border-white/25 transition-colors duration-300 group-hover:bg-white/20">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <p className="font-medium text-white/85 tracking-wide group-hover:text-white transition-colors duration-300" data-testid={`text-contact-${contact.id}`}>
                      {contact.label[language]}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
