var faker = require('faker');

module.exports = {
  about: {
    avatar: {
      src: '/img/my_avatar.png',
      alt: 'avatar',
    },
    title: 'Very special, very unique blog about superheroes and unicors',
    description: '<p>Time of amazing stories has come. BUCKLE UP!</p>',
  },
  items: [
    {
      id: '1',
      image: {
        src: '/img/iron_man.jpg',
        alt: 'Iron Man',
      },
      meta: {
        author: faker.name.findName(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
        likeCount: faker.random.number({ min: 7, max: 42 }),
      },
      title: 'Civil War Characters. Iron Man.',
      note: 'The leader of a faction of Avengers in support of regulation; a self-described genius, billionaire, playboy, and philanthropist with electromechanical suits of armor of his own invention. Anthony Russo said that Stark\'s egomania allowed the writers "to bring him to a point in his life where he was willing to submit to an authority, where he felt it was the right thing to do." Joe Russo added that because of the visions Stark saw in Age of Ultron, he now has a guilt complex which "drives him to make very specific decisions," calling his emotional arc "very complicated". Downey\'s personal trainer Eric Oram stated that the trick to pitting Rogers against Stark, "is to show Iron Man using the "minimum force" necessary to win the fight". Marvel initially wanted Downey\'s part to be smaller, but "Downey wanted Stark to have a more substantial role in the film\'s plot." Variety noted that Downey would receive $40 million plus backend for his participation, as well as an additional payout if the film outperformed The Winter Soldier, as Marvel would attribute that success to Downey\'s presence.',
      description: '<p>Anthony "Tony" Stark was born to Howard Anthony Stark and Maria Collins Carbonell Stark, owners of the prominent US firm, Stark Industries. As a boy, Tony was fascinated with building and controlling machines. At the age of 15 Tony entered the undergraduate electrical engineering program at the Massachusetts Institute of Technology (MIT), and graduated with two master’s degrees by age 19. Tony went to work for Stark Industries, but showed more interest in living a reckless playboy lifestyle than using his engineering skills. At the age of 21, Tony inherited Stark Enterprises when his parents were killed in a car accident secretly orchestrated by rival corporation Republic Oil (later ROXXON). Still lacking in business acumen, Tony promoted secretary Virginia "Pepper" Potts to be his executive assistant and left the majority of his workload on her so that he could avoid what he saw as a burden.</p><p>During a televised raid of a house containing escaped super villains from the Raft, the explosive villain Nitro detonated himself killing the majority of the New Warriors, children at a nearby elementary school and other local residents. In the wake of the tragedy, the federal Superhuman Registration Act was passed, requiring all super-powered beings to register their identities and subject themselves to federally mandated standards. While Tony spearheaded the support for the Act, convincing Spider-Man (Peter Parker) to publicly unmask in support of the Act, Captain America led an underground resistance defending heroes’ rights of privacy. Stark was accepted the position of Director of S.H.I.E.L.D.</p>',
    },
    {
      id: '2',
      image: {
        src: '/img/ant_man.jpg',
        alt: 'Ant Man',
      },
      meta: {
        author: faker.name.findName(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
        likeCount: faker.random.number({ min: 7, max: 42 }),
      },
      title: 'Civil War Characters. Ant-Man.',
      note: 'A former petty criminal allied with Rogers; he acquired a suit that allows him to shrink or grow in scale while also increasing in strength. Rudd\'s suit "is streamlined and more high-tech" from the one seen in Ant-Man. Ant-Man director Peyton Reed had discussed the character and the way that the Ant-Man production had shot certain sequences with the Russo brothers, saying, "As we were doing [Ant-Man] and we were in post and they were getting ready to head out to Atlanta to do Civil War, we had a lot of conversations ... It\'s important because there\'s this continuity that has to happen in this universe." On the decision to have Lang grow in size to become Giant-Man in the airport battle, Feige said, "It was just a great idea to turn the tide of the battle in a huge, shocking, unexpected way. We have a lot of ideas for [Ant-Man and the Wasp], none of which are contingent upon revealing Giant-Man, so we thought this would be the fun, unbelievable unexpected way to do that." Anthony Russo added that the transformation was the continuation of Lang\'s character arc from Ant-Man, saying "He\'s just really impressed with Captain America, he just wants to deliver and he figures out a way to deliver where he might actually tear himself in half but he\'s willing to do it and it works."',
      description: '<p>Scott Lang was an electronic engineer who was unable to support his family, and decided to turn to crime. He was caught and sentenced to 5 years in jail, but got out early for good behavior. Once freed he began to work at Stark International\'s design department.</p><p>When his daughter was diagnosed with a fatal heart condition, Lang sought help from Dr. Erica Sondheim, who was kidnapped by Cross Technological Enterprises founder Darren Cross, for help with his own heart condition. In order to rescue her, and save his daughter, Lang broke in to the home of Dr. Henry Pym, the first Ant-Man, and stole his technology. After a successful rescue, Lang tried to turn himself in, but Pym allowed him to keep the suit, but for the purpose of good.</p>',
    },
    {
      id: '3',
      image: {
        src: '/img/winter_soldier.jpg',
        alt: 'Winter Soldier',
      },
      meta: {
        author: faker.name.findName(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
        likeCount: faker.random.number({ min: 7, max: 42 }),
      },
      title: 'Civil War Characters. Winter Soldier.',
      note: 'A physically enhanced brainwashed assassin allied with Rogers; his best friend who reemerged after being thought killed in action during World War II. This portrayal is an amalgam of Barnes and the Winter Soldier, with Stan saying, "here\'s the guy when you merge the two. This is what came out. To me, he\'s never really going to be Bucky Barnes again. There\'s going to be recognisable things about him, but his path through the [experiences of] Winter Soldier is always going to be there, haunting him." Because of this, the character has more lines in the film than in Winter Soldier.',
      description: '<p>As a young boy, James Buchanan Barnes lost his father (a soldier during WWII), and was adopted by Camp Lehigh as their mascot, and given the nickname Bucky". It was here that he learned the identity of Captain America. He underwent rigorous training and was assigned to be Cap\'s sidekick, accompanying him on many adventures, and the two often worked with the original Invaders. However, on a final mission against Baron Zemo, Bucky and Cap hopped on an experimental drone plane in an attempt to disarm a bomb. The bomb detonated, dropping Cap in the North Atlantic, where he would later be found and thawed out by the Avengers. American forces never found Bucky\'s body, and he was presumed dead. Unbeknownst to the Americans, he was found and revived by Russian General Vasily Karpov.</p><p>When Bucky awoke, he had no memory of his identity, which gave Karpov an opportunity to reprogram Bucky as a Soviet assassin called the Winter Soldier. He was sent all across the globe, committing political assassinations with huge effects on the Cold War. However, his memory implantation caused mental instability, and he was kept in stasis between missions to prevent rebellion.</p>',
    },
    {
      id: '4',
      image: {
        src: '/img/falcon.jpg',
        alt: 'Falcon',
      },
      meta: {
        author: faker.name.findName(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
        likeCount: faker.random.number({ min: 7, max: 42 }),
      },
      title: 'Civil War Characters. Falcon.',
      note: 'An Avenger allied with Rogers; a former pararescueman trained by the military in aerial combat using a specially designed wing pack. Wilson is aided by a robotic drone named Redwing. Discussing the relationship between Wilson and Rogers, Mackie said, "With Falcon and Cap, what\'s so great is there\'s a mutual respect. There\'s a soldier respect. What\'s great about ... [Captain America: Civil War] is you get to see their relationship grow," adding, "He respects and admires Cap because Cap earned his rank as opposed to sitting in an office and just delegating orders." Joe Russo stated that the inclusion of Barnes to Rogers\' side forces Wilson to question the dynamic and relationship he has with Rogers going forward.',
      description: '<p>Sam grew up in a tough Harlem neighborhood. His father, a minister, had been killed trying to stop a fight. Sam did his best to try and do the right thing, but when his mother was killed by a mugger two years later, Sam\'s grief and anger consumed him. His grief and anger consumed his personality, eventually led him down a criminal path. The once-respected community volunteer took on the name of "Snap" Wilson, becoming a racketeer while working for the mob.</p><p>After an assignment in Rio de Janeiro, Sam\'s plane crashed in a remote Caribbean island where the Red Skull and his henchmen, the Exiles, were hiding out. The Red Skull sought to use Wilson as a pawn against Captain America, who was currently on the island searching for the villain. The Skull reasoned that Wilson\'s idealism would appeal to the Captain enough to become his crimefighting partner. Then, at some later date, the Skull could use Wilson against his enemy. He used a Cosmic Cube to revert "Snap" into Sam and give Sam the ability to telepathically communicate with birds, especially a bird that Wilson had bought named Redwing. Sam helped Captain America defeat the Skull and did indeed become his partner as the Falcon.</p>',
    },
    {
      id: '5',
      image: {
        src: '/img/war_machine.jpg',
        alt: 'War Machine',
      },
      meta: {
        author: faker.name.findName(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
        likeCount: 0,
      },
      title: 'Civil War Characters. War Machine.',
      note: 'An Avenger allied with Stark; an officer in the U.S. Air Force who operates the War Machine armor. Cheadle called Rhodes\' appearance in the film a "bit more intense and pivotal" compared to his previous appearances.',
      description: '<p>James "Rhodey" Rhodes was a US Marine who served several tours in Southeast Asia while studying to become an aviation engineer. In the service, he grew close with his comrade Parnell Jacobs, whom he introduced to childhood friend Glenda Sandoval. Parnell and Glenda eventually fell in love and married.</p><p>Rhodes was a soldier with a conscience, willing to kill if a mission required it, yet haunted by every life he took. During one mission, Rhodes\' helicopter was shot down in a jungle and was discovered by Iron Man (Tony Stark), who had recently escaped from the guerrilla Wong-Chu and needed transportation. Iron Man helped repair Rhodes\' helicopter and they made it to safety together. Afterward, Rhodes was approached by Tony Stark, claiming to be Iron Man\'s "employer," and was offered a job as Stark\'s pilot. Rhodes agreed to take him up on his offer when his tour of duty was completed. For a while, Rhodes worked as a mercenary with Parnell, but when he caught Parnell running guns to the dictatorship of Santo Marco, he went back to Tony to make good on his word.</p>',
    },
    {
      id: '6',
      image: {
        src: '/img/captain_america.jpg',
        alt: 'Captain America',
      },
      meta: {
        author: faker.name.findName(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
        likeCount: faker.random.number({ min: 7, max: 42 }),
      },
      title: 'Civil War Characters. Captain America.',
      note: 'The leader of a faction of Avengers against regulation; a World War II veteran who was enhanced to the peak of human physicality and frozen in suspended animation, before waking up in the modern world. Director Anthony Russo described Captain America\'s character arc in the film as taking "him from the most ra-ra company man" to someone who is "a somewhat willing propagandist" to "an insurgent" at the end of the film. Unlike the comics\' Civil War, the film was never going to kill Rogers, as the directors thought that was "an easy ending ... The more difficult and more interesting place to leave a family fight is: can these important relationships ever be repaired? Is this family broken permanently?" Evans\' training regime to get in shape for the role included weight lifting, which consisted of "the classic bodyweight and bodybuilding stuff", gymnastics and plyometrics, while staying away from cardio-based exercises, along with a high-protein diet. His costume in the film received "subtle changes to all the details and cut" as well as its color, becoming a combination of the stealth suit from Winter Soldier and the Avengers: Age of Ultron suit.',
      description: '<p>Steve Rogers was a scrawny fine arts student growing up during the Great Depression. His alcoholic father died when Steve was a child, and his mother passed away from pneumonia after he graduated high school. In early 1940, appalled at Nazi Germany’s horrific atrocities, Steve attempted to enlist in the army. Failing to pass physical requirements, he was invited to volunteer for Operation: Rebirth, a project intended to enhance US soldiers to the height of physical perfection via the inventions and discoveries of Professor Abraham Erskine. Rogers eagerly accepted and became the first test subject. After injections and ingestion of the "Super Soldier Serum," Rogers was exposed to a controlled burst of "Vita-Rays" that activated and stabilised the chemicals in his system. The process successfully altered his physiology from its frail state to the maximum of human efficiency, including greatly enhanced musculature and reflexes. Soon after, Professor Erskine was assassinated by a Nazi operative, leaving Steve the sole beneficiary of Erskine’s genius. Renamed “Project: Rebirth,” variations of the Super-Soldier serum were subsequently tested, under inhuman conditions, on African-American soldiers. The most successful of these was Isaiah Bradley, and Project: Rebirth’s resources were eventually absorbed into a multinational superhuman research project dubbed Weapon Plus.</p><p>Rogers was assigned to serve as an who served both as a counter-intelligence agent and a symbolic US hero to counter Nazi Germany\'s propaganda successes head by the Red Skull (Johann Shmidt). Wearing a costume based on his own design modelled after the American flag, Steve was given a triangular bulletproof shield, a personal sidearm and the codename Captain America, the Sentinel of Liberty. He was also provided a cover identity as a clumsy infantry private at Camp Lehigh in Virginia. His first opponents included the Red Skull himself and Nazi attempts to duplicate Erskine\'s serum with their own super soldiers. During a mission to the African nation of Wakanda, “Cap” befriended the nation\'s ruler T\'Chaka and obtained a sample of the rare metal Vibranium. Subsequent experiments with this metal produced a uniquely indestructible Vibranium-steel alloy disc, which proved impossible to duplicate. The disc was given to Cap as his new shield.</p>',
    },
    {
      id: '7',
      image: {
        src: '/img/black_widow.jpg',
        alt: 'Black Widow',
      },
      meta: {
        author: faker.name.findName(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
        likeCount: faker.random.number({ min: 7, max: 42 }),
      },
      title: 'Civil War Characters. Black Widow.',
      note: 'An Avenger allied with Stark; formerly a highly trained S.H.I.E.L.D. spy. Anthony Russo noted her torn allegiances in the film, saying "her head is with Tony\'s side of things, but her heart is with Cap in a lot of ways." Johansson added that Romanoff is "looking to strategise her position, putting herself in a place where she is able to let the powers that be fight it out" in order for her to "have a better perspective of what\'s really going on." Describing her character\'s situation after the events of Avengers: Age of Ultron, Johansson said, "I think that the Widow\'s past will always haunt her. She\'s trying to move forward, she\'s trying to pick up the pieces of her life." She also said that Romanoff is at a point in her life where she can make choices herself, without having others have a hand in the decision process. On the continuation of the relationship between Romanoff and Rogers from The Winter Soldier, Joe Russo said that they wanted to "test it" by having Romanoff point out to Rogers the mistakes the team have made and convince him "that it might not be as black and white as he sees it" and that the Avengers must "find a way to work within the system so that [they] aren\'t disbanded."',
      description: '<p>Born circa 1928, Natalia "Natasha" Romanova was apparently orphaned as a child when she was trapped in a burning building during an early attack on Stalingrad by enemy forces. Ivan Petrovitch Bezukhov, a Soviet soldier, found Natasha in the inferno and rescued her. Although Ivan kept a close eye on Natasha as she grew, by the late 1930s she had attracted the attention of Soviet intelligence, which began her training. In 1941, she was almost brainwashed into serving the ninja clan the Hand, but was saved by Ivan, Logan (James Howlett, later Wolverine) and Captain America. Following World War II, Natasha was recruited to become part of the Black Widow Program, a team of elite female sleeper agents. Among the Widow\'s instructors was the Winter Soldier, formerly Captain America\'s sidekick Bucky (James Barnes); Natasha studied as a ballerina to cover for her true occupation. The Soviet state eventually arranged for Natasha to marry Alexi Shostakov, a champion test pilot. After a few years of a happy marriage, the KGB faked Shostakov\'s death in a rocket test; grief for Shostakov drove Natasha\'s resolve deeper and she continued her education with the Red Room Academy, finally being appointed the title of the Black Widow.</p>',
    },
    {
      id: '8',
      image: {
        src: '/img/hawkeye.jpg',
        alt: 'Hawkeye',
      },
      meta: {
        author: faker.name.findName(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
        likeCount: 0,
      },
      title: 'Civil War Characters. Hawkeye.',
      note: 'A master archer allied with Rogers; a retired Avenger and S.H.I.E.L.D. agent. On Barton\'s reasons for joining Rogers\' side, Renner said, "Cap was the first guy who called. Let\'s just get the job done so I can get home to the family," along with feeling an obligation to side with Scarlet Witch, since her brother, Pietro Maximoff / Quicksilver, sacrificed himself to save Barton in Avengers: Age of Ultron. On how he and Barton fit into the Marvel Cinematic Universe, Renner said, "I\'m happy to be the ensemble. I\'m not scratching or clawing to do a solo movie by any means ... I think [Barton\'s] a utility guy that can bounce around into other people\'s universes a little bit".',
      description: '<p>Clint Barton was orphaned at an early age when his parents died in a car accident and was sent to a children\'s home with his brother Bernard. He and his brother ran away to join the Carson Carnival of Traveling Wonders, and the pair worked as roustabouts. While a member of the circus, Hawkeye was trained by the original Swordsman (Jacques Duquesne) and Trickshot. Clint\'s life, however, would forever be changed after he stumbled onto the Swordsman counting the money he had just robbed from the carnival. The Swordsman offered Clint to become his partner in crime, but Clint rejected his mentor, sparking a fight that ended when the Swordsman left him for dead after he fell from the high wire. Barney, too, abandoned him, in disbelief that Clint passed up such an opportunity. Trickshot stepped up his role as Clint\'s mentor, later asking him to join him in raiding a criminal named Marko. However, Clint severely injured one of Marko\'s guards and discovered him to be his brother, Barney. Repelled by the consequences of his actions (and his mentor\'s role in prompting them), he abandoned Trickshot and parted on bad terms.</p><p>His natural archery abilities honed to an expert level, Clint wandered the country, working in various carnivals or otherwise making money out of the costume and persona of "Hawkeye". One day, when witnessing Iron Man save the lives of some people at the carnival, he decided to become a costumed crime-fighter himself. But as luck would have it, on Hawkeye\'s first night on patrol, he was mistaken for a criminal by the police and hunted down.</p><p>He soon met the Black Widow, who was working at the time as a costumed villain for her country, and she easily seduced the hot-headed adventurer, making him think it was in his interest to defeat Iron Man. He attempted to do so according to her prompting on several occasions, but soon wised up, regretting his decision. Instead, he hoped to join Iron Man\'s team of Avengers. As a way of proving himself, he broke into the Avengers Mansion and convinced their butler, Jarvis, to play the role of a victim so he could display his powers. Iron Man vouched for Hawkeye, and he joined the new line-up that included Captain America, the Scarlet Witch, and Quicksilver.</p>',
    },
    {
      id: '9',
      image: {
        src: '/img/black_panther.jpg',
        alt: 'Black Panther',
      },
      meta: {
        author: faker.name.findName(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
        likeCount: 0,
      },
      title: 'Civil War Characters. Black Panther.',
      note: 'The prince of the African nation of Wakanda allied with Stark. T\'Challa is torn between needing to live up to traditions and the legacy of his father and Wakanda, and how things need to happen in the present. Boseman developed the Wakandan accent himself, and used it during the entire production "whether he was on camera or not", while the Wakandan language was based on the Xhosa language, which Boseman was taught by John Kani (who plays T\'Challa\'s father T\'Chaka). The Black Panther costume is a combination of a practical costume and visual effects, featuring a vibranium mesh weave similar to chainmail. Costume designer Judianna Makovsky called the Black Panther costume "difficult" since "you needed sort of a feline body, but it\'s hard and practical at the same time. You needed a feeling of some sort of ethnicity in there, but of a world [Wakanda] we weren\'t really creating yet, so you didn\'t want to go too far and say too much about that world." Additionally, Makovsky felt creating T\'Challa\'s royal look was "a bit of a challenge", avoiding African robes after learning actual African royalty are generally "educated in the West [and] get dressed in Savile Row." Boseman has a five picture deal with Marvel.',
      description: '<p>T\'Challa is heir to the centuries-old ruling dynasty of the African kingdom Wakanda, and ritual leader of its Panther Clan. His mother died in childbirth, earning him the enduring hatred of his adopted elder brother, Hunter, who also resented T\'Challa for supplanting him in the royal household. Hunter would become the White Wolf, leader of the Hatut Zeraze (Dogs of War), the Wakandan secret police. Their father T\'Chaka remarried, but his second wife, Ramonda, seemingly ran away with another man when T\'Challa was eight. When T\'Challa was a teenager, T\'Chaka was murdered by Klaw, a Dutchman seeking to plunder the rare Vibranium metal unique to Wakanda, but T\'Challa used Klaw\'s own weapon to maim him and drive him off. T\'Challa studied in Europe and America, then underwent ritual trials in Wakanda - including defeating his uncle S\'yan, the existing Black Panther - to win the heart-shaped herb, enhancing his abilities and linking him spiritually to the Panther God Bast. Now Wakanda\'s ruler as the Black Panther, he disbanded and exiled the Hatut Zeraze and continued transforming his country into a high-tech wonderland. When tribal war broke out, T\'Challa restored peace by condemning the Jabari tribe, and by picking Dora Milaje ("Adored Ones") from rival tribes to serve as his personal guard and ceremonial wives-in-training.</p><p>Taught by his father to think two steps ahead of enemies and three steps ahead of friends, T\'Challa saw the world\'s super-beings as potential threats to Wakanda. Inviting the Fantastic Four to visit him, he forced them into a series of tests, then allied with them against a returning Klaw. He also joined the American-based Avengers to spy on them from within, but soon came to regard them as true friends and staunch allies. He adopted the identity of teacher Luke Charles while in America, romancing singer Monica Lynne, later his fiancée. Dividing his time between Wakanda and America for years, he battled foes such as Jabari malcontent M\'Baku the Man-Ape, rebel leader Erik Killmonger, the snake-charmer Venomm (later an ally), voodoo charlatan Baron Macabre, the Ku Klux Klan, the ghostly Soul-Strangler, the soaring Wind Eagle, mutated drug czar Solomon Prey, arms dealer Moses Magnum and the Supremacists of Azania. He also fought Kiber the Cruel during a quest for the mystic time-shifting artifacts known as King Solomon\'s Frogs; these produced an alternate version of T\'Challa from a future ten years hence, a merry telepathic Panther with a terminal brain aneurysm. Placing his dying future self in cryogenic storage, T\'Challa broke off his engagement with Monica since he feared he had no future to give her. Wakanda and Atlantis subsequently came to the brink of war during the Kiber Island incident, which revealed Wakanda to be a nuclear power. Discovering his stepmother Ramonda had not run away, but instead had been kidnapped by Anton Pretorius, he rescued her from years of captivity in South Africa. T\'Challa joined the Knights of Pendragon against their enemies, the Bane, learning in the process that he housed one of the Pendragon spirits himself. He was also used as a pawn in the efforts of the munitions company Cardinal Technology to escalate the civil war in the northern nation Mohannda, but exposed Cardinal with the aid of the mercenary Black Axe and the anti-war activist Afrikaa.</p>',
    },
    {
      id: '10',
      image: {
        src: '/img/vision.jpg',
        alt: 'Vision',
      },
      meta: {
        author: faker.name.findName(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
        likeCount: faker.random.number({ min: 7, max: 42 }),
      },
      title: 'Civil War Characters. Vision.',
      note: 'An android and Avenger allied with Stark; created using the artificial intelligence J.A.R.V.I.S. and the Mind Stone. Because the Vision was only created in the previous film, Age of Ultron, Bettany said, "you see my character get born... He must be both omnipotent and yet totally naive at the same time. And experiencing the world in real time and his place in it. Is he going to be a force of good or a force of evil?" Bettany also said he was interested in exploring "what it means to be human and what love is" with the character, as "The only way one can guarantee one\'s loyalty is love." This is exhibited in the connection Vision begins to form with Wanda Maximoff, with Bettany commenting, "They both have these new burgeoning powers that they don\'t understand ... I think he\'s worried that they\'re both dangerous. So he feels this real connection with her." As the Vision has the ability to create a projected disguise, he chooses to dress similarly to Howard Stark\'s attache, Edwin Jarvis.',
      description: '<p>The metal monstrosity called Ultron created the synthetic humanoid known as the Vision from the remains of the original, android Human Torch of the 1940s to serve as a vehicle of vengeance against the Avengers, Earth\'s Mightiest Heroes. Himself constructed by size-changing scientist Henry Pym, Ultron inadvertently gained sentience and rebelled against the Avengers\' resident roboticist. The living machine programmed the Vision\'s neural processors with the brain patterns of the ionically charged costumed champion called Wonder Man and implanted a control crystal to keep him in check.</p><p>Ultron dispatched the Vision to draw the Avengers into a deathtrap, and it was during this initial encounter that the diminutive dynamo known as the Wasp coined the synthezoid\'s name. At first sight of the spectral entity, the horrified heroine called him an "unearthly, inhuman vision." Moved by the Avengers\' plight, the Vision betrayed his programming and helped the mighty mortals defeat his calculating creator.</p><p>The Vision served the Avengers faithfully for a number of years, standing with his teammates against the foes no single hero could defeat. Tentatively at first, the almost-human android embarked on a romantic relationship with the hex-casting heroine called the Scarlet Witch that blossomed into true love and marriage. The newlyweds left Avengers Mansion to live a quiet life in New Jersey.</p>',
    },
    {
      id: '11',
      image: {
        src: '/img/scarlet_witch.jpg',
        alt: 'Scarlet Witch',
      },
      meta: {
        author: faker.name.findName(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
        likeCount: 0,
      },
      title: 'Civil War Characters. Scarlet Witch.',
      note: 'An Avenger allied with Rogers; she can engage in hypnosis and telekinesis. According to Olsen, the character is "coming into her own and starting to understand and have conflict with how she wants to use her abilities." As such, Maximoff\'s costume was "relatively casual" and "more clothes-based than superhero-based" according to Makovsky, since the Russos believed Maximoff was not a full-fledged Avenger yet. When asked about the relationship between her character and the Vision compared to the comics, Olsen said, "You learn a little bit more about what connects [Scarlet and Vision] in this film. And I think there\'s some really sweet moments between Paul and I, and it\'s more about how they relate to one another and their similarities just based on their superpowers."',
      description: '<p>Born at the Wundagore base of the High Evolutionary, in proximity to the eldritch energies of the Elder God Chthon; Wanda and her brother Pietro\'s mother, Magda, fled Wundagore shortly after their birth. Although not known at the time, Chthon formed a mystic bond with Wanda, who, it was later learned, was destined to serve the role of Nexus Being, a living focal point for the Earth dimension\'s mystical energy.</p><p>Kept in stasis by the Evolutionary for decades, the two infants were later placed in the custody of a Gypsy couple named Django and Marya Maximoff. When Wanda and Pietro were teenagers and had already manifested their mutant powers, their family\'s encampment was attacked, leaving Marya dead; Django survived, but was separated from his children, while the traumatized Wanda and Pietro also fled, believing their foster father to have died. After several months of surviving on their own in the woods, the siblings ventured into a nearby town, where Wanda\'s powers inadvertently set fire to a house. Set upon by villagers who believed the pair to be "in league with the Devil", they were rescued by the timely arrival of Magneto, the mutant master of magnetism. Magneto was in fact their father, but neither he nor the siblings were aware of this at the time. Exploiting the pair\'s gratitude, Magneto pressed them into service as part of his anti-human terrorist unit, the Brotherhood of Evil Mutants.</p><p>Now known as the Scarlet Witch and Quicksilver, Wanda and Pietro accompanied Magneto and his fellow mutants in their power-seeking efforts, clashing with the heroic X-Men. After a time, the siblings, disillusioned with Magneto and feeling that their debt to him had been paid, decided to abandon their terrorist activities; alongside the archer and ex-criminal Hawkeye, they joined the Avengers under the leadership of Captain America. As a member of this foursome, the first major reorganization of the still young super-team, the Scarlet Witch served with distinction against such foes as Dr Doom, the Mole Man, Kang, and others.</p>',
    },
  ],
};
