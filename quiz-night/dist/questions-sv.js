// Swedish counterparts use the same IDs as the English bank. Never reorder these
// categories or clues: saved games and recent-question history rely on those IDs.
const sets = [
['Världens städer', `
Eiffeltornet står i den här franska huvudstaden.|Paris
Colosseum är ett antikt landmärke i den här italienska staden.|Rom
Big Bens klocktorn blickar ut över den här brittiska huvudstaden.|London
Den här japanska huvudstaden hette tidigare Edo.|Tokyo
Sagrada Família är ett landmärke i den här spanska staden.|Barcelona
Den här australiska staden har ett berömt operahus med segelliknande tak.|Sydney
Karlsbron korsar floden Vltava i den här tjeckiska huvudstaden.|Prag
Akropolis reser sig över den här grekiska huvudstaden.|Aten
Den här portugisiska huvudstaden ligger nära floden Tejos mynning.|Lissabon
Blå moskén är ett landmärke i den här staden som ligger i både Europa och Asien.|Istanbul
Den här marockanska staden är känd för torget Jemaa el-Fna.|Marrakech
Palatskomplexet Alhambra blickar ut över den här spanska staden.|Granada
Potalapalatset ligger högt över den här tibetanska staden.|Lhasa
I den här polska staden ligger slottet Wawel.|Kraków
Petronas tvillingtorn står i den här malaysiska huvudstaden.|Kuala Lumpur
`],
['Länder', `
Det här landet liknar en stövel på kartan.|Italien
Pyramiderna i Giza ligger i det här landet.|Egypten
Det här landet är hem för kängurur och staden Perth.|Australien
Ett lönnlöv finns på det här landets flagga.|Kanada
Rio de Janeiro och São Paulo är städer i det här landet.|Brasilien
Berget Fuji ligger i det här öriket.|Japan
Oslo och Bergen ligger i det här landet.|Norge
Machu Picchu ligger i det här sydamerikanska landet.|Peru
Den antika staden Petra ligger i det här landet.|Jordanien
Det här kustlösa landet ligger i Pyrenéerna mellan Frankrike och Spanien.|Andorra
Det här afrikanska landet kallades förr Abessinien.|Etiopien
Thimphu är huvudstad i det här landet i Himalaya.|Bhutan
Det här landet omger hela landet Lesotho.|Sydafrika
Paramaribo är huvudstad i det här sydamerikanska landet.|Surinam
Det här lilla landet ligger mellan Schweiz och Österrike.|Liechtenstein
`],
['Rymden', `
Den här stjärnan finns i mitten av vårt solsystem.|Solen
Den här planeten kallas den röda planeten.|Mars
Det här är namnet på jordens naturliga satellit.|Månen
Det här är den största planeten i vårt solsystem.|Jupiter
Den här planeten är känd för sitt tydliga ringsystem.|Saturnus
Den här kraften håller planeterna i sina banor runt solen.|Gravitationen
Vårt solsystem finns i den här galaxen.|Vintergatan
Den här astronauten blev först att gå på månen 1969.|Neil Armstrong
Den här planeten ligger närmast solen.|Merkurius
Den här himlakroppen omklassificerades från planet till dvärgplanet 2006.|Pluto
Det här ordet beskriver vissa stjärnors explosiva död.|En supernova
Den här planeten roterar liggande på sidan i förhållande till sitt banplan.|Uranus
Den här gränsen omger ett svart hål och markerar varifrån inte ens ljus kan ta sig ut.|Händelsehorisonten
Den här Saturnusmånen har en tjock atmosfär och sjöar av flytande metan.|Titan
Det här astronomiska avståndsmåttet är sträckan ljuset färdas på ett år.|Ett ljusår
`],
['I laboratoriet', `
H₂O är den kemiska formeln för det här ämnet.|Vatten
Den här gasen behöver människor för att andas.|Syre
Vid så här många grader Celsius fryser vatten.|0 °C
Det här finns i mitten av en atom.|Atomkärnan
Det här grundämnet har den kemiska beteckningen Au.|Guld
Den här gasen utgör den största delen av jordens atmosfär.|Kväve
Den här skalan visar hur sur eller basisk en lösning är.|pH-skalan
De här negativt laddade partiklarna omger atomkärnan.|Elektroner
Det här grundämnet har atomnummer 1.|Väte
Den här lagen säger att energi inte kan skapas eller förstöras i ett isolerat system.|Energiprincipen
Den här forskaren utvecklade den allmänna relativitetsteorin.|Albert Einstein
Den här enheten används för elektrisk resistans.|Ohm
Så kallas atomer av samma grundämne med olika antal neutroner.|Isotoper
Den här processen innebär att ett fast ämne övergår direkt till gas.|Sublimering
Den här konstanten kopplar en fotons energi till dess frekvens.|Plancks konstant
`],
['Vilda djur', `
Det här randiga kattdjuret är oftast orange, svart och vitt.|En tiger
Det här höga afrikanska däggdjuret har en mycket lång hals.|En giraff
Den här svartvita björnen äter mest bambu.|Jättepandan
Det här är den största nu levande djurarten.|Blåvalen
Det här australiska pungdjuret hoppar och bär sina ungar i en pung.|En känguru
Det här däggdjuret kan flyga aktivt genom att slå med vingarna.|En fladdermus
Det här äggläggande däggdjuret har en ankliknande näbb.|Näbbdjuret
En grupp lejon kallas detta på engelska.|A pride
Den här fågeln är känd för att kunna härma mänskligt tal.|En papegoja
Den här stora flygoförmögna fågeln hör hemma i Afrika.|Strutsen
Det här havsdäggdjuret använder verktyg för att öppna skaldjur medan det flyter på rygg.|Havsuttern
Den här ödlan kan röra ögonen oberoende av varandra och ändra hudfärg.|En kameleont
Den här nattaktiva primaten från Madagaskar har ett mycket långt långfinger.|Fingerdjuret (aye-aye)
Den här salamandern är känd för att behålla sina yttre gälar som vuxen.|Axolotlen
Det här fjällklädda däggdjuret rullar ihop sig till en boll för att skydda sig.|Myrkotten
`],
['Människokroppen', `
Det här organet pumpar blod genom kroppen.|Hjärtat
De här två organen sköter huvuddelen av andningen.|Lungorna
Det här organet styr tankar, minne och rörelser.|Hjärnan
Det här är människokroppens största organ.|Huden
De här benen bildar en skyddande bur runt bröstkorgen.|Revbenen
Det här pigmentet bidrar till hudens och hårets färg.|Melanin
Det här benet sträcker sig från höften till knät.|Lårbenet
De här cellerna transporterar syre i blodet.|Röda blodkroppar
Den här muskeln under lungorna hjälper dig att andas.|Diafragman (mellangärdet)
I de här små luftsäckarna i lungorna utbyts syre och koldioxid.|Alveolerna (lungblåsorna)
Det här organet producerar insulin.|Bukspottkörteln
Den här delen av ögat styr pupillens storlek.|Iris (regnbågshinnan)
Det här lilla benet i mellanörat heter som en del av ryttarens utrustning.|Stigbygeln
Den här delen av hjärnan är särskilt viktig för koordination och balans.|Lillhjärnan
Det här är den stora artären som leder blod från hjärtat.|Aorta (stora kroppspulsådern)
`],
['Mat, härliga mat', `
Den här italienska rätten består traditionellt av en platt degbotten med tomat och ost.|Pizza
Den här frukten är huvudingrediensen i guacamole.|Avokado
Det här livsmedlet görs genom att grädda deg, ofta med jäst.|Bröd
Den här japanska rätten innehåller vinägerkryddat ris med olika tillbehör eller fyllningar.|Sushi
Den här baljväxten är huvudingrediensen i traditionell hummus.|Kikärter
Den här spanska risrätten tillagas traditionellt i en bred, grund panna.|Paella
Den här koreanska rätten består av fermenterade grönsaker, ofta kål.|Kimchi
Den här kryddan ger många curryrätter deras starkt gula färg.|Gurkmeja
Den här franska pajen har en fyllning med ägg och grädde.|Quiche
Den här salladen från Mellanöstern innehåller vanligtvis persilja, bulgur och tomater.|Tabbouleh
Den här italienska risrätten rörs om medan buljong tillsätts lite i taget.|Risotto
Den här mexikanska såsen kan innehålla chili, kryddor och choklad.|Mole
Det här japanska ordet beskriver grundsmaken som förknippas med glutamat.|Umami
Det här klarifierade smöret är vanligt i sydasiatisk matlagning.|Ghee
Den här pastan av fermenterade sojabönor är central i en japansk soppa.|Miso
`],
['I koppen', `
Den här varma drycken bryggs av rostade bönor.|Kaffe
Den här drycken görs traditionellt genom att låta blad dra i varmt vatten.|Te
Den här citrusfrukten ger klassisk lemonad dess smak.|Citron
Den här kaffedrycken innehåller espresso, ångad mjölk och mjölkskum.|Cappuccino
Den här drycken får man genom att pressa äpplen.|Äppeljuice
Det här ämnet skapar bubblorna i kolsyrat vatten.|Koldioxid
Det här pulveriserade gröna teet vispas traditionellt ner i varmt vatten.|Matcha
Den här sydamerikanska drycken bryggs på blad och dricks ofta genom ett metallsugrör.|Yerba mate
Den här indiska drycken blandar yoghurt med söta eller salta ingredienser.|Lassi
Den här spanska drycken innehåller ofta rödvin och skuren frukt.|Sangria
Det här fermenterade teet framställs med en kultur som kallas SCOBY.|Kombucha
Det här sydafrikanska örtteets namn betyder röd buske.|Rooibos
Det här metallsugröret används till mate och fungerar också som filter.|En bombilla
Det här italienska namnet används för espresso utspädd med varmt vatten.|Americano
Det här rubinröda örtteet kallas agua de jamaica när det serveras kallt i Mexiko.|Hibiskuste
`],
['På bio', `
Den här animerade cowboyen är Buzz Lightyears vän i Toy Story.|Woody
I den här filmen finns systrarna Elsa och Anna och sången Slå dig fri.|Frost (Frozen)
Den här trollkarlen går på Hogwarts med Ron och Hermione.|Harry Potter
Den här filmen från 1997 följer Jack och Rose på ett olycksdrabbat passagerarfartyg.|Titanic
Den här regissören gjorde Hajen och Jurassic Park.|Steven Spielberg
Det här gröna träsktrollet bor nära en mycket pratsam åsna.|Shrek
I den här filmen från 1999 får Neo välja mellan ett rött och ett blått piller.|Matrix (The Matrix)
Den här filmtrilogin följer uppdraget att förstöra Härskarringen.|Sagan om ringen
I den här Pixarfilmen hamnar råttan Remy i ett kök i Paris.|Råttatouille
Den här japanska regissören skapade Spirited Away och Min granne Totoro.|Hayao Miyazaki
Den här skådespelaren spelar Jack Sparrow i Pirates of the Caribbean-filmerna.|Johnny Depp
Den här svartvita filmen från 1942 utspelar sig bland annat på Ricks kafé i Marocko.|Casablanca
Den här Fritz Lang-filmen från 1927 skildrar en framtidsstad delad av klasskillnader.|Metropolis
Den här sydkoreanska regissören gjorde filmen Parasit från 2019.|Bong Joon-ho
Den här filmen av Akira Kurosawa inspirerade westernfilmen Sju vågade livet.|De sju samurajerna
`],
['TV-soffan', `
Den här gula tecknade familjen bor i Springfield.|Familjen Simpson
Den här komediserien följer sex vänner, bland andra Rachel, Ross och Monica.|Vänner (Friends)
Den här havssvampen bor i en ananas under havet.|Svampbob Fyrkant
Den här TV-serien innehåller den påhittade kontinenten Westeros.|Game of Thrones
I den här science fiction-serien finns en tidsmaskin som heter TARDIS.|Doctor Who
Pappan i den här tecknade familjen arbetar på ett kärnkraftverk.|Familjen Simpson
Den här komediserien utspelar sig till stor del på pappersföretaget Dunder Mifflin.|The Office
Den här serien följer kemiläraren Walter Whites väg in i kriminalitet.|Breaking Bad
I den här Netflix-serien finns en parallell dimension som kallas Upside Down.|Stranger Things
Den här komediserien handlar om parkförvaltningen i Pawnee, Indiana.|Parks and Recreation
Jean-Luc Picard är kapten på det här fiktiva rymdskeppet.|USS Enterprise
I den här serien spelar Jason Sudeikis en fotbollstränare.|Ted Lasso
Den här mysterieserien börjar med Laura Palmers död.|Twin Peaks
Det här dramat följer reklammannen Don Draper.|Mad Men
Familjen i den här komediserien äger ett stånd som säljer frysta bananer.|Arrested Development
`],
['Musikmix', `
Det här instrumentet har vanligtvis 88 svarta och vita tangenter.|Ett piano
Den här sångaren kallades King of Pop.|Michael Jackson
I det här bandet spelade John, Paul, George och Ringo.|The Beatles
Det här stråkinstrumentet hålls vanligtvis under hakan.|En violin (fiol)
Det här förtecknet höjer en ton med ett halvt tonsteg.|Ett korsförtecken
Det här brittiska bandet släppte Bohemian Rhapsody.|Queen
Den här kompositören skrev Månskenssonaten.|Ludwig van Beethoven
Den här jamaicanska musikern bidrog till att sprida reggae över hela världen.|Bob Marley
Den här italienska tempobeteckningen betyder snabbt och livligt.|Allegro
Den här musikern släppte albumet Purple Rain.|Prince
Det här stora stråkinstrumentet hålls mellan musikerns knän.|En cello
Den här kompositören skrev De fyra årstiderna.|Antonio Vivaldi
Den här ryska kompositören skrev baletten Våroffer.|Igor Stravinskij
Den här musiktermen betyder att ljudstyrkan gradvis ska öka.|Crescendo
Den här jazzmusikern hade smeknamnet Satchmo.|Louis Armstrong
`],
['I bokhyllan', `
Den här barnboksfiguren är en honungsälskande björn som bor i Sjumilaskogen.|Nalle Puh
Den här flickan följer efter en kanin till Underlandet.|Alice
Den här författaren skapade Harry Potter.|J. K. Rowling
Den här författaren skrev Bilbo – En hobbits äventyr.|J. R. R. Tolkien
Den här författaren skrev Stolthet och fördom.|Jane Austen
I den här romanen jagar kapten Ahab en val.|Moby Dick
I den här romanen av George Orwell finns Storebror.|1984
Den här författaren skapade detektiven Sherlock Holmes.|Arthur Conan Doyle
Berättaren i den här romanen är en flicka som kallas Scout Finch.|Dödssynden (To Kill a Mockingbird)
Den här författaren skrev Hundra år av ensamhet.|Gabriel García Márquez
Den här dystopiska romanens titel är en temperatur där papper påstås börja brinna.|Fahrenheit 451
Den här ryska författaren skrev Brott och straff.|Fjodor Dostojevskij
Den här författaren skapade den fiktiva staden Macondo.|Gabriel García Márquez
Den här portugisiska författaren skrev romanen Blindheten.|José Saramago
Det här episka diktverket följer Dante genom helvetet, skärselden och paradiset.|Den gudomliga komedin
`],
['Historielektion', `
Det här passagerarfartyget sjönk på sin jungfruresa 1912.|Titanic
Den här muren delade en tysk stad fram till 1989.|Berlinmuren
Den här egyptiska drottningen förknippas med Julius Caesar och Marcus Antonius.|Kleopatra
Den här franska militärledaren krönte sig själv till kejsare 1804.|Napoleon Bonaparte
Det här dokumentet från 1215 begränsade den engelske kungen Johan utan lands makt.|Magna Carta
Det här kriget slutade 1945 efter axelmakternas nederlag.|Andra världskriget
Den här revolutionen började i Frankrike 1789.|Franska revolutionen
Den här sjuksköterskan blev känd som damen med lampan.|Florence Nightingale
Den här civilisationen byggde staden Chichén Itzá.|Mayakulturen
I det här slaget 1066 segrade Vilhelm Erövraren i England.|Slaget vid Hastings
Det här riket styrdes från Konstantinopel och föll 1453.|Bysantinska riket (Östrom)
Den här upptäcktsresandens expedition fullbordade den första världsomseglingen efter hans död.|Ferdinand Magellan
Det här fredsavtalet avslutade formellt första världskriget mellan Tyskland och de allierade.|Versaillesfreden
Den här freden från 1648 bidrog till att avsluta trettioåriga kriget.|Westfaliska freden
Den här haitiska revolutionsledaren kallades den svarte Napoleon.|Toussaint Louverture
`],
['Antikens värld', `
De här triangelformade monumenten var gravar åt egyptiska faraoner.|Pyramider
Den här antika civilisationen höll gladiatorspel i Colosseum.|Romarriket
Den här floden var livsviktig för det forntida Egypten.|Nilen
Den här antika grekiska stadsstaten var känd för sitt militära samhälle.|Sparta
Det här skriftsystemet använde bildliknande tecken i det forntida Egypten.|Hieroglyfer
Det här antika grekiska idrottsevenemanget inspirerade de moderna olympiska spelen.|De antika olympiska spelen
Den här romerska staden begravdes av Vesuvius år 79 e.Kr.|Pompeji
Den här antika grekiska filosofen var Platons lärare.|Sokrates
Den här makedonske kungen byggde ett rike som sträckte sig till Indien.|Alexander den store
Den här stenen hjälpte forskare att tyda egyptiska hieroglyfer.|Rosettastenen
Det här forntida området låg mellan floderna Tigris och Eufrat.|Mesopotamien
Den här karthagiske fältherren korsade Alperna med elefanter.|Hannibal
Det här mesopotamiska skriftsystemet använde kilformade märken.|Kilskrift
Den här babyloniske kungen förknippas med en berömd nedskriven lag.|Hammurabi
Den här bronsålderskulturen byggde palatset i Knossos på Kreta.|Den minoiska kulturen
`],
['Konst & konstnärer', `
Den här konstnären målade Mona Lisa.|Leonardo da Vinci
Den här konstnären skar av en del av sitt öra och målade Stjärnenatt.|Vincent van Gogh
När röd och blå färg blandas får man vanligtvis den här färgen.|Lila
Den här konstnären målade taket i Sixtinska kapellet.|Michelangelo
Den här spanska konstnären målade Guernica.|Pablo Picasso
I den här konsttekniken skapas en bild av små bitar av exempelvis glas eller sten.|Mosaik
Den här mexikanska konstnären är känd för sina självporträtt och karakteristiska ögonbryn.|Frida Kahlo
Monets näckrosmålningar hör till den här konstriktningen.|Impressionismen
Den här surrealisten målade smältande klockor i Minnets envishet.|Salvador Dalí
Den här nederländska konstnären målade Flicka med pärlörhänge.|Johannes Vermeer
Den här amerikanska konstnären gjorde berömda bilder av Campbells soppburkar.|Andy Warhol
Den här japanska konstnären skapade Den stora vågen utanför Kanagawa.|Katsushika Hokusai
Den här konstnären skapade skulpturen Tänkaren.|Auguste Rodin
Den här tekniken innebär att man målar direkt på färsk, våt puts.|Freskmåleri
Den här norska konstnären skapade Skriet.|Edvard Munch
`],
['Sport & poäng', `
I den här sporten försöker spelarna sparka en boll in i ett mål.|Fotboll
Den här racketsporten spelas i Wimbledon.|Tennis
I den här sporten studsar spelarna en boll och försöker träffa en korg.|Basket
I den här sporten används en fjäderboll.|Badminton
Det här kallas ett resultat som är ett slag under par på ett golfhål.|Birdie
I den här sporten används orden strike, spärr och ränna.|Bowling
Så här många spelare har ett volleybollag på planen samtidigt.|Sex
Den här olympiska grenen kombinerar simning, cykling och löpning.|Triathlon
Det här engelska ordet betyder noll i tennisräkning.|Love
Det här är den officiella maratondistansen i kilometer.|42,195 kilometer
I det här cykelloppet bär totalledaren en gul tröja.|Tour de France
Det här fäktvapnet har en giltig träffyta som är begränsad till bålen.|Florett
Den här friidrottstävlingen består av tio olika grenar.|Tiokamp
I cricket kallas tre wickets på tre på varandra följande kast detta.|Hat-trick
Det här gymnastikredskapet har två handtag och är uppkallat efter ett djur.|Bygelhäst
`],
['Spel vi spelar', `
Det här brädspelet har kungar, damer, löpare och bönder.|Schack
I det här spelet köper spelarna tomter och försöker undvika konkurs.|Monopol
Den här TV-spelsfiguren är en rörmokare med röd keps och en bror som heter Luigi.|Mario
Det här byggspelet med block innehåller varelser som kallas Creepers.|Minecraft
I det här ordspelet har spelarna sju bokstavsbrickor på sitt ställ.|Scrabble (Alfapet godtas)
Det här kortspelet har samma spanska namn som talet ett.|Uno
Det här spelet med fallande block skapades av Aleksej Pazjitnov.|Tetris
Den här schackpjäsen rör sig i ett L-format mönster.|Springaren
Det här bordsrollspelet använder en tjugosidig tärning och en Dungeon Master.|Dungeons & Dragons
I det här brädspelet ska spelarna hitta en mördare, ett rum och ett vapen.|Cluedo
Det här specialdraget i schack flyttar både kungen och ett torn.|Rockad
Den här spelserien utspelar sig i Hyrule och har ofta Link som huvudperson.|The Legend of Zelda
I det här gamla strategispelet placeras svarta och vita stenar på ett rutnät.|Go
Den här schacktermen betyder att en spelare saknar lagliga drag utan att stå i schack.|Patt
Det här sifferpusslet har ett rutnät med nio gånger nio rutor.|Sudoku
`],
['Tekniksnack', `
Den här enheten flyttar en pekare när du drar den över skrivbordet.|En datormus
Den här tangenten lägger vanligtvis in ett tomt mellanrum i text.|Mellanslagstangenten
Den här symbolen skiljer användarnamn från domän i en e-postadress.|Snabel-a (@)
De här tre bokstäverna står för Central Processing Unit.|CPU
Den här typen av program används för att besöka webbplatser.|En webbläsare
Den här trådlösa tekniken har ett engelskt namn som betyder blå tand.|Bluetooth
De här fyra bokstäverna står för Hypertext Markup Language.|HTML
Det här talsystemet använder bara nollor och ettor.|Det binära talsystemet
Den här typen av skadlig programvara låser filer och kräver betalning.|Utpressningsprogram (ransomware)
Den här brittiska datavetaren uppfann World Wide Web.|Tim Berners-Lee
Det här programmeringsspråket har samma engelska namn som en stor orm.|Python
Den här tekniken omvandlar läsbar information till kodad data för att skydda den.|Kryptering
Den här matematikern är känd för en tidig algoritm till den analytiska maskinen.|Ada Lovelace
Det här nätverkssystemet översätter domännamn till IP-adresser.|DNS (Domain Name System)
Den här lagen beskriver hur antalet transistorer på integrerade kretsar ungefär fördubblas med tiden.|Moores lag
`],
['Snabbmatte', `
Det här blir 7 gånger 8.|56
Så här många sidor har en triangel.|Tre
Det här är hälften av 100.|50
Det här är kvadratroten ur 81.|9
Så här många grader är en rät vinkel.|90
Det här är nästa primtal efter 7.|11
Så här många grader är summan av en triangels inre vinklar.|180
Det här är 15 procent av 200.|30
Den här konstanten är en cirkels omkrets delad med dess diameter.|Pi (π)
Så lång är hypotenusan i en rätvinklig triangel vars andra sidor är 3 och 4.|5
Det här är 2 upphöjt till 10.|1024
Så här många sidoytor har en kub.|Sex
Det här är derivatan av x i kvadrat med avseende på x.|2x
Det här är summan av de tio första positiva heltalen.|55
Så kallas ett heltal större än 1 som bara är delbart med 1 och sig självt.|Ett primtal
`],
['Ordälskare', `
Det här är motsatsen till generös.|Snål
Det här skiljetecknet avslutar en direkt fråga.|Ett frågetecken
Det här är pluralformen av engelskans mouse när det handlar om djuret.|Mice
Så kallas ett ord som har samma eller nästan samma betydelse som ett annat.|En synonym
Den här stilfiguren jämför två saker med ord som liksom eller som.|En liknelse
Så kallas ett ord som läses likadant framifrån och bakifrån.|Ett palindrom
Så kallas ett nytt ord som bildas genom att bokstäverna i ett annat ord kastas om.|Ett anagram
Det här begreppet beskriver ljudhärmande ord, till exempel svisch.|Onomatopoesi
Den här stilfiguren överdriver medvetet för att förstärka en effekt.|Hyperbol
Den här stilfiguren förenar motsägelsefulla ord, som talande tystnad.|Oxymoron
Det här ämnet handlar om ordens ursprung och historia.|Etymologi
Den här stilfiguren upprepar inledande konsonantljud, som i vilda vindar viner.|Allitteration
Så kallas en mening som innehåller alfabetets alla bokstäver minst en gång.|Ett pangram
Så kallas en mildare omskrivning för ett uttryck som uppfattas som hårt.|En eufemism
Så kallas en förkortning som bildas av begynnelsebokstäver och uttalas som ett ord.|En akronym
`],
['Myter & legender', `
Den här grekiska guden härskar över himlen och kastar blixtar.|Zeus
Den här sagovarelsen sprutar eld och vaktar ofta skatter.|En drake
Den här mytiska hästen har ett enda horn.|En enhörning
Den här nordiska guden bär hammaren Mjölner.|Tor
Den här grekiska hjälten utförde tolv berömda stordåd.|Herakles (Herkules)
Den här varelsen har en människas överkropp och en hästs underkropp.|En kentaur
Den här grekiska gudinnan förknippas med vishet och staden Aten.|Athena
Den här mytiska fågeln återuppstår ur sin egen aska.|Fågel Fenix
Den här sagokungen förknippas med svärdet Excalibur.|Kung Arthur
Det här monstret har ormar till hår och en blick som förvandlar människor till sten.|Medusa
Den här nordiska lurendrejaren är far till Fenrisulven.|Loke
Den här grekiska sagofiguren flög för nära solen med vingar av vax och fjädrar.|Ikaros
Den här trehövdade hunden vaktar ingången till den grekiska underjorden.|Kerberos
Den här egyptiska dödsguden avbildas ofta med schakalhuvud.|Anubis
Det här världsträdet binder samman världarna i nordisk mytologi.|Yggdrasil
`],
['Under ytan', `
Det här havsdjuret har åtta armar.|En åttaarmad bläckfisk (oktopus)
Den här fisken är känd för sina vassa tänder och sin ryggfena.|En haj
De här färgglada revbildningarna byggs av små djur som kallas polyper.|Koraller
Det här är jordens största hav.|Stilla havet
Det här havsdäggdjuret är känt för sin intelligens, sina klickljud och visslingar.|En delfin
Det här havsdjuret har i sin välkända stjärnform fem armar.|En sjöstjärna
Det här är den djupaste kända havsgraven.|Marianergraven
Det här fenomenet gör att havsytan stiger och sjunker, främst på grund av månens gravitation.|Tidvatten
De här små organismerna driver med havsströmmarna och utgör basen i många näringsvävar.|Plankton
Den här varma havsströmmen går från Mexikanska golfen över Atlanten mot Europa.|Golfströmmen
Den här djuphavsfisken lockar byten med ett lysande bete.|En djuphavsmarulk
Det här är den största nu levande fiskarten.|Valhajen
Det här begreppet betyder att levande organismer producerar ljus.|Bioluminiscens
I det här havsskiktet ändras temperaturen snabbt med djupet.|Termoklinen (temperatursprångskiktet)
Det här forskningsfartyget gav namn åt havets djupaste kända punkt.|HMS Challenger
`],
['Planeten jorden', `
Det här är världens största världsdel till ytan.|Asien
Den här kontinenten omger Sydpolen.|Antarktis
Den här tänkta linjen delar jorden i en nordlig och en sydlig halva.|Ekvatorn
Det här är världens största varma öken.|Sahara
Det här berget har världens högsta topp över havet.|Mount Everest
Den här regnskogen täcker en stor del av norra Sydamerika.|Amazonas regnskog
Den här bergskedjan utgör en stor del av gränsen mellan Europa och Asien.|Uralbergen
Det här havet ligger mellan Europa och norra Afrika.|Medelhavet
Det här är världens största ö som inte räknas som en kontinent.|Grönland
Den här floden rinner genom Bagdad.|Tigris
Det här sundet skiljer Spanien från Marocko.|Gibraltar sund
Den här sydamerikanska bergskedjan löper längs kontinentens västkust.|Anderna
Den här sjön i Sibirien är världens djupaste.|Bajkalsjön
Den här tänkta linjen vid noll graders longitud går genom Greenwich.|Nollmeridianen
Den här öknen breder ut sig över delar av Mongoliet och norra Kina.|Gobiöknen
`],
['Smarta uppfinningar', `
Med den här uppfinningen kan man se mycket små saker med hjälp av linser.|Mikroskopet
Den här uppfinningen låter människor prata med varandra över långa avstånd.|Telefonen
Den här hushållsapparaten håller maten kall.|Kylskåpet
De här bröderna genomförde en motordriven flygning vid Kitty Hawk 1903.|Bröderna Wright
Den här uppfinnaren förknippas med boktryckarkonsten med lösa typer i 1400-talets Europa.|Johann Gutenberg
Den här forskaren upptäckte penicillin 1928.|Alexander Fleming
Den här säkerhetsuppfinningen blåses upp vid en bilkollision.|Krockkudden
Den här uppfinningen använder radiovågor för att upptäcka avlägsna föremål.|Radar
Den här uppfinnaren gav namn åt en temperaturskala och utvecklade en kvicksilvertermometer.|Daniel Gabriel Fahrenheit
Den här svenska uppfinnaren utvecklade dynamiten och instiftade berömda priser.|Alfred Nobel
Den här franska forskaren utvecklade en metod att värma vätskor för att döda skadliga mikroorganismer.|Louis Pasteur
Den här ingenjören förbättrade ångmaskinen och gav namn åt en enhet för effekt.|James Watt
Den här forskaren upptäckte röntgenstrålningen 1895.|Wilhelm Röntgen
Den här uppfinnaren utvecklade en praktisk telefon och fick ett berömt patent 1876.|Alexander Graham Bell
Den här apparaten omvandlar mekanisk energi till elektrisk energi.|En generator
`],
['Världens flaggor', `
Det här landets flagga har en röd cirkel på vit botten.|Japan
Det här landets flagga har ett rött lönnlöv.|Kanada
Det här landets flagga kallas Stars and Stripes.|USA
Det här landets flagga har ett vitt kors på en röd kvadrat.|Schweiz
Det här landets flagga har ett gult nordiskt kors på blå botten.|Sverige
Det här landets flagga kombinerar ett grönt fält, en gul romb och ett blått klot.|Brasilien
Det här landets flagga har lodräta fält i grönt, vitt och orange.|Irland
Det här landets flagga har en röd drake.|Wales
Det här landets flagga har en stor och fyra små gula stjärnor på röd botten.|Kina
Det här landets flagga består av två triangulära vimplar ovanpå varandra.|Nepal
Det här landets flagga har tre lodräta fält i blått, vitt och rött, i den ordningen.|Frankrike
Det här landets flagga har ett cederträd.|Libanon
Det här landets flagga har en vit drake på gula och orange fält.|Bhutan
Det här landets flagga innehåller ett automatgevär av typen AK-47.|Moçambique
Det här ämnet handlar om studiet av flaggor.|Vexillologi
`],
['På väg', `
Det här tvåhjuliga fordonet drivs med pedaler.|En cykel
Det här fordonet går på räls och består ofta av sammankopplade vagnar.|Ett tåg
Det här fordonet färdas under vatten.|En ubåt
Den här staden är känd för sina gondoler på kanalerna.|Venedig
Den här luftfarkosten kan lyfta lodrätt med hjälp av roterande rotorblad.|En helikopter
Den här järnvägstunneln förbinder Storbritannien och Frankrike under Engelska kanalen.|Kanaltunneln
Det här är ett fartygs vänstra sida när man tittar framåt.|Babord
Det här är ett fartygs högra sida när man tittar framåt.|Styrbord
Det här japanska nätet av höghastighetståg kallas ofta för bullet train.|Shinkansen
Det här överljudspassagerarplanet utvecklades gemensamt av Storbritannien och Frankrike.|Concorde
Den här kanalen förbinder Atlanten och Stilla havet genom Centralamerika.|Panamakanalen
Den här farkosten färdas på en luftkudde.|En svävare
Det här tåget använder magnetisk svävning för att undvika kontakt med banan.|Ett maglevtåg
Den här hastighetsenheten till sjöss motsvarar en nautisk mil i timmen.|En knop
Den här typen av järnväg tar sig uppför branta sluttningar med två vagnar sammanbundna av en vajer.|En bergbana (funikular)
`],
['Mode & stil', `
Det här plagget bärs vanligtvis runt halsen för att hålla värmen.|En halsduk
Det här plagget skyddar huvudet mot regn eller sol.|En hatt
De här skorna används ofta till löpning och idrott.|Träningsskor (gympaskor)
Det här tyget används i de flesta blåjeans.|Denim (jeanstyg)
Det här traditionella japanska plagget är en lång dräkt med vida ärmar.|En kimono
Det här skotska plagget är en veckad, knälång kjol.|En kilt
Den här franska modeskaparen förknippas med den lilla svarta och parfymen No. 5.|Coco Chanel
Den här fibern produceras av silkesmaskar.|Silke
Det här rutmönstrade tyget förknippas med skotska klaner.|Tartan
Det här franska uttrycket betyder exklusivt, måttsytt mode.|Haute couture
Den här bredbrättade hatten förknippas starkt med Mexiko.|En sombrero
Det här plagget är ett långt tygstycke som traditionellt draperas av kvinnor i Sydasien.|En sari
Det här vävsättet ger diagonala ribbor och är vanligt i denim.|Kypert (twill)
Den här naturfibern kommer från linplantan.|Lin
Med den här dekorativa sömnadstekniken skapas mönster med nål och tråd.|Broderi
`],
['Byggt för att bestå', `
Det här berömda järntornet är en symbol för Paris.|Eiffeltornet
Den här gamla muren sträcker sig genom delar av norra Kina.|Kinesiska muren
Det här lutande klocktornet står i en italiensk stad med samma namn.|Lutande tornet i Pisa
Det här indiska mausoleet i vit marmor byggdes av Shah Jahan.|Taj Mahal
Den här statyn i New Yorks hamn håller en fackla.|Frihetsgudinnan
Den här förhistoriska stencirkeln står på Salisbury Plain i England.|Stonehenge
Den här romerska amfiteatern kallas också den flaviska amfiteatern.|Colosseum
Den här hängbron i San Francisco är målad i färgen International Orange.|Golden Gate-bron
Det här antika grekiska templet på Akropolis var tillägnat Athena.|Parthenon
Den här arkitekten ritade huset Fallingwater.|Frank Lloyd Wright
Den här byggnadsstilen är känd för spetsbågar och strävbågar.|Gotik
Det här kambodjanska tempelkomplexet finns på landets flagga.|Angkor Wat
Den här arkitekten ritade Casa Batlló och Park Güell i Barcelona.|Antoni Gaudí
Den här skolan för konst, formgivning och arkitektur grundades av Walter Gropius 1919.|Bauhaus
Den här modernistiska arkitekten ritade Villa Savoye nära Paris.|Le Corbusier
`],
['Gröna fingrar', `
Den här delen av en växt tar vanligtvis upp vatten ur jorden.|Rötterna
Den här blomman följer ofta solljuset som ung och har ätliga frön.|Solrosen
Den här taggiga ökenväxten lagrar vatten i sin stam.|En kaktus
Med den här processen använder växter ljus för att bilda socker.|Fotosyntesen
Det här pigmentet ger många blad deras gröna färg.|Klorofyll
De här insekterna är kända för att pollinera blommor och göra honung.|Bin
Det här trädet får ekollon.|En ek
Den här växten är jättepandans viktigaste föda.|Bambu
Den här aromatiska örten är en huvudingrediens i traditionell grön pesto.|Basilika
Så kallas processen när ett frö börjar växa.|Groning
Den här köttätande växten slår igen om insekter och är uppkallad efter en romersk gudinna.|Venus flugfälla
Så kallas ett träd som fäller sina blad under en del av året.|Lövfällande
Den här vävnaden transporterar vatten uppåt från växtens rötter.|Xylem (vedvävnad)
Den här vävnaden transporterar socker i växten.|Floem (silvävnad)
De här små öppningarna i bladen reglerar gasutbytet.|Klyvöppningar
`],
['Väderkollen', `
Den här frusna nederbörden faller i flingor.|Snö
Den här elektriska urladdningen syns ofta vid åska.|Blixten
Det här instrumentet mäter temperatur.|En termometer
Den här färgade bågen kan synas när solljus passerar genom regndroppar.|En regnbåge
Det här instrumentet mäter lufttryck.|En barometer
Den här roterande luftpelaren sträcker sig från ett åskmoln ner mot marken.|En tromb (tornado)
Det här begreppet beskriver mängden vattenånga i luften.|Luftfuktighet
Den här skalan beskriver vindstyrka, från stiltje till orkan.|Beaufortskalan
Den här processen omvandlar vattenånga till flytande droppar.|Kondensation
De här höga molnen ger ofta åska och blixtar.|Cumulonimbusmoln (bymoln)
Det här instrumentet mäter vindhastighet.|En anemometer
Den här gränsen skiljer luftmassor med olika temperatur från varandra.|En väderfront
Den här uppvärmningen i Stilla havet kan påverka vädret över hela världen.|El Niño
Den här effekten gör att storskaliga vindar böjs av när jorden roterar.|Corioliseffekten
Det här är temperaturen där luften blir mättad och kondensation kan börja.|Daggpunkten
`],
['Siffror överallt', `
Så här många dagar har en vanlig vecka.|Sju
Så här många månader har ett år.|Tolv
Så här många minuter går det på en timme.|Sextio
Så här många sidor har en hexagon.|Sex
Så här många ringar finns i den olympiska symbolen.|Fem
Så här många bokstäver har det moderna engelska alfabetet.|26
Så här många rutor finns på ett vanligt schackbräde.|64
Så här många kort finns i en vanlig kortlek utan jokrar.|52
Det här romerska siffertecknet betyder 50.|L
Så här många grader är ett helt varv.|360
Så här många grundämnen innehåller periodiska systemet till och med oganesson.|118
Så här många strängar har en vanlig violin.|Fyra
Det här är kolets atomnummer.|Sex
Det här romerska siffertecknet betyder tusen.|M
Så här många bitar innehåller en vanlig byte.|Åtta
`],
['På scen', `
Den här dramatikern skrev Romeo och Julia.|William Shakespeare
Den här personen leder en orkester, ofta med en taktpinne.|En dirigent
Det här är den upphöjda plats där skådespelare uppträder.|En scen
Den här musikalen handlar om en maskerad gestalt under ett operahus i Paris.|Fantomen på Operan
Den här tragedin av Shakespeare handlar om en dansk prins.|Hamlet
Den här musikalen bygger på Abbas låtar.|Mamma Mia!
Den här dansformen innehåller rörelser som plié och arabesque.|Balett
Den här musikalen berättar om Alexander Hamilton.|Hamilton
I det här Shakespeare-dramat hälsar häxor en skotsk fältherre.|Macbeth
Den här operan av Bizet handlar om en arbetare på en spansk cigarettfabrik.|Carmen
Den här musikalen bygger på Victor Hugos roman om Jean Valjean.|Les Misérables
Den här kompositören skrev baletten Svansjön.|Pjotr Iljitj Tjajkovskij
Den här dramatikern skrev Ett dockhem.|Henrik Ibsen
Den här teatertermen betyder ett längre tal av en person som är ensam på scen.|En monolog (soliloquium)
I den här pjäsen av Samuel Beckett väntar Vladimir och Estragon på någon.|I väntan på Godot
`],
['Säg det igen', `
Bonjour betyder hej på det här språket.|Franska
Hola betyder hej på det här språket.|Spanska
Ciao är en välkänd hälsning på det här språket.|Italienska
Det här spanska ordet betyder tack.|Gracias
Det här franska ordet betyder tack.|Merci
Det här tyska ordet betyder ja.|Ja
På det här språket används hälsningen konnichiwa.|Japanska
Det här är Brasiliens huvudsakliga officiella språk.|Portugisiska
Det här alfabetet används för att skriva ryska.|Det kyrilliska alfabetet
Ordet safari kommer från det här språket.|Swahili
Uttrycket carpe diem kommer från det här klassiska språket.|Latin
Det här språket talas i Iran och kallas också farsi.|Persiska
Till den här språkgruppen hör engelska, tyska och svenska.|De germanska språken
Det här konstruerade internationella språket skapades av L. L. Zamenhof.|Esperanto
Det här isolatspråket talas i delar av norra Spanien och sydvästra Frankrike.|Baskiska
`],
['Berg & floder', `
Så kallas smält berg när det strömmar ut ur en vulkan på jordytan.|Lava
Det här naturliga vattendraget rinner vanligtvis mot ett hav, en sjö eller ett annat vattendrag.|En flod
Den här stora ismassan rör sig långsamt över land.|En glaciär
Den här typen av bergart bildas när smält material svalnar och stelnar.|Magmatisk bergart
Det här begreppet beskriver hur vatten, vind eller is nöter ner berg och mark.|Erosion
Det här naturfenomenet inträffar när jordskorpan plötsligt frigör lagrad energi.|En jordbävning
Så kallas smält berg under jordytan.|Magma
Den här bergarten bildas när kalksten förändras av värme och tryck.|Marmor
Ur den här öppningen i jordskorpan kan lava, aska och gas strömma ut.|En vulkan
Den här teorin förklarar hur stora delar av jordens yttersta skal rör sig.|Plattektonik
Den här solfjäderformade avlagringen bildas ofta vid en flodmynning.|Ett delta
Det här mineralet är hårdast på Mohs hårdhetsskala.|Diamant
Den här magmatiska bergarten svalnar snabbt till naturligt vulkaniskt glas.|Obsidian
Den här gränsen skiljer jordskorpan från manteln.|Mohorovičićs diskontinuitet (Moho)
Den här landformen är en smal havsvik som formats av en glaciär.|En fjord
`],
['Sötsugen', `
Den här frusna efterrätten serveras ofta i en strut.|Glass
Det här söta ämnet tillverkas av honungsbin.|Honung
Det här söta livsmedlet tillverkas av kakaobönor.|Choklad
Det här franska bakverket är halvmåneformat och har frasiga lager.|En croissant
Den här efterrätten har ett gräddat skal fyllt med äpplen.|Äppelpaj
Den här lilla runda franska kakan med fyllning görs vanligtvis av mandelmjöl.|En macaron
Den här italienska efterrätten varvar kaffedoppade savoiardikex med mascarponekräm.|Tiramisu
Det här bakverket från Mellanöstern varvar filodeg, nötter och sockerlag.|Baklava
Den här krämiga desserten har ett knäckigt täcke av karamelliserat socker.|Crème brûlée
Den här italienska glassen är ofta tätare än amerikansk glass.|Gelato
Den här vispade blandningen av äggvita och socker kan gräddas till ett sprött bakverk.|Maräng
Det här spanska friterade bakverket doppas ofta i choklad.|Churros
Den här franska degen används till éclairs och profiteroler.|Petit-chou-deg
Namnet på den här italienska efterrätten betyder bokstavligen kokt grädde.|Pannacotta
Den här japanska sötsaken görs av stött klibbigt ris.|Mochi
`],
['Vardagens under', `
Det här föremålet visar norr med hjälp av en magnetiserad nål.|En kompass
Det här redskapet har två skärblad som sitter ihop i en vridpunkt.|En sax
Den här apparaten visar hur mycket ett föremål väger.|En våg
Det här fenomenet gör att ett sugrör ser böjt ut i ett glas vatten.|Ljusbrytning (refraktion)
Den här typen av spegel buktar utåt och ger ett större synfält.|En konvex spegel
Den här enkla maskinen består av ett hjul med ett spår och ett rep.|Ett block (en trissa)
Den här kraften motverkar rörelse mellan två ytor som rör vid varandra.|Friktion
Den här processen får våta kläder att torka när vatten övergår till ånga.|Avdunstning
Den här egenskapen gör att en nål försiktigt kan läggas på vattenytan utan att sjunka.|Ytspänning
Den här principen förklarar den uppåtriktade kraften på ett föremål i en vätska.|Arkimedes princip
Den här effekten förändrar den upplevda tonhöjden när en siren passerar dig.|Dopplereffekten
Den här formen av värmeöverföring sker genom rörelser i en vätska eller gas.|Konvektion
Den här egenskapen beskriver ett föremåls motstånd mot att ändra sin rörelse, enligt Newtons första lag.|Tröghet
Den här lagen säger att ett tryck som läggs på en innesluten vätska överförs genom hela vätskan.|Pascals lag
Den här effekten får vatten att stiga i ett tunt rör mot tyngdkraften.|Kapillärkraft
`],
];

export const SWEDISH_CATEGORIES = new Map(sets.map(([name, text], category) => [
  `category-${category}`, { name, clues: text.trim().split('\n').map((line, index) => {
    const [question, answer] = line.split('|');
    return { id: `q-${category}-${index}`, question, answer };
  }) }
]));
export const SWEDISH_CLUES = new Map([...SWEDISH_CATEGORIES.values()].flatMap(c => c.clues.map(q => [q.id, q])));
