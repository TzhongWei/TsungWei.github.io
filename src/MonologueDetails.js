import LLMvsArch from "./assets/Monologue/LLMvsArchitecture/LLMvsArchitecture.jpg";
import profile from "./assets/TestC(2).gif";
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
import Lax from "./assets/Latex.js";

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
      <Lax>G ::= a \, h \, h^n \, h \, a^2 \, h \, h^n \, h \, a</Lax>,
      "Within this grammar, the sequence h a² h acts as a return point, dividing the structure symmetrically. This segment, denoted as <Return>, serves as a pivotal point for reversing the sequence along the same path to maintain symmetry:",
      <Lax>{`G ::= a \\, h \\to h^n \\to \\text{<Return>} \\gets h^n \\gets h \\, a`}</Lax>,
      <Lax>{"\\text{<Return>} ::= h \\ a^2 \\ h"}</Lax>,
      "Additional branches can be inserted into the sequence to create more complex structures. A new branch (R) can be defined as:",
      <Lax>R ::= \, a \, h^m \, h \, a^2 \, h \, h^m \, a</Lax>,
      <p>
        here, again, we display <Lax>h \, a^2 \, h</Lax> as{" "}
        <Lax>{"<Return>"}</Lax>
      </p>,
      <Lax>{`R ::= a \\, h^m \\, \\text{<Return>} \\, h^m \\, a`}</Lax>,
      "This branch can appear at various points within the original grammar, resulting in complex, layered patterns. For instance:",
      <Lax>{`G' ::= a \\, h \\, R \\, h^n \\, \\text{<Return>} \\, h^{n-2} \\, h \\, a`}</Lax>,
      "When the sequence reaches R, the configuration temporarily shifts focus to complete R, before returning to the main structure. After the strand hits the <Return>, it goes backward along with the branching path. Then, channelling back to the main, the strand keep extending until hit the <Return> again. Finally, return the route and finish G.",
      " With the same concept, we try to insert to grammar turning as a recursion. The grammar, therefore, evolves further as more branches are introduced:",
      <Lax>{`G ::= a \\, h \\, R' \\, h^n \\, \\text{<Return>} \\, h^{n-2} \\, h \\, a`}</Lax>,
      <Lax>{`R' ::= a \\, h^m \\, R' \\, h \\, a^2 \\, h \\, h^{m-2} \\, a \\; | \\; R`}</Lax>,
      "This gradual addition of branches forms a recursive and branching architecture of stacking components.",
      "This hierarchical and recursive framework mirrors L-systems, where 'push and pop' operations allow for extending and retracting branches. Each branch functions as a sub-cluster within the system, contributing to a greater hierarchical structure. When visualised as a tree graph, the branches and nodes resemble the aggregation of architectural elements.",
      "This approach suggests that, despite the inherent complexity of architectural design, a structured path can be identified for expanding and organising components. Recursive rules and hierarchical aggregations allow architectural systems to grow coherently, resulting in a well-defined grammar that governs the entire architectural structure.",
      " Refer to Godel, Escher, Bach an Enternal Golden Braid, Shih, S.G.(2020) Grammar of Interlocking SL block ",
    ],
    OtherImages: [],
  },
  {
    title: "Tokens in LLM v.s Components in Architectural Languages",
    RepImage: LLMvsArch,
    abstract:
      "ChatGPT, powered by a Large Language Model (LLM), processes text by treating words as tokens" +
      " within a high-dimensional vector space. It predicts the next token by analysing semantic" +
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
      " The main image was generated by ChatGPT based on this content. Interesting.",
    ],
    OtherImages: [],
  },
  {
    title: "Minecraft: Basilica",
    RepImage: MC_Bacilica_1,
    abstract: (
      <p>
        I’ve finally completed a basilica on my Minecraft server, a project that
        took about one and a half months. I’m grateful to my friends who helped
        by providing many of the materials needed to bring this building to
        life. The idea for this project came from Meo-Meo, one of the server’s
        OPs, who pointed out that while I had built many complex and luxurious
        structures around the main city, I hadn’t yet constructed a significant
        building within it. Additionally, while I’d built two cathedrals and two
        churches, they were all located outside the city! There were no
        religious buildings in the main city itself, which he felt was a missed
        opportunity. So, he encouraged me to build a religious structure in the
        city “to please him.”
      </p>
    ),
    date: "10/11/2024",
    description: [
      <p>
        As previously mentioned, I began constructing the basilica in June.
        Since I was serving my military duty, I could only play the game on
        weekends. This building was inspired by St. Peter's Basilica in the
        Vatican. I was particularly amazed by the basilica in the Vatican,
        especially the spiral staircases between the layers inside its dome, so
        I decided to model a similar sanctuary. However, one thing puzzled me:
        what is the difference between a basilica and a cathedral? Nowadays,
        both building types are regarded as religious structures; a "cathedral"
        represents the seat of a bishop, while a basilica is viewed as the seat
        of the Pope. But what distinguishes the architectural styles of the two?
        The following are the answers from ChatGPT:
      </p>,
      <p>
        Function and Role <br />
        <br /> Cathedrals: <br />
        A cathedral is the principal church in a diocese, overseen by a bishop.
        Its most defining feature is the presence of the cathedra (bishop’s
        throne), symbolizing the bishop’s authority. Cathedrals often serve as
        central places for large congregations and important ceremonies.
        <br />
        Basilicas: <br />
        Originally a Roman architectural style, a basilica has a more formal
        designation in the church. It can be either a major basilica (usually
        designated by the Pope, with only four major basilicas, all in Rome) or
        a minor basilica. Basilicas are often pilgrimage sites and don’t require
        the presence of a bishop.
        <br />
        <br />
        Architectural Design
        <br />
        <br />
        Layout: <br />
        Cathedrals: <br />
        Cathedrals commonly follow a cruciform (cross-shaped) floor plan, with a
        long central nave and two arms forming a cross shape (transepts). A
        choir area and high altar are typically positioned near the intersection
        of the cross, emphasizing the central point. <br />
        Basilicas: <br />
        Traditional basilicas are rectangular, following the Roman basilica
        style, with a central nave flanked by aisles on either side. However,
        some Christian basilicas also have a cruciform layout, especially in
        larger or more recent constructions. <br />
        <br />
        Elevation and Ambience:
        <br />
        Cathedrals: <br />
        Gothic cathedrals, for example, are known for their high, pointed
        arches, ribbed vaults, and flying buttresses, creating a vertical,
        towering effect that symbolises reaching toward the heavens. They often
        include large stained-glass windows and intricate sculptures. <br />
        Basilicas: <br />
        Basilicas typically have a simpler, more open interior, with columns
        dividing the nave from the aisles and rounded arches. Their design
        prioritises processional movement, creating a sense of grandeur without
        as much vertical emphasis as cathedrals. <br />
        <br />
        Structural Features: <br />
        Cathedrals: <br />
        Often incorporate flying buttresses (in Gothic cathedrals) to counteract
        the lateral forces exerted by tall walls and vaults. This allows for
        taller and more elaborate structures. Towers or spires are also typical
        in cathedral designs, frequently placed at the front or at the crossing
        of the nave and transept. <br />
        Basilicas: <br />
        Use simpler structural systems, usually with a flat wooden or coffered
        ceiling in early basilicas or low-pitched roofs. Their structural
        approach reflects a more classical Roman style, relying on columns and
        arches for support. <br />
        <br />
        Decorative Elements: <br />
        Cathedrals: <br />
        Often highly ornate with elaborate facades, sculptures, and extensive
        stained-glass work, depicting Biblical stories and saints. <br />
        Basilicas: <br />
        Typically decorated with mosaics and frescoes, particularly in early
        Christian basilicas. The emphasis is on symbolic art rather than
        architectural embellishment. <br />
        <br />
        In summary, cathedrals are typically larger, taller, and structurally
        complex due to their symbolic importance and the need to accommodate
        large congregations, while basilicas focus on functional, processional
        spaces with classic architectural elements, emphasizing their historical
        and symbolic roles in the church.
      </p>,
      <p>
        At the beginning, we situated the building in the south-west part of the
        city, near Victoria Harbour, which consists of many medieval buildings.
        Moreover, since this building serves as the main religious
        representation on the server, it needed to be grand, luxurious,
        decorative, and magnificent, of course. However, the site was located on
        a hill; the landscape limited the building's size. Thanks to the absence
        of gravity in Minecraft, I used wool to outline the layout in the air
        and started to build the structural parts of the building.
      </p>,
      <p>
        Subsequently, since religious buildings are composed of many symmetries
        and symbolic architectural styles such as domes, I had to transform them
        into Minecraft, a voxel world. The statues and engravings in the
        interior were too detailed; they, therefore, couldn't be displayed in
        the game. Besides, during the construction, since I created the
        structure in the air, Meo-Meo was asking me how to resolve the suspended
        part in the map. He didn't like unphysical buildings on our server.
        Well, it was solved in the end.
      </p>,
      <p>
        The most challenging parts were the details and lighting in the game.
        The details involved placing stairs and circulation from the ground
        floor to the roof and even the top of the dome. The space was limited by
        the voxel blocks; providing enough space to walk was a significant
        difficulty for me, especially as I built in survival mode. I needed to
        consider material usage—I couldn't waste any—scaffolding, and so forth.
        Besides, the server's difficulty was set to 'hard', which brought a lot
        of zombies, skeletons, and creepers when I hadn't placed torches and
        lights. Many times, the building was damaged by the explosion of
        creepers. Due to using many luxurious materials, my friends and I had to
        mine and gather them from various places. Moreover, I also decorated the
        front façade of the basilica, which looks more detailed and solemn.
      </p>,
      <p>
        Finally, in November, I successfully finished the exterior parts of the
        building, including the square in front of it. Compared to St. Peter's
        Basilica, though they are quite similar, I reduced the inclination,
        angles, and curved elements in it. Moreover, to fill the stairs and
        rooms inside the structure, apart from the hull, the circulation was
        redesigned.
      </p>,
      <p>
        By the way, Meo-Meo said that in the future, we have to build the
        surroundings, since it now looks a bit tedious. Also, he loves the
        medieval buildings I made in another Minecraft server. He thus asked me
        if I could replicate them on our server. Ha, I guess there is no end to
        the construction journey on our server.
      </p>,
    ],
    OtherImages: [
      MC_Bacilica_2,
      MC_Bacilica_3,
      MC_Bacilica_4,
      MC_Bacilica_5,
      MC_Bacilica_6,
      MC_Bacilica_7,
      MC_Bacilica_8,
      MC_Bacilica_9,
    ],
  },
  {
    title:
      "Minecraft: Story of our server 1, Everything Starting at that night",
    RepImage: MinecraftST01,
    abstract: (
      <p>
        This section aims to introduce the story behind our server, focusing on
        the narrative of its buildings and urban planning. Minecraft, a globally
        renowned game with over 15 years of history, has evolved through
        numerous updates, each bringing new structures, adventures, and
        materials into the game. While some players prefer to start fresh with a
        new map after each update, others cherish the old buildings made with
        earlier materials as a testament to the server's history. As updates
        roll out and different players come and go, the server transforms. Some
        structures are erected, while others fall into disrepair or are removed.
        Each of these changes tells a story about the evolution of the server,
        reflecting the contributions and creativity of its community over time.
      </p>
    ),
    date: "20/11/2024",
    description: [
      <p>
        This server was established around 2022 by three server operators in
        survival mode set to the difficult difficulty level. Their initial
        intent was simple—to create a server where they could relax and have fun
        during their leisure time. They never anticipated that this map would
        endure for so long. Over time, their continuous efforts to construct and
        expand the world brought a variety of unique buildings and features into
        existence. What started as a modest project evolved into a complex and
        vibrant world as numerous small adjustments and contributions from
        various players accumulated into a significant transformation.
      </p>,
      <p>
        To capture the essence of this evolution, we will present a dialogue
        featuring key players on the server, including Mike_Cheng,
        DreadYapper7430 (one of the original server operators), and others.
        Through their conversations, we will uncover the stories behind the
        server's buildings, the motivations that inspired their construction,
        and the progression of urban planning within the map. This dialogue
        serves as a narrative snapshot, illustrating the journey of the server
        and celebrating the shared legacy of its players.
      </p>,
      <p>Everything Starting at the night</p>,
      <p>
        The story begins on a quiet evening, as Mike and DreadYapper7430 play
        together, reflecting on the history of their server. The two had just
        completed an enormous project—the Basilica, an awe-inspiring religious
        monument adorned with intricate decorations and fine details, standing
        proudly at the heart of the central city. This magnificent structure,
        the largest religious memorial on the server, symbolised not just their
        architectural ambitions but also the collaboration and dedication of the
        server’s players over time.{" "}
      </p>,
      <p>
        As the night deepened, their conversation drifted toward the origins of
        the server, the many projects that had shaped its landscape, and the
        countless stories etched into its blocks. The Basilica, now a towering
        testament to their creativity, sparked a sense of nostalgia for the
        journey that had brought them to this moment. Through their dialogue,
        the rich history of the server began to unfold, revealing the triumphs,
        challenges, and friendships that had emerged along the way.
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        Hi, Meow (Nickname for DreadYapper7430). Congratulations on passing your
        architectural license exam!
      </p>,
      <p>
        <strong>DreadYapper7430 :</strong>
        Haha! Thanks, Mike. How’s your latest project, the Basilica, coming
        along?
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        Oh, it’s going brilliantly! Actually, I just finished it this morning. I
        know I sent you some pictures of the exterior, but for me, a project
        isn’t truly “complete” until every detail is finished—the interiors,
        decorations, and clearing away all the leftover materials. Ha! Now, I
        can finally say it’s officially done.
      </p>,
      <p>
        <strong>DreadYapper7430 :</strong>
        Haha, with your high standards, a lot of my mining projects would still
        be considered “unfinished.” But you know me—I’m more focused on urban
        planning and the exteriors of buildings rather than the interiors.
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        Yeah, I know that! By the way, I’ve introduced a couple of new players
        to our server. They’re my students from the Minecraft lecture I
        teach—one of them is even an architecture student.
      </p>,
      <p>
        <strong>DreadYapper7430 :</strong>
        That’s fantastic! Where are they building? Have you given them the grand
        tour of our server?
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        Oh, absolutely. They were amazed by the sheer scale of the city. It took
        them about two hours just to explore everything, including the Memorial
        Hall (城市紀念館). They’ve chosen to build their site far to the north
        of the city, as they didn’t want to disrupt your carefully planned urban
        layout.
      </p>,
      <p>
        <strong>DreadYapper7430 :</strong>
        Well, it's fine. Everyone visits the server can leave any works here. I
        don't such care about wether they distory my urban plan except for some
        urban building regulations, you know right?
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        Yes, yes, I know. Don’t worry—I’ve already explained the rules to them.
      </p>,
      <p>
        <strong>DreadYapper7430 :</strong>
        By the way, would you like to know the story behind those urban
        regulations and how the city developed?
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        Yes, absolutely! I’d love to hear it.
      </p>,
      <p>
        <strong>DreadYapper7430 :</strong>
        Well, this server is actually the second one we’ve hosted using Aternos.
        My friends and I, who’ve known each other since high school, started it
        after our first server became far too chaotic. On the old server,
        buildings were placed randomly, and the whole place turned into a mess.
        It was exhausting to find resources or organise anything properly.
        Everything we built or fought for was based on the game’s default
        settings, but after a while, it all felt aimless and unfulfilling.{" "}
        <br />
        So, we decided to start fresh with this new world. This time, we wanted
        to create something more organised—a neat, small town with thoughtfully
        planned layouts. Our aim wasn’t just to play the game but to build
        something meaningful—a server that represents our shared memories and
        the collaborative effort we’ve put into creating a cohesive and
        structured world.
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        Oh, agree! Sandbox games can often feel aimless and lack focus,
        particularly without well-planned urban layouts or captivating
        architectural designs. Honestly, if this server didn’t have such a neat
        layout and stunning buildings, I doubt I would have stayed this long.
        But, compared to the other medieval-style buildings, museums, and the
        city hall, it can sometimes feel a bit cramped in places. By the way,
        why have you insisted on keeping that small, slightly out-of-place hut
        near the city hall? (The represented figure of this Monologue section)
      </p>,
      <p>
        <strong>DreadYapper7430 :</strong>
        Well, you see, when we first landed in this world, we had no resources
        at all. We had to quickly build a shelter to protect ourselves from
        mobs. That little hut holds a lot of sentimental value—it’s a reminder
        of how everything began. It was actually our very first building on the
        server! Back then, we even managed to capture a zombie villager and cure
        it. Now, it’s still there, encased in cobblestones, waiting for the day
        we start trading with it. Ha ha ha! (As you know, once cured, villagers
        offer extremely cheap trades between players.)
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        Haha, everyone’s done that kind of thing before! By the way, I remember
        there used to be a cobblestone bridge on top of the hut, extending to my
        sakura house. I noticed you deconstructed it a while ago, saying it was
        no longer functional and disrupted the skyline of the city. Now only the
        pier is left.
      </p>,
      <p>
        <strong>DreadYapper7430 :</strong>
        Oh, that bridge was actually built to transport villagers from the
        northern village. We used it to create a trade hall, which ended up
        being our fifth building. The second one was the sugarcane machine—if
        you consider that a building, of course.
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        Really? I thought the farming machine came later than the others. If it
        were me, I’d have probably prioritised building other types of farms
        first. It’s ironic, though, that it took us so long to solve the food
        issues. You know I’m an architect, not a farmer. I went through all our
        food storage while working on the basilica and never collected any food
        myself!
      </p>,
      <p>
        <strong>DreadYapper7430 :</strong>
        Haha, well, hunger has always been a recurring issue for us. Honestly,
        the sugarcane machine I mentioned doesn’t even look like its original
        version anymore.
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        Oh! Really?
      </p>,
      <p>
        <strong>DreadYapper7430 :</strong>
        Well...the only reason we built the sugarcane machine was that it was
        the only farming machine we knew how to construct at the time. The later
        buildings, like the watermelon and pumpkin farms, were added as part of
        our urban planning and façade integration efforts. These machines
        weren’t intended to provide food; they were primarily for producing
        resources to trade with villagers so we could enchant our armour and
        weapons.
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        So,... based on your sequence, the villager trading hall should’ve been
        the third or fourth building, right?
      </p>,
      <p>
        <strong>DreadYapper7430 :</strong>
        No, you’ve got that wrong. As I said, the sugarcane machine was built
        because it was all we knew how to make. Besides, the history of the
        trading hall is quite complex—I’ll explain that later.
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        Oh really! So, what were the third and fourth buildings?
      </p>,
      <p>
        <strong>DreadYapper7430 :</strong>
        The third building was the material hut, built by Su (HollowSuMu,
        another server operator). But it’s different from what you see now. Back
        then, it was much smaller. It was the first building where Su used log
        trapdoors on the roof and fence gates for decoration. This design
        approach heavily influenced our future building styles, including the
        farming and wool machines. Both of those were demolished to make way for
        the current city hall, as you know.
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        Yes, I remember seeing those machines when I first joined the server.
        But by then, neither of them worked anymore.
      </p>,
      <p>
        <strong>DreadYapper7430 :</strong>
        Exactly. Since they were broken and Su hadn’t fixed them for ages, I
        repurposed them into something else. Moving on to the fourth building,
        it’s the only contemporary-style structure on the server. We originally
        tried incorporating modern architectural styles into this server, as all
        the buildings in our previous server were medieval.
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        And what happened next?
      </p>,
      <p>
        <strong>DreadYapper7430 :</strong>
        Well, we realised pretty quickly that Minecraft’s building materials
        weren’t well-suited for modern architectural styles. So, we returned to
        medieval-style buildings—what you currently see on the server.
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        Including the five-story apartment?
      </p>,
      <p>
        <strong>DreadYapper7430 :</strong>
        Yes, although the fourth building took a long time to complete. A major
        event slowed progress—the iron golem farm machine.
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        What? Didn’t you transport villagers with the bridge?
      </p>,
      <p>
        <strong>DreadYapper7430 :</strong>
        Not that quickly. We needed minecarts and rails for transportation. You
        have to understand, before we even started building the iron golem farm
        machine, we were still quite optimistic. That was until we encountered
        the major challenges posed by the Caves & Cliffs update during that
        time.
      </p>,
    ],
    OtherImages: [MinecraftST02, MinecraftST03, MinecraftST04, MinecraftST05],
  },
  {
    title: "Minecraft: Story of our server 2, Update and Challenge",
    RepImage: MinecraftST11,
    abstract: (
      <p>
        In 2022, Minecraft introduced a major Caves & Cliffs update, which
        expanded the height of terrains, making natural landscapes even more
        majestic. However, the distribution of ore veins became more widespread,
        increasing the difficulty of obtaining certain types of minerals,
        especially iron ore. Iron ore, in particular, is a crucial resource in
        the early stages of the game, essential for crafting armour and weapons,
        which are vital early-game supplies. The increased difficulty in
        acquiring it has made the gameplay experience more challenging for
        players. Fortunately, an iron golem farm can provide an unlimited supply
        of iron ingots, effectively addressing this issue. As a result,
        constructing an iron golem farm becomes a priority in the early stages
        of the game.
      </p>
    ),
    date: "27/11/2024",
    description: [
      <p>
        In the evening, Mike_Cheng logged into the game. As he soared around the
        basilica with his elytra, he noticed DreadYapper7430 working on the
        construction of Victoria Harbour. Deciding to join in, he landed on the
        roof of a medieval building and placed his shulker box. From it, he
        retrieved a set of stone bricks and began building alongside the server
        operator.
      </p>,
      <p>
        As they continued constructing the town, their conversation began...
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        Hello there. How's going?
      </p>,
      <p>
        <strong>DreadYapper7430 :</strong>
        Brilliant! And you?
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        Not bad! By the way, it’s great to see that the eternally procrastinated
        project, Victoria Harbour, is finally moving forward. Ever since I
        joined the server, you’ve been mentioning plans to expand the town, and
        now it’s actually happening. Fascinating.
      </p>,
      <p>
        <strong>DreadYapper7430 :</strong>
        Well, yes. After seeing your basilica, I thought it was time to erect
        some buildings around it. Initially, we intended for the basilica to be
        at the centre of the city.
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>I see. Fair enough.
      </p>,
      <p>
        <strong>DreadYapper7430 :</strong>
        Oh, by the way, Su recently reminded me of something interesting—do you
        remember Sakura Island? He had some concerns about your island. That’s
        where we spent our first night when we entered this world. We slept
        there in a cave. I almost forgot about it, but Su clearly remembers. We
        were talking about writing the story of our server, and he brought it
        up. That makes your house something of a "site of injustice preservation
        (不義遺址)" now.
      </p>,
      <p>
        <strong>Mike_Cheng : (suddenly flies to Sakura Island) </strong>
        Wait, what? Bloody hell! Why would you stay there? Didn’t you build the
        first hut? I feel so uncomfortable now. What on earth is a "site of
        injustice preservation"?
      </p>,
      <p>
        <strong>DreadYapper7430 :</strong>
        Haha, you can Google it! Anyway, on our first day in this world, we
        stayed in a cave at about the same height as the cobblestone bridge.
        Back then, we were just trying to find a good landscape and an ideal
        spot for constructing our city.
      </p>,
      <p>
        <strong>Mike_Cheng : (flying back to the town)</strong>
        OMG. You’ve ruined it for me—my house doesn’t feel like a "virgin" space
        anymore! To be fair, I knew there was a cave above my cathedral, but
        when I built it, only the crafting table remained, and the rest of the
        cave was filled with stone. So, technically, it’s not the same place.
      </p>,
      <p>
        <strong>DreadYapper7430 :</strong>
        Well...okay, but we were definitely there first. I think we should put a
        tag there to mark it.
      </p>,
      <p>
        <strong>Mike_Cheng : (flying back to the town)</strong>
        What? Anyway, why did you move back?
      </p>,
      <p>
        <strong>DreadYapper7430 :</strong>
        We wanted to build an iron golem farm near the world origin to boost
        farming efficiency. That iron golem farm was probably the biggest
        challenge we faced back when we first landed in this world.
      </p>,
      <p>
        <strong>Mike_Cheng : </strong>
        Wait, what? It’s just an iron farm! If you found a nearby village, you
        could transport the villagers to the city centre and build a farm there.
        Sure, it takes some time to set up, especially early on when you don’t
        have enough resources for rails. Mining for materials initially can be
        time-consuming, but in my experience, it’s not that challenging once you
        have rails and minecarts ready. Although, I agree, sending those
        stubborn villagers can be annoying.
      </p>,
      <p>
        <strong>DreadYapper7430 :</strong>
        No, you didn't get it. Since the update, the distribution of ores has
        completely changed. Iron isn’t as easy to find as it used to be.
      </p>,
      <p>
        <strong>Mike_Cheng : </strong>
        What update? I haven’t noticed any changes.
      </p>,
      <p>
        <strong>DreadYapper7430 :</strong>
        You don’t know? The Caves & Cliffs update.
      </p>,
      <p>
        <strong>Mike_Cheng : </strong>
        Oh, right! Now it makes sense. So the server was set up after that
        update. Yeah, I recall how Minecraft expanded the caves and deepened the
        underground levels. That changed the ore distribution significantly. Did
        it impact your progress?
      </p>,
      <p>
        <strong>DreadYapper7430 :</strong>
        It definitely did. With the ore distribution spread across a wider
        range, iron became much harder to mine. Back then, we even sacrificed
        our armour to make rails. If we’d had an iron golem farm earlier, we
        wouldn’t have struggled so much with iron shortages.
      </p>,
      <p>
        <strong>Mike_Cheng : </strong>I see. So that’s why you prioritised
        building the iron farm before completing the villager trading hall.
      </p>,
      <p>
        <strong>DreadYapper7430 :</strong>
        Exactly. You have no idea how tragic it was. We spent all our resources
        on rails and had none left for other projects. Even the fourth building,
        which was supposed to be our second habitation, couldn’t be completed.
        We had to move back and live in the first hut again.
      </p>,
      <p>
        <strong>Mike_Cheng : </strong>
        Oh…wow. That sounds really rough.
      </p>,
      <p>
        <strong>DreadYapper7430 :</strong>
        It gets worse. Due to server settings, we couldn’t even use a rail
        duplicator. We had to mine every piece ourselves. It was bloody
        exhausting.
      </p>,
      <p>
        <strong>Mike_Cheng : </strong>
        Okay, but after gathering enough rails, you transported the villagers
        and completed the farm, right?
      </p>,
      <p>
        <strong>DreadYapper7430 :</strong>
        Not quite. We didn’t have enough rails, so we had to keep shifting them
        along the transport route.
      </p>,
      <p>
        <strong>Mike_Cheng : </strong>
        Haha, seriously? That’s ridiculous.
      </p>,
      <p>
        <strong>DreadYapper7430 :</strong>
        It gets even better—or worse, really. During the villager transport, we
        were hit with a Bad Omen event.
      </p>,
      <p>
        <strong>Mike_Cheng : </strong>
        Oh no! That sounds terrible.
      </p>,
      <p>
        <strong>DreadYapper7430 :</strong>
        Absolutely. It was a massacre. Half the villagers in the village were
        killed. And since the server difficulty was set to Hard, zombies could
        break doors. Only a few villagers survived our weak defences.
      </p>,
      <p>
        <strong>Mike_Cheng : </strong>
        Haha, yeah, with your barely-there armour!
      </p>,
      <p>
        <strong>DreadYapper7430 :</strong>
        Exactly. We laid about twenty chunks of rails, reaching near Sakura
        Island, and realised we still didn’t have enough iron. So, we divided
        tasks: one person protected the villagers, another mined iron to make up
        the rail shortage, and the last one removed and reinstalled the rails
        along the new path. Eventually, we completed the iron golem farm.
      </p>,
      <p>
        <strong>Mike_Cheng : </strong>
        Wow, that’s quite an accomplishment.
      </p>,
      <p>
        <strong>DreadYapper7430 :</strong>
        Yeah... and the fourth hut still wasn’t finished during that time.
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        What the hell! I can’t believe you went through all that! It sounds like
        the entire server was in chaos just to get one iron farm running. Haha.
        So, what happened after all that?
      </p>,
      <p>
        <strong>DreadYapper7430 :</strong>
        Well, once we finally got the iron farm running, things got a lot
        smoother. Iron wasn’t a problem anymore, and we could actually start
        focusing on other builds. But of course, the backlog of unfinished
        projects started piling up. By the way, did you know the current iron
        farm isn’t in the same location as the original one?
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        Of course, I was the one who replaced it! I remember the first farm was
        somewhere between the map and where the city hall is now. Back then, the
        city hall didn’t exist—there were just other farms, like the wheat and
        wool farms.
      </p>,
      <p>
        <strong>DreadYapper7430 :</strong>
        Exactly, and creating a better entrance for newcomers was the main
        reason I decided to move it.
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>I get it now. I thought it was because you
        needed the space for the city hall. Plus, the iron farm didn’t really
        match the aesthetic of the other buildings.
      </p>,
      <p>
        <strong>DreadYapper7430 :</strong>
        That’s partly true, but the main reason was to improve the spirit of the
        field for new players.
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        Wasn’t the original iron farm built by Su?
      </p>,
      <p>
        <strong>DreadYapper7430 :</strong>
        That’s right. He built it himself, and I think it was his third time
        building one.
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        His third time? Do you mean across different servers?
      </p>,
      <p>
        <strong>DreadYapper7430 :</strong>
        Exactly!
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        Were there any interesting stories behind his constructions?
      </p>,
      <p>
        <strong>DreadYapper7430 :</strong>
        As far as I know, he built them all on his own. By the time I logged
        into the server, he’d already completed it. Su is the kind of guy who
        quietly gathers all the resources during the early stages. Honestly,
        before you joined us, about 90% of the diamonds mined on the server were
        his.
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        And after I joined?
      </p>,
      <p>
        <strong>DreadYapper7430 :</strong>
        He kept 10%. You took 89%, and I’m left with 1%.
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        Haha, no! I’m 87%, and the rest is yours. (The number 87 sounds like
        "idiot" in Chinese, making it a playful jab.)
      </p>,
      <p>
        <strong>DreadYapper7430 :</strong>
        Meanwhile, Xiang was managing the food resources.
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        Who's Xiang? Another operator?
      </p>,
      <p>
        <strong>DreadYapper7430 :</strong>
        Oh, in the game, we call him Pin. He built the semi-automatic farm in
        the square in front of the city hall.
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>I see, that explains why the server’s name
        is SuPinEgg. You’re the “Egg.” But why are you called “Egg”?
      </p>,
      <p>
        <strong>DreadYapper7430 :</strong>
        Well, that used to be my nickname. It wasn’t until recently, when I got
        pet cats, that my nickname changed to “Meow.”
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        Okay~~. Back to the topic. What about your second resident hut, the
        fourth building? And what about the furnaces, the nether portal, and the
        enchantment book hut?
      </p>,
      <p>
        <strong>DreadYapper7430 :</strong>
        Oh, those came much later compared to that period. They’re stories for
        another time.
      </p>,
    ],
    OtherImages: [
      MinecraftST12,
      MinecraftST16,
      MinecraftST14,
      MinecraftST17,
      MinecraftST15,
      MinecraftST18,
      MinecraftST13,
    ],
  },
  {
    title: "Minecraft: Story of our server 3, New town!!! New Constructions!!!",
    RepImage: MinecraftST25,
    abstract: (
      <p>
        Minecraft allows players to host multiplayer games through online
        servers, creating spaces for diverse players to connect and share
        creativity. These servers are vibrant hubs where ideas become reality,
        allowing players to explore architectural styles from medieval to
        futuristic, fostering creativity by building complex structures or
        experimenting with design elements. Starting with three members, the
        server has grown to over ten participants, each contributing unique
        skills and perspectives. Members collaborate on large projects, create
        themed regions, and blend personal visions with collective goals. More
        than just a game, the server has evolved into a shared virtual space for
        expression and collaboration. Dynamic idea exchanges enhance diversity
        and foster friendships, making the server an inspiring blend of
        creativity, innovation, and teamwork.
      </p>
    ),
    date: "04/12/2024",
    description: [
      <p>
        Meow wasn’t active in the server this week as he had gone abroad.
        Therefore, the focus of this week’s story shifts to the new town,
        centring on the experiences of Mike_Cheng and the newcomers, led by
        Lang_Chuan, a student from Mike_Cheng’s class. Lang_Chuan’s team decided
        to establish their own settlement and stories in the northern region,
        far from the main city.
      </p>,
      <p>
        In the early days, when Lang_Chuan and his friends just joined the
        server, the Basilica had just completed its facade construction, and
        work was beginning on the interior decoration. They explored the server
        for about two hours, taking numerous screenshots of the cities,
        marveling at the intricate designs and long-standing builds. However,
        their initial excitement quickly turned into desperation as they
        struggled to find food resources.
      </p>,
      <p>
        With their hunger levels dangerously low, they stumbled upon a village
        in Gaudí Village, located to the north near the city. There, they traded
        with the villagers for food, resolving their immediate survival needs.
        Inspired by the beauty of the two-year-old server and the challenges
        they had just overcome, the group decided to carve out their own legacy.
      </p>,
      <p>
        Setting their sights on a distant northern region, far beyond the
        current activity ring and devoid of any prior construction, they claimed
        a patch of untamed land. It was there, amidst the wilderness, that they
        began to realise their vision of a new branch within the server’s world,
        marking the start of their ambitious dream.
      </p>,
      <p>
        One day, Mike_Cheng logged into the server and noticed Lang_Chuan was
        online. After exchanging greetings, Mike_Cheng invited Lang_Chuan to
        join a discussion about their town's design. During the conversation, he
        asked if Lang_Chuan could assist him with a few tasks. To get started,
        Mike_Cheng called Lang_Chuan and his friend to fly over to the newcomer
        spawn point, where they could begin planning and coordinating their
        efforts.
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        Here we are. A new project is finally underway after being delayed for
        such a long time.
      </p>,
      <p>
        <strong>Lang_Chuan :</strong>
        Okay. So, what is it? (Approaching a newly constructed building made of
        deepslate and smooth quartz blocks.)
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        Do you remember I mentioned building a network to link the cities and
        towns?
      </p>,
      <p>
        <strong>Lang_Chuan :</strong>
        Yes, I remember. The materials are still being prepared. I’ve placed
        torches along the coast from my town to Gaudí Village. Have I shown you
        before?
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>I know. Last week, you presented your plan,
        and it was fantastic. But now, let me introduce this new building—the
        MRT station.
      </p>,
      <p>
        <strong>Lang_Chuan :</strong>
        Oh, I see. (Walking into the building.) It’s quite deep, with water
        elevators for transport.
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        Yes. (Following Lang_Chuan and his friend.) This building is still under
        construction and hasn’t been updated on the server map. I’m planning for
        this underground network to connect your town and Gaudí Village.
        Actually, the traffic network was part of my original plan, and I hope
        you’ll follow it.
      </p>,
      <p>
        <strong>Lang_Chuan :</strong>Got it.
      </p>,
      <p>
        <strong>Benny_houtz :</strong> (Facing north in the underground level.)
        This direction works well for us. So, we’ll dig a tunnel from here to
        our town, right? It aligns perfectly with just a slight adjustment.
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        Exactly. However, you can design your own tunnel differently from mine.
        I’ll link it to Gaudí Village, and you can simply connect to it.
      </p>,
      <p>
        <strong>Lang_Chuan :</strong> Understood.
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        By the way, the station’s exterior should be a modern-style
        building—that’s the only thing I’m particular about.
      </p>,
      <p>
        <strong>Lang_Chuan :</strong> Modern building. Fine by us.
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        The reason I insist on modern style is that Meow believes Minecraft
        materials are more suited for medieval designs. But I’ve built modern
        structures before, and I’ve seen many stunning modern buildings on
        YouTube. I’d like to surprise him with a series of modern designs. Have
        you built modern-style structures before?
      </p>,
      <p>
        <strong>Lang_Chuan :</strong>
        Yes, we’ve done it several times on other servers.
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        Brilliant. Now, back to the surface. Meow and I have another project
        that I’d like to offer to you. If we wait for him to start building, it
        might take ages, and even then, there’s a slim chance he’ll have time
        after finishing his urban planning.
      </p>,
      <p>
        <strong>Lang_Chuan :</strong>
        Haha, I see. So, what is it?
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>I’m sure you’ve noticed that the map at the
        spawn point isn’t large enough to include all players’ buildings,
        especially yours. Since I joined, Meow has been asking for help
        recording the city’s growth and the server’s changes. You’ve visited our
        city memorial hall, right? The server’s history is illustrated with maps
        posted in the hall.
      </p>,
      <p>
        <strong>Lang_Chuan :</strong>
        Haha, yes, we noticed. Our town is so far away that it’s difficult to
        create maps linking to yours. You even placed a separate board for it.
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        Exactly! Because so many buildings are scattered around the main city, I
        considered creating maps linking to each player’s home. But that would
        leave many blank maps with just forests and rivers. Moreover, I’ve had
        to resize the board to fit everything onto a larger panel. Initially,
        this was Meow’s job, but I’ve been building so quickly that when he logs
        in, he often misses recording updates. I’ve put all the new updates in a
        chest, waiting to be posted in the memorial hall. We’ve also discussed
        building a hall or container to house this large map, making the spawn
        area tidier.
      </p>,
      <p>
        <strong>Lang_Chuan :</strong> I see. Do you have any ideas for it?
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>Not really. But I reckon the map should be
        placed on the ground to make updates easier.
      </p>,
      <p>
        <strong>Lang_Chuan :</strong>Agreed. We could use glass as a protective
        layer. Hmm... I might design an open building for it since the map will
        likely expand as we explore more areas.
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        Sounds good. But perhaps we could create chambers to highlight different
        towns and reduce redundant blank maps. However, that might compromise
        the topological relationships between the towns. And don’t forget the
        first hut—it must remain unchanged.
      </p>,
      <p>
        <strong>Lang_Chuan :</strong>
        Oh, I see. That’s the first building on the server, isn’t it? We just
        found out. Honestly, we didn’t understand its significance before. Haha.
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        Yes, the server operators lived there when the server first started.
      </p>,
      <p>
        <strong>Lang_Chuan :</strong>Got it. We’ll build it.
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        Fantastic.
      </p>,
      <p>
        After their discussion, Lang_Chuan, Mike_Cheng, and Benny_Houtz flew
        back to their town.
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        Wow, you’ve built so many structures here. You’re true experts at
        farming machines.
      </p>,
      <p>
        <strong>Lang_Chuan :</strong>
        Haha. We’ve built them on every server we’ve played on.
      </p>,
      <p>
        <strong>Benny_houtz :</strong>
        Yes, and we’ve solved the hunger problem too.
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        Haha, that’s great! Sorry about last time. I was so focused on building
        that I didn’t even notice the food situation.
      </p>,
      <p>
        <strong>Benny_houtz :</strong>
        That’s fine. But you should trade with the villager here. This one,
        named "All-You-Can-Eat Soup," sells suspicious stew that fully restores
        your hunger and health.
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        Oh, really? I didn’t know Minecraft had that! I’ve always been so
        focused on architecture. By the way, have you decided on a name for your
        town and what it will look like?
      </p>,
      <p>
        <strong>Benny_houtz :</strong>
        Well, we haven’t made a final decision yet. What about "No Longer Hungry
        Village"(不餓村)? Haha.
      </p>,
      <p>
        <strong>Lang_Chuan :</strong> Haha, interesting. But let me think it
        over.
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        Take your time.
      </p>,
      <p>
        <strong>Lang_Chuan :</strong> By the way, we’ve decided to build a
        Japanese-style city here.
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        Fantastic.
      </p>,
      <p>
        <strong>Lang_Chuan :</strong>
        But the current buildings on this peninsula will be demolished once we
        gather enough materials.
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        Oh, really?
      </p>,
      <p>
        <strong>Lang_Chuan :</strong>
        Yes, including the villager trading house and the iron golem farm.
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        Don’t you feel it’s a pity to demolish them?
      </p>,
      <p>
        <strong>Lang_Chuan :</strong>
        Not at all. These farms and machines were just preparations for our
        design.
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>I see. Fortunately, I’ve recorded them on
        the map so we can remember the effort that went into them before the
        masterpiece was built. I’ve updated your new configurations on the map
        and archived the old ones.
      </p>,
      <p>
        <strong>Lang_Chuan :</strong>
        Haha, thanks for that. By the way, can resource duplicators work on this
        server?
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        No, Meow mentioned they tried before, but none worked. Why do you ask?
      </p>,
      <p>
        <strong>Lang_Chuan :</strong>
        We wanted to build a stone machine and a log machine that use TNT
        duplication to collect resources.
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        Ah, I see. Unfortunately, that’s not an option here.
      </p>,
      <p>
        <strong>Lang_Chuan :</strong>
        Well, okay then. It seems those TNT machines won’t work here. We’ve
        already tried more than twenty times.
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        Wow, that’s such a shame. You should have asked Meow about it.
      </p>,
      <p>
        <strong>Lang_Chuan :</strong>
        It’s fine. No worries.
      </p>,
      <p>
        <strong>Mike_Cheng :</strong>
        Alright then. I think I’d better get back to working on the MRT station.
      </p>,
      <p>
        <strong>Lang_Chuan :</strong>
        Okay, see you later.
      </p>,
    ],
    OtherImages: [
      MinecraftST22,
      MinecraftST23,
      MinecraftST24,
      MinecraftST21,
      MinecraftST26,
    ],
  },
];
