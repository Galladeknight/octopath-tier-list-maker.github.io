// stores names for every character in every game ...
// tooltip functionality from http://jsfiddle.net/2vc8y5ox/ and
// https://stackoverflow.com/questions/15702867/html-tooltip-position-relative-to-mouse-pointer !
const allGames = [	
	"Archanea",
	"Valentia",
	"Genealogy",
	"Thracia 776", 
	"Binding Blade", 
	"Blazing Blade", 
	"Sacred Stones", 
	"Tellius",
	"Awakening",
	"Fates",
	"Three Houses",
	"Heroes",
	"Tokyo Mirage Sessions",
	"Other",
];

const allGamesIds = [
	"fe12",
	"fe15",
	"fe4",
	"fe5",
	"fe6",
	"fe7",
	"fe8",
	"fe10",
	"fe13",
	"fe14",
	"fe16",
	"feh",
	"tms",
	"other",
]

const allCharacters = {
	"fe12": [
		"Abel",
		"Anri",
		"Arlen",
		"Arran",
		"Astram",
		"Athena",
		"Bantu",
		"Barst",
		"Beck",
		"Belf",
		"Boah",
		"Bord",
		"Caeda",
		"Caesar",
		"Cain",
		"Camus",
		"Castor",
		"Catria",
		"Cecil",
		"Clarisse",
		"Cord",
		"Darros",
		"Dice",
		"Dolph",
		"Draug",
		"Elice",
		"Eremiya",
		"Est",
		"Etzel",
		"Frey",
		"Frost",
		"Gharnef",
		"Gordin",
		"Hardin",
		"Horace",
		"Jake",
		"Jeorge",
		"Julian",
		"Katarina",
		"Kris",
		"Legion",
		"Lena",
		"Linde",
		"Lorenz",
		"Luke",
		"Macellan",
		"Malice",
		"Malicia",
		"Maria",
		"Marth",
		"Matthis",
		"Merric",
		"Michalis",
		"Midia",
		"Minerva",
		"Nagi",
		"Navarre",
		"Norne",
		"Nyna",
		"Ogma",
		"Palla",
		"Phina",
		"Radd",
		"Reiden",
		"Rickard",
		"Roberto",
		"Roderick",
		"Roger",
		"Roshea",
		"Ryan",
		"Samto",
		"Samson",
		"Sedgar",
		"Sheena",
		"Sirius",
		"Tiki",
		"Tomas",
		"Vyland",
		"Warren",
		"Wendell",
		"Wolf",
		"Wrys",
		"Xane",
		"Ymir",
		"Yubello",
		"Yumina",
	],
	"fe15": [
		"Alm",
		"Atlas",
		"Berkut",
		"Boey",
		"Catria",
		"Celica",
		"Clair",
		"Clive",
		"Conrad",
		"Deen",
		"Delthea",
		"Emma",
		"Est",
		"Faye",
		"Fernand",
		"Forsyth",
		"Genny",
		"Gray",
		"Jedah",
		"Jesse",
		"Kamui",
		"Kliff",
		"Leon",
		"Lukas",
		"Luthier",
		"Mae",
		"Mathilda",
		"Mycen",
		"Nomah",
		"Palla",
		"Python",
		"Randal",
		"Saber",
		"Shade",
		"Silque",
		"Sonya",
		"Tatiana",
		"Tobin",
		"Valbar",
		"Yuzu",
		"Zeke",
	],
	"fe4": [
		"Aideen",
        "Alec",
		"Altena",
        "Amid",
        "Andorey",
        "Arden",
        "Ares",
        "Arion",
        "Arthur",
        "Arvis",
        "Asaello",
        "Ayra",
        "Azel",
        "Banba",
        "Beowulf",
        "Bleg",
        "Blume",
        "Brian",
        "Brigid",
        "Ced",
        "Claud",
		"Coirpre",
		"Daccar",
        "Daisy",
        "Danan",
        "Deirdre",
        "Dew",
        "Diarmuid",
        "DiMaggio",
        "Dimna",
        "Eldigan",
        "Elliot",
        "Erin",
        "Eriu",
		"Ethlyn",
        "Faval",
        "Fee",
        "Femina",
		"Finn",
		"Fotla",
        "Hannibal",
        "Hawk",
        "Hilda",
        "Holyn",
        "Ishtar",
        "Ishtore",
        "Jamke",
        "Jeanne",
        "Johalvier",
        "Johan",
        "Julia",
        "Julius",
        "Lachesis",
        "Lana",
        "Langobalt",
        "Larcei",
        "Laylea",
        "Leif",
        "Lene",
        "Lester",
        "Lewyn",
        "Lex",
        "Linda",
        "Liza",
        "Mabel",
        "Macbeth",
        "Mana",
        "Manfroy",
        "Meng",
        "Midir",
        "Nanna",
        "Noish",
        "Oifey",
        "Ovo",
        "Pamela",
        "Papillon",
        "Patty",
        "Quan",
        "Radney",
		"Reptor",
		"Ring",
        "Roddlevan",
        "Sandima",
        "Scathach",
        "Scorpio",
        "Seliph",
        "Shannan",
        "Sharlow",
        "Sigurd",
        "Silvia",
        "Tailtiu",
        "Tine",
        "Travant",
        "Tristan",
        "Zane",
	],
	"fe5": [
        "Alba",
        "Amalda",
        "Asbel",
        "Brighton",
        "Callion",
        "Ced",
        "Conomore",
        "Dagdar",
        "Dalshin",
        "Dean",
        "Diarmuid",
        "Eda",
        "Eyvel",
        "Fergus",
		"Finn",
		"Fred",
        "Galzus",
        "Glade",
        "Halvan",
        "Hicks",
        "Homer",
        "Ilios",
        "Kane",
		"Karin",
		"Kempf",
        "Lara",
		"Leif",
        "Lifis",
        "Linoan",
        "Machyua",
        "Mareeta",
        "Marty",
        "Miranda",
        "Misha",
        "Nanna",
        "Olwen",
        "Osian",
        "Perne",
		"Ralph",
		"Raydrik",
		"Reinhardt",
        "Robert",
        "Ronan",
        "Safy",
        "Saias",
        "Salem",
        "Sara",
        "Selfina",
        "Shannam",
		"Shiva",
        "Sleuf",
        "Tanya",
        "Tina",
		"Trude",
		"Veld",
        "Xavier",
	],
	"fe6": [
        "Allen",
        "Astolfo",
        "Barth",
        "Bartre",
        "Bors",
        "Brunnya",
        "Cath",
        "Cecilia",
        "Chad",
        "Clarine",
        "Dayan",
        "Dieck",
        "Dorothy",
        "Douglas",
        "Echidna",
        "Elen",
        "Eliwood",
        "Elffin",
        "Fae",
        "Fir",
        "Galle",
        "Garret",
        "Geese",
        "Gonzales",
        "Guinevere",
        "Hector",
        "Hugh",
        "Igrene",
        "Juno",
        "Karel",
        "Klein",
        "Lance",
        "Larum",
        "Lilina",
        "Lot",
        "Lugh",
        "Marcus",
        "Merlinus",
        "Milady",
        "Murdock",
        "Narcian",
        "Niime",
        "Noah",
        "Ogier",
        "Perceval",
        "Raigh",
        "Roy",
        "Rutger",
        "Saul",
        "Shanna",
        "Shin",
        "Sophia",
        "Sue",
        "Thea",
        "Treck",
        "Wade",
        "Gwendolyn",
        "Wolt",
        "Yoder",
        "Zealot",
        "Zeiss",
        "Zephiel",
	],
	"fe7": [
        "Athos",
		"Bartre",
		"Bramimond",
		"Brendan",
        "Canas",
        "Dart",
        "Dorcas",
		"Eliwood",
		"Ephidel",
        "Erk",
        "Farina",
        "Fiora",
        "Florina",
        "Geitz",
        "Guy",
        "Harken",
        "Hawkeye",
        "Heath",
        "Hector",
        "Isadora",
        "Jaffar",
        "Karel",
        "Karla",
        "Kent",
		"Legault",
		"Leila",
		"Limstella",
		"Linus",
		"Lloyd",
        "Louise",
        "Lowen",
		"Lucius",
		"Lyn",
		"Marcus",
		"Mark",
        "Matthew",
		"Merlinus",
		"Nergal",
        "Nils",
        "Ninian",
        "Nino",
        "Oswin",
        "Pent",
        "Priscilla",
        "Rath",
        "Raven",
        "Rebecca",
		"Renault",
		"Roland",
        "Sain",
		"Serra",
		"Sonia",
        "Vaida",
        "Wallace",
        "Wil",
	],
	"fe8": [
        "Amelia",
		"Artur",
		"Caellach",
        "Colm",
        "Cormag",
        "Dozla",
        "Duessel",
        "Eirika",
        "Ephraim",
        "Ewan",
        "Fado",
        "Forde",
        "Franz",
        "Garcia",
        "Gerik",
        "Gilliam",
        "Glen",
        "Hayden",
        "Innes",
        "Ismaire",
        "Joshua",
        "Knoll",
        "Kyle",
        "L'Arachel",
		"Lute",
		"Lyon",
        "Marisa",
		"Moulder",
		"Morva",
        "Myrrh",
        "Natasha",
        "Neimi",
        "Orson",
		"Rennac",
		"Riev",
        "Ross",
		"Saleh",
		"Selena",
		"Seth",
        "Syrene",
        "Tana",
		"Tethys",
		"Valter",
        "Vanessa",
	],
	"fe10": [
		"Aran",
		"Altina",
        "Astrid",
        "Bastian",
        "Black Knight",
        "Boyd",
        "Brom",
        "Caineghis",
        "Calill",
		"Danved",
		"Devdan",
		"Dheginsea",
        "Edward",
        "Elincia",
        "Ena",
        "Fiona",
        "Gareth",
        "Gatrie",
        "Geoffrey",
        "Giffca",
        "Haar",
        "Heather",
        "Ike",
        "Ilyana",
        "Janaff",
        "Jill",
        "Kieran",
        "Kurthnaga",
        "Kyza",
		"Laura",
		"Largo",
        "Leanne",
        "Lehran",
        "Leonardo",
		"Lethe",
		"Levail",
        "Lucia",
        "Lyre",
        "Makalov",
        "Marcia",
        "Meg",
        "Mia",
        "Micaiah",
        "Mist",
        "Mordecai",
        "Muarim",
        "Naesala",
        "Nailah",
        "Nasir",
        "Nealuchi",
        "Nephenee",
        "Nolan",
        "Oliver",
        "Oscar",
		"Pelleas",
		"Petrine",
        "Rafiel",
        "Ranulf",
        "Renning",
        "Reyson",
        "Rhys",
        "Rolf",
		"Sanaki",
		"Sephiran",
        "Shinon",
        "Sigrun",
        "Skrimir",
        "Soren",
        "Sothe",
        "Stefan",
        "Tanith",
        "Tauroneo",
        "Tibarn",
        "Titania",
        "Tormod",
        "Ulki",
        "Vika",
        "Volke",
        "Volug",
        "Zelgius",
        "Zihark",
	],
	"fe13": [
        "Anna",
        "Aversa",
        "Basilio",
		"Brady",
		"Cervantes",
        "Cherche",
        "Chrom",
        "Cordelia",
        "Cynthia",
        "Donnel",
		"Emmeryn",
		"Excellus",
        "Flavia",
        "Frederick",
        "Gaius",
        "Gangrel",
        "Gerome",
        "Gregor",
        "Henry",
        "Inigo",
        "Kellam",
		"Kjelle",
		"Laurent",
        "Libra",
        "Lissa",
        "Lon'qu",
        "Lucina",
        "Maribelle",
        "Miriel",
		"Morgan",
		"Mustafa",
		"Naga",
        "Nah",
        "Noire",
        "Nowi",
		"Olivia",
        "Owain",
		"Panne",
		"Phila",
        "Priam",
        "Ricken",
        "Robin",
        "Say'ri",
        "Severa",
        "Sothe",
        "Stahl",
        "Sully",
        "Sumia",
        "Tharja",
        "Tiki",
		"Vaike",
		"Validar",
        "Virion",
        "Walhart",
        "Yarne",
        "Yen'fay",
	],
	"fe14": [
		"Anna",
		"Anankos",
		"Arete",
        "Arthur",
        "Asugi",
        "Azama",
        "Azura",
        "Benny",
        "Beruka",
        "Caeldori",
        "Camilla",
        "Candace",
        "Charlotte",
        "Corrin",
        "Daichi",
        "Daniela",
        "Dwyer",
        "Effie",
        "Elise",
        "Felicia",
        "Flora",
        "Forrest",
        "Fuga",
        "Funke",
        "Gazak",
        "Gunter",
        "Haitaka",
		"Hana",
		"Hans",
        "Hayato",
        "Hinata",
        "Hinoka",
		"Hisame",
		"Iago",
        "Ignatius",
        "Izana",
        "Jakob",
        "Kaden",
        "Kagero",
        "Kana",
        "Kaze",
        "Keaton",
        "Kiragi",
        "Kumagera",
        "Laslow",
        "Leo",
        "Llewelyn",
        "Lloyd",
		"Midori",
		"Mikoto",
        "Mitama",
        "Mozu",
        "Nichol",
        "Niles",
        "Nina",
        "Nyx",
        "Oboro",
        "Odin",
        "Ophelia",
        "Orochi",
        "Percy",
        "Peri",
        "Reina",
        "Rhajat",
        "Rinkah",
        "Ryoma",
        "Saizo",
        "Sakura",
        "Scarlet",
        "Selena",
        "Selkie",
        "Senno",
        "Setsuna",
        "Shigure",
        "Shiro",
        "Shura",
        "Siegbert",
        "Silas",
        "Soleil",
        "Sophie",
		"Subaki",
		"Sumeragi",
        "Takumi",
        "Tarba",
        "Velouria",
        "Xander",
        "Yukimura",
        "Zhara",
	],
	"fe16": [
        "Alois",
        "Anna",
        "Annette",
        "Ashe",
        "Balthus",
        "Bernadetta",
        "Byleth",
        "Caspar",
        "Catherine",
        "Claude",
		"Constance",
		"Cornelia",
        "Cyril",
        "Dedue",
        "Dimitri",
        "Dorothea",
        "Edelgard",
        "Felix",
        "Ferdinand",
        "Flayn",
        "Gilbert",
        "Hanneman",
        "Hapi",
        "Hilda",
        "Hubert",
        "Ignatz",
        "Ingrid",
        "Jeralt",
		"Jeritza",
		"Judith",
        "Leonie",
        "Linhardt",
        "Lorenz",
        "Lysithea",
        "Manuela",
        "Marianne",
        "Mercedes",
        "Petra",
        "Raphael",
		"Rhea",
		"Rodrigue",
        "Seteth",
        "Shamir",
        "Sothis",
        "Sylvain",
        "Yuri",
	],
	"feh": [
        "Anna",
		"Alfonse",
		"Bruno",
        "Dagr",
		"Eir",
        "Eitri",
        "Fafnir",
		"Fjorm",
		"Freyr",
		"Freyja",
		"Gunnthra",
		"Gustav",
		"Hel",
		"Helbindi",
		"Henriette",
		"Hrid",
        "Laegjarn",
        "Laevatein",
        "Lif",
		"Loki",
        "Nott",
        "Otr",
		"Peony",
		"Plumeria",
        "Reginn",
        "Sharena",
        "Surtr",
		"Thrasir",
		"Triandra",
        "Veronica",
        "Ylgr",
	],
	"tms": [
		"Ayaha",
		"Barry Goodman",
		"Caeda",
		"Cain",
		"Chrom",
		"Draug",
		"Eleonora",
		"Itsuki",
		"Kiria",
		"Mamori",
		"Maiko",
		"Navarre",
		"Tiki",
		"Tiki=Waifu",
		"Touma",
		"Tharja",
		"Tsubasa",
		"Virion",
		"Yashiro",
	],
	"other": [
        "Rowan",
        "Lianna",
		"Anakin",
		"Kelik",
		"Shon",
		"Euden",
		"Elisanne",
		"Ranzal",
		"Cleo",
		"Luca",
		"Laxi",
		"Zethia",
        "Mym",
		"Link",
		"Zelda",
		"Mario",
		"Luigi",
        "Gran",
        "Djeeta",
		"Shulk",
		"Artoria",
		"Emiya",
	],
};