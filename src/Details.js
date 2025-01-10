// Enter all your detials in this file
// Logo images
import logogradient from "./assets/SmallC.png";
import logo from "./assets/SmallC.png";
import logoInvert from "./assets/SmallCInvert.png";
// Profile Image
import profile from "./assets/TestC(2).gif";
import InvertProfile from "./assets/TestCInvert.gif";

import LectureImage1 from "./assets/LectureImage/Minecraft.jpg";
import LectureImage2 from "./assets/LectureImage/Lego.jpg";
import LectureImage3 from "./assets/LectureImage/RhinoAdvance_1.png";
import LectureImage4 from "./assets/LectureImage/Grasshopper_Lecture_1.jpg";
import LectureImage5 from "./assets/LectureImage/3D_Printing.jpg";

import LLMvsArch from "./assets/Monologue/LLMvsArchitecture/LLMvsArchitecture.jpg";

import MC_Bacilica_1 from "./assets/Monologue/Minecraft_Basilica/Whole.png";
import MC_Bacilica_2 from "./assets/Monologue/Minecraft_Basilica/out.png";
import MC_Bacilica_3 from "./assets/Monologue/Minecraft_Basilica/hall.png";
import MC_Bacilica_4 from "./assets/Monologue/Minecraft_Basilica/effect.png";
import MC_Bacilica_5 from "./assets/Monologue/Minecraft_Basilica/stair.png";
import MC_Bacilica_6 from "./assets/Monologue/Minecraft_Basilica/near.png";
import MC_Bacilica_7 from "./assets/Monologue/Minecraft_Basilica/far.png";
import MC_Bacilica_8 from "./assets/Monologue/Minecraft_Basilica/Map1.png";
import MC_Bacilica_9 from "./assets/Monologue/Minecraft_Basilica/Map2.png";

import MinecraftST01 from "./assets/Monologue/Minecraft Story_1/01.png";
import MinecraftST02 from "./assets/Monologue/Minecraft Story_1/02.png";
import MinecraftST03 from "./assets/Monologue/Minecraft Story_1/03.png";
import MinecraftST04 from "./assets/Monologue/Minecraft Story_1/04.png";
import MinecraftST05 from "./assets/Monologue/Minecraft Story_1/05.png";

import MinecraftST11 from "./assets/Monologue/Minecraft Story_2/01.png";
import MinecraftST12 from "./assets/Monologue/Minecraft Story_2/02.png";
import MinecraftST13 from "./assets/Monologue/Minecraft Story_2/03.png";
import MinecraftST14 from "./assets/Monologue/Minecraft Story_2/04.png";
import MinecraftST15 from "./assets/Monologue/Minecraft Story_2/05.png";
import MinecraftST16 from "./assets/Monologue/Minecraft Story_2/06.png";
import MinecraftST17 from "./assets/Monologue/Minecraft Story_2/07.png";
import MinecraftST18 from "./assets/Monologue/Minecraft Story_2/08.png";

import MinecraftST21 from "./assets/Monologue/Minecraft Story_3/01.png";
import MinecraftST22 from "./assets/Monologue/Minecraft Story_3/02.png";
import MinecraftST23 from "./assets/Monologue/Minecraft Story_3/03.png";
import MinecraftST24 from "./assets/Monologue/Minecraft Story_3/04.png";
import MinecraftST25 from "./assets/Monologue/Minecraft Story_3/05.png";
import MinecraftST26 from "./assets/Monologue/Minecraft Story_3/06.png";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
  darkgradient: logoInvert,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "TsungWei Cheng Mike",
  tagline: "I'm a researcher | programmer | designer",
  img: profile,
  InvertImg: InvertProfile,
  about: [
    "TsungWei Cheng Mike is a passionate researcher and designer specialising in digital architecture." +
      " He holds a Master’s in Architecture from National Taiwan University of Science and Technology (NTUST)" +
      " and participated in exchange programs with TU Berlin and the Digital Design Unit (DDU) at TU Darmstadt." +
      " He also interned at Global Reengineering Company for three years, focusing on optimising UHPC facade panels" +
      " with Grasshopper.",

    "Currently, TsungWei works as a Ph.D. student and research assistant at the GAS lab at NTUST and lectures " +
      "at National University of Kaohsiung (NUK). His research centers on dry stacking systems, computer-aided design (CAD)," +
      " and digital fabrication for building components.",

    "He actively contributes to research projects, such as Auto-Replicating Robotic Assembly using SL Blocks, " +
      " through the PPP program between Taiwan and Germany. He also applied Rhino Compute to automate metal sheet" +
      " designs for IPCS/BIES Fabrication Center projects. His programming expertise includes C# and Grasshopper" +
      " for simulation, visualisation, and optimisation. Additionally, he explores circular economy concepts using " +
      "osteomorphic and topological interlocking block systems in collaboration with ZhenXi Construction and Bio " +
      "Architecture Formosa.",

    "TsungWei has presented at CAADRIA 2024 in Singapore and has authored eight academic publications across" +
      " journals and conferences. With extensive experience in both academic and industrial collaborations, his" +
      " work emphasises sustainable and reusable components in architecture, aiming to drive meaningful advancements" +
      " in the field.",
  ],
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkedin: "https://linkedin.com/in/宗偉-鄭-b76a45251",
  github: "https://www.github.com/TzhongWei",
  email: "https://mike861104@gmail.com",
  ResearchGate: "https://www.researchgate.net/profile/Tsung-Wei-Cheng/research",
  instagram: "https://www.instagram.com/__zhong_wei/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Research Assistant",
    Company: `GAS Lab, Department of Architecture, NTUST`,
    Location: "Taipei, Taiwan",
    Type: "Full Time",
    Duration: "Apr 2023 - present",
  },
  {
    Position: "Lecturer",
    Company: `Department of Architecture, NUK`,
    Location: "Kaohsiung, Taiwan",
    Type: "Part Time",
    Duration: "Nov 2024 - present",
  },
  {
    Position: "Internship",
    Company: `Global Reengineering Company Ltd.`,
    Location: "Yilan, Taiwan",
    Type: "Internship",
    Duration: "Jul 2021 - Jul 2024",
  },
  {
    Position: "Project Assitant of Topological Interlocking System",
    Company: `GAS Lab, Department of Architecture, NTUST`,
    Location: "Taipei, Taiwan",
    Type: "Full Time",
    Duration: "Sep 2021 - Jul 2022",
  },
  {
    Position:
      "Project Assitant of Industry Cooperation with ZhenXi Construction Company",
    Company: `GAS Lab, Department of Architecture, NTUST`,
    Location: "Taipei, Taiwan",
    Type: "Full Time",
    Duration: "Sep 2020 - Jul 2021",
  },
  {
    Position: "Modeller and Draftman",
    Company: `CCHsu Architect & Associates`,
    Location: "Kaohsiung, Taiwan",
    Type: "Internship",
    Duration: "Jul 2018 - Aug 2018",
  },
  {
    Position: "Lecturer of 3D Printer Machine in Maker Lecture",
    Company: `Nation University of Kaohsiung`,
    Location: "Kaohsiung, Taiwan",
    Type: "Part Time",
    Duration: "Sep 2017 - Jul 2020",
  },
  {
    Position: "Research Assistant",
    Company: `Nation University of Kaohsiung`,
    Location: "Kaohsiung, Taiwan",
    Type: "Part Time",
    Duration: "Sep 2017 - Jul 2018",
  },
  {
    Position: "Modeller and Draftman",
    Company: `Apple Green Environment Planning and Design Co.,Ltd`,
    Location: "Kaohsiung, Taiwan",
    Type: "Internship",
    Duration: "Jul 2016 - Aug 2016",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "PhD. Student",
    Company: "GAS, Department of Architecture, NTUST",
    Location: "Taipei, Taiwan",
    Type: "Full Time",
    Duration: "Jan 2024 - July 2024",
  },
  {
    Position: "Exchange Research",
    Company:
      "Digital Design Unit, Department of Architecture, Technische Universitat Darmstadt",
    Location: "Darmstadt, Germany",
    Type: "Full Time",
    Duration: "April 2024",
  },
  {
    Position: "Exchange Student",
    Company: `Department of Civil Engineering, Technische Universitat Berlin`,
    Location: "Berlin, Germany",
    Type: "Full Time",
    Duration: "Sep 2022 - Mar 2023",
  },
  {
    Position: "Master of Architecture",
    Company: `GAS, Department of Architecture, NTUST`,
    Location: "Taipei, Taiwan",
    Type: "Full Time",
    Duration: "Sep 2020 - Jul 2023",
  },
  {
    Position: "Bachelor of Architecture",
    Company: `Department of Architectur and Creative Design, NUK`,
    Location: "Kaohsiung, Taiwan",
    Type: "Full Time",
    Duration: "Sep 2016 - Jul 2020",
  },
];

export const LecDetails = [
  {
    Topic: "Minecraft Serious Gaming",
    Company: "Department of Architecture, NUK",
    Location: "Kaohsiung, Taiwan",
    Duration: "Nov 2024 - Jan 2025",
    DetailsContent: {
      image: LectureImage1,
      description: [<p>
        As a upcoming trend on game-based learning, Minecraft as one of the favourite tools for Game-based learning materials is widely used to different displines to benefit students' learning. Granted by freedon of sandbox gaming setting, Minecraft offers a great environment to teach students. In this lecture, we aimed to teach students with MEP system. Because Minecraft doesn't have electricity and piping system, we used redstone and water system to substitute them. Besides, transportation of farming products is viewed as the water and ventilation system in the reality. Students needed to overcome the obsticles, such as trees and langscapes, to transfer their products into targeting location. Besides, to inimitate the resource limitation in the real, emeralds were applied as currency. Students need to use their limited resources to complete their tasks.
      </p>,
      <p>
        Bidding is an important part in the AEC industry, but it's rarely taught in school. Bidding results in different architectural design outputs and leads to various construction cost. Moreover, designs impacts the interests and profits in operation processes. As a result, students needed to purchase the sites in the game based on their evaulation. The game starts with the bidding lands. Different sites had various pros and cons; for instance, a site is closed to the market, another has a planar landscape, which is easy to construct. 
      </p>,  
      <p>
        After winning the site, students bought materials from the villagers in the market in the game. Mining and making deals with other villagers were prohibited in the game. As a result, students needed to control their expenses to complete the task. Then, students crafted their farming machine in the survival mode. Those teams who designed more farming machines and efficient transport networks could gain more profits in the final presentation.
      </p>,
      <p>
        In the end, students' outputs were beyond my expectations. Firstly, with their detailed planning, they were not bankrupt and fulfilled their designs. Moreover, this games interested them a lot. They were even searhing online resources, and therefore, they can overcome the sizes or productivity of machines under different environment. Some students configured their designed on planar, and the other permuted the machine vertically. 
      </p>
    ],
      materialLink: false,
      classmaterial: "None",
    },
  },
  {
    Topic: "Lego BIM Workshop",
    Company: "Department of Architecture, NUK",
    Location: "Kaohsiung, Taiwan",
    Duration: "May 2024 - Jun 2024",
    DetailsContent: {
      image: LectureImage2,
      description: [
        "This lecture focused on introducing students to the workflow processes within the architecture, " +
          "engineering, and construction (AEC) industry through an engaging, interactive game. In the class, " +
          "students assumed different roles—such as architects, consultants, constructors, and developers—working " +
          "collaboratively to complete a design using LEGO blocks.",
        "The game guided participants through each stage of the process, starting with land bidding, followed" +
          " by architectural concept development, detailed planning with the blocks, purchasing materials, and" +
          " finally, constructing their design. This hands-on approach provided students with an engaging and" +
          " insightful experience, simulating real-world roles and responsibilities within the industry.",
        "The class offered a heuristic and practical learning experience, encouraging students to step into" +
          " industry positions and reflect on their roles and decisions. Unlike conventional academic programs," +
          " which typically teach these skills only after graduation, this class gave students an early introduction" +
          " to the industry’s expectations. By participating in this activity, students gained a deeper understanding" +
          " of the criteria for each role and could begin thinking about.",
      ],
      materialLink: true,
      classMaterial: "https://github.com/TzhongWei/BIM-Game.git",
    },
  },
  {
    Topic: "Rhino Advance Lecture",
    Company: "Department of Architecture, NUK",
    Location: "Kaohsiung, Taiwan",
    Duration: "Nov 2023 - Dec 2023",
    DetailsContent: {
      image: LectureImage3,
      description:
        "Rhinoceros is a powerful tool in architectural design, leveraging NURBS" +
        " modeling to create and manipulate curved and complex geometries. Widely used in the" +
        " industry for visualising design concepts, it also integrates with Grasshopper and other" +
        " programming tools for heuristic parametric design processes. In this lecture, TsungWei introduced" +
        " basic Rhino commands, emphasising the differences between mesh, polygons, and NURBS modeling, and" +
        " demonstrated the workflow from curves to NURBS objects. The course materials apply architectural" +
        " practices, helping students effectively integrate these tools into their design projects.",
      materialLink: true,
      classMaterial:
        "https://docs.google.com/presentation/d/1ttnaMh05mzzSy3LtACrA4lhutlrgyekrzD5dikOgd3o/edit?usp=sharing",
    },
  },
  {
    Topic: "Grasshopper Lecture",
    Company: `Department of Architecture, NTUST`,
    Location: "Taipei, Taiwan",
    Duration: "Nov 2023",
    DetailsContent: {
      image: LectureImage4,
      description: [
        "This lecture, part of a design studio course, introduced college freshmen to digital" +
          " fabrication and parametric design. Students developed a pavilion using form-finding" +
          " processes in Grasshopper, identified neighbouring panels, and labelled them for efficient" +
          " assembly. By the end of the course, they used laser-cut corrugated board components to" +
          " complete the pavilion.",
        "TsungWei taught students how to use Grasshopper, incorporating the plugins Kangaroo and" +
          " NGons for the form-finding process and implementing collision detection to prevent assembly" +
          " overlaps. He guided students in reorienting panels on the XY plane for laser cutting and" +
          " highlighted the use of topology relationships to build label systems based on the mesh's" +
          " dual graph. The course effectively demonstrated how digital tools integrate with practical" +
          " architectural design and fabrication, offering students valuable hands-on experience for" +
          " real-world applications.",
      ],
      materialLink: true,
      classMaterial:
        "https://drive.google.com/file/d/1NPZHAKDq_J0xJ_O-zg24LL_SymPrsnPu/view?usp=sharing",
    },
  },
  {
    Topic: "3D printer Lecture",
    Company: `Department of Architecture, NUK`,
    Location: "Kaohsiung, Taiwan",
    Duration: "Sep 2017 - Jul 2020",
    DetailsContent: {
      image: LectureImage5,
      description:
        "TsungWei served as a part-time lecturer at NUK, teaching students from" +
        " various departments how to use FDM 3D printers. He also introduced basic modeling" +
        " skills with SketchUp, guiding students in creating small items like key charms and" +
        " magnet decorations. In advanced courses, students learned how to debug and fix printer" +
        " issues, gaining hands-on experience in operating and maintaining 3D printing equipment.",
      materialLink: false,
      classMaterial: "None",
    },
  },
];

// Publication
export const PublicationsDetails = {
  ConferenceAndJournalPapers: [
    {
      Name:
        "Tsung-Wei Cheng, Kevin Harsono, Yuxi Lui, Ching-Yen Chen, Shen-Guan Shih, Oliver Tessmann. (2024)." +
        " Beyond Babel: Towering With Minimal Communication. Proceedings of the IASS 2024 Symposium. International" +
        " Association for Shell and Spatial Structures (IASS 2024). Switzerland.",
      Link: "https://www.researchgate.net/publication/383818429_Beyond_Babel_Towering_With_Minimal_Communication",
    },
    {
      Name:
        "Felicia Wagiri, Shen-Guan Shih, Yu-Chuan Kao, Tsung-Wei Cheng, Mu-Kuan Lu. (2024)." +
        " Bending-active molds for pre-fabricated concrete shells. Proceedings of the IASS 2024 Symposium." +
        " Redefining the Art of Structural Design (IASS 2024). Switzerland.",
      Link: "https://www.researchgate.net/publication/384291461_Bending-active_molds_for_pre-fabricated_concrete_shells",
    },
    {
      Name:
        "Fatma Kayatekin, Felicia Wagiri, Tsung-Wei Cheng, Shen-Guan Shih (2024)." +
        " Hat Monotiles: Driving Innovation in Aperiodic Pattern Generation and Application." +
        " Nexus Network Journal. https://doi.org/10.1007/s00004-024-00795-8",
      Link: "https://www.researchgate.net/publication/383039499_Hat_Monotiles_Driving_Innovation_in_Aperiodic_Pattern_Generation_and_Application",
    },
    {
      Name:
        "Yuxi Liu, Boris Belousov, Tim Schneidern, Kevin Harsono, Tsung-Wei Cheng, Shen-Guan Shih, Oliver Tessman (2024)." +
        " Advancing Sustainable Construction: Discrete Modular Systems & Robotic Assembly." +
        " Sustainability 16(15):6678. https://doi.org/10.3390/su16156678",
      Link: "https://www.researchgate.net/publication/382906405_Advancing_Sustainable_Construction_Discrete_Modular_Systems_Robotic_Assembly",
    },
    {
      Name:
        "Kevin Harsono, Shen-Guan Shih, Ye Yint Aung, Felicia Wagiri, Tsung-Wei Cheng (2024)." +
        " RULE-BASED GENERATION OF INTERWOVEN ASSEMBLIES IN ARCHITECTURAL DESIGN: A COMPUTATIONAL APPROACH INTEGRATING ATTRIBUTE GRAMMAR." +
        " Conference: 29th International Conference on Computer-Aided Architectural Design Research in Asia (CAADRIA 2024). At: Singapore.",
      Link: "https://www.researchgate.net/publication/379961011_RULE-BASED_GENERATION_OF_INTERWOVEN_ASSEMBLIES_IN_ARCHITECTURAL_DESIGN_A_COMPUTATIONAL_APPROACH_INTEGRATING_ATTRIBUTE_GRAMMAR",
    },
    {
      Name:
        "Ye Yint.Aung, Shen-Guan Shih,Kevin Harsono,Tsung-Wei Cheng. (2024)." +
        " ON THE INFORMATION SCAPE OF SPACES. Conference: 29th International Conference " +
        " on Computer-Aided Architectural Design Research in Asia (CAADRIA 2024). At: Singapore.",
      Link: "https://www.researchgate.net/publication/379977834_ON_THE_INFORMATION_SCAPE_OF_SPACES",
    },
    {
      Name:
        "Felicia Wagiri, Shen-Guan Shih, Kevin Harsono, Tsung-Wei Cheng, Mu-Kuan Lu. (2023)." +
        " Exploration of Building Information Modeling and Integrated Project Cloud Service in early" +
        " architectural design stages." +
        " VITRUVIO - International Journal of Architectural Technology and Sustainability." +
        "https://doi.org/10.4995/vitruvio-ijats.2023.20453",
      Link: "https://www.researchgate.net/publication/376721500_Exploration_of_Building_Information_Modeling_and_Integrated_Project_Cloud_Service_in_early_architectural_design_stages",
    },
    {
      Name:
        "Cheng, T.W., Wu, B.R., Chiang, Y.T., Liao, C.T.  (2018)." +
        " The Study on Unlift of Exterior Tile in Nanzih District of Kaohsiung City" +
        " Processings of the 30th Annual Conference of the Architecture Institute of Taiwan",
      Link: "https://www.architw.org.tw/view_article.php?id=9458",
    },
  ],

  ThsisAndBooks: [
    {
      Name: "Tsung-Wei Cheng. (2022), Production Rules for the Arrangement of Osteomorphic Block.",
      Link: "https://hdl.handle.net/11296/33yrph",
    },
  ],
  ComingSoon: [
    {
      Name: "Kevin Harsono, Shen-Guan Shih, Tsung-Wei Cheng, Felicia Wagiri, Ye Yint Aung. Reducing Panel Complexity in Topological Interlocking Assemblies on Curved Surfaces.",
      Link: undefined,
    },
    {
      Name:
        "Kevin Harsono, Shen-Guan Shih, Felicia Wagiri, Ye Yint Aung, Tsung-Wei Cheng, William Alfred." +
        " Building for Tomorrow: Harnessing Topological Interlocking for Sustainable Reusable Building Component.",
      Link: undefined,
    },
    {
      Name:
        "Tsung-Wei Cheng, Felicia Wagiri, Kevin Harsono, Ching-Yen Cheng, Shen-Guan Shih." +
        " Procedural Design for Interwoven Structures using SL Blocks: A Computational Framework for Modular Architecture",
      Link: undefined,
    },
  ],
  Portfolio: [
    {
      Name: "Portfolio for My colleage design studio",
      Link: "https://issuu.com/182025/docs/_edit",
    },
    {
      Name: "作品集 (Portfolio for my sophomore design studio)",
      Link: "https://issuu.com/182025/docs/___",
    },
    {
      Name: "Specere",
      Link: "https://issuu.com/182025/docs/_-3_",
    },
  ],
};

// Enter your Project Details here
//Move to ProjectDetails.js

// Enter your Contact Details here
export const contactDetails = {
  email: "mike861104@gmail.com",
  phone: "+886 988388094",
};

//Move to Monologue.js
