import { Component, signal } from '@angular/core';

export interface Product {
  num: string;
  tag: string;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class ProductsComponent {

  readonly eyebrow = signal(
    'Education & Research Programs'
  );

  readonly heading = signal(
    'Our Products'
  );

  readonly intro = signal(
    'VEI Technologies offers a portfolio of hands-on training, workshop, and research-support ' +
    'programs spanning core programming, embedded systems, and emerging technologies — designed ' +
    'for students, faculty, and PhD scholars building industry-ready and research-grade skills.'
  );

  readonly products = signal<Product[]>([

    {
      num: '01',
      tag: 'Programming',
      icon: 'code',
      title: 'Python Programming',
      description:
        'Foundational to advanced Python training covering scripting, data structures, automation, and applied projects in analytics and research computing.'
    },

    {
      num: '02',
      tag: 'Programming',
      icon: 'code',
      title: 'Java Programming',
      description:
        'Core to enterprise-level Java: OOP concepts, data structures, and application development for academic projects and placement preparation.'
    },

    {
      num: '03',
      tag: 'Emerging Tech',
      icon: 'network',
      title: 'Internet of Things (IoT)',
      description:
        'Sensor networks, microcontroller programming, and connected-device prototyping for smart-system research projects and capstone builds.'
    },

    {
      num: '04',
      tag: 'Hardware',
      icon: 'chip',
      title: 'Embedded Systems',
      description:
        'Microcontroller architecture, firmware development, and real-time systems design for hardware-focused engineering and research applications.'
    },

    {
      num: '05',
      tag: 'Simulation',
      icon: 'chart',
      title: 'MATLAB & Simulink',
      description:
        'Numerical computing, algorithm modeling, and simulation training used widely in engineering research, signal processing, and control systems.'
    },

    {
      num: '06',
      tag: 'Analytics',
      icon: 'bars',
      title: 'Data Science',
      description:
        'Statistical analysis, data visualization, and predictive modeling using Python and R for research datasets and dissertation work.'
    },

    {
      num: '07',
      tag: 'Emerging Tech',
      icon: 'clock',
      title: 'Machine Learning & AI',
      description:
        'Supervised and unsupervised learning, neural networks, and applied AI model-building for thesis-level and publication-ready research.'
    },

    {
      num: '08',
      tag: 'Security',
      icon: 'shield',
      title: 'Cybersecurity',
      description:
        'Network security fundamentals, ethical hacking, and vulnerability assessment training aligned with academic security research and certifications.'
    },

    {
      num: '09',
      tag: 'Infrastructure',
      icon: 'cloud',
      title: 'Cloud Computing',
      description:
        'Deployment, virtualization, and cloud-platform fundamentals (AWS, Azure) for scalable research and application-hosting projects.'
    },

    {
      num: '10',
      tag: 'Hardware',
      icon: 'grid',
      title: 'VLSI Design',
      description:
        'Digital circuit design, chip-level simulation, and HDL programming for scholars working in microelectronics and semiconductor research.'
    },

    {
      num: '11',
      tag: 'Emerging Tech',
      icon: 'robot',
      title: 'Robotics & Automation',
      description:
        'Robotic kinematics, sensor integration, and automation-system prototyping for interdisciplinary engineering research projects.'
    },

    {
      num: '12',
      tag: 'Emerging Tech',
      icon: 'blocks',
      title: 'Blockchain Technology',
      description:
        'Distributed ledger fundamentals, smart-contract development, and blockchain application design for applied and academic research use cases.'
    }

  ]);

}