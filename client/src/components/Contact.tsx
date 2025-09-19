import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Code, Linkedin, Camera } from "lucide-react";

interface ContactProps {
  language: 'en' | 'zh';
}

const contactLinks = [
  {
    id: 'linkedin',
    label: { en: 'LinkedIn', zh: '领英' },
    href: 'https://www.linkedin.com/in/mingyun-guan-17760390/',
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
    <section className="py-16 px-6 contact-bg" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white dark:text-gray-100" data-testid="text-contact-title" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            {language === 'en' ? "Let's Connect" : '联系我'}
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-white/90 dark:text-gray-200" data-testid="text-contact-description" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
            {language === 'en'
              ? "Open to collaborations, opportunities, or just a good conversation."
              : '欢迎合作、机会洽谈，或是简单地聊聊。'
            }
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {contactLinks.map((contact) => {
            const IconComponent = contact.icon;
            return (
              <Card
                key={contact.id}
                className="group cursor-pointer hover-elevate bg-white/95 dark:bg-gray-800/95 border-white/30 dark:border-gray-600/30"
                onClick={() => handleContactClick(contact.href, contact.label[language])}
                data-testid={`card-contact-${contact.id}`}
                style={{
                  backdropFilter: 'blur(10px)'
                }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: 'hsl(15 70% 45%)' }}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <p className="font-medium text-orange-700 dark:text-orange-300" data-testid={`text-contact-${contact.id}`}>
                    {contact.label[language]}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}