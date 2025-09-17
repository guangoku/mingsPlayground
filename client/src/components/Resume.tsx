import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, MapPin, Mail, Phone, Globe, Calendar } from "lucide-react";

interface ResumeProps {
  language: 'en' | 'zh';
}

// TODO: Remove mock data - replace with real resume data
const mockResumeData = {
  contact: {
    email: 'your.email@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    website: 'your-portfolio.com'
  },
  experience: [
    {
      id: '1',
      title: 'Senior Data Engineer',
      company: 'Tech Innovation Co.',
      period: '2022 - Present',
      description: 'Building scalable data pipelines and analytics infrastructure for millions of users.',
      achievements: [
        'Designed and implemented ETL pipelines processing 10TB+ daily',
        'Reduced data processing time by 60% through optimization',
        'Led data migration to cloud infrastructure'
      ]
    },
    {
      id: '2', 
      title: 'Data Scientist',
      company: 'Analytics Startup',
      period: '2020 - 2022',
      description: 'Developed machine learning models and data visualization dashboards.',
      achievements: [
        'Built predictive models improving customer retention by 25%',
        'Created interactive dashboards for C-level executives',
        'Published research on data visualization techniques'
      ]
    }
  ],
  skills: {
    technical: ['Python', 'SQL', 'JavaScript', 'React', 'PostgreSQL', 'Docker', 'AWS'],
    creative: ['Illustration', 'Digital Art', 'UI/UX Design', 'Adobe Creative Suite'],
    languages: ['English (Native)', 'Chinese (Fluent)', 'Spanish (Conversational)']
  },
  education: [
    {
      id: '1',
      degree: 'M.S. Computer Science',
      school: 'University of Technology',
      year: '2020',
      focus: 'Data Science & Machine Learning'
    },
    {
      id: '2',
      degree: 'B.A. Fine Arts',
      school: 'Art Institute',
      year: '2018',
      focus: 'Digital Media & Illustration'
    }
  ]
};

export default function Resume({ language }: ResumeProps) {
  const handleDownloadPDF = () => {
    console.log('Downloading PDF resume');
    // TODO: Implement PDF download functionality
  };

  const handleContactClick = (type: string, value: string) => {
    console.log(`Contact clicked: ${type} - ${value}`);
    // TODO: Implement contact actions (email, phone, website)
  };

  return (
    <section className="py-16 px-6" id="resume">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-resume-title">
            {language === 'en' ? 'Resume' : '简历'}
          </h2>
          <p className="text-lg text-muted-foreground mb-6" data-testid="text-resume-description">
            {language === 'en' 
              ? 'A comprehensive overview of my professional experience and skills.'
              : '我的职业经历和技能的全面概述。'
            }
          </p>
          <Button onClick={handleDownloadPDF} className="hover-elevate" data-testid="button-download-resume">
            <Download className="h-4 w-4 mr-2" />
            {language === 'en' ? 'Download PDF' : '下载PDF'}
          </Button>
        </div>

        {/* Contact Info */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl" data-testid="text-contact-title">
              {language === 'en' ? 'Contact Information' : '联系方式'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button
                variant="ghost"
                className="justify-start hover-elevate"
                onClick={() => handleContactClick('email', mockResumeData.contact.email)}
                data-testid="button-contact-email"
              >
                <Mail className="h-4 w-4 mr-2" />
                {mockResumeData.contact.email}
              </Button>
              <Button
                variant="ghost"
                className="justify-start hover-elevate"
                onClick={() => handleContactClick('phone', mockResumeData.contact.phone)}
                data-testid="button-contact-phone"
              >
                <Phone className="h-4 w-4 mr-2" />
                {mockResumeData.contact.phone}
              </Button>
              <Button
                variant="ghost"
                className="justify-start hover-elevate"
                onClick={() => handleContactClick('location', mockResumeData.contact.location)}
                data-testid="button-contact-location"
              >
                <MapPin className="h-4 w-4 mr-2" />
                {mockResumeData.contact.location}
              </Button>
              <Button
                variant="ghost"
                className="justify-start hover-elevate"
                onClick={() => handleContactClick('website', mockResumeData.contact.website)}
                data-testid="button-contact-website"
              >
                <Globe className="h-4 w-4 mr-2" />
                {mockResumeData.contact.website}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl" data-testid="text-experience-title">
              {language === 'en' ? 'Experience' : '工作经历'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {mockResumeData.experience.map((exp, index) => (
              <div key={exp.id} className="relative" data-testid={`experience-${exp.id}`}>
                {index > 0 && <div className="absolute left-3 -top-3 w-0.5 h-6 bg-border"></div>}
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="font-semibold text-foreground" data-testid={`text-job-title-${exp.id}`}>{exp.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                    </div>
                    <p className="font-medium text-primary mb-2" data-testid={`text-company-${exp.id}`}>{exp.company}</p>
                    <p className="text-muted-foreground mb-3" data-testid={`text-job-description-${exp.id}`}>{exp.description}</p>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-sm text-muted-foreground flex items-start gap-2" data-testid={`text-achievement-${exp.id}-${achIndex}`}>
                          <div className="w-1 h-1 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl" data-testid="text-skills-title">
              {language === 'en' ? 'Skills' : '技能'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-medium text-foreground mb-3" data-testid="text-technical-skills">
                {language === 'en' ? 'Technical Skills' : '技术技能'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {mockResumeData.skills.technical.map((skill, index) => (
                  <Badge key={index} variant="outline" data-testid={`badge-tech-skill-${index}`}>{skill}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-3" data-testid="text-creative-skills">
                {language === 'en' ? 'Creative Skills' : '创意技能'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {mockResumeData.skills.creative.map((skill, index) => (
                  <Badge key={index} variant="secondary" data-testid={`badge-creative-skill-${index}`}>{skill}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-3" data-testid="text-languages">
                {language === 'en' ? 'Languages' : '语言'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {mockResumeData.skills.languages.map((lang, index) => (
                  <Badge key={index} variant="default" data-testid={`badge-language-${index}`}>{lang}</Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Education */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl" data-testid="text-education-title">
              {language === 'en' ? 'Education' : '教育背景'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockResumeData.education.map((edu) => (
              <div key={edu.id} className="flex justify-between items-start" data-testid={`education-${edu.id}`}>
                <div>
                  <h4 className="font-semibold text-foreground" data-testid={`text-degree-${edu.id}`}>{edu.degree}</h4>
                  <p className="text-primary" data-testid={`text-school-${edu.id}`}>{edu.school}</p>
                  <p className="text-sm text-muted-foreground" data-testid={`text-focus-${edu.id}`}>{edu.focus}</p>
                </div>
                <span className="text-sm text-muted-foreground" data-testid={`text-year-${edu.id}`}>{edu.year}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}