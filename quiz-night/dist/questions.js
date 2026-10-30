// Three original clues at each of five difficulty levels, in every category.
// Facts deliberately avoid current rankings, officeholders, prices, and records.
const sets = [
['World Cities', '◎', `
The Eiffel Tower stands in this French capital.|Paris
The Colosseum is an ancient landmark in this Italian city.|Rome
Big Ben's clock tower overlooks this British capital.|London
This Japanese capital was once called Edo.|Tokyo
The Sagrada Família is a landmark of this Spanish city.|Barcelona
This Australian city is home to a famous sail-shaped opera house.|Sydney
The Charles Bridge crosses the Vltava in this Czech capital.|Prague
The Acropolis rises above this Greek capital.|Athens
This Portuguese capital stands near the mouth of the Tagus River.|Lisbon
The Blue Mosque is a landmark of this city spanning Europe and Asia.|Istanbul
This Moroccan city is famous for the Jemaa el-Fnaa square.|Marrakesh
The Alhambra palace complex overlooks this Spanish city.|Granada
The Potala Palace overlooks this Tibetan city.|Lhasa
This Polish city is home to Wawel Castle.|Kraków
The Petronas Twin Towers stand in this Malaysian capital.|Kuala Lumpur
`],
['Countries', '⚑', `
This country is shaped like a boot on many maps.|Italy
The pyramids of Giza are in this country.|Egypt
This country is home to kangaroos and the city of Perth.|Australia
The maple leaf appears on this country's flag.|Canada
Rio de Janeiro and São Paulo are cities in this country.|Brazil
Mount Fuji is in this island country.|Japan
The cities of Oslo and Bergen are in this country.|Norway
Machu Picchu is in this South American country.|Peru
The ancient city of Petra is in this country.|Jordan
This landlocked country lies between France and Spain in the Pyrenees.|Andorra
This African country was formerly called Abyssinia.|Ethiopia
Thimphu is the capital of this Himalayan country.|Bhutan
This country entirely surrounds the nation of Lesotho.|South Africa
Paramaribo is the capital of this South American country.|Suriname
This small country lies between Switzerland and Austria.|Liechtenstein
`],
['Outer Space', '✦', `
This star is at the center of our solar system.|The Sun
This planet is nicknamed the Red Planet.|Mars
Earth's natural satellite goes by this familiar name.|The Moon
This is the largest planet in our solar system.|Jupiter
This planet is famous for its prominent ring system.|Saturn
This force keeps planets in orbit around the Sun.|Gravity
This galaxy contains our solar system.|The Milky Way
This astronaut first stepped onto the Moon in 1969.|Neil Armstrong
This planet is closest to the Sun.|Mercury
This dwarf planet was reclassified from planet status in 2006.|Pluto
This term describes the explosive death of certain stars.|A supernova
This planet rotates on its side relative to its orbital plane.|Uranus
This boundary marks the point beyond which light cannot escape a black hole.|The event horizon
This moon of Saturn has a thick atmosphere and liquid methane lakes.|Titan
This astronomical distance is the distance light travels in one year.|A light-year
`],
['Science Lab', '⚗', `
H₂O is the chemical formula for this substance.|Water
This gas is essential for human breathing.|Oxygen
Water freezes at this temperature in degrees Celsius.|0°C
This is the center of an atom.|The nucleus
This chemical element has the symbol Au.|Gold
This gas makes up most of Earth's atmosphere.|Nitrogen
This scale measures how acidic or basic a solution is.|The pH scale
These negatively charged particles surround an atom's nucleus.|Electrons
This element has the atomic number 1.|Hydrogen
This law says energy cannot be created or destroyed in an isolated system.|Conservation of energy
This scientist developed the theory of general relativity.|Albert Einstein
This unit measures electrical resistance.|The ohm
These atoms of the same element have different numbers of neutrons.|Isotopes
This process changes a solid directly into a gas.|Sublimation
This constant connects a photon's energy to its frequency.|Planck's constant
`],
['Wild Animals', '♧', `
This striped big cat is usually orange, black, and white.|A tiger
This tall African mammal has a very long neck.|A giraffe
This black-and-white bear mostly eats bamboo.|The giant panda
This is the largest animal species alive today.|The blue whale
This Australian marsupial carries its young in a pouch and hops.|A kangaroo
This mammal is capable of sustained powered flight.|A bat
This egg-laying mammal has a duck-like bill.|The platypus
A group of lions is called this.|A pride
This bird is famous for mimicking human speech.|A parrot
This large flightless bird is native to Africa.|The ostrich
This aquatic mammal uses tools to crack open shellfish while floating.|The sea otter
This lizard can independently move its eyes and change its skin color.|A chameleon
This nocturnal primate from Madagascar has a very long middle finger.|The aye-aye
This salamander is known for retaining external gills into adulthood.|The axolotl
This scaled mammal rolls into a ball for protection.|The pangolin
`],
['The Human Body', '♡', `
This organ pumps blood around your body.|The heart
These two organs are primarily responsible for breathing.|The lungs
This organ controls thought, memory, and movement.|The brain
This is the largest organ of the human body.|The skin
These bones form the protective cage around your chest.|The ribs
This pigment contributes to the color of skin and hair.|Melanin
This bone runs from the hip to the knee.|The femur
These cells transport oxygen in the blood.|Red blood cells
This muscle beneath the lungs helps you breathe.|The diaphragm
These tiny air sacs in the lungs exchange oxygen and carbon dioxide.|Alveoli
This organ produces insulin.|The pancreas
This part of the eye controls the size of the pupil.|The iris
This tiny bone in the middle ear is also called the stirrup.|The stapes
This part of the brain is strongly associated with coordination and balance.|The cerebellum
This is the main artery carrying blood away from the heart.|The aorta
`],
['Food, Glorious Food', '♨', `
This Italian dish traditionally consists of a flat dough base topped with tomato and cheese.|Pizza
This fruit is the main ingredient in guacamole.|Avocado
This food is made by baking dough, often with yeast.|Bread
This Japanese dish features vinegared rice with various toppings or fillings.|Sushi
This legume is the main ingredient in traditional hummus.|Chickpeas
This Spanish rice dish traditionally cooks in a wide, shallow pan.|Paella
This Korean dish is made from fermented vegetables, often cabbage.|Kimchi
This spice gives many curries their bright yellow color.|Turmeric
This French dish is a savory tart with an egg-and-cream filling.|Quiche
This Middle Eastern salad usually contains parsley, bulgur, and tomatoes.|Tabbouleh
This Italian rice dish is stirred while stock is added gradually.|Risotto
This Mexican sauce can combine chilies, spices, and chocolate.|Mole
This Japanese word describes the savory taste associated with glutamate.|Umami
This clarified butter is common in South Asian cooking.|Ghee
This fermented soybean paste is central to a Japanese soup.|Miso
`],
['In Your Cup', '◡', `
This hot drink is brewed from roasted beans.|Coffee
This drink is traditionally made by steeping leaves in hot water.|Tea
This citrus fruit gives classic lemonade its flavor.|Lemon
This coffee drink combines espresso, steamed milk, and a layer of foam.|Cappuccino
This drink is made by pressing apples.|Apple juice
This ingredient makes sparkling water fizzy.|Carbon dioxide
This powdered green tea is traditionally whisked into hot water.|Matcha
This South American drink is brewed from leaves and often sipped through a metal straw.|Yerba mate
This Indian beverage blends yogurt with sweet or savory ingredients.|Lassi
This Spanish drink often combines red wine and chopped fruit.|Sangria
This fermented tea drink is made using a culture called a SCOBY.|Kombucha
This South African herbal drink is also called red bush tea.|Rooibos
This metal straw used to drink mate acts as a filter.|A bombilla
This Italian word names an espresso diluted with hot water.|Americano
This ruby-red herbal drink is known as agua de jamaica when served cold in Mexico.|Hibiscus tea
`],
['At the Movies', '▷', `
This animated cowboy is Buzz Lightyear's friend in Toy Story.|Woody
This movie features the song Let It Go and the sisters Elsa and Anna.|Frozen
This wizard attends Hogwarts with Ron and Hermione.|Harry Potter
This 1997 film pairs Jack and Rose aboard an ill-fated ocean liner.|Titanic
This director made Jaws and Jurassic Park.|Steven Spielberg
This green ogre lives in a swamp with a very talkative donkey nearby.|Shrek
This 1999 film asks Neo to choose between a red pill and a blue pill.|The Matrix
This film trilogy follows the quest to destroy the One Ring.|The Lord of the Rings
This Pixar film sends a rat named Remy into a Paris kitchen.|Ratatouille
This Japanese director created Spirited Away and My Neighbor Totoro.|Hayao Miyazaki
This actor played the title pirate in the Pirates of the Caribbean films.|Johnny Depp
This black-and-white 1942 film features Rick's Café in Morocco.|Casablanca
This 1927 Fritz Lang film depicts a futuristic city divided by class.|Metropolis
This South Korean director made the 2019 film Parasite.|Bong Joon-ho
This Akira Kurosawa film inspired the western The Magnificent Seven.|Seven Samurai
`],
['TV Time', '▣', `
This yellow cartoon family lives in Springfield.|The Simpsons
This sitcom follows six friends including Rachel, Ross, and Monica.|Friends
This sea sponge lives in a pineapple under the sea.|SpongeBob SquarePants
This television series features the fictional continent of Westeros.|Game of Thrones
This science-fiction series features a time machine called the TARDIS.|Doctor Who
This animated family's father works at a nuclear power plant.|The Simpsons
This sitcom takes place largely at the Dunder Mifflin paper company.|The Office
This series follows chemistry teacher Walter White's criminal transformation.|Breaking Bad
This Netflix series features a parallel dimension called the Upside Down.|Stranger Things
This comedy series follows the Parks Department of Pawnee, Indiana.|Parks and Recreation
This fictional starship is commanded by Jean-Luc Picard.|The USS Enterprise
This series features a soccer coach played by Jason Sudeikis.|Ted Lasso
This mystery series begins with the death of Laura Palmer.|Twin Peaks
This drama follows the advertising executive Don Draper.|Mad Men
This comedy's central family owns a frozen banana stand.|Arrested Development
`],
['Music Mix', '♫', `
This instrument usually has 88 black and white keys.|A piano
This singer was nicknamed the King of Pop.|Michael Jackson
This band included John, Paul, George, and Ringo.|The Beatles
This string instrument is typically played with a bow and held under the chin.|A violin
This musical symbol raises a note by one semitone.|A sharp
This British band released Bohemian Rhapsody.|Queen
This composer wrote the Moonlight Sonata.|Ludwig van Beethoven
This Jamaican musician helped bring reggae to a worldwide audience.|Bob Marley
This Italian tempo marking means to play quickly and lively.|Allegro
This musician released the album Purple Rain.|Prince
This large string instrument sits between the player's knees.|A cello
This composer wrote The Four Seasons.|Antonio Vivaldi
This Russian composer wrote the ballet The Rite of Spring.|Igor Stravinsky
This musical term means gradually getting louder.|Crescendo
This jazz musician was nicknamed Satchmo.|Louis Armstrong
`],
['On the Bookshelf', '▤', `
This children's book character is a bear who loves honey and lives in the Hundred Acre Wood.|Winnie-the-Pooh
This young girl follows a rabbit into Wonderland.|Alice
This author created Harry Potter.|J. K. Rowling
This author wrote The Hobbit.|J. R. R. Tolkien
This author wrote Pride and Prejudice.|Jane Austen
This novel features the whale pursued by Captain Ahab.|Moby-Dick
This George Orwell novel features Big Brother.|Nineteen Eighty-Four (1984)
This author wrote the detective Sherlock Holmes.|Arthur Conan Doyle
This novel's narrator is a girl nicknamed Scout Finch.|To Kill a Mockingbird
This author wrote One Hundred Years of Solitude.|Gabriel García Márquez
This dystopian novel is named for a temperature at which paper supposedly ignites.|Fahrenheit 451
This Russian author wrote Crime and Punishment.|Fyodor Dostoevsky
This writer created the fictional town of Macondo.|Gabriel García Márquez
This Portuguese author wrote the novel Blindness.|José Saramago
This epic poem follows Dante through Hell, Purgatory, and Paradise.|The Divine Comedy
`],
['History Class', '⌛', `
This ocean liner sank on its maiden voyage in 1912.|The Titanic
This wall divided a German city until 1989.|The Berlin Wall
This Egyptian queen was associated with Julius Caesar and Mark Antony.|Cleopatra
This French military leader crowned himself emperor in 1804.|Napoleon Bonaparte
This document, signed in 1215, limited the power of England's King John.|Magna Carta
This war ended in 1945 after the defeat of the Axis powers.|World War II
This revolution began in France in 1789.|The French Revolution
This nurse became known as the Lady with the Lamp.|Florence Nightingale
This civilization built the city of Chichén Itzá.|The Maya
This 1066 battle brought William the Conqueror victory in England.|The Battle of Hastings
This empire was ruled from Constantinople and ended in 1453.|The Byzantine Empire
This explorer's expedition completed the first circumnavigation of Earth, after his death.|Ferdinand Magellan
This treaty formally ended World War I between Germany and the Allied powers.|The Treaty of Versailles
This 1648 peace settlement helped end the Thirty Years' War.|The Peace of Westphalia
This Haitian revolutionary leader was nicknamed the Black Napoleon.|Toussaint Louverture
`],
['The Ancient World', '△', `
These triangular monuments served as tombs for Egyptian pharaohs.|Pyramids
This ancient civilization held gladiator contests in the Colosseum.|Ancient Rome
This river supported ancient Egyptian civilization.|The Nile
This ancient Greek city-state was famous for its military society.|Sparta
This writing system used picture-like symbols in ancient Egypt.|Hieroglyphics
This ancient Greek event inspired the modern Olympic Games.|The ancient Olympic Games
This Roman city was buried by Mount Vesuvius in AD 79.|Pompeii
This ancient Greek philosopher taught Plato.|Socrates
This Macedonian king built an empire stretching to India.|Alexander the Great
This stone helped scholars decipher Egyptian hieroglyphics.|The Rosetta Stone
This ancient region lay between the Tigris and Euphrates rivers.|Mesopotamia
This Carthaginian general crossed the Alps with elephants.|Hannibal
This Mesopotamian writing system used wedge-shaped marks.|Cuneiform
This Babylonian king is associated with a famous written law code.|Hammurabi
This Bronze Age civilization built the palace of Knossos on Crete.|The Minoans
`],
['Art & Artists', '◈', `
This artist painted the Mona Lisa.|Leonardo da Vinci
This artist cut off part of his ear and painted The Starry Night.|Vincent van Gogh
Red and blue paint are commonly mixed to make this color.|Purple
This artist painted the ceiling of the Sistine Chapel.|Michelangelo
This Spanish artist painted Guernica.|Pablo Picasso
This art technique creates an image by assembling small pieces of tile or glass.|Mosaic
This Mexican artist is famous for self-portraits and her distinctive eyebrows.|Frida Kahlo
This art movement includes Monet's paintings of water lilies.|Impressionism
This surrealist painted melting clocks in The Persistence of Memory.|Salvador Dalí
This Dutch artist painted Girl with a Pearl Earring.|Johannes Vermeer
This American artist made famous images of Campbell's soup cans.|Andy Warhol
This Japanese artist created The Great Wave off Kanagawa.|Katsushika Hokusai
This artist created the sculpture The Thinker.|Auguste Rodin
This technique paints directly onto freshly laid wet plaster.|Fresco
This Norwegian artist created The Scream.|Edvard Munch
`],
['Game, Set, Match', '◉', `
In this sport, players try to kick a ball into a goal.|Football (soccer)
This racket sport is played at Wimbledon.|Tennis
This sport uses a hoop and a ball that players dribble.|Basketball
This sport uses a shuttlecock.|Badminton
In golf, this score is one stroke under par on a hole.|A birdie
This sport features the terms strike, spare, and gutter.|Ten-pin bowling
This is the number of players on one volleyball team on the court.|Six
This Olympic event combines swimming, cycling, and running.|Triathlon
In tennis, this term means a score of zero.|Love
This is the standard marathon distance in kilometers.|42.195 kilometers
This cycling race awards a yellow jersey to its overall leader.|The Tour de France
This fencing weapon shares its name with a thin metal sheet.|Foil
This athletics event combines ten track-and-field disciplines.|Decathlon
In cricket, this term means three wickets taken on three consecutive deliveries.|A hat-trick
This gymnastic apparatus has two handles and is named after an animal.|The pommel horse
`],
['Games People Play', '♜', `
This board game has kings, queens, bishops, and pawns.|Chess
In this game, players buy properties and try to avoid bankruptcy.|Monopoly
This video game character is a plumber with a red cap and a brother named Luigi.|Mario
This block-building video game includes creatures called Creepers.|Minecraft
This word game gives players seven letter tiles on a rack.|Scrabble
This card game shares its Spanish name with the number one.|Uno
This falling-block video game was created by Alexey Pajitnov.|Tetris
This chess piece moves in an L shape.|The knight
This tabletop role-playing game uses a twenty-sided die and a Dungeon Master.|Dungeons & Dragons
This board game asks players to identify a murderer, a room, and a weapon.|Clue (Cluedo)
In chess, this special move involves moving the king and a rook.|Castling
This game series takes place in Hyrule and often stars Link.|The Legend of Zelda
This ancient strategy game places black and white stones on a grid.|Go
This chess term describes a position where a player has no legal moves but is not in check.|Stalemate
This puzzle has a grid of nine-by-nine squares filled with digits.|Sudoku
`],
['Tech Talk', '⌘', `
This device moves a pointer when you slide it across a desk.|A mouse
This keyboard key usually inserts a blank space.|The space bar
This symbol separates the username and domain in an email address.|The @ symbol
These three letters stand for Central Processing Unit.|CPU
This type of software is used to visit websites.|A web browser
This wireless technology shares its name with a color and a body part.|Bluetooth
These four letters stand for Hypertext Markup Language.|HTML
This number system uses only zero and one.|Binary
This type of malicious software locks files and demands payment.|Ransomware
This British computer scientist invented the World Wide Web.|Tim Berners-Lee
This programming language shares its name with a large snake.|Python
This technology turns readable information into coded data for security.|Encryption
This computer scientist is known for an early algorithm for the Analytical Engine.|Ada Lovelace
This network system translates domain names into IP addresses.|DNS (Domain Name System)
This principle predicts that transistor counts on integrated circuits roughly double over time.|Moore's law
`],
['Quick Maths', '+', `
This is the result of multiplying 7 by 8.|56
This is the number of sides on a triangle.|Three
This is half of 100.|50
This is the square root of 81.|9
This is the number of degrees in a right angle.|90
This is the next prime number after 7.|11
This is the sum of the interior angles of a triangle in degrees.|180
This is 15 percent of 200.|30
This mathematical constant is a circle's circumference divided by its diameter.|Pi (π)
This is the hypotenuse of a right triangle with other sides 3 and 4.|5
This is the result of 2 to the power of 10.|1024
This is the number of faces on a cube.|Six
This is the derivative of x squared with respect to x.|2x
This is the sum of the first ten positive integers.|55
This term describes a number divisible only by 1 and itself, greater than 1.|A prime number
`],
['Word Nerd', 'Aa', `
This is the opposite of the word generous.|Stingy (or mean)
This punctuation mark ends a direct question.|A question mark
This is the plural of mouse, the animal.|Mice
This term means a word with the same or a similar meaning as another.|A synonym
This figure of speech compares two things using like or as.|A simile
This is a word that reads the same forward and backward.|A palindrome
This term describes rearranging the letters of a word to make another.|An anagram
This word describes a word that imitates a sound, such as buzz.|Onomatopoeia
This figure of speech deliberately exaggerates for effect.|Hyperbole
This phrase combines contradictory terms, as in deafening silence.|An oxymoron
This term describes the origin and history of a word.|Etymology
This literary device repeats initial consonant sounds, as in wild winds whistle.|Alliteration
This sentence contains every letter of the alphabet at least once.|A pangram
This term describes a word or phrase used in place of one considered harsh.|A euphemism
This term names a word formed from the initial letters of a phrase and spoken as a word.|An acronym
`],
['Myths & Legends', 'ϟ', `
This Greek god rules the sky and wields thunderbolts.|Zeus
This legendary creature breathes fire and often guards treasure.|A dragon
This mythical horse has a single horn.|A unicorn
This Norse god wields the hammer Mjölnir.|Thor
This Greek hero performed twelve famous labors.|Heracles (Hercules)
This creature has the upper body of a human and the lower body of a horse.|A centaur
This Greek goddess is associated with wisdom and Athens.|Athena
This mythical bird rises again from its own ashes.|The phoenix
This legendary king is associated with the sword Excalibur.|King Arthur
This monster has snakes for hair and a gaze that turns people to stone.|Medusa
This Norse trickster is the father of the wolf Fenrir.|Loki
This Greek hero flew too close to the Sun with wax-and-feather wings.|Icarus
This three-headed dog guards the entrance to the Greek underworld.|Cerberus
This Egyptian god of the dead is often shown with a jackal's head.|Anubis
This world tree connects the realms in Norse mythology.|Yggdrasil
`],
['Under the Sea', '≈', `
This sea animal has eight arms.|An octopus
This fish is famous for its sharp teeth and a dorsal fin.|A shark
These colorful reef structures are built by tiny animals called polyps.|Corals
This is the largest ocean on Earth.|The Pacific Ocean
This marine mammal is known for intelligence, clicks, and whistles.|A dolphin
This sea creature has five arms in its familiar star-shaped form.|A sea star (starfish)
This is the deepest known ocean trench.|The Mariana Trench
This process causes ocean water to rise and fall mainly due to lunar gravity.|The tides
These tiny ocean organisms drift with currents and form the base of many marine food webs.|Plankton
This warm Atlantic current flows from the Gulf of Mexico toward Europe.|The Gulf Stream
This deep-sea fish uses a glowing lure to attract prey.|An anglerfish
This fish is the largest living species of fish.|The whale shark
This term describes the production of light by living organisms.|Bioluminescence
This ocean layer marks a rapid change in temperature with depth.|The thermocline
This research vessel gave its name to the deepest known point in the ocean.|HMS Challenger
`],
['Planet Earth', '⊕', `
This is the largest continent by land area.|Asia
This continent surrounds the South Pole.|Antarctica
This imaginary line divides Earth into northern and southern hemispheres.|The equator
This is the world's largest hot desert.|The Sahara
This mountain is the highest above sea level.|Mount Everest
This rainforest covers much of northern South America.|The Amazon rainforest
This mountain range separates much of Europe from Asia.|The Ural Mountains
This sea lies between Europe and northern Africa.|The Mediterranean Sea
This is the largest island that is not considered a continent.|Greenland
This river flows through Baghdad.|The Tigris
This strait separates Spain from Morocco.|The Strait of Gibraltar
This South American mountain range runs along the continent's western edge.|The Andes
This lake, in Siberia, is the world's deepest lake.|Lake Baikal
This imaginary line at 0 degrees longitude runs through Greenwich.|The prime meridian
This desert spans parts of Mongolia and northern China.|The Gobi Desert
`],
['Bright Ideas', '☼', `
This invention allows people to see tiny objects using lenses.|The microscope
This invention lets people speak to each other over long distances using sound signals.|The telephone
This household appliance keeps food cold.|The refrigerator
These brothers achieved powered flight at Kitty Hawk in 1903.|The Wright brothers
This inventor is associated with the movable-type printing press in 15th-century Europe.|Johannes Gutenberg
This scientist discovered penicillin in 1928.|Alexander Fleming
This safety invention inflates during a vehicle collision.|The airbag
This invention uses radio waves to detect distant objects.|Radar
This inventor gave his name to a temperature scale and developed a mercury thermometer.|Daniel Gabriel Fahrenheit
This Swedish inventor developed dynamite and established famous prizes.|Alfred Nobel
This French scientist developed a method to heat liquids to kill harmful microbes.|Louis Pasteur
This engineer improved the steam engine and gave his name to a unit of power.|James Watt
This scientist discovered X-rays in 1895.|Wilhelm Röntgen
This inventor developed a practical telephone and received a famous 1876 patent.|Alexander Graham Bell
This device converts mechanical energy into electrical energy.|A generator
`],
['Flying the Flag', '⚐', `
This country's flag features a red circle on a white background.|Japan
This country's flag features a red maple leaf.|Canada
This country's flag is nicknamed the Stars and Stripes.|The United States
This country's flag is a white cross on a red square.|Switzerland
This country's flag has a yellow Nordic cross on blue.|Sweden
This country's flag combines a green field, yellow diamond, and blue globe.|Brazil
This country's flag has vertical green, white, and orange stripes.|Ireland
This country's flag features a red dragon.|Wales
This country's flag has a red field with one large and four small yellow stars.|China
This country's national flag consists of two stacked triangular pennants.|Nepal
This country's flag has three vertical stripes of blue, white, and red, in that order.|France
This country's flag features a cedar tree.|Lebanon
This country's flag features a white dragon on yellow and orange fields.|Bhutan
This country's flag includes an AK-47 rifle.|Mozambique
This field of study focuses on flags.|Vexillology
`],
['Getting Around', '➜', `
This two-wheeled vehicle is powered by pedals.|A bicycle
This vehicle runs on rails and often consists of connected carriages.|A train
This vehicle travels underwater.|A submarine
This city is known for its gondolas on canals.|Venice
This aircraft can take off vertically using spinning rotor blades.|A helicopter
This railway connects Britain and France beneath the English Channel.|The Channel Tunnel
This term describes the left side of a ship when facing forward.|Port
This term describes the right side of a ship when facing forward.|Starboard
This Japanese high-speed rail network is commonly called the bullet train.|Shinkansen
This supersonic passenger aircraft was jointly developed by Britain and France.|Concorde
This canal connects the Atlantic and Pacific oceans through Central America.|The Panama Canal
This floating craft travels on a cushion of air.|A hovercraft
This railway vehicle uses magnetic levitation to reduce contact with the track.|A maglev train
This nautical unit of speed equals one nautical mile per hour.|A knot
This railway climbs steep slopes with two cars connected by a cable.|A funicular
`],
['Style File', '◇', `
This garment is traditionally worn around the neck to keep warm.|A scarf
This item protects your head from rain or sun.|A hat
These shoes are commonly worn for running and sports.|Trainers (sneakers)
This fabric is used to make most blue jeans.|Denim
This traditional Japanese garment is a long robe with wide sleeves.|A kimono
This Scottish garment is a pleated, knee-length skirt.|A kilt
This French fashion designer is associated with the little black dress and No. 5 perfume.|Coco Chanel
This fiber is produced by silkworms.|Silk
This patterned fabric is associated with Scottish clans.|Tartan
This French term means custom-made high fashion.|Haute couture
This hat has a wide brim and is strongly associated with Mexico.|A sombrero
This garment is a single length of cloth draped traditionally by women in South Asia.|A sari
This weaving pattern creates a diagonal rib and is common in denim.|Twill
This natural fiber comes from the flax plant.|Linen
This ornamental sewing technique creates designs with needle and thread.|Embroidery
`],
['Built to Last', '⌂', `
This famous iron tower is a symbol of Paris.|The Eiffel Tower
This ancient wall stretches across parts of northern China.|The Great Wall of China
This leaning bell tower stands in an Italian city of the same name.|The Leaning Tower of Pisa
This Indian white-marble mausoleum was built by Shah Jahan.|The Taj Mahal
This New York harbor statue holds a torch.|The Statue of Liberty
This prehistoric stone circle stands on Salisbury Plain in England.|Stonehenge
This Roman amphitheater is also called the Flavian Amphitheatre.|The Colosseum
This San Francisco suspension bridge is painted International Orange.|The Golden Gate Bridge
This ancient Greek temple on the Acropolis was dedicated to Athena.|The Parthenon
This architect designed the house Fallingwater.|Frank Lloyd Wright
This architectural style is known for pointed arches and flying buttresses.|Gothic
This Cambodian temple complex appears on the country's flag.|Angkor Wat
This architect designed Barcelona's Casa Batlló and Park Güell.|Antoni Gaudí
This building school was founded by Walter Gropius in Germany in 1919.|The Bauhaus
This modernist architect designed Villa Savoye near Paris.|Le Corbusier
`],
['Green Fingers', '❧', `
This part of a plant usually absorbs water from the soil.|The roots
This flower often turns its young head toward sunlight and produces edible seeds.|A sunflower
This prickly desert plant stores water in its stem.|A cactus
This process lets plants use light to make sugars.|Photosynthesis
This pigment gives many leaves their green color.|Chlorophyll
These insects are well known for pollinating flowers and making honey.|Bees
This tree produces acorns.|An oak
This plant is the main food of giant pandas.|Bamboo
This aromatic herb is a main ingredient in traditional green pesto.|Basil
This process is the sprouting of a seed.|Germination
This carnivorous plant snaps shut on insects and is named after a Roman goddess.|The Venus flytrap
This type of tree sheds its leaves seasonally.|Deciduous
This tissue transports water upward from a plant's roots.|Xylem
This tissue transports sugars around a plant.|Phloem
These small pores on leaves regulate gas exchange.|Stomata
`],
['Weather Watch', '☁', `
This frozen precipitation falls in flakes.|Snow
This flash of electricity sometimes accompanies thunder.|Lightning
This instrument measures temperature.|A thermometer
This arc of colors can appear when sunlight passes through raindrops.|A rainbow
This instrument measures atmospheric pressure.|A barometer
This spinning column of air extends from a thunderstorm to the ground.|A tornado
This term describes the amount of water vapor in the air.|Humidity
This scale describes wind force, from calm to hurricane.|The Beaufort scale
This process turns water vapor into liquid droplets.|Condensation
These tall storm clouds often produce thunder and lightning.|Cumulonimbus clouds
This instrument measures wind speed.|An anemometer
This boundary separates two air masses with different temperatures.|A weather front
This Pacific warming pattern can influence weather around the world.|El Niño
This effect makes large-scale winds curve because Earth rotates.|The Coriolis effect
This temperature is the point at which air becomes saturated and condensation can begin.|The dew point
`],
['Numbers Everywhere', '#', `
This is the number of days in a normal week.|Seven
This is the number of months in a year.|Twelve
This is the number of minutes in an hour.|Sixty
This is the number of sides on a hexagon.|Six
This is the number of rings in the Olympic symbol.|Five
This is the number of letters in the modern English alphabet.|26
This is the number of squares on a standard chessboard.|64
This is the number of cards in a standard deck without jokers.|52
This Roman numeral represents the number 50.|L
This is the number of degrees in a full circle.|360
This is the number of elements in the periodic table through oganesson.|118
This is the number of strings on a standard violin.|Four
This is the atomic number of carbon.|Six
This Roman numeral represents one thousand.|M
This is the number of bits in a standard byte.|Eight
`],
['Center Stage', '✧', `
This playwright wrote Romeo and Juliet.|William Shakespeare
This person leads an orchestra, often using a baton.|A conductor
This is the raised platform where actors perform.|A stage
This musical follows a masked figure beneath a Paris opera house.|The Phantom of the Opera
This Shakespeare tragedy features the Prince of Denmark.|Hamlet
This musical is based on the songs of ABBA.|Mamma Mia!
This dance form includes positions called plié and arabesque.|Ballet
This musical tells the story of Alexander Hamilton.|Hamilton
This Shakespeare play features the witches who greet a Scottish general.|Macbeth
This opera by Bizet features a Spanish cigarette factory worker.|Carmen
This musical is based on Victor Hugo's novel about Jean Valjean.|Les Misérables
This composer wrote the ballet Swan Lake.|Pyotr Ilyich Tchaikovsky
This playwright wrote A Doll's House.|Henrik Ibsen
This theater term means an extended speech by one character alone on stage.|A soliloquy
This Samuel Beckett play features Vladimir and Estragon waiting for someone.|Waiting for Godot
`],
['Say It Again', '“ ”', `
Bonjour means hello in this language.|French
Hola means hello in this language.|Spanish
Ciao is a familiar greeting in this language.|Italian
This Spanish word means thank you.|Gracias
This French word means thank you.|Merci
This German word means yes.|Ja
This language uses the greeting konnichiwa.|Japanese
This language is the main official language of Brazil.|Portuguese
This alphabet is used to write Russian.|Cyrillic
This language is the source of the word safari.|Swahili
This classical language gave us the phrase carpe diem.|Latin
This language, spoken in Iran, is also called Farsi.|Persian
This language family includes English, German, and Swedish.|The Germanic language family
This constructed international language was created by L. L. Zamenhof.|Esperanto
This language isolate is spoken in parts of northern Spain and southwestern France.|Basque
`],
['Rocks & Rivers', '⛰', `
This molten rock flows out of a volcano onto the surface.|Lava
This natural watercourse usually flows toward a sea, lake, or another river.|A river
This frozen mass of ice slowly moves over land.|A glacier
This rock type forms when molten material cools and solidifies.|Igneous rock
This term describes the wearing away of rock by water, wind, or ice.|Erosion
This natural event occurs when Earth's crust suddenly releases stored energy.|An earthquake
This is molten rock beneath Earth's surface.|Magma
This rock forms when limestone is changed by heat and pressure.|Marble
This opening in Earth's crust can release lava, ash, and gas.|A volcano
This theory explains the movement of large sections of Earth's outer shell.|Plate tectonics
This fan-shaped deposit often forms at the mouth of a river.|A delta
This mineral is the hardest on the Mohs scale.|Diamond
This igneous rock cools quickly into natural volcanic glass.|Obsidian
This boundary separates Earth's crust from the mantle.|The Mohorovičić discontinuity (Moho)
This landform is a narrow sea inlet carved by a glacier.|A fjord
`],
['Sweet Tooth', '♢', `
This frozen dessert is commonly served in a cone.|Ice cream
This sweet substance is made by honeybees.|Honey
This sweet food is made from cacao beans.|Chocolate
This French pastry has a crescent shape and flaky layers.|A croissant
This dessert consists of a baked crust filled with apples.|Apple pie
This small round French sandwich cookie is usually made with almond flour.|A macaron
This Italian dessert layers coffee-soaked ladyfingers with mascarpone cream.|Tiramisu
This Middle Eastern pastry layers filo dough, nuts, and syrup.|Baklava
This custard dessert has a caramelized sugar crust.|Crème brûlée
This Italian frozen dessert is often denser than American-style ice cream.|Gelato
This whipped mixture of egg whites and sugar can be baked into a crisp dessert.|Meringue
This Spanish fried-dough treat is often dipped in chocolate.|Churros
This French pastry dough is used to make éclairs and profiteroles.|Choux pastry
This Italian dessert's name literally means cooked cream.|Panna cotta
This Japanese sweet is made from pounded glutinous rice.|Mochi
`],
['Everyday Wonders', '✳', `
This object uses a magnetized needle to show north.|A compass
This tool has two blades joined at a pivot and is used for cutting.|Scissors
This device tells you how much an object weighs.|A scale
This natural phenomenon makes a straw appear bent in a glass of water.|Refraction
This type of mirror curves outward and gives a wider field of view.|A convex mirror
This simple machine is a wheel with a grooved rim and a rope.|A pulley
This force opposes motion between two surfaces touching each other.|Friction
This process makes wet clothes dry as liquid water becomes vapor.|Evaporation
This property explains why a needle can float carefully on water's surface.|Surface tension
This principle explains the upward force on an object placed in a fluid.|Archimedes' principle
This effect changes the perceived pitch of a siren as it passes you.|The Doppler effect
This type of heat transfer occurs by the movement of a liquid or gas.|Convection
This tendency of an object to resist changes in its motion is described by Newton's first law.|Inertia
This law states that pressure applied to an enclosed fluid is transmitted throughout it.|Pascal's law
This effect makes water rise in a thin tube against gravity.|Capillary action
`]
];

export const QUESTION_BANK = sets.map(([name, icon, text], category) => ({
  id: `category-${category}`, name, icon,
  clues: text.trim().split('\n').map((line, index) => {
    const [question, answer] = line.split('|');
    return { id: `q-${category}-${index}`, tier: Math.floor(index / 3), question, answer };
  })
}));
export const QUESTION_COUNT = QUESTION_BANK.reduce((total, category) => total + category.clues.length, 0);
