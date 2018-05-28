let allQuotes = [

["I've got a bad feeling about this.", "Han Solo"], 

["May the Force be with you.", "General Dodonna"], 

["The ability to speak does not make you intelligent, now get out of here.", "Qui-Gon Jinn"], 

["The Force will be with you. Always.", "Obi-Wan Kenobi"], 

["Don't call me a mindless philosopher, you overweight glob of grease!", "C-3PO"], 

["Would somebody get this big walking carpet out of my way?", "Princess Leia"], 

["Either shut him up or shut him down!", "Han Solo"], 

["Help me, Obi-Wan Kenobi. You're my only hope.", "Leia Organa"], 

["You look absolutely beautiful. You truly belong here with us among the clouds.", "Lando Calrissian (to Leia)"], 

["Laugh it up, fuzzball!", "Han Solo"], 

["You don't have to do this to impress me.", "Princess Leia"], 

["Boring conversation anyway. Luke! We're gonna have company!", "Han Solo"], 

["Oh no, my young Jedi. You will find that it is you who are mistaken, about a great many things.", "The Emperor"], 

["Women always figure out the truth. Always.", "Han Solo"], 

["He is as clumsy as he is stupid. General, prepare your troops for a surface attack.", "Darth Vader"], 

["Wait. Oh my! What have you done. I'm backwards. You flea-bitten furball! Only an overgrown mop-head like you would be stupid enough to...", "C-3PO"], 

["Hmph! Adventure. Heh! Excitement. Heh! A Jedi craves not these things. You are reckless!", "Yoda"], 

["Now, witness the power of this fully operational battle station.", "The Emperor"], 

["I assure you, Lord Vader. My men are working as fast as they can.", "Moff Jerjerrod"], 

["I'm one with the Force, and the Force is with me.", "Chirrut Imwe"], 

["There is no escape! Don't make me destroy you. Luke, you do not yet realize your importance. You've only begun to discover your power!", "Darth Vader"], 

["Be careful not to choke on your aspirations, Director.", "Darth Vader"], 

["Someone has to save our skins. Into the garbage chute, fly boy.", "Princess Leia"], 

["Same thing I always do: talk my way out of it.", "Han Solo"], 

["It's the ship that made the Kessel run in less than twelve parsecs.", "Han Solo"], 

["You do have your moments. Not many, but you have them.", "Princess Leia"], 

["Who's the more foolish: the fool, or the fool who follows him?", "Obi-Wan Kenobi"], 

["What if the democracy we thought we were serving no longer exists, and the Republic has become the very evil we've been fighting to destroy?", "Padme Amidala"], 

["Great, kid! Don't get cocky.", "Han Solo"], 

["I'm standing by as you requested, although there's a problem on the horizon. There's no horizon.", "K-2SO"], 

["But I was going into Tosche Station to pick up some power converters!", "Luke Skywalker"], 

["I have lived long enough to see the same eyes in different people.", "Maz Kanata"], 

["Death is a natural part of life. Rejoice for those around you who transform into the Force.", "Yoda"], 

["If we can make it to the ground, we'll take the next chance. And the next. On and on until we win... or the chances are spent.", "Jyn Erso"], 

["You will know when you are calm, at peace, passive. A Jedi uses the force for knowledge and defense, never for attack.", "Yoda"], 

["Never tell me the odds!", "Han Solo"], 

["We seem to be made to suffer. It's our lot in life.", "C-3PO"], 

["I find your lack of faith disturbing.", "Darth Vader"], 

["When you look at the dark side, careful you must be... for the dark side looks back.", "Yoda"], 

["He's the brains, sweetheart!", "Han Solo"], 

["Do. Or do not. There is no try.", "Yoda"], 

["When gone am I, the last of the Jedi will you be. The Force runs strong in your family. Pass on what you have learned.", "Yoda"], 

["I'll never turn to the dark side. You've failed, your highness. I am a Jedi, like my father before me.", "Luke Skywalker"], 

["Size matters not. Look at me. Judge me by my size, do you?", "Yoda"], 

["You don't need to see his identification... These aren't the droids you're looking for.", "Obi-Wan Kenobi"], 

["Now, young Skywalker, you will die.", "Emperor Palpatine"], 

["It's the ship that made the Kessel Run in less than 12 parsecs.", "Han Solo"], 

["Aren't you a little short for a stormtrooper?", "Leia Organa"], 

["Just for once, let me look on you with my own eyes.", "Anakin Skywalker"], 

["You can't stop the change, any more than you can stop the suns from setting.", "Shmi Skywalker"], 

["Fear is the path to the dark side. Fear leads to anger; anger leads to hate; hate leads to suffering. I sense much fear in you.", "Yoda"], 

["If you strike me down I shall become more powerful than you can possibly imagine.", "Obi-Wan Kenobi"], 

["I'm just a simple man trying to make my way in the universe.", "Jango Fett"], 

["What if I told you that the Republic was now under the control of a Dark Lord of the Sith?", "Count Dooku"], 

["Sorry about the mess.", "Han Solo"], 

["The dark side of the Force is a pathway to many abilities some consider to be unnatural.", "Chancellor Palpatine"], 

["Power! Unlimited power!", "Darth Sidious"], 

["You are unwise to lower your defenses!", "Darth Vader"], 

["So this is how liberty dies. With thunderous applause.", "Padmé Amidala"], 

["I want to come with you to Alderaan. There's nothing for me here now. I want to learn the ways of the Force and become a Jedi like my father.", "Luke Skywalker"], 

["She may not look like much, but she's got it where it counts, kid.", "Han Solo"], 

["You were my brother, Anakin. I loved you.", "Obi-Wan Kenobi"], 

["I suggest a new strategy, Artoo: Let the Wookiee win.", "C-3PO"], 

["Governor Tarkin, I should've expected to find you holding Vader's leash. I recognized your foul stench when I was brought on board.", "Leia Organa"],  

["Hokey religions and ancient weapons are no match for a good blaster at your side, kid.", "Han Solo"], 

["Don't worry about Master Luke. I'm sure he'll be all right. He's quite clever, you know... for a human being.", "C-3PO"], 

["Chewie, we're home.", "Han Solo"], 

["Everything is proceeding as I have foreseen.", "The Emperor"], 

["That's no moon. It's a space station.", "Obi-Wan Kenobi"], 

["You know, no matter how much we fought, I've always hated watching you leave.", "Leia Organa"], 

["Oh, my dear friend. How I've missed you.", "C-3PO"], 

["I'm one with the Force. The Force is with me.", "Chirrut Imwe"]

];

// random number generator
let randomNumber = () => {
    let min = 0; 
    let max = allQuotes.length;
    return Math.floor(Math.random() * (max - min)) + min
};

let randomQuoteNumber = randomNumber();
console.log(allQuotes.length);
console.log(randomQuoteNumber);

// display quotes
let quoteText = allQuotes[randomQuoteNumber][0];
let quoteAuthor = allQuotes[randomQuoteNumber][1];
console.log(quoteText + " - " + quoteAuthor)

let displayQuote = () => {
    document.getElementById("quotetext").textContent = quoteText;
    document.getElementById("quoteauthor").textContent = quoteAuthor;  
}
displayQuote();

// button actions
let btnQuote = document.getElementById("newquote");
let btnTweet = document.getElementById("tweetbutton");

// new quote button
function showNewQuote() {
    randomNumber();
    randomQuoteNumber = randomNumber();
    quoteText = allQuotes[randomQuoteNumber][0];
    quoteAuthor = allQuotes[randomQuoteNumber][1];
    displayQuote();
}

btnQuote.addEventListener('click', showNewQuote);

// tweet button
function tweetQuote() {
    let url = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${quoteText}" - ${quoteAuthor}`;
    window.location.assign(url);
}
btnTweet.addEventListener('click', tweetQuote);
