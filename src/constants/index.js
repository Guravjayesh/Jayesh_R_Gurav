import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    android,
    py,
    java,
    aerophilia,
    linuxworkshop,
    c,
    // challengers,
    coding_ninjas,
    // gp,
    sahyadri
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      // title: "Web Developer",
      title: "Software Development",
      icon: web,
    },
    {
      // title: "React Native Developer",
      title:"Machine Learning",
      icon: mobile,
    },
    {
      // title: "Backend Developer",
      title: "Computer Vision",
      icon: creator,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "Node JS",
      // icon: nodejs,
      icon: py,
    },
    {
      name: "TypeScript",
      icon: java,
    },
    {
      name: "android",
      icon: android,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "Three JS",
      icon: threejs,
      
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "c",
      icon: c,
    },
    {
      name: "docker",
      icon: typescript,
    }
  ];
  
  const experiences = [
    {
      title: "First year of Engineering",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Nov 2020 - March 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Vision Based Classroom Monitoring software",
      description:
        "ongoing project for our college (Sahyadri college of engineering) : Monitoring classrooms using AI, machine learning, and computer vision techniques",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "ML",
          color: "green-text-gradient",
        },
        {
          name: "computer vision",
          color: "pink-text-gradient",
        },
      ],
      image: sahyadri,
      source_code_link: "https://github.com/Guravjayesh/",
    },
    {
      name: "Lip Reading",
      description:
        "As part of our digital image processing lab, we trained an efficient lip reading model using LipNet and the TensorFlow framework. This model aimed to enhance performance in recognizing speech content within a video dataset by analyzing lip movements",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Tensorflow",
          color: "green-text-gradient",
        },
        {
          name: "Streamlit",
          color: "pink-text-gradient",
        },
      ],
      image: "https://images.theconversation.com/files/89910/original/image-20150728-11549-1xw04nt.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
      source_code_link: "https://github.com/Guravjayesh/LIP-READING",
    },
    {
      name: "Autonomous Drone Landing and Detection",
      description:
        "During this project, my primary focus was on object detection, specifically aiming to detect drones using the TensorFlow framework",
      tags: [
        {
          name: "Tensorflow",
          color: "blue-text-gradient",
        },
        {
          name: "Tensorflow-Model-zoo",
          color: "green-text-gradient",
        },
        {
          name: "Object-detection-api",
          color: "pink-text-gradient",
        },
        {
          name: "Transfer Learning",
          color: "blue-text-gradient",
        },
      ],
      image: "https://images.pexels.com/photos/15842363/pexels-photo-15842363/free-photo-of-drone-landing-on-hand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      source_code_link: "https://github.com/Guravjayesh/AUTONOMOUS_LANDING-AND-DETECTION",
    },
    {
      name: "ONLINE GARDEN",
      description:
        "For the Android development lab, we successfully completed an e-commerce app for selling nursery flowers and quality gardening tools and equipment in our region",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Android",
          color: "green-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
        {
          name: "Mysql",
          color: "green-text-gradient",
        },
        // {
        //   name: "Volley",
        //   color: "green-text-gradient",
        // },
      ],
      // image: "https://play-lh.googleusercontent.com/s89R4abQQ92FS18ISsDRHMlBiw4jmDibyhH8YhTOYr6DvdKEwlXc62rf9VqDNU22ETg=w526-h296-rw",
      image: "https://images.pexels.com/photos/2928027/pexels-photo-2928027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      source_code_link: "https://github.com/Guravjayesh/ONLINE_GARDEN",
    },
    {
      name: "Whatsapp Chat Analyzer",
      description:
        "Unlock insights from your conversations. Track chat timings, daily volumes, and gain valuable emoji analysis for a deeper understanding of your messaging patterns.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Data Analysis",
          color: "green-text-gradient",
        },
        // {
        //   name: "Pandas",
        //   color: "pink-text-gradient",
        // },
        // {
        //   name: "Matplotlib",
        //   color: "green-text-gradient",
        // },
      ],
      // image: "https://play-lh.googleusercontent.com/s89R4abQQ92FS18ISsDRHMlBiw4jmDibyhH8YhTOYr6DvdKEwlXc62rf9VqDNU22ETg=w526-h296-rw",
      image: "https://www.smartprix.com/bytes/wp-content/uploads/2022/08/WhatsApp-about.png",
      source_code_link: "https://github.com/Guravjayesh/WhatsappChat-Analyzer--updated-version",
    },
    {
      name: "Smart India Hackathon",
      description:
        " supported the NAUTICA team in utilizing Intel RealSense Depth Cam and FLIR thermal vision camera for precise underground object detection and localization",
      tags: [
        {
          name: "Intel realsense cam",
          color: "blue-text-gradient",
        },
        {
          name: "Jetson Nano",
          color: "green-text-gradient",
        },
        
      ],
      image: "https://images.shiksha.com/mediadata/images/articles/1661251505phpPvaHoY.jpeg",
      source_code_link: "https://github.com/Guravjayesh/NAUTICA---DEPTH-CAM-OBJECT-DETECTION",
    },
    {
      name: "Walmart Data Analysis",
      description:
        "A full-stack app to analyze Walmart's data based on gender and age classification. The tools used in this project include HTML, Bootstrap, Ajax, Flask, and MySQL",
      tags: [
        {
          name: "Bootstrap",
          color: "blue-text-gradient",
        },
        {
          name: "Ajax",
          color: "green-text-gradient",
        },
        {
          name: "Flask",
          color: "pink-text-gradient",
        },
      ],
      image: "https://www.dailyexcelsior.com/wp-content/uploads/2017/04/wal-mart.jpg",
      source_code_link: "https://github.com/Guravjayesh/Walmart_Data_Analysis",
    },
    {
      name: "Art Gallery Management system",
      description:
        "A database management system to digitize artworks from galleries, creating a platform to store and organize collections",
      tags: [
        {
          name: "Java swings",
          color: "blue-text-gradient",
        },
        {
          name: "JDBC",
          color: "green-text-gradient",
        },
        {
          name: "Mysql",
          color: "pink-text-gradient",
        },
      ],
      image: "https://d197irk3q85upd.cloudfront.net/catalog/product/cache/95dbdf78ad5a0d4b547132f80fbac8f3/e/x/exhibition_banner_1.jpg",
      source_code_link: "https://github.com/Guravjayesh/",
    },
    {
      name: "Car Parking Space Counter",
      description:
        "Car Parking Space Counter to leverage surveillance footage to accurately count and display available free car parking spots",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Open cv",
          color: "green-text-gradient",
        },
        
      ],
      image: "https://www.geotab.com/CMS-Media-production/Blog/NA/_2020/Aug/reverse-parking/blog-why-reverse-parking-hero@2x.jpg",
      source_code_link: "https://github.com/Guravjayesh/",
    }
    // {
    //   name: "Game Playing using Computer vision",
    //   description:
    //     "I automated game playing by detecting user actions on-screen using opencv and triggering key inputs using pyautogui to execute corresponding tasks",
    //   tags: [
    //     {
    //       name: "Python",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "Open cv",
    //       color: "green-text-gradient",
    //     },
        
    //   ],
    //   image: gp,
    //   source_code_link: "https://github.com/Guravjayesh/",
    // }
  ];

  // Team Leading

  const Events = [
    {
      name: "LINUX WORKSHOP",
      description:
        "As a Robotics Team lead at Team Challengers, we had conducted the Linux workshop for all juniors who were willing to learn things, fostering an environment of knowledge sharing and skill development",
      tags: [
        {
          name: "Team Challengers",
          color: "blue-text-gradient",
        },
      ],
      // image: "https://media.licdn.com/dms/image/C5622AQF4Ef_ZqCUBvw/feedshare-shrink_2048_1536/0/1657818236790?e=1691625600&v=beta&t=ECG09_ENKDIqqaboioqwNJDgwf10QI59l9RZIE_GX0c",
      image: linuxworkshop,
      Linkedin_link: "https://www.linkedin.com/in/jayesh-gurav-6003a4215/"
    },
    {
      name: "Aerophilia 2022",
      description:
        "As a Ninja Entrepreneur and Coding Event Lead in Aerophilia 2022, I had the privilege of spearheading the collaborative efforts to organize two prominent events, namely Man vs Bug and Blind Coding, within the college",
      tags: [
        {
          name: "Aerophilia-2022",
          color: "pink-text-gradient",
        },
        {
          name: "Ninja-Enterprenuer",
          color: "green-text-gradient",
        },
        
      ],
      // image: "https://media.licdn.com/dms/image/C5622AQErS-J6FcmTqw/feedshare-shrink_1280/0/1668518875731?e=1691625600&v=beta&t=vobDBInGcRsHnhNMbh3pb3RmMWjh-UH8YM7lr3qy1UQ",
      image: aerophilia,
      Linkedin_link: "https://www.linkedin.com/in/jayesh-gurav-6003a4215/"
    },
    {
      name: "INTERNSHIP ON AI-ML-DL",
      description:
        "During the lockdown, I completed a 90-day internship in Machine Learning, Artificial Intelligence, and Data Analytics, gaining hands-on experience through diverse projects",
      tags: [
        {
          name: "AI-ML-DL",
          color: "blue-text-gradient",
        },
        {
          name: "Pantech Solutions",
          color: "green-text-gradient",
        },
        
      ],
      image: "https://www.pantechelearning.com/wp-content/uploads/2021/02/Machine-Learning-Internship-05-02-2021.jpg",
      Linkedin_link: "https://www.linkedin.com/in/jayesh-gurav-6003a4215/"
    },
    // {
    //   name: "Robotics team lead -Team challengers",
    //   description:
    //     "Team Challengers, a student club at our college, engages in project development through active participation in hackathons and events, while also organizing educational workshops and events. I had the privilege of serving as a team lead in the robotics domain for Team Challengers",
    //   tags: [
    //     {
    //       name: "Team Challengers",
    //       color: "blue-text-gradient",
    //     },
        
        
    //   ],
    //   image: challengers,
    //   Linkedin_link: "https://www.linkedin.com/in/jayesh-gurav-6003a4215/"
    // },
    {
      name: "Coding Ninja Enterpreneur",
      description:
        "As an Ninja entrepreneurial enthusiast, I successfully organized and facilitated prominent events and workshops within our college, featuring esteemed speakers sourced from Coding Ninjas, through a collaborative effort with the organization",
      tags: [
        
        {
          name: "Coding Ninjas",
          color: "green-text-gradient",
        },
        
      ],
      // image: coding_ninjas,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9e1OvR_Nlb0Q1B-wO4iMDeRia0JyNNEJUA&usqp=CAU",
      Linkedin_link: "https://www.linkedin.com/in/jayesh-gurav-6003a4215/"
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects, Events };
