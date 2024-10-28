export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Titouan Gouhier',
      position: 'Project Manager at Generali',
      img: 'assets/review1.jpg',
      review:
        "I warmly recommend Nicolas, with whom I had the opportunity to collaborate as a project manager, while he held the position of lead dev in our team. Together, we worked on a complex project, with many technical constraints and tight deadlines. Despite these challenges, Nicolas was able to remain focused and efficient, helping to maintain a clear vision of the project. Thanks to his rigor and team spirit, we were able to successfully complete the project while respecting the set objectives.",
    },
    {
      id: 2,
      name: 'Clément Caron',
      position: 'Digital Sales at Karré',
      img: 'assets/review2.jpg',
      review:
        'I was able to accompany Nicolas during his last mission.He is a passionate developer, always ready to learn new things and challenge himself! He very quickly took technical lead on the project and brought it to fruition. Nicolas is someone reliable and responsive, who knows how to work in a team.I wholeheartedly recommend it!',
    },
    {
      id: 3,
      name: 'Léo Peyré',
      position: 'Front-end developper at Davidson consulting',
      img: 'assets/review3.jpg',
      review:
        "🎯 Focus on Nicolas Marin, a committed and versatile full stack developer👨‍💻Nicolas stands out for the quality and efficiency of his work, always driven by a desire to innovate and offer effective solutions. His approach, which is both rigorous and creative, allows him to carry out ambitious projects and meet the most demanding expectations. 🌟 What makes Nicolas different is his ability to understand needs in depth and transform complex ideas into concrete results. Each project he undertakes benefits from his total commitment and attention to detail, guaranteeing a reliable and lasting result. Always attentive to new trends and passionate about challenges, Nicolas has won the trust of his colleagues through his professionalism and his ability to find solutions adapted to each context.👏 If you are looking for a developer combining expertise and involvement, Nicolas is the person you need!",
    },
    {
      id: 4,
      name: 'Thomas Orard',
      position: 'Fullstack Developper at Ika conseil',
      img: 'assets/review4.jpg',
      review:
        'Having collaborated on most of our training projects with Nicolas, I would like to highlight his technical expertise, his understanding of needs and his experience, which have been essential assets for our success. His professionalism and constant commitment to each project made our collaboration a very positive experience. I am convinced that his skills will be greatly appreciated in business.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'Keibai - Auction website',
      desc: 'Keibai is an online auction site. Users can bid on items of their choice. Users can sell and bid. This site also contains a back office.',
      subdesc:
        'Built with Next.js, Node.js, SCSS, and MongoDB, this online auction platform is optimized for performance and scalability, offering real-time bidding and seamless user experiences.',
      href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'Next.js',
          path: '/assets/nextjs.svg',
        },
        {
          id: 2,
          name: 'Node.Js',
          path: 'assets/nodejs.svg',
        },
        {
          id: 3,
          name: 'MongoDB',
          path: '/assets/mongodb.svg',
        },
        {
          id: 4,
          name: 'SCSS',
          path: '/assets/scss.svg',
        },
      ],
    },
    {
      title: 'Hoko - e-commerce specializing in timeless streetwear',
      desc: 'Hoko is an online platform specializing in timeless streetwear. It operates on a pre-sale model, inspired by Asphalte, allowing customers to purchase clothing in advance. This model reduces waste by producing only what’s ordered',
      subdesc:
        'Built with a tech stack including Node.js, React, CSS, Redux, and MongoDB, Hoko delivers a responsive and efficient online shopping experience, optimized for seamless state management, dynamic styling, and robust backend support.',
      href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'Node.js',
          path: 'assets/nodejs.svg',
        },
        {
          id: 3,
          name: 'MongoDB',
          path: '/assets/mongodb.svg',
        },
        {
          id: 4,
          name: 'Redux',
          path: '/assets/redux.svg',
        },
      ],
    },
    // {
    //   title: 'CarePulse - Health Management System',
    //   desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
    //   subdesc:
    //     'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
    //   href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    //   texture: '/textures/project/project3.mp4',
    //   logo: '/assets/project-logo3.png',
    //   logoStyle: {
    //     backgroundColor: '#60f5a1',
    //     background:
    //       'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
    //     border: '0.2px solid rgba(208, 213, 221, 1)',
    //     boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    //   },
    //   spotlight: '/assets/spotlight3.png',
    //   tags: [
    //     {
    //       id: 1,
    //       name: 'React.js',
    //       path: '/assets/react.svg',
    //     },
    //     {
    //       id: 2,
    //       name: 'TailwindCSS',
    //       path: 'assets/tailwindcss.png',
    //     },
    //     {
    //       id: 3,
    //       name: 'TypeScript',
    //       path: '/assets/typescript.png',
    //     },
    //     {
    //       id: 4,
    //       name: 'Framer Motion',
    //       path: '/assets/framer.png',
    //     },
    //   ],
    // },
    // {
    //   title: 'Horizon - Online Banking Platform',
    //   desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
    //   subdesc:
    //     'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
    //   href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
    //   texture: '/textures/project/project4.mp4',
    //   logo: '/assets/project-logo4.png',
    //   logoStyle: {
    //     backgroundColor: '#0E1F38',
    //     border: '0.2px solid #0E2D58',
    //     boxShadow: '0px 0px 60px 0px #2F67B64D',
    //   },
    //   spotlight: '/assets/spotlight4.png',
    //   tags: [
    //     {
    //       id: 1,
    //       name: 'React.js',
    //       path: '/assets/react.svg',
    //     },
    //     {
    //       id: 2,
    //       name: 'TailwindCSS',
    //       path: 'assets/tailwindcss.png',
    //     },
    //     {
    //       id: 3,
    //       name: 'TypeScript',
    //       path: '/assets/typescript.png',
    //     },
    //     {
    //       id: 4,
    //       name: 'Framer Motion',
    //       path: '/assets/framer.png',
    //     },
    //   ],
    // },
    // {
    //   title: 'Imaginify - AI Photo Manipulation App',
    //   desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    //   subdesc:
    //     'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    //   href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    //   texture: '/textures/project/project5.mp4',
    //   logo: '/assets/project-logo5.png',
    //   logoStyle: {
    //     backgroundColor: '#1C1A43',
    //     border: '0.2px solid #252262',
    //     boxShadow: '0px 0px 60px 0px #635BFF4D',
    //   },
    //   spotlight: '/assets/spotlight5.png',
    //   tags: [
    //     {
    //       id: 1,
    //       name: 'React.js',
    //       path: '/assets/react.svg',
    //     },
    //     {
    //       id: 2,
    //       name: 'TailwindCSS',
    //       path: 'assets/tailwindcss.png',
    //     },
    //     {
    //       id: 3,
    //       name: 'TypeScript',
    //       path: '/assets/typescript.png',
    //     },
    //     {
    //       id: 4,
    //       name: 'Framer Motion',
    //       path: '/assets/framer.png',
    //     },
    //   ],
    // },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, -9] : [0.25, -6, -8],
      cubePosition: isSmall ? [1.5, -3, 0] : isMobile ? [0, -2, 0] : isTablet ? [3, -2.5, 0] : [4, -2.5, 0],
      reactLogoPosition: isSmall ? [1, 2.5, 0] : isMobile ? [2.5, 2, 0] : isTablet ? [3.25, 1.5, 0] : [4.5, 1.5, 0],
      ringPosition: isSmall ? [-4, 8, 0] : isMobile ? [-12, 12, 0] : isTablet ? [-15, 16, 0] : [-20, 15, 0],
      targetPosition: isSmall ? [-4, -9, -10] : isMobile ? [-6, -9, -10] : isTablet ? [-7, -9, -10] : [-9, -10, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Generali',
      pos: 'Fullstack Developer',
      duration: 'Febrary 2022 - October 2024',
      title: "Generali allowed me to become the technical lead for an application, manage a team, and oversee the ongoing maintenance of a solution built with Node.js and React, ensuring the quality and growth of the project while fostering collaboration among team members.",
      icon: '/assets/generali.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Cadic services',
      pos: 'Fullstack Developer',
      duration: 'July 2020 - September 2022',
      title: "Cadic Services allowed me to solidify the skills acquired during my training within a long-term business context, working on an application developed in PHP, JavaScript, HTML, and CSS, and built upon the Webix library.",
      icon: '/assets/cadic.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Smartfooding',
      pos: 'Fullstack Developer',
      duration: 'Febrary 2020 - July 2020',
      title: "Smartfooding, a French startup that placed its trust in me, gave me the opportunity to take my first steps in the professional world. My role involved troubleshooting bugs on the website and developing new features in a PHP, JavaScript, HTML, and CSS environment.",
      icon: '/assets/smartfooding.png',
      animation: 'salute',
    },
  ];