import {
    frontend,
    mechanicaldesigner,
    softwareengineer,
    projectmanager,
    javascript,
    python,
    cpp,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    figma,
    lockheed,
    isakson,
    concordia,
    adobe,
    sql,
    matlab,
    arduino,
    jira,

    td,
    mcgill,
    lcc,
    waterloo,
    
    tripguide,
    threejs,
    thumbnailrocket,
    thumbnailhelicopter,
    thumbnaildietme,
    thumbnailportfolio
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
      title: "Front-End Developer",
      icon: frontend,
    },
    {
      title: "Mechanical Designer",
      icon: mechanicaldesigner,
    },
    {
      title: "Software Engineer",
      icon: softwareengineer,
    },
    {
      title: "Project Manager",
      icon: projectmanager,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "adobe",
      icon: adobe,
    },
    {
      name: "matlab",
      icon: matlab,
    },
    {
      name: "sql",
      icon: sql,
    },
    {
      name: "arduino",
      icon: arduino,
    },
    {
      name: "jira",
      icon: jira,
    },
    {
      name: "figma",
      icon: figma,
    },
    
  ];
  
  const experiences = [
    {
      title: "Project Manager - Industrial Engineer",
      company_name: "Lockheed Martin",
      icon: lockheed,
      iconBg: "#383E56",
      date: "Jan 2024 - Apr 2024",
      points: [
        "Assessed over 100 projects through Jira query data analysis to estimate price and time constraints.",
        "Served as a liaison between managers, engineers, and customers by leading and holding meetings.",
        "Used software to input request data, create graph trends, and present findings to senior managers.",
      ],
    },
    {
      title: "Project Engineer",
      company_name: "Isakson Investments Inc.",
      icon: isakson,
      iconBg: "#E6DEDD",
      date: "May 2023 - Dec 2023",
      points: [
        "Participated in initial property assessment, pre-offer verification inspection, and renovation planning.",
        "Analyzed properties for real estate financial projections, which led to a 260,000$ purchase (75% ROI).",
      ],
    },
    {
      title: "Mechatronics Systems Intern",
      company_name: "Concordia University",
      icon: concordia,
      iconBg: "#383E56",
      date: "May 2022 - May 2023",
      points: [
        "Interned alongside a PhD student in the Mechanical Engineering department.",
        "Completed Robotic Systems course with a final presentation 2 in front of 3 Concordia professors.",
        "Gained hands-on experience with 3D printers, Arduinos, Electric PCBs, Robotic Sensors.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I’ve never met an engineer who cared about user-centered design as much as Xirui did during our time spent developing the DietMe app.",
      name: "Michael McVicar",
      designation: "UX Designer",
      company: "TD Bank",
      image: td,
    },
    {
      testimonial:
        "Xirui is always willing to take on additional work, looking for opportunities to grow his knowledge in his area of study.",
      name: "Heather Domereckyj",
      designation: "Project Management Lead",
      company: "Lockheed Martin",
      image: lockheed,
    },
    {
      testimonial:
        "I have known Xirui to as one with his work, a man dedicated to both the learning process and the innovative side of project engineering.",
      name: "Neil Wright",
      designation: "CFO",
      company: "Isakson Investments",
      image: isakson,
    },
    {
      testimonial:
        "Xirui was an amazing teammate. He excelled in his role and actively participated in the construction of various items during the project.",
      name: "Natasha Nidelli",
      designation: "COO of DansLaRue Project & Student",
      company: "McGill University",
      image: mcgill,
    },
    {
      testimonial:
        "Xirui fascinated me with his profound grasp of complex topics. He is diligent and does not give up till he delivers the task assigned to him.",
      name: "Ehsan Zakeri",
      designation: "PhD student",
      company: "Concordia University",
      image: concordia,
    },
    {
      testimonial:
        "His approach to practices and games is clearly one of constant improvement. If he gets knocked down, he gets back up and gives as good as he got.",
      name: "Christopher Olive",
      designation: "Soccer Coach & Physics Teacher",
      company: "Lower Canada College",
      image: lcc,
    },
  ];
  
  const projects = [
    {
      name: "Rocket Launch Simulator",
      description:
        "Built and launched a water bottle rocket, then tracked its position with cameras and software that calculated its theoretical vs. experimental flight path based on mathematical formulae and data analysis.",
      tags: [
        {
          name: "TrackerSoftware",
          color: "pink-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
        {
          name: "Excel",
          color: "pink-text-gradient",
        },
      ],
      image: thumbnailrocket,
      source_code_link: "https://github.com/xrhuang10/RocketLaunch",
    },
    {
      name: "DietMe UI App",
      description:
        "Developed a mobile application UI to help people with dietary restrictions enhance their cooking and shopping experience. Presented prototype at Western University and ranked 3rd out of 54 competitors.",
      tags: [
        {
          name: "Figma",
          color: "pink-text-gradient",
        },
        {
          name: "Canva",
          color: "pink-text-gradient",
        },
        {
          name: "AdobeSuite",
          color: "pink-text-gradient",
        },
      ],
      image: thumbnaildietme,
      source_code_link: "https://www.figma.com/proto/HcYRAzFB9KG4WuGyloUj3A",
    },
    {
      name: "3D Helicopter Design",
      description:
        "Designed and assembled a 3D helicopter model with a rotating propeller and shelled inner body. Created sectional view projections, an exploded view diagram, and BOM.",
      tags: [
        {
          name: "Solidworks",
          color: "pink-text-gradient",
        },
        {
          name: "AutoCAD",
          color: "pink-text-gradient",
        },
        {
          name: "GD&T",
          color: "pink-text-gradient",
        },
      ],
      image: thumbnailhelicopter,
      source_code_link: "https://github.com/",
    },
    {
      name: "DansLaRue Social Project",
      description:
        "Managed team budget and fundraised $17000. Designed and built a garden & compost system. Filmed and produced a documentary to raise awareness on homelessness.",
      tags: [
        {
          name: "MicrosoftSuite",
          color: "pink-text-gradient",
        },
        {
          name: "Machinery",
          color: "pink-text-gradient",
        },
        {
          name: "French",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://www.youtube.com/watch?v=1EyvGNk25fM&t",
    },
    {
      name: "Personal Portfolio",
      description:
        "Created an engineering portfolio that showcases my experience, projects, and more. Programmed a responsive and UX-friendly website using pre-downloaded 3D model renderings.",
      tags: [
        {
          name: "HTML/CSS",
          color: "pink-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: thumbnailportfolio,
      source_code_link: "https://xiruihuang.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };