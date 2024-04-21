import link from "next/link";

const userData = {
  githubUsername: "azzammi",
  name: "Muhammad Luthfi Azzammi",
  designation: "Backend Developer",
  avatarUrl: "/avatar.jpg",
  email: "luthfi_azzammi@hotmail.com",
  phone: "+62 82110985076",
  address: "Bekasi, Jawa Barat, Indonesia",
  projects: [
    {
      title: "Rescue Removals Website",
      link: "https://rescueremovals.com",
      imgUrl: "/Rescue-Removals.png",
    },
    {
      title: "Treetan Mobile Apps",
      link: "https://play.google.com/store/search?q=treetan&c=apps",
      imgUrl: "/treetan-mobile-apps.jpg",
    },
    {
      title: "Treetan",
      link: "https://treetan.com",
      imgUrl: "/Treetan.png",
    },
    {
      title: "TAS Accounting",
      link: "http://tas2019-176.com/",
      imgUrl: "/TASSystem.png",
    },
    {
      title: "Shabab Aqiqah",
      link: "https://shababaqiqah.com",
      imgUrl: "/ShababAqiqah.png",
    },
    {
      title: "Indofishes",
      link: "https://vigorous-mccarthy-8717d1.netlify.app/",
      imgUrl: "/Indofishes.png",
    },
    {
      title: "Human Resource Information System",
      link: "https://hris.tas2019-176.com/",
      imgUrl: "/hris.png",
    },
    {
      title: "Hotel Management System",
      link: "https://hotel.tas2019-176.com/",
      imgUrl: "/hotel.png",
    }
  ],
  about: {
    title:
      "I'm a Project Manager and Software Developer that help businesses run and help company to achieve their goal",
    description: [
      `Currently Lead IT Project at PT. Treetan Nusantara Network`,
      `Laravel Backend Developer with 2+ years of experience, 6 Months Experience as Programmer Staff , 1+ years Customer Relation Officer and 2+ years as Sales Administrator. With total 5+years of professional work experience have proven myself as problem solver, quick thinker and also skill to adapt with different situations. `,
      `And also 3+ years Freelance Fullstack Developer that focused on backend development with PHP, JS especially using Laravel`
    ],
    currentProject: "Treetan",
    currentProjectUrl: "https://treetan.com",
  },
  experience: [
    {
      title: "Lead IT Developer",
      company: "PT. Treetan Nusantara Network",
      year: "2023",
      companyLink: "https://treetan.com",
      desc: "Lead Product and IT Development",
    },
    {
      title: "Full Stack Developer",
      company: "Physiomobile Sdn. Bhd.",
      year: "2023",
      companyLink: "https://physiomobile.com/physiotherapy/",
      desc: "Develop webapp to support physiotherapist ",
    },
    {
      title: "Backend Developer",
      company: "PT. Treetan Nusantara Network",
      year: "2021",
      companyLink: "https://treetan.com",
      desc: "Contributed to web application - TDS - which is an E-Commerce for Trustful Halal Tour and Umroh.",
    },
    {
      title: "Staff IT",
      company: "PT. Global Trend Asia",
      year: "2020",
      companyLink: "https://www.globaltrendasia.com/",
      desc: "IT Support Staff that provide help to running webapp",
    },
    {
      title: "Full Stack Developer",
      company: "CV. MMUT",
      year: "2020",
      companyLink: "http://tas2019-176.com/",
      desc: "Accounting software like Zahir, but more simple and easy to use",
    },
    {
      title: "PIC Customer Relationship Management",
      company: "PT. BEKASI MOTOR",
      year: "2019",
      companyLink: "https://bekasimotorhonda.com/",
      desc: "Preparing, cleaning, analysing customer data and handling complaint",
    },
    {
      title: "Sales Administrator",
      company: "PT. ESSEI PERBAMA",
      year: "2017",
      companyLink: "https://esseiperbama.com",
      desc: "Just like another sales admin at company, not related to technical in developing application but got enough business logic.",
    },
    {
      title: "IT Support",
      company: "CV Angmin Softwre",
      year: "2016",
      companyLink: "https://angminsoftware.com",
      desc: "Acted as IT Support and Chief Of Everything",
    },
    {
      title: "Bachelor Degree",
      company: "STMIK BANI SALEH",
      year: "2018",
      companyLink: "https://www.stmik.banisaleh.ac.id/view/",
      desc: "Major in System Information, graduate with GPA Score 3.65",
    },
  ],
  resumeUrl:
    "https://1drv.ms/b/s!Ak3Dg-D-Wc7Njaw1U1927ZddSKQ6YA?e=HBSg3i",
  socialLinks: {
    instagram: "https://instagram.com/luthfi_azzammi",
    linkedin: "https://linkedin.com/in/azzammi",
    github: "https://github.com/Azzammi",
    facebook: "https://facebook.com/saya.user",
  },
};

export default userData;
