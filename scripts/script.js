const mainWord = document.getElementById('main-word');
const tabooWordsList = document.getElementById('taboo-list');
const timer = document.getElementById('timer');
const time = document.getElementById('time');
const score = document.getElementById('score');
const guessedButton = document.getElementById('guessed');
const tabooButton = document.getElementById('taboo');
const skipButton = document.getElementById('skip');
const kidsButton = document.getElementById('kids');
const generalButton = document.getElementById('general')
const startContainer = document.getElementById('start');
const gameContainer = document.getElementById('game');
const endContainer = document.getElementById('end');
const gameTypeRadios = document.getElementsByName('game-type');
const gameSetupForm = document.getElementById('game-setup-form');
const finalScore = document.getElementById('final-score');
const restartGame = document.getElementById('restart-game');
const skipSound = new Audio('sounds/skip.wav');
const tabooSound = new Audio('sounds/buzzer.wav');
const correctSound = new Audio('sounds/correct.wav');
const gameOverSound = new Audio('sounds/gameover.wav');


let allWords = {
    kids: [
        { "main": "Bee", "taboo": ["honey", "fly", "sting", "insects"] },
        { "main": "Apple", "taboo": ["Fruit", "Red", "iPhone", "Juice"] },
        { "main": "Dog", "taboo": ["Animal", "Bark", "Pet", "Puppy", "Tail"] },
        { "main": "Cat", "taboo": ["Animal", "Meow", "Pet", "Kitten", "Whiskers"] },
        { "main": "Bike", "taboo": ["Two wheels", "Pedal", "Ride", "Cycle", "Helmet"] },
        { "main": "Bear", "taboo": ["Animal", "Wild", "Fur", "Paws", "Hibernation"] },
        { "main": "Ball", "taboo": ["Round", "Bounce", "Play", "Soccer", "Basket"] },
        { "main": "Duck", "taboo": ["Quack", "Feathers", "Pond", "Swim", "Bird"] },
        { "main": "Book", "taboo": ["Read", "Story", "Pages", "Library"] },
        { "main": "Car", "taboo": ["Vehicle", "Drive", "Engine", "Road", "Transport"] },
        { "main": "Banana", "taboo": ["Fruit", "Yellow", "Peel", "Munch", "Smoothie"] },
        { "main": "Kite", "taboo": ["Fly", "String", "Wind", "Sky", "Tails"] },
        { "main": "Rainbow", "taboo": ["Colors", "Sky", "Weather", "Nature"] },
        { "main": "Cake", "taboo": ["Sweet", "Birthday", "Candle", "Dessert", "Cream"] },
        { "main": "Rocket", "taboo": ["Space", "Launch", "Astronaut", "Fuel"] },
        { "main": "Train", "taboo": ["Tracks", "Station", "Passengers", "Wheels"] },
        { "main": "Pirate", "taboo": ["Treasure", "Ship", "Sword", "Island", "Captain"] },
        { "main": "Magic", "taboo": ["Wand", "Illusion", "Hocus-Pocus", "Mystery", "Spell"] },
        { "main": "Castle", "taboo": ["Fortress", "Medieval", "Towers", "King", "Moat"] },
        { "main": "Sunflower", "taboo": ["Yellow", "Seeds", "Tall", "Blossom", "Sun"] },
        { "main": "Dragon", "taboo": ["Fire-breathing", "Mythical", "Wings", "Legend", "Scales"] },
        { "main": "Princess", "taboo": ["Crown", "Cindrella", "Royal", "Castle", "Elsa"] },
        { "main": "Mermaid", "taboo": ["Ocean", "Scales", "Tail", "Seashell", "Fish"] },
        { "main": "Ocean", "taboo": ["Water", "Beach", "Wave", "Fish", "Swim"] },
        { "main": "Sun", "taboo": ["hot", "solar system", "light", "star", "plants"] },
        { "main": "Rudolph", "taboo": ["christmas", "Santa", "sleigh", "Reindeer", "Snow"] },
        { "main": "Santa Claus", "taboo": ["christmas", "December", "Winter", "White Beard", "Gifts"] },
        { "main": "Mickey Mouse", "taboo": ["Mini Mouse", "Disney", "Cartoon", "Character", "Kids"] },
        { "main": "Birthday", "taboo": ["Cake", "Party", "Friends", "Gifts"] },
        { "main": "Cheese", "taboo": ["milk", "food", "sandwich", "tasty"] },
        { "main": "Tail", "taboo": ["animals", "behind", "furry", "wagging"] },
        { "main": "Christmas", "taboo": ["tree", "Santa", "vacation", "Jesus", "celebrate"] },
        { "main": "Clock", "taboo": ["hours", "second", "minutes", "time", "hand"] },
        { "main": "House", "taboo": ["family", "rooms", "bed", "live", "home"] },
        { "main": "Rectangle", "taboo": ["shape", "square", "four", "sides"] },
        { "main": "Queen", "taboo": ["crown", "princess", "England", "royalty", "king"] },
        { "main": "Spaghetti", "taboo": ["tomato", "pasta", "noodles", "long"] },
        { "main": "School", "taboo": ["student", "teacher", "education", "books"] },
        { "main": "Milk", "taboo": ["Yogurt", "dairy", "cow", "cheese", "white"] },
        { "main": "Pizza", "taboo": ["Cheese", "Yummy", "Round", "Toppings"]},
    ],
    general: [
        { "main": "flute", "taboo": ["band", "long", "music", "sound", "instrument"] },
        { "main": "Robot", "taboo": ["Machine", "AI", "Automate", "Science", "Future"] },
        { "main": "Canada", "taboo": ["maple", "ontario", "toronto", "french", "ottawa"] },
        { "main": "Communism", "taboo": ["lenin", "karlmarx", "society", "marxist", "China"] },
        { "main": "Sugar", "taboo": ["sweet", "blood", "diabetes", "brown", "white"] },
        { "main": "Elephant", "taboo": ["mammal", "tusks", "large", "Lord Ganesha", "trunk"] },
        { "main": "Yogurt", "taboo": ["bacteria", "greek", "turkish", "fermented", "dairy"] },
        { "main": "Sherlock Holmes", "taboo": ["case", "fictional", "detective", "stories", "watson"] },
        { "main": "Boxing", "taboo": ["round", "ring", "win", "Muhammad Ali", "fight"] },
        { "main": "Nicolas Cage", "taboo": ["Hollywood", "role", "actor", "male", "movies"] },
        { "main": "Paris", "taboo": ["capital", "Eiffel Tower", "Europe", "city", "France"] },
        { "main": "Plague", "taboo": ["virus", "Corona", "infection", "death", "disease"] },
        { "main": "Benedict Cumberbatch", "taboo": ["Hollywood", "movies", "sherlock", "Dr Strange", "Marvel"] },
        { "main": "Google", "taboo": ["Alphabet Inc", "search", "Android", "Pixel", "doodle"] },
        { "main": "Bermuda Triangle", "taboo": ["mystery", "atlantic", "ships", "aircraft", "disappearance"] },
        { "main": "Moon", "taboo": ["Satellite", "Chandrayaan", "Night", "Shine", "orbit"] },
        { "main": "Mars", "taboo": ["planet", "red", "Mangalyaan", "habitable", "Elon Musk"] },
        { "main": "The Walking Dead", "taboo": ["Rick Grimes", "walkers", "amc", "TV Series", "zombies"] },
        { "main": "Recipe", "taboo": ["prepare", "ingredients", "cookbook", "food", "cooking"] },
        { "main": "Backslash", "taboo": ["character", "code", "punctuation", "mark", "regex"] },
        { "main": "Albert Einstein", "taboo": ["scientist", "e=mc2", "genius", "relativity", "theory"] },
        { "main": "James Bond", "taboo": ["movies", "casinoroyale", "License to Kill", "007", "British"] },
        { "main": "Heath Ledger", "taboo": ["joker", "death", "Batman", "award", "actor"] },
        { "main": "Rice", "taboo": ["paddy", "irrigation", "crop", "food", "grain"] },
        { "main": "Norway", "taboo": ["europe", "denmark", "country", "oslo", "sweden"] },
        { "main": "Harry Potter", "taboo": ["Hogwarts", "Wizard", "Avada Kedavara", "Voldemort", "Magic"] },
        { "main": "BruceLee", "taboo": ["dragon", "chinese", "fighting", "hongkong", "martialarts"] },
        { "main": "Zeus", "taboo": ["mythology", "thunderbolt", "god", "greek", "gods"] },
        { "main": "Air Conditioner", "taboo": ["systems", "room", "technology", "cooling", "heat"] },
        { "main": "Angelina Jolie", "taboo": ["female", "film", "movie", "award", "actress"] },
        { "main": "Xbox", "taboo": ["video", "Microsoft", "games", "console", "Sony Playstation"] },
        { "main": "English", "taboo": ["language", "British", "UK", "Speak/spoken", "Oxford"] },
        { "main": "Michael Jackson", "taboo": ["Dancer", "Singer", "artist", "pop", "moonwalk"] },
        { "main": "Michael Jordan", "taboo": ["legend", "Chicago Bulls", "player", "basketball", "nba"] },
        { "main": "Vladimir Putin", "taboo": ["soviet", "President", "Ukraine", "war", "russian"] },
        { "main": "Vietnam", "taboo": ["asia", "hanoi", "country", "Singapore", "hochiminh"] },
        { "main": "Hydrogen", "taboo": ["Periodic Table", "element", "Fusion", "water", "gas"] },
        { "main": "World War II", "taboo": ["france", "allies", "japan", "germany", "soviet"] },
        { "main": "Dexter", "taboo": ["Cartoon", "killer", "murder", "television", "showtime"] },
        { "main": "Tom Cruise", "taboo": ["movie", "Hollywood", "Mission Impossible", "stunts", "actor"] },
        { "main": "Thomas Edison", "taboo": ["light", "inventor", "bulb", "electric", "experimets"] },
        { "main": "Carbon Dioxide(CO2)", "taboo": ["oxygen", "poisoning", "breathe", "plants", "gas"] },
        { "main": "Basketball", "taboo": ["sport", "court", "nba", "Slam dunk", "tall"] },
        { "main": "Chernobyl", "taboo": ["explosion", "radioactive", "nuclear", "power", "reactor"] },
        { "main": "Taj Mahal", "taboo": ["Mughal", "architecture", "monument", "white marble", "tomb"] },
        { "main": "Europe", "taboo": ["Continent", "France", "Germany", "Netherlands", "Italy"] },
        { "main": "Marketing", "taboo": ["MBA", "Digital", "product", "Advertisments", "customer"] },
        { "main": "Australia", "taboo": ["island", "sydney", "commonwealth", "melbourne", "continent"] },
        { "main": "Corn", "taboo": ["syrup", "cob", "sugar", "maize", "kernels"] },
        { "main": "Microsoft", "taboo": ["Windows", "Skype", "Bill Gates", "Software", "OS"] },
        { "main": "Tiger", "taboo": ["predator", "india", "carnivore", "bengal", "wild"] },
        { "main": "Hong Kong", "taboo": ["harbour", "city", "region", "territory", "china"] },
        { "main": "Diabetes", "taboo": ["Type 1/2", "Sugar", "glucose", "insulin", "disease"] },
        { "main": "Butter", "taboo": ["food", "fat", "dairy", "milk", "cream"] },
        { "main": "Vegetarian", "taboo": ["vegetable", "products", "vegan", "dishes", "diet"] },
        { "main": "Denmark", "taboo": ["norway", "europe", "copenhagen", "sweden", "danish"] },
        { "main": "Enrique Iglesias", "taboo": ["music", "songs", "singer", "english", "hero"] },
        { "main": "Seven deadly sins", "taboo": ["lust", "sloth", "greed", "pride", "wrath", "envy", "gluttony"] },
        { "main": "Apostrophe", "taboo": ["mark", "english", "plural", "names", "comma"] },
        { "main": "Johnny Depp", "taboo": ["actor", "pirate", "Jack Sparrow", "Hollywood", "Divorce"] },
        { "main": "BradPitt", "taboo": ["actor", "Hollywood", "angelinajolie", "Fight Club", "Jennifer Aniston"] },
        { "main": "Hyphen", "taboo": ["minus", "mark", "dash", "line", "style"] },
        { "main": "Tofu", "taboo": ["vegan", "cuisine", "protein", "Thai", "soy"] },
        { "main": "Emma Stone", "taboo": ["zombieland", "movie", "Hollywood", "actress", "spiderman"] },
        { "main": "Mohammad", "taboo": ["islam", "prophet", "muslim", "quran", "arab"] },
        { "main": "Nuclear power", "taboo": ["fission", "radioactive", "Uranium", "reactor", "energy"] },
        { "main": "FIFA World Cup", "taboo": ["germany", "teams", "Football", "Soccer", "brazil"] },
        { "main": "Dwayne Johnson", "taboo": ["Rock", "tripleh", "wwe", "Actor", "Hollywood"] },
        { "main": "Marijuana", "taboo": ["smoke", "joint", "plant", "illegal", "cannabis"] },
        { "main": "Friends", "taboo": ["chandler", "monica", "ross", "joey", "rachel", "phoebe"] },
        { "main": "William Shakespeare", "taboo": ["Author", "plays", "Julius Ceaser", "Othello", "literature"] },
        { "main": "Adolf Hitler", "taboo": ["Germany", "Nazi", "military", "dictator", "war"] },
        { "main": "India", "taboo": ["country", "population", "Hindu", "Mumbai", "Delhi"] },
        { "main": "Computer", "taboo": ["machine", "programming", "CPU", "keyboard", "mouse"] },
        { "main": "Iron Man", "taboo": ["Marvel", "Genius", "Billionnaire", "Arc Reactor", "Tony Stark"] },
        { "main": "iPhone", "taboo": ["camera", "X", "esim", "ios", "apple"] },
        { "main": "Beer", "taboo": ["Drink", "Thirsty", "Hops", "Barley", "Bottle"] },
        { "main": "Lunch", "taboo": ["Breakfast", "Meal", "Afternoon", "Dinner", "Food"] },
        { "main": "Trampoline", "taboo": ["Sports", "Jump", "Spring", "Child", "Air"] },
        { "main": "Science", "taboo": ["School", "Education", "Subject", "Teaching", "Experiment"] },
        { "main": "casino", "taboo": ["cards", "Poker", "Black Jack", "gambling", "Las Vegas"] },
        { "main": "Vishnu", "taboo": ["Ram", "Krishna", "Hinduism", "incarnations", "God"] },
        { "main": "spider", "taboo": ["insect", "Marvel", "bite", "web", "superhero"] },
        { "main": "muscles", "taboo": ["exercise", "bones", "protein", "strong", "ligaments"] },
        { "main": "beard", "taboo": ["goats", "growth", "facial", "old", "hair"] },
        { "main": "cigarette", "taboo": ["lighter", "lungs", "filter", "cancer", "smoke"] },
        { "main": "wine", "taboo": ["grapes", "dine", "bottle", "red", "drink"] },
        { "main": "cupid", "taboo": ["baby", "naked", "bow", "arrow", "love"] },
        { "main": "Evil", "taboo": ["hell", "devil", "exorcised", "good", "witches"] },
        { "main": "Ocean", "taboo": ["Pacific", "Atlantic", "Indian", "water", "sea"] },
        { "main": "Titanic", "taboo": ["sinking", "ship", "Jack", "Iceberg", "movie"] },
        { "main": "Netflix", "taboo": ["TV", "video", "movies", "service", "streaming"] },
        { "main": "Mahatma Gandhi", "taboo": ["Independence", "Non-Violence", "congress", "India", "Freedom"] },
        { "main": "Instagram", "taboo": ["facebook", "Social Media", "Photos", "Reels", "Upload"] },
    ]
};

let currentWordIndex = 0;
let correctScore = 0;
let tabooScore = 0;
let timerInterval;
let selectedWords;

function startGame(gameType) {
    selectedWords = allWords[gameType];
    if (gameType == "general") {
        selectedWords = allWords["kids"].concat(selectedWords)
    }
    
    let currentIndex = selectedWords.length, randomIndex;
    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [selectedWords[currentIndex], selectedWords[randomIndex]] = [selectedWords[randomIndex], selectedWords[currentIndex]];
    }

    startContainer.style.display = 'none';
    gameContainer.style.display = 'block';
    endContainer.style.display = 'none'

    timeLeft = 180
    nextWord(selectedWords, timeLeft);
}

function endGame(score) {
    startContainer.style.display = 'none';
    gameContainer.style.display = 'none';
    endContainer.style.display = 'block'
    finalScore.innerHTML = score;
    gameOverSound.play();
}

function startTimer() {
    timerInterval = setInterval(function () {
        if (timeLeft > 0) {
            timeLeft--;
            time.textContent = `${timeLeft.toString().padStart(2, '0')}`;
        } else {
            clearInterval(timerInterval);
            nextWord(selectedWords, timeLeft);
        }
    }, 1000);
}

function nextWord(words, timeLeft) {
    if (timeLeft <= 0) {
        endGame("Correct - " + correctScore + " | Taboo - " + tabooScore)
    }
    clearInterval(timerInterval);
    if (currentWordIndex < words.length - 1) {
        currentWordIndex++;
    } else {
        endGame("Correct - " + correctScore + " | Taboo - " + tabooScore)
    }

    mainWord.textContent = words[currentWordIndex].main;
    tabooWordsList.innerHTML = "";
    for (let taboo of words[currentWordIndex].taboo) {
        const li = document.createElement('li');
        const br = document.createElement('br')
        li.textContent = taboo;
        tabooWordsList.appendChild(li);
        tabooWordsList.appendChild(br)
    }
    startTimer(timeLeft);
}

guessedButton.addEventListener('click', function () {
    correctScore++;
    score.textContent = `Correct: ${correctScore} | Taboo: ${tabooScore}`;
    correctSound.play();
    nextWord(selectedWords, time.innerHTML);
});

tabooButton.addEventListener('click', function () {
    tabooScore++;
    score.textContent = `Correct: ${correctScore} | Taboo: ${tabooScore}`;
    tabooSound.play();
    nextWord(selectedWords, time.innerHTML);
});

skipButton.addEventListener('click', function () {
    skipSound.play();
    nextWord(selectedWords, time.innerHTML);
});

kidsButton.addEventListener('click', function () {
    startGame("kids");
});

generalButton.addEventListener('click', function () {
    startGame("general");
});

restartGame.addEventListener('click', function () {
    location.reload();
});
