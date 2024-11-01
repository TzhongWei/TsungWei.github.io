// Enter all your detials in this file
// Logo images
import logogradient from "./assets/SmallC.png";
import logo from "./assets/SmallC.png";
import logoInvert from "./assets/SmallCInvert.png";
// Profile Image
import profile from "./assets/TestC(2).gif";
import InvertProfile from "./assets/TestCInvert.gif";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

import LectureImage1 from "./assets/LectureImage/Minecraft.jpg";
import LectureImage2 from "./assets/LectureImage/Lego.jpg";
import LectureImage3 from "./assets/LectureImage/RhinoAdvance_1.png";
import LectureImage4 from "./assets/LectureImage/Grasshopper_Lecture_1.jpg";
import LectureImage5 from "./assets/LectureImage/3D_Printing.jpg";

import RepImage_1 from "./assets/TestC(2).gif";

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
      " He also interned at Gobel Reengineering Company for three years, focusing on optimising UHPC facade panels" +
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
  github: "https://www.github.com/",
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
    Position: "Internship",
    Company: `Gobel Reengineering Company Ltd.`,
    Location: "Yilan, Taiwan",
    Type: "Internship",
    Duration: "Jul 2021 - Jul 2024",
  },
  {
    Position: "Project Assitant of Topological Interlocking System",
    Company: `GAS Lab, Department of Architecture, NTUST`,
    Location: "Taipei, Taiwan",
    Type: "Full Time",
    Duration: "Jul 2021 - Jul 2022",
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
      description: "Comming Soon",
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
      classMaterial: "123",
    },
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

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
        "Wu, B.R., Liao, C.T., Cheng, T.W., Chiang, Y.T. (2018)." +
        " Investigation and Study on the Deterioration of Wall Tiles with Raised Patterns in Nanzih District, Kaohsiung City." +
        " Processings of the 30th Annual Conference of the Architecture Institute of Taiwan",
      Link: undefined,
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
export const projectDetails = [
  {
    title: "My Personal Website",
    image: projectImage1,
    description: [
      `This is the first project for setting up my personal website, which emcompasses several pages;"+
      " About is related to my personal experience, eduction and lectures. Publication showing myfriend"+
      " with me and my history published papers. Project lists all the undergoing or complete schemes."+
      " Monologue places my ideas or concepts. Then, the resume (undergoning) will put my CV.`,
      "The project was a template downloaded from github. Thanks to Paven MG, whose link is located below" +
        " this description. Based on his template, I did some adjustments especially focus on the Publications," +
        " Projects, and a novel page Monologue. I applied a similar format from 'work' to list my papers.",
    ],
    links: ["https://google.com"],
    imgs: [projectImage1, projectImage2],
    appendix: [
      <p key="1">
        <strong>Tech</strong> <br /> Javascript, HTML, CSS, npm, Node.js
      </p>,
    ],
  },
  {
    title: "Project title 2",
    image: projectImage2,
    description: [
      `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    ],
    links: ["https://google.com"],
    imgs: [projectImage1, projectImage2],
    appendix: [
      <p key="1">
        <strong>123</strong> <br /> National Taiwan University of Science and
        Technology
      </p>,
      <p key="2">
        <strong>456</strong> <br /> National Taiwan University of Science and
        Technology
      </p>,
    ],
  },
  {
    title: "Project title 3",
    image: projectImage3,
    description: [
      `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    ],
    links: ["https://google.com"],
    imgs: [projectImage1, projectImage2],
    appendix: [
      <p key="1">
        <strong>123</strong> <br /> National Taiwan University of Science and
        Technology
      </p>,
      <p key="2">
        <strong>456</strong> <br /> National Taiwan University of Science and
        Technology
      </p>,
    ],
  },
  {
    title: "Project title 4",
    image: projectImage4,
    description: [
      `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    ],
    links: ["https://google.com"],
    imgs: [projectImage1, projectImage2],
    appendix: [
      <p key="1">
        <strong>123</strong> <br /> National Taiwan University of Science and
        Technology
      </p>,
      <p key="2">
        <strong>456</strong> <br /> National Taiwan University of Science and
        Technology
      </p>,
    ],
  },
  {
    title: "Project title 5",
    image: projectImage5,
    description: [
      `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    ],
    links: ["https://google.com"],
    imgs: [projectImage1, projectImage2],
    appendix: [
      <p key="1">
        <strong>123</strong> <br /> National Taiwan University of Science and
        Technology
      </p>,
      <p key="2">
        <strong>456</strong> <br /> National Taiwan University of Science and
        Technology
      </p>,
    ],
  },
  {
    title: "Project title 6",
    image: projectImage6,
    description: [
      `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    ],
    links: ["https://google.com"],
    imgs: [projectImage1, projectImage2],
    appendix: [
      <p key="1">
        <strong>123</strong> <br /> National Taiwan University of Science and
        Technology
      </p>,
      <p key="2">
        <strong>456</strong> <br /> National Taiwan University of Science and
        Technology
      </p>,
    ],
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "mike861104@gmail.com",
  phone: "+886 988388094",
};

export const MonologueDetails = [
  {
    title:
      "C the grammar of stacking. How's the stacking influences blocks permutation.",
    RepImage: profile,
    abstract:
      "The stacking of languages deeply impacts modern programming languages. It influences semantic" +
      " order and reveals hierarchical structures. This section explore what I consider when doing SL-block strands" +
      " project. SL block closed chain construction can be achieved through stacking." +
      " Interestingly, when other branches insert into the SL block chain, it would still back to the branching location.",
    date: "24/10/2024",
    description: [
      "In the chapter “Little Harmonic Labyrinth” from Gödel, Escher, Bach: An Eternal Golden Braid, the interactions among Achilles, the Genie, meta-Genie, and higher-level meta-Genies showcase a recursive, hierarchical process. For a meta-wish to be fulfilled, approval must move up through successive levels, with each Genie requiring permission from its superior. This approval then cascades back down through the same levels, forming a stacking sequence. Each Genie remains in a passive state until it receives confirmation from a superior, only then being able to proceed. This recursive interaction reflects the concepts of nested operations found in recursion and repetition systems.",
      "The same recursive logic applies to the construction of SL block chains through grammar. The linear structure of the grammar (G) begins with:",
      "G ::= a h h^n h a^2 h h^n h a",
      "Within this grammar, the sequence h a² h acts as a return point, dividing the structure symmetrically. This segment, denoted as <Return>, serves as a pivotal point for reversing the sequence along the same path to maintain symmetry:",
      "G ::= a h -> h^n -> <Return> <- h^n <- h a",
      "<Return> ::= h a^2 h",
      "Additional branches can be inserted into the sequence to create more complex structures. A new branch (R) can be defined as:",
      "R ::= a h^m h a^2 h h^m a",
      "here, again we display h a^2 h as <Return>",
      "R ::= a h^m <Return> h^m a",
      "This branch can appear at various points within the original grammar, resulting in complex, layered patterns. For instance:",
      "G' ::= a h R h^n <Return> h^(n-2) h a",
      "When the sequence reaches R, the configuration temporarily shifts focus to complete R, before returning to the main structure. After the strand hits the <Return>, it goes backward along with the branching path. Then, channelling back to the main, the strand keep extending until hit the <Return> again. Finally, return the route and finish G.",
      " With the same concept, we try to insert to grammar turning as a recursion. The grammar, therefore, evolves further as more branches are introduced:",
      "G ::= a h R' h^n <Return> h^(n-2) h a",
      "R' ::= a h^m R' h a^2 h h^(m-2) a | R",
      "This gradual addition of branches forms a recursive and branching architecture of stacking components.",
      "This hierarchical and recursive framework mirrors L-systems, where 'push and pop' operations allow for extending and retracting branches. Each branch functions as a sub-cluster within the system, contributing to a greater hierarchical structure. When visualised as a tree graph, the branches and nodes resemble the aggregation of architectural elements.",
      "This approach suggests that, despite the inherent complexity of architectural design, a structured path can be identified for expanding and organising components. Recursive rules and hierarchical aggregations allow architectural systems to grow coherently, resulting in a well-defined grammar that governs the entire architectural structure.",
      " Refer to Godel, Escher, Bach an Enternal Golden Braid, Shih, S.G.(2020) Grammar of Interlocking SL block ",
    ],
    OtherImages: [
      projectImage1,
      projectImage2,
      projectImage3,
      projectImage4,
      projectImage1,
      projectImage2,
    ],
  },
  {
    title: "Tokens in LLM v.s Components in Architectural Languages",
    RepImage: projectImage1,
    abstract:
      "ChatGPT, powered by a Large Language Model (LLM), processes text by treating words as tokens" +
      " within a high-dimensional vector space. It predicts the next token by analyzing semantic" +
      " similarity and vector proximity, resolving ambiguity in meaning. This approach resembles" +
      " design thinking, where navigating ambiguity is key. Thus, a comparison between LLM tokens" +
      " and components in architectural languages can provide insights into both fields.",
    date: "26/10/2024",
    description: [
      "ChatGPT is increasingly recognised not only as a powerful tool in AI research but also as a valuable" +
        " asset in architectural studies. At its core is the Large Language Model (LLM), which specialises in" +
        " processing human language. Unlike Convolutional Neural Networks (CNNs), which are adept at image-related" +
        " tasks, LLMs operate by tokenising text—breaking sentences into discrete tokens, such as words or sub-words," +
        " which are mapped into a high-dimensional vector space. The relationships between these tokens are" +
        " shaped by their semantic proximity to one another, with neighboring tokens influencing the interpretation.",
      "The primary task of an LLM is to predict the next token in a sequence by calculating the vector" +
        " distance between tokens and finding the most semantically probable outcome based on patterns within the" +
        " data. This method allows the model to manage ambiguities and interpret words with multiple meanings by" +
        " considering the context, much like humans do in language processing.",
      "This approach parallels design thinking in architecture, where architects break down a project into" +
        " individual components and explore how these elements relate within a broader framework. Both processes" +
        " require contextual interpretation and the ability to navigate through ambiguous information, drawing" +
        " out meaning from complex structures.",
      "Back to the 1960s, Noam Chomsky proposed the Chomsky Hierarchy to explain the structure and semantics" +
        " of languages. This framework became a cornerstone of computer science, particularly in the development" +
        " of programming languages. For computers to parse text, the input must be unambiguous and grammatically" +
        " correct, or the compiler will fail. Yeap, we all agree with it. This strict requirement for context-free" +
        " grammar (CFG) ensures consistency in computer languages but also reveals limitations when dealing with" +
        " more complex inputs, such as floating-point numbers or strings like AⁿBⁿCⁿ.",
      "Design processes often face similar challenges, where context semantic is essential for correct" +
        " interpretation. Computational linguists introduced attribute grammars to handle more advanced language" +
        " parsing, enabling computers to attach meaning to tokens based on contextual rules. What about architectural" +
        " design? the context in the space can be more complex.",
      "Let's talk about Human languages first. Human languages are inherently more complex than computer" +
        " languages, as their semantics rely heavily on context and background knowledge. While grammars help" +
        " deconstruct sentences, the meaning of words can shift depending on their use. For example, the phrase" +
        " 'I saw you with a telescope' can be interpreted in multiple ways:",
      "[I saw [you [with a telescope]]] (You were using the telescope)",
      "[I saw [you] with a telescope] (I used the telescope to see you)",
      "Without further context, the true meaning remains unclear. Adding more information—such as 'When I went" +
        " hiking and brought my telescope, I saw you with it'—guides interpretation toward one specific meaning." +
        " Similarly, architectural components need contextual input to determine how they fit within a design.",
      "While grammar governs the structure of sentences, topology plays a key role in architectural design. In" +
        " design, the focus is not solely on the shapes or forms of components but on their topological" +
        " relationships—how elements interact and connect within a system. These configurations are influenced" +
        " by site conditions, environmental factors, and design intent, making them highly contextual.",
      "Although there are rational patterns within architecture, the arrangement of components exceeds what" +
        " can be explained by simple grammatical rules. Concepts like figure-ground relationships provide a" +
        " framework for understanding how spaces are defined, but designers must also search for solutions" +
        " within physical constraints, which limits their choices. Each design decision represents a narrowing" +
        "of options, with the final outcome reflecting a process of elimination and refinement.",
      "Given these parallels between tokens in LLMs and components in architectural design, it is possible" +
        " to develop predictive models for design. Just as LLMs predict the most likely next token, design models" +
        " could predict the next component based on design patterns and constraints. These models could help" +
        " architects build personalised design libraries, reflecting their design preferences and facilitating" +
        " the exploration of new ideas.",
      "Predictive models could also assist in error detection, identifying design flaws early by cross-referencing" +
        " with large databases. These systems would provide architects with recommendations based on initial design" +
        " inputs, enabling more efficient workflows. By integrating these tools into the design process, architects" +
        " can reduce costs and make more informed decisions.",
      "In the field of AI, understanding space and geometry remains a challenge. AI models process data as numerical" +
        " inputs, but translating those numbers into spatial configurations is non-trivial. While AI systems can" +
        " generate outputs based on input vectors, spatial relationships and topologies require deeper understanding." +
        " For instance, collision detection and geometric arrangements are complex tasks for AI.",
      "To address this, a Large Architectural Component model library could be developed. In such a system," +
        " matrices would represent topological relationships, allowing transformations and placements of components" +
        " to be treated as basic operations—analogous to vocabulary tokens in LLMs. The model would predict the most" +
        " probable transformation for a block’s location, helping architects optimise designs. Future research could" +
        " also explore geometric symmetries within these models to enhance design precision.",
      "In summary, the parallels between LLMs and architectural design offer exciting opportunities for AI-aided" +
        " design. By applying predictive models similar to those used in language processing, architects can streamline" +
        " their workflows, reduce design errors, and explore creative possibilities. AI-aided tools can nurture design" +
        " ideas, enabling architects to produce more thoughtful and efficient designs.",
      "Although AI still faces challenges in understanding spatial relationships, using topological models and" +
        " predictive design libraries can bridge the gap. As these technologies advance, they will provide architects" +
        " with better tools to integrate ideas, improve processes, and reduce costs, ultimately resulting in more" +
        " innovative and practical architectural solutions.",
    ],
    OtherImages: [
      projectImage1,
      projectImage2,
      projectImage2,
      projectImage1,
      projectImage2,
      projectImage2,
    ],
  },
];
