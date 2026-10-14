import {
  Component,
  signal
} from '@angular/core';

export interface College {
  rank: string;
  location: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-clients',
  standalone: true,
  templateUrl: './clients.html',
  styleUrl: './clients.scss'
})
export class ClientsComponent {

  readonly eyebrow = signal(
    'Where Our Scholars Come From'
  );

  readonly heading = signal(
    'Top Colleges in Tamil Nadu'
  );

  readonly intro = signal(
    'VEI Technologies works closely with research scholars, faculty, and students from Tamil Nadu\'s leading institutions — ranked here by NIRF 2025/26 Engineering ratings, spanning IITs, NITs, and top-tier deemed and private universities.'
  );

  readonly colleges = signal<College[]>([

    {
      rank: 'Tier 1',
      location: 'Vellore',
      name: 'Vellore Institute of Technology (VIT), Vellore',
      description:
        'A leading private university known for its strong engineering and technology programmes, extensive campus infrastructure, research initiatives, and industry-oriented education. B.Tech admissions are primarily conducted through the VITEEE entrance examination.'
    },

    {
      rank: 'Tier 2',
      location: 'Chennai',
      name: 'Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology, Chennai',
      description:
        'A deemed-to-be university in Avadi, Chennai, with a strong focus on research, innovation, industry collaboration, and international exposure. It offers programmes across engineering, technology, and emerging disciplines.'
    },

    {
      rank: 'Tier 1',
      location: 'Kattankulathur, Chennai',
      name: 'SRM Institute of Science and Technology (SRMIST), Kattankulathur, Chennai',
      description:
        'A prominent deemed-to-be university offering a wide range of engineering, technology, science, medical, and management programmes. Its Kattankulathur campus features extensive academic, research, laboratory, and industry-oriented facilities.'
    },

    {
      rank: 'Tier 1',
      location: 'Chennai',
      name: 'Saveetha Institute of Medical and Technical Sciences (SIMATS), Chennai',
      description:
        'A deemed-to-be university offering programmes across medical, dental, engineering, technology, and other disciplines. Its engineering programmes emphasize practical learning, projects, innovation, and industry-oriented education.'
    },

    {
      rank: 'Tier 3',
      location: 'Puttur, Andhra Pradesh',
      name: 'Siddharth Institute of Engineering & Technology, Puttur, Andhra Pradesh',
      description:
        'An autonomous engineering institution offering undergraduate and postgraduate programmes in engineering and technology. The institution focuses on academic development, technical skills, industry exposure, and career-oriented training.'
    },

    {
      rank: 'Tier 2',
      location: 'Hyderabad',
      name: 'Guru Nanak Institute of Technology (GNIT), Hyderabad',
      description:
        'An autonomous engineering institution in Hyderabad offering programmes in engineering and emerging technology areas, including Artificial Intelligence and Data Science. It emphasizes technical education, innovation, industry interaction, and career development.'
    },

    {
      rank: 'Tier 2',
      location: 'Puducherry',
      name: 'Sri Manakula Vinayagar Engineering College (SMVEC), Puducherry',
      description:
        'An autonomous engineering institution affiliated with Pondicherry University, offering undergraduate and postgraduate programmes in engineering and technology. It focuses on academic excellence, modern laboratory facilities, innovation, and placement-oriented training.'
    },

    {
      rank: 'Tier 3',
      location: 'Trichy',
      name: 'K. Ramakrishnan College of Engineering (KRCE), Trichy',
      description:
        'An autonomous engineering institution offering undergraduate and postgraduate programmes across engineering and technology disciplines. The college focuses on technical education, innovation, industry interaction, and employability development.'
    },

    {
      rank: 'Tier 3',
      location: 'Sriperumbudur, Chennai',
      name: 'St. Joseph College of Engineering, Chennai',
      description:
        'An engineering institution located in Sriperumbudur, Chennai, affiliated with Anna University and approved by AICTE. It offers undergraduate and postgraduate engineering programmes with emphasis on academic performance, technical skills, and placement preparation.'
    },

    {
      rank: 'Tier 2',
      location: 'Coimbatore',
      name: 'Karpagam Academy of Higher Education, Coimbatore',
      description:
        'A deemed-to-be university offering programmes across engineering, technology, science, management, and other disciplines. It promotes interdisciplinary education, research, innovation, practical learning, and industry collaboration.'
    },

    {
      rank: 'Tier 3',
      location: 'ECR, Chennai',
      name: 'Dhanalakshmi Srinivasan College of Engineering and Technology, Chennai',
      description:
        'An engineering institution located along the ECR near Mamallapuram, offering programmes across engineering and technology disciplines. It emphasizes technical education, practical learning, skill development, and career guidance.'
    },

    {
      rank: 'Tier 2',
      location: 'Coimbatore',
      name: 'KPR Institute of Engineering and Technology (KPRIET), Coimbatore',
      description:
        'An autonomous engineering institution known for its technology-focused learning environment, innovation initiatives, industry interaction, and hands-on project-based education. It provides programmes across engineering and emerging technology disciplines.'
    }

  ]);
}