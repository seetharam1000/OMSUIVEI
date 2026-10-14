import {
  Component,
  signal
} from '@angular/core';

export interface Career {
  title: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  skills: string;
}

@Component({
  selector: 'app-careers',
  standalone: true,
  templateUrl: './careers.html',
  styleUrl: './careers.scss'
})
export class CareersComponent {

  readonly eyebrow = signal(
    'Join Our Team'
  );

  readonly heading = signal(
    'Build Your Career With Us'
  );

  readonly intro = signal(
    'Join VEI Technologies and work with a talented team building innovative solutions across software engineering, cloud, AI, research and emerging technologies.'
  );

  readonly careers = signal<Career[]>([

    {
      title: 'Senior Java Full Stack Developer',
      location: 'Chennai',
      type: 'Full Time',
      experience: '5+ Years',
      description:
        'Design and develop scalable enterprise applications using modern Java and Spring technologies.',
      skills:
        'Java, Spring Boot, Microservices, Angular, REST API, SQL, AWS'
    },

    {
      title: 'Java Backend Developer',
      location: 'Chennai',
      type: 'Full Time',
      experience: '3+ Years',
      description:
        'Develop reliable backend services and APIs for enterprise and cloud-native applications.',
      skills:
        'Java, Spring Boot, Microservices, Kafka, PostgreSQL, Docker'
    },

    {
      title: 'Angular Developer',
      location: 'Chennai',
      type: 'Full Time',
      experience: '2+ Years',
      description:
        'Create responsive and high-quality web applications using Angular and modern frontend technologies.',
      skills:
        'Angular, TypeScript, JavaScript, HTML5, CSS3, REST API'
    },

    {
      title: 'AI / Machine Learning Engineer',
      location: 'Chennai',
      type: 'Full Time',
      experience: '2+ Years',
      description:
        'Build intelligent applications and machine learning solutions for real-world business problems.',
      skills:
        'Python, Machine Learning, AI, NLP, Generative AI'
    },

    {
      title: 'Cloud & DevOps Engineer',
      location: 'Chennai',
      type: 'Full Time',
      experience: '3+ Years',
      description:
        'Build and maintain cloud infrastructure, CI/CD pipelines and containerized applications.',
      skills:
        'AWS, Azure, Docker, Kubernetes, Jenkins, Terraform'
    },

    {
      title: 'Research Associate',
      location: 'Puducherry',
      type: 'Full Time',
      experience: '0–3 Years',
      description:
        'Work with academic and industry teams on innovative research and technology development initiatives.',
      skills:
        'Research, AI, Data Science, Innovation, Technical Documentation'
    }

  ]);

}