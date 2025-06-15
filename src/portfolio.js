/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 0 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "🅻🅴🅾🅽 🅺🆁🅰🅸🅼",
  title: "Leon Kraim",
  subTitle: emoji(
    "A Full Stack Software Developer        Efficient 👨‍💻 Quick 🚀 And Profit Oriented 💵"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/LeonKraim",
 // linkedin: "",
  gmail: "offleon.kraim+work@gmail.com",
  //gitlab: "",
  //facebook: "",
  //medium: "",
  //stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PROFICIENT IN",
  skills: [
    emoji(
      "🎮 Game Development"
    ),
    emoji("🌐 Web Development"),
    emoji(
      "⚡ Front / Backend End Development"
    ),
    emoji(
      "🖥️ Tech Support"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },

    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Unity",
      fontAwesomeClassname: "fab fa-unity"
    },
    {
      skillName: "c-sharp",
      fontAwesomeClassname: require("./assets/images/csharpicon.png")
    }
  ],
  
  display: true // Set false to hide this section, defaults to true
};

// Education Section


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
    
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

 const workExperiences = {
//   title: "",
//   display: true, //Set it to true to show workExperiences Section
//   experience: [
//     {
//       role: "",
//       href: "https://play.google.com/store/apps/details?id=com.Elektroney.NeonRoads",
//       // company: "",
//       companylogo: require("./assets/images/facebookLogo.png"),
//       date: "2025 - Present",
//       desc: "A Multiplayer Online Battle Arena Game made with Unity and C#",
//       // descBullets: [
//       //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//       //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
//       // ]
//     }
//   ]
 };

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  // title: "Big Projects",
 // subtitle: "",
  projects: [
    // {
    //   backgroundImage: require("./assets/vids/homepage.mp4"),

    //   image: require("./assets/images/hotwheelLogo.png"),
    //   projectName: "Neon Roads",
    //   projectDesc: "A Multiplayer Online Battle Arena Game made with Unity and C#",
    //   footerLink: [
    //     {
    //       name: "Visit Github Page",
    //       url: "https://github.com/Elektroney/Hotwheel"
    //     },
    //     {
    //       name: "Visit Home Page",
    //       url: "https://elektroney.github.io/Newtonian-Gravity-Simulator-Unity/"
    //     }
    //     //  you can add extra buttons here.
    //   ]    
    
    //     //  you can add extra buttons here.
      
    // }
   
  ],
  display: true // Set false to hide this section, defaults to true
};




const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

const sideProjects = {
  title: "Side Projects",
 // subtitle: "",
  projects: [
    {
      image: require("./assets/images/hotwheelLogo.png"),
      projectName: "Hotwheel",
      projectDesc: "A productivity tool made by me, I use daily",
      footerLink: [
        {
          name: "Visit Github Page",
          url: "https://github.com/Elektroney/Hotwheel"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: "https://private-user-images.githubusercontent.com/54000878/289900825-e8ae18fc-e92f-434c-b4c6-e088ed936275.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDk5ODI2MzAsIm5iZiI6MTc0OTk4MjMzMCwicGF0aCI6Ii81NDAwMDg3OC8yODk5MDA4MjUtZThhZTE4ZmMtZTkyZi00MzRjLWI0YzYtZTA4OGVkOTM2Mjc1LmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA2MTUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNjE1VDEwMTIxMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTYyNmJlMGM5ZDJkODk5Yjk5MzJjZmUwY2ExMTUzNzY2NzMxYzEwYjE3ZDQ2OGFlYmE2OTc1M2UwMDg1NzZjNzYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.8I5TKb2YX-LMMFUmZXChmPcmCwk9sOa_incUIX3VZ1Y",
      projectName: "Newtonian Gravity Simulator",
      projectDesc: "A tech demo to demonstrate my understanding of maths and Proficiency in Unity",
      footerLink: [
        {
          name: "Visit Github Page",
          url: "https://github.com/Elektroney/Newtonian-Gravity-Simulator-Unity"
        },

        {
          name: "Visit Demo Page",
          url: "https://elektroney.github.io/Newtonian-Gravity-Simulator-Unity/"
        }
        
      ]

    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  // title: emoji("Achievements And Certifications 🏆 "),
  // subtitle:
    // "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    // {
    //   title: "Google Code-In Finalist",
    //   subtitle:
    //     "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
    //   image: require("./assets/images/codeInLogo.webp"),
    //   imageAlt: "Google Code-In Logo",
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
    //     },
    //     {
    //       name: "Award Letter",
    //       url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
    //     },
    //     {
    //       name: "Google Code-in Blog",
    //       url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
    //     }
    //   ]
    // },
    // {
    //   title: "Google Assistant Action",
    //   subtitle:
    //     "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
    //   image: require("./assets/images/googleAssistantLogo.webp"),
    //   imageAlt: "Google Assistant Action Logo",
    //   footerLink: [
    //     {
    //       name: "View Google Assistant Action",
    //       url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
    //     }
    //   ]
    // },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "My Inbox is open for all.",
  //number: "",
  email_address: "offleon.kraim+work@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  sideProjects,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
