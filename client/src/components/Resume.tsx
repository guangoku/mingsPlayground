import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, MapPin, Mail, Phone, Globe, Calendar, Waves } from "lucide-react";

interface ResumeProps {
  language: 'en' | 'zh';
}

// Real resume data for Ming
const resumeData = {
  contact: {
    email: 'guangoku@gmail.com',
    phone: 'Available upon request',
    location: 'Seattle, WA',
    website: 'ming-portfolio.com'
  },
  experience: [
    {
      id: '1',
      title: 'Tech Lead & Data Engineer III, Strategic Business Trends',
      company: 'Amazon',
      period: '2021 – Present (4 yrs)',
      description: 'Architected the backend for a data-intensive web application, integrating ML-based knowledge graphs, API layers, and search services.',
      achievements: [
        'Led a 6-engineer team to prototype in 3 months, delivering beta in under a year',
        'Designed scalable ingestion pipelines for diverse data sources, onboarding 5 vendors',
        'Deployed 5+ ML models for graph construction and real-time ranking using SageMaker and OpenSearch',
        'Spearheaded security/privacy reviews, team growth, cost optimization, and technical mentorship'
      ]
    },
    {
      id: '2',
      title: 'Tech Lead & Data Engineer III, Customer Service',
      company: 'Amazon',
      period: '2019 – 2021 (2 yrs)',
      description: 'Orchestrated a backend rebuild for CS systems, streamlining automation and analytics.',
      achievements: [
        'Built large-scale ETL pipelines for classification projects',
        'Deployed NLP models with real-time processing',
        'Applied AutoGluon for product defect detection, enhancing operational efficiency'
      ]
    },
    {
      id: '3',
      title: 'Business Intelligence Engineer, FreeTime Unlimited',
      company: 'Amazon',
      period: 'Oct 2017 – Dec 2018 (1 yr, 3 mos)',
      description: 'Designed scalable solutions for cross-functional data needs, built statistical models, and automated reporting.',
      achievements: [
        'Managed Redshift databases and implemented robust data structures',
        'Built statistical models for business intelligence insights',
        'Automated reporting processes for cross-functional teams'
      ]
    },
    {
      id: '4',
      title: 'Senior Data Analyst, Machine Learning Platform',
      company: 'Previous Company',
      period: 'Apr 2017 – Sep 2017 (6 mos)',
      description: 'Developed predictive models (Bayesian Regression, MMM), optimizing ad spend and client ROI.',
      achievements: [
        'Automated ETL and quality control systems, cutting processing times by 90%',
        'Developed predictive models for optimization',
        'Improved client ROI through statistical modeling'
      ]
    }
  ],
  skills: {
    technical: ['Python', 'SQL', 'AWS', 'SageMaker', 'OpenSearch', 'Redshift', 'ETL', 'Machine Learning', 'System Architecture', 'MLOps'],
    creative: ['Digital Art', 'Illustration', 'Character Design', 'Art Nouveau Style', 'Creative Problem Solving'],
    languages: ['English (Fluent)', 'Chinese (Native)', 'Japanese (Learning)']
  },
  education: [
    {
      id: '1',
      degree: 'M.S. Data Science',
      school: 'University of Washington',
      year: '2017',
      focus: 'Machine Learning & Statistical Analysis'
    },
    {
      id: '2',
      degree: 'B.S. Computer Science',
      school: 'University of Washington',
      year: '2015',
      focus: 'Software Engineering & Algorithms'
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
    <section className="py-16 px-6 bg-muted/30" id="resume">
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
                className="justify-start hover-elevate rounded-full"
                onClick={() => handleContactClick('email', resumeData.contact.email)}
                data-testid="button-contact-email"
              >
                <Mail className="h-4 w-4 mr-2" />
                {resumeData.contact.email}
              </Button>
              <Button
                variant="ghost"
                className="justify-start hover-elevate rounded-full"
                onClick={() => handleContactClick('phone', resumeData.contact.phone)}
                data-testid="button-contact-phone"
              >
                <Phone className="h-4 w-4 mr-2" />
                {resumeData.contact.phone}
              </Button>
              <Button
                variant="ghost"
                className="justify-start hover-elevate rounded-full"
                onClick={() => handleContactClick('location', resumeData.contact.location)}
                data-testid="button-contact-location"
              >
                <MapPin className="h-4 w-4 mr-2" />
                {resumeData.contact.location}
              </Button>
              <Button
                variant="ghost"
                className="justify-start hover-elevate rounded-full"
                onClick={() => handleContactClick('website', resumeData.contact.website)}
                data-testid="button-contact-website"
              >
                <Globe className="h-4 w-4 mr-2" />
                {resumeData.contact.website}
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
            {resumeData.experience.map((exp, index) => (
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
                {resumeData.skills.technical.map((skill, index) => (
                  <Badge key={index} variant="outline" data-testid={`badge-tech-skill-${index}`}>{skill}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-3" data-testid="text-creative-skills">
                {language === 'en' ? 'Creative Skills' : '创意技能'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.creative.map((skill, index) => (
                  <Badge key={index} variant="secondary" data-testid={`badge-creative-skill-${index}`}>{skill}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-3" data-testid="text-languages">
                {language === 'en' ? 'Languages' : '语言'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.languages.map((lang, index) => (
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
            {resumeData.education.map((edu) => (
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