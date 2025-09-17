import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";

interface ContactProps {
  language: 'en' | 'zh';
}

const contactLinks = [
  {
    id: 'linkedin',
    label: { en: 'LinkedIn', zh: 'LinkedIn' },
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
    icon: Instagram,
    color: '#E4405F'
  },
  {
    id: 'github',
    label: { en: 'GitHub', zh: 'GitHub' },
    href: 'https://github.com/guangoku',
    icon: Github,
    color: '#181717'
  }
];

export default function Contact({ language }: ContactProps) {
  const handleContactClick = (href: string, label: string) => {
    console.log(`Opening contact link: ${label} - ${href}`);
    window.open(href, '_blank', 'noopener noreferrer');
  };

  return (
    <section className="py-16 px-6" id="contact" style={{ background: 'linear-gradient(135deg, hsl(200, 35%, 15%) 0%, hsl(170, 50%, 40%) 100%)' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#FDF2DB' }} data-testid="text-contact-title">
            {language === 'en' ? "Let's Connect" : '联系我'}
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#FDF2DB', opacity: 0.9 }} data-testid="text-contact-description">
            {language === 'en' 
              ? "I'm always excited to discuss new opportunities, collaborations, or just chat about data, art, and technology!"
              : '我很乐意讨论新机会、合作或只是聊聊数据、艺术和技术！'
            }
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {contactLinks.map((contact) => {
            const IconComponent = contact.icon;
            return (
              <Card key={contact.id} className="group cursor-pointer hover-elevate bg-white/10 backdrop-blur border-white/20" onClick={() => handleContactClick(contact.href, contact.label[language])} data-testid={`card-contact-${contact.id}`}>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: contact.color }}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <p className="font-medium" style={{ color: '#FDF2DB' }} data-testid={`text-contact-${contact.id}`}>
                    {contact.label[language]}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            onClick={() => handleContactClick('mailto:guangoku@gmail.com', 'Email')}
            className="hover-elevate"
            style={{ 
              backgroundColor: '#F8653C', 
              color: '#FDF2DB',
              border: 'none'
            }}
            data-testid="button-primary-contact"
          >
            <Mail className="h-5 w-5 mr-2" />
            {language === 'en' ? 'Get In Touch' : '联系我'}
          </Button>
        </div>
      </div>
    </section>
  );
}