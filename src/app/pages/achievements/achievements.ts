import {
  Component,
  signal
} from '@angular/core';


/* =========================================================
   COLLEGE INTERFACE
   ========================================================= */

export interface College {

  rank: string;

  location: string;

  name: string;

  image: string;

  description: string;

  achievement: string;

  research: string;

}


/* =========================================================
   COMPONENT
   ========================================================= */

@Component({

  selector: 'app-achievements',

  standalone: true,

  templateUrl: './achievements.html',

  styleUrl: './achievements.scss'

})


export class AchievementsComponent {


  /* =======================================================
     PAGE EYEBROW
     ======================================================= */

  readonly eyebrow = signal(
    'Where Our Scholars Come From'
  );


  /* =======================================================
     PAGE HEADING
     ======================================================= */

  readonly heading = signal(
    'Top Colleges in Tamil Nadu'
  );


  /* =======================================================
     PAGE INTRO
     ======================================================= */

  readonly intro = signal(
    'VEI Technologies works closely with research scholars, faculty, and students from Tamil Nadu\'s leading institutions, supporting innovation, academic excellence, research, and emerging technologies.'
  );


  /* =======================================================
     COLLEGE DATA
     ======================================================= */

  readonly colleges = signal<College[]>([


    /* -------------------------------------------------------
       1. FRANCIS XAVIER ENGINEERING COLLEGE
    ------------------------------------------------------- */

    {
      rank: 'ICACCT 2023',

      location: 'Tirunelveli, Tamil Nadu',

      name: 'Francis Xavier Engineering College',

      image: 'assets/images/achievement/1.jpg',

      description:
        'An engineering institution known for its focus on technical education, innovation, and industry-aligned research in emerging domains.',

      achievement:
        'Successfully conducted the International Conference on Advanced Computing and Communication Technologies (ICACCT 2023) during 2023.',

      research:
        'Advanced Computing, Communication Technologies, Artificial Intelligence, and Machine Learning.'
    },


    /* -------------------------------------------------------
       2. HINDUSTAN INSTITUTE OF TECHNOLOGY AND SCIENCE
    ------------------------------------------------------- */

    {
      rank: 'MOU Signed',

      location: 'Padur, Chennai, Tamil Nadu',

      name: 'Hindustan Institute of Technology and Science',

      image: 'assets/images/achievement/2.jpg',

      description:
        'A private deemed university offering multidisciplinary technical education with strong industry and research partnerships.',

      achievement:
        'Successfully signed a Memorandum of Understanding (MOU) to foster academic collaboration and knowledge exchange in engineering and technology.',

      research:
        'Cloud Computing, Data Science, Artificial Intelligence, and Information Technology.'
    },


    /* -------------------------------------------------------
       3. SRI MANAKULA VINAYAGAR ENGINEERING COLLEGE
    ------------------------------------------------------- */

    {
      rank: 'MOU Signed',

      location: 'Madagadipet, Puducherry',

      name: 'Sri Manakula Vinayagar Engineering College (SMVEC)',

      image: 'assets/images/achievement/3.jpg',

      description:
        'An autonomous institution offering diverse undergraduate and postgraduate programs across engineering and allied disciplines.',

      achievement:
        'Successfully signed a Memorandum of Understanding (MOU) to promote joint academic and research initiatives in engineering education.',

      research:
        'Renewable Energy Systems, Robotics and Automation, VLSI Design, and Structural Engineering.'
    },


    /* -------------------------------------------------------
       4. MANAKULA VINAYAGAR INSTITUTE OF TECHNOLOGY
    ------------------------------------------------------- */

    {
      rank: 'AICTE-ATAL FDP',

      location: 'Puducherry',

      name: 'Manakula Vinayagar Institute of Technology (Autonomous)',

      image: 'assets/images/achievement/4.jpg',

      description:
        'An autonomous institution dedicated to continuous faculty development and skill enhancement in technical education.',

      achievement:
        'Successfully conducted a One-Week AICTE-ATAL Sponsored Faculty Development Program on 17th November 2025.',

      research:
        'Faculty Development, Emerging Technologies, and Engineering Pedagogy.'
    },


    /* -------------------------------------------------------
       5. PANIMALAR ENGINEERING COLLEGE
    ------------------------------------------------------- */

    {
      rank: 'Workshop 2024',

      location: 'Chennai, Tamil Nadu',

      name: 'Panimalar Engineering College (Autonomous)',

      image: 'assets/images/achievement/5.jpg',

      description:
        'An autonomous engineering college known for its practical, industry-oriented approach to student learning and skill building.',

      achievement:
        'Successfully conducted a Two-Day Workshop on "Artificial Intelligence" sponsored by the IEEE Madras Section in July 2024.',

      research:
        'Artificial Intelligence, Machine Learning, Software Engineering, and IoT.'
    },


    /* -------------------------------------------------------
       6. KONGUNADU COLLEGE OF ENGINEERING
    ------------------------------------------------------- */

    {
      rank: 'Workshop 2023',

      location: 'Tiruchirappalli, Tamil Nadu',

      name: 'Kongunadu College of Engineering & Technology (Autonomous)',

      image: 'assets/images/achievement/6.jpg',

      description:
        'An autonomous institution emphasizing hands-on technical training and exposure to advancing engineering fields.',

      achievement:
        'Successfully conducted a One-Day Workshop on "Evolution and Recent Advancements in Electric Vehicle (EV) Technology" in February 2023.',

      research:
        'Electric Vehicle Technology, Embedded Systems, and Automotive Engineering.'
    },


    /* -------------------------------------------------------
       7. RVS TECHNICAL CAMPUS
    ------------------------------------------------------- */

    {
      rank: 'ICNEXT-25',

      location: 'Coimbatore, Tamil Nadu',

      name: 'RVS Technical Campus (Autonomous)',

      image: 'assets/images/achievement/7.jpg',

      description:
        'An autonomous technical campus fostering research, innovation, and professional growth across engineering streams.',

      achievement:
        'Successfully conducted the International Conference on ICNEXT-25 during 2025.',

      research:
        'Next-Generation Technologies, Data Science, Automation, and Engineering Innovation.'
    },


    /* -------------------------------------------------------
       8. K. RAMAKRISHNAN COLLEGE OF ENGINEERING
    ------------------------------------------------------- */

    {
      rank: 'AICTE-ATAL FDP',

      location: 'Tiruchirapalli, Tamil Nadu',

      name: 'K. Ramakrishnan College of Engineering (Autonomous)',

      image: 'assets/images/achievement/8.jpg',

      description:
        'An autonomous institution recognized for its research culture and consistent investment in faculty capacity-building.',

      achievement:
        'Successfully conducted an AICTE-ATAL Faculty Development Program on 14th October 2024.',

      research:
        'Machine Learning Techniques and Time Series Applications.'
    },


    /* -------------------------------------------------------
       9. SIDDHARTH INSTITUTE OF ENGINEERING AND TECHNOLOGY
    ------------------------------------------------------- */

    {
      rank: 'MOU Signed',

      location: 'Puttur, Andhra Pradesh',

      name: 'Siddharth Institute of Engineering and Technology (SIETK)',

      image: 'assets/images/achievement/9.jpg',

      description:
        'An autonomous institution offering undergraduate, postgraduate, and diploma programs across engineering and management.',

      achievement:
        'Successfully signed a Memorandum of Understanding (MOU) to promote faculty and student development through joint initiatives.',

      research:
        'Power Electronics, VLSI, Embedded Systems, and Renewable Energy Systems.'
    },


    /* -------------------------------------------------------
       10. PERI INSTITUTE OF TECHNOLOGY
    ------------------------------------------------------- */

    {
      rank: 'MOU Signed',

      location: 'West Tambaram, Chennai, Tamil Nadu',

      name: 'PERI Institute of Technology (PERIT)',

      image: 'assets/images/achievement/10.jpg',

      description:
        'A private, autonomous engineering college offering industry-linked undergraduate and postgraduate programs.',

      achievement:
        'Successfully signed a Memorandum of Understanding (MOU) to promote industry exposure and collaborative research initiatives.',

      research:
        'Data Science, Embedded Systems, Structural Engineering, and Industrial Automation.'
    },


    /* -------------------------------------------------------
       11. MOUNT ZION COLLEGE
    ------------------------------------------------------- */

    {
      rank: 'AICTE-ATAL FDP',

      location: 'Pudukkottai, Tamil Nadu',

      name: 'Mount Zion College of Engineering & Technology',

      image: 'assets/images/achievement/11.jpg',

      description:
        'An engineering institution focused on strengthening faculty expertise in emerging AI and cybersecurity domains.',

      achievement:
        'Successfully conducted a One-Week AICTE-ATAL Sponsored FDP on "Defensive AI: Machine Learning in Cyber Security" commencing 1st September 2025.',

      research:
        'Defensive AI and Cyber Security.'
    },


    /* -------------------------------------------------------
       12. SRI MANAKULA VINAYAGAR ENGINEERING COLLEGE
    ------------------------------------------------------- */

    {
      rank: 'Python Workshop',

      location: 'Madagadipet, Puducherry',

      name: 'Sri Manakula Vinayagar Engineering College (SMVEC)',

      image: 'assets/images/achievement/12.jpg',

      description:
        'An autonomous institution offering diverse undergraduate and postgraduate programs across engineering and allied disciplines.',

      achievement:
        'Successfully conducted a hands-on Python programming workshop to strengthen students\' coding fundamentals and application development skills.',

      research:
        'Python for Data Science, Automation, and Web Development.'
    },

    {
      rank: 'International Conference on Power Control and Computing Technologies (ICAPC2T-2026)',

      location: 'Salem, Tamil Nadu',

      name: 'Sona College of Technology',

      image: 'assets/images/achievement/13.jpg',

      description:
        'Sona College of Technology, an autonomous institution under Anna University, organized the International Conference on Power Control and Computing Technologies 2026 (ICAPC2T-2026) through its Department of Electrical & Electronics Engineering.',

      achievement:
        'Successfully organized an international conference on 04 & 05 June 2026 in hybrid mode, providing a platform for students, academicians, researchers, scientists, and practicing engineers to exchange knowledge and present research in power electronics, power systems, control systems, sensors, and computing technologies.',

      research:
        'Power Electronics, Power Systems, Control Systems, Sensors, Renewable Energy, Smart Grid, Cyber-Physical Systems, Optoelectronics, Photonic Sensors, Data Analytics, Artificial Intelligence, Machine Learning, Deep Learning, Data Visualization, Demand Response, Demand Side Management, Network Management, Situational Awareness, and Anomaly Detection.'
    }

  ]);

}