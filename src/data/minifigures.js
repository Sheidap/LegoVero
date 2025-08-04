// src/data/minifigures.js

const minifigures = [];

const seriesData = {
  "Serie 1": [
    "Tribal Hunter", "Cheerleader", "Caveman", "Circus Clown",
    "Zombie", "Skater", "Robot", "Demolition Dummy",
    "Magician", "Wrestler", "Nurse", "Ninja",
    "Spaceman", "Forestman", "Deep Sea Diver", "Cowboy"
  ],
  "Serie 2": [
    "Spartan Warrior", "Surfer", "Disco Dude", "Lifeguard",
    "Karate Master", "Mime", "Pop Star", "Witch",
    "Traffic Cop", "Pharaoh", "Explorer", "Ringmaster",
    "Weightlifter", "Vampire", "Skier", "Mexican Mariachi"
  ],
  "Serie 3": [
    "Gorilla Suit Guy", "Elf", "Samurai Warrior", "Tennis Player",
    "Snowboarder", "Sumo Wrestler", "Pilot", "Alien",
    "Race Car Driver", "Fisherman", "Baseball Player", "Space Villain",
    "Mummy", "Hula Dancer", "Rapper", "Tribal Chief"
  ],
  "Serie 4": [
    "Soccer Player", "Surfer Girl", "Kimono Girl", "Punk Rocker",
    "Viking", "Werewolf", "Hazmat Guy", "Ice Skater",
    "Sailor", "Street Skater", "Artist", "Hockey Player",
    "Musketeer", "Frankenstein", "Gnome", "Crazy Scientist"
  ],
  "Serie 5": [
    "Lumberjack", "Boxer", "Zookeeper", "Detective",
    "Cave Woman", "Royal Guard", "Evil Dwarf", "Fitness Instructor",
    "Egyptian Queen", "Graduate", "Small Clown", "Snowboarder",
    "Gangster", "Lizard Man", "Gladiator", "Ice Fisherman"
  ],
  "Serie 6": [
    "Roman Soldier", "Butcher", "Mechanic", "Classic Alien",
    "Genie", "Highland Battler", "Intergalactic Girl", "Lady Liberty",
    "Leprechaun", "Minotaur", "Sleepyhead", "Skater Girl",
    "Surgeon", "Bandit", "Clockwork Robot", "Flamenco Dancer"
  ],
  "Serie 7": [
    "Aztec Warrior", "Bagpiper", "Bunny Suit Guy", "Bride",
    "Computer Programmer", "Daredevil", "Evil Knight", "Galaxy Patrol",
    "Grandma Visitor", "Hippie", "Ocean King", "Rocker Girl",
    "Jungle Boy", "Swimming Champion", "Tennis Ace", "Viking Woman"
  ],
  "Serie 8": [
    "Alien Villainess", "Businessman", "Conquistador", "Cowgirl",
    "DJ", "Diver", "Downhill Skier", "Evil Robot",
    "Fairy", "Football Player", "Pirate Captain", "Red Cheerleader",
    "Santa", "Actor Shakespeare", "Lederhosen Tiroles", "Vampire Bat"
  ],
  "Serie 9": [
    "Alien Avenger", "Battle Mech", "Caesar", "Chicken Suit Guy",
    "Cyclops", "Forest Maiden", "Fortune Teller", "Heroic Knight",
    "Hollywood Starlet", "Judge", "Mermaid", "Mr. Good and Evil",
    "Plumber", "Roller Derby Girl", "Waiter", "Policeman"
  ],
  "Serie 10": [
    "Bumblebee Girl", "Decorator", "Grandpa", "Librarian",
    "Medusa", "Motorcycle Mechanic", "Paintball Player", "Revolutionary Soldier",
    "Roman Commander", "Sad Clown", "Sea Captain", "Skydiver",
    "Tomahawk Warrior", "Trendsetter", "Warrior Woman", "Baseball Fielder" , "Mr. Gold"
  ],
  "Serie 11": [
    "Barbarian", "Island Warrior", "Constable", "Diner Waitress",
    "Evil Mech", "Gingerbread Man", "Holiday Elf", "Jazz Musician",
    "Lady Robot", "Mountain Climber", "Scientist", "Pretzel Girl",
    "Grandma", "Scarecrow", "Welder", "Yeti"
  ],
  "Serie 12": [
    "Battle Goddess", "Dino Tracker", "Fairy Tale Princess", "Genie Girl",
    "Hun Warrior", "Jester", "Lifeguard", "Piggy Guy",
    "Pizza Delivery Man", "Prospector", "Rock Star", "Space Miner",
    "Spooky Girl", "Swashbuckler", "Video Game Guy", "Wizard"
  ],
  "Serie 13": [
    "Alien Trooper", "Carpenter", "Classic King", "Disco Diva",
    "Egyptian Warrior", "Evil Wizard", "Fencer", "Galaxy Trooper",
    "Goblin", "Hot Dog Man", "Lady Cyclops", "Paleontologist",
    "Samurai", "Sheriff", "Snake Charmer", "Unicorn Girl"
  ],
  "Serie 14 (Monsters)": [
    "Banshee", "Bigfoot", "Fly Monster", "Frankenstein Rocker",
    "Gargoyle", "Monster Scientist", "Zombie Pirate", "Plant Monster",
    "Skeleton Guy", "Spider Lady", "Tiger Woman", "Wacky Witch",
    "Spectre", "Wolf Guy", "Zombie Businessman", "Zombie Cheerleader"
  ],
  "Serie 15": [
    "Animal Control Officer", "Astronaut", "Ballerina", "Clumsy Guy",
    "Faun", "Flying Warrior", "Frightening Knight", "Farmer",
    "Janitor", "Kendo Fighter", "Laser Mech", "Queen",
    "Shark Suit Guy", "Tribal Woman", "Wrestling Champion", "Jewel Thief"
  ],
   "Serie 16": [
    "Wildlife Photographer", "Spy", "Spooky Boy", "Scallywag Pirate",
    "Rogue", "Penguin Boy", "Mariachi", "Kickboxer",
    "Ice Queen", "Hiker", "Dog Show Winner", "Desert Warrior",
    "Cyborg", "Cute Little Devil", "Banana Guy", "Babysitter"
  ],
  "Serie 17": [
    "Battle Dwarf", "Veterinarian", "Circus Strongman", "Corn Cob Guy",
    "Dance Instructor", "Elf Maiden", "Gourmet Chef", "Hot Dog Vendor",
    "Professional Surfer", "Retro Space Hero", "Roman Gladiator", "Rocket Boy",
    "Sausage Man (Yuppie)", "Butterfly Girl", "Connoisseur", "Highwayman"
  ],
  "Serie 18 (40.º aniversario - disfraces)": [
    "Birthday Cake Guy", "Firework Guy", "Cowboy Costume Guy", "Race Car Guy",
    "Birthday Party Girl", "Cactus Girl", "Cat Costume Girl", "Spider Suit Boy",
    "Dragon Suit Guy", "Elephant Costume Girl", "Flowerpot Girl", "LEGO Brick Suit Guy",
    "LEGO Brick Suit Girl", "Party Clown", "Unicorn Guy", "Balloon Artist", "Classic Police"
  ],
  "Serie 19": [
    "Dog Sitter", "Video Game Champ", "Shower Guy", "Rugby Player",
    "Bear Costume Guy", "Pizza Costume Guy", "Galactic Bounty Hunter", "Monkey King",
    "Programmer", "Jungle Explorer", "Fire Fighter", "Mummy Queen",
    "Fright Knight", "Mountain Biker", "Gardener", "Fox Costume Girl"
  ],
  "Serie 20": [
    "Piñata Boy", "Breakdancer", "Llama Costume Girl", "Viking",
    "Super Warrior", "Martial Arts Boy", "Pirate Girl", "Space Fan",
    "Sea Rescuer", "Pijama Girl", "Pea Pod Costume Girl", "Athlete",
    "Drone Boy", "80s Musician", "Green Brick Costume Guy", "Tournament Knight"
  ],
  "Serie 21": [
    "Ancient Warrior", "Bee Costume Girl", "Cabaret Singer", "Centaur Warrior",
    "Paddle Surfer", "Space Police Officer", "Violin Kid", "Alien",
    "Airplane Costume Girl", "Pug Costume Guy", "Shipwreck Survivor", "Ladybug Girl"
  ],
  "Serie 22": [
    "Robot Repair Tech", "Chili Costume Fan", "Troubadour", "Snow Guardian",
    "Horse and Groom", "Figure Skating Champion", "Forest Elf", "Birdwatcher",
    "Racoon Costume Fan", "Space Creature", "Night Protector", "Wheelchair Racer"
  ],
  "Serie 23": [
    "Nutcracker", "Sugar Fairy", "Snowman", "Reindeer Costume",
    "Holiday Elf", "Cardboard Robot", "Popcorn Costume", "Wolf Costume",
    "Turkey Costume", "Ferry Captain", "Knight of the Yellow Castle", "Green Dragon Costume"
  ],
  "Serie 24": [
    "T-Rex Costume Fan", "Rococo Aristocrat", "Robot Warrior", "Potter",
    "Newspaper Kid", "Orc", "Football Referee", "Falconer",
    "Conservationist", "Brown Astronaut and Spacebaby", "Carrot Mascot", "Rockin' Horse Rider"
  ],
  "Serie 25": [
    "Triceratops Costume Fan", "Goatherd", "Film Noir Detective", "Barbarian",
    "Fitness Instructor", "Dog Groomer", "E-Sports Gamer", "Mushroom Sprite",
    "Harpy", "Train Kid", "Fierce Barbarian", "Blacktron Mutant"
  ],
  "Serie 26 (Espacial)": [
    "Robot Butler", "Alien Tourist", "Retro Space Heroine", "Imposter",
    "Nurse Android", "Martian Warrior", "Alien Beetlezoid", "Ice Planet Explorer",
    "Orion", "M-Tron Powerlifter", "Imposter", "Spacewalking Astronaut"
  ],
  "Serie 27": [
    "Hamster Costume Fan", "Jetpack Guy", "Cat Lover", "Bogeyman",
    "Pirate Quartermaster", "Steampunk Inventor", "Longboarder", "Pterodactyl Costume Fan",
    "Cupid", "Wolfpack Beastmaster", "Astronomer Kid", "Plush Toy Collector"
  ]
};

let id = 1;

Object.entries(seriesData).forEach(([serie, nombres]) => {
  nombres.forEach((nombre, index) => {
    const serieKey = serie.replace(/\s+/g, "").replace(/[()]/g, "").toLowerCase();
    const imagenNombre = `${serieKey}-${index + 1}.png`;

    minifigures.push({
      id: id++,
      serie,
      nombre,
      año: 2010 + parseInt(serie.replace(/\D/g, '')), // aproximado
      estado: "",
      comentarios: "",
      imagen: `/images/${imagenNombre}`
    });
  });
});

minifigures.sort((a, b) => {
  const numA = parseInt(a.serie.replace(/\D/g, '')) || 0;
  const numB = parseInt(b.serie.replace(/\D/g, '')) || 0;
  return numA - numB;
});

export default minifigures;
