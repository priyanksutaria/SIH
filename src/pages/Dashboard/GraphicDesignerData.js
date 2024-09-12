import HighSchoolImage from '../../assets/images/highSchool.jpg';
import UndergraduateImage from '../../assets/images/undergraduate.jpg';
import MastersImage from '../../assets/images/masters.jpg';
import GovtSchemesImage from '../../assets/images/govtSchemes.jpg';
import CompaniesImage from '../../assets/images/companies.jpg';
import SalaryImage from '../../assets/images/salary.jpg';

const graphicDesignerMilestones = [
  {
    id: 1,
    name: "High School",
    positionX: 130,
    positionY: 20,
    info: `
      During high school, it’s important to lay a strong foundation in creative subjects. 
      Opting for Arts can be advantageous, as it includes subjects like Fine Arts, Multimedia, and Design, 
      which will give you a head start. However, students from Science and Commerce backgrounds 
      can also pursue a career in graphic design, provided they have a strong interest in creativity 
      and technology. Focus on developing your artistic skills and creativity, and explore the basics 
      of digital art and design software like Photoshop and Illustrator. Participation in school 
      art competitions and exhibitions will help in building a design portfolio from an early age.
    `,
    image: HighSchoolImage,
    color: "#f7cf08"
  },
  {
    id: 2,
    name: "Undergraduate",
    positionX: 250,
    positionY: 150,
    info: `
      After high school, pursuing a Bachelor’s degree in Fine Arts (BFA) or Design (B.Des) is an ideal 
      option for aspiring graphic designers. These courses focus on the principles of design, color theory, 
      typography, and digital illustration. A BFA in Graphic Design allows you to develop hands-on skills 
      in various design tools, while a B.Des in Communication Design helps you understand the broader 
      aspects of visual communication, branding, and user experience. Throughout your undergraduate 
      program, you'll work on multiple projects and internships that will help you build a professional portfolio.
    `,
    image: UndergraduateImage,
    color: "#f64747"
  },
  {
    id: 3,
    name: "Masters & Certifications",
    positionX: 500,
    positionY: 30,
    info: `
      A Master’s degree, such as an M.Des in Graphic or Communication Design, is not mandatory but 
      can give you an edge in the competitive industry. You can pursue this degree from renowned institutes 
      like NID or IITs. Alternatively, certifications in areas like UX/UI Design, Motion Graphics, 
      3D Design, and Animation can significantly enhance your skills. Short-term courses in 
      Adobe Creative Suite, Figma, and other design tools are also beneficial. Participating in online 
      courses from platforms like Coursera and edX helps you stay updated with the latest trends in 
      the design world.
    `,
    image: MastersImage,
    color: "#158115"
  },
  {
    id: 4,
    name: "Government Schemes",
    positionX: 670,
    positionY: 30,
    info: `
      The Indian government offers various schemes and scholarships for students in creative fields. 
      The National Scholarship Portal (NSP) provides merit-based scholarships for students pursuing 
      higher education, including graphic design. Additionally, the Pradhan Mantri Kaushal Vikas Yojana 
      (PMKVY) offers skill development programs in design and digital media. IGNOU scholarships are 
      available for SC/ST students, which can be availed while pursuing a degree in arts or design. 
      These schemes help reduce the financial burden and encourage talented students to excel in creative industries.
    `,
    image: GovtSchemesImage,
    color: "#163493"
  },
  {
    id: 5,
    name: "Target Companies",
    positionX: 800,
    positionY: 120,
    info: `
      Graphic designers in India have numerous opportunities in advertising agencies, media houses, 
      and tech companies. Top advertising agencies like Ogilvy, JWT India, and McCann offer great 
      opportunities for designers to work on branding, marketing, and digital campaigns. Tech giants 
      like Google India, Infosys, and TCS are always looking for talented designers for UX/UI roles. 
      Media houses like Walt Disney India and Times Group also require graphic designers for animation, 
      visual effects, and editorial design. Working at these companies not only offers job stability but 
      also opportunities for growth and exposure to international projects.
    `,
    image: CompaniesImage,
    color: "#b51cb5"
  },
  {
    id: 6,
    name: "Salary in India",
    positionX: 930,
    positionY: -20,
    info: `
      Salaries for graphic designers in India vary depending on the location, company size, and 
      individual expertise. Entry-level designers can expect to earn between ₹3,00,000 and ₹5,00,000 
      per annum. As you gain experience and expertise, mid-level designers can earn around ₹6,00,000 
      to ₹10,00,000 annually. Senior designers and creative heads in top agencies or tech companies 
      can command salaries ranging from ₹10,00,000 to ₹20,00,000 per annum. Freelancing is also an 
      option, where earnings can vary based on the scope and scale of projects undertaken.
    `,
    image: SalaryImage,
    color: "#5508b2"
  }
];

export default graphicDesignerMilestones;
