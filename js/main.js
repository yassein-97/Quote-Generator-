var prevNumber = 0; 
var quoteList = [
    { quote: `"Be yourself; everyone else is already taken."`, quoteAuther: `--Oscar Wilde`, },
    { quote: `"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."`, quoteAuther: `--Albert Einstein`, },
    { quote: `"So many books, so little time."`, quoteAuther: `--Frank Zappa`, },
    { quote: `"A room without books is like a body without a soul."`, quoteAuther: `--Marcus Tullius Cicero`, },
    { quote: `"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind"`, quoteAuther: `--Bernard M. Baruch`, },
    { quote: `"You know you're in love when you can't fall asleep because reality is finally better than your dreams"`, quoteAuther: `--Dr. Seuss`, },
    { quote: `"You only live once, but if you do it right, once is enough."`, quoteAuther: `--Mae West`, },
    { quote: `"Be the change that you wish to see in the world."`, quoteAuther: `--Mahatma Gandhi`, },
    { quote: `"In three words I can sum up everything I've learned about life: it goes on."`, quoteAuther: `--Robert Frost`, },
    { quote: `"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals."`, quoteAuther: `--J.K. Rowling`, },
    { quote: `"Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend"`, quoteAuther: `--Albert Camus`, },
    { quote: `"If you tell the truth, you don't have to remember anything."`, quoteAuther: `--Mark Twain`, },
    { quote: `"Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . ."`, quoteAuther: `--C.S. Lewis`, },
    { quote: `"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."`, quoteAuther: `--Maya Angelou`, },
    { quote: `"A friend is someone who knows all about you and still loves you"`, quoteAuther: `--Elbert Hubbard`, },
    { quote: `"To live is the rarest thing in the world. Most people exist, that is all"`, quoteAuther: `--Oscar Wilde`, },
    { quote: `"Live as if you were to die tomorrow. Learn as if you were to live forever."`, quoteAuther: `--Mahatma Gandhi`, },
    { quote: `"Always forgive your enemies; nothing annoys them so much."`, quoteAuther: `--Oscar Wilde`, },
    { quote: `"We accept the love we think we deserve."`, quoteAuther: `--Stephen Chbosky`, },
    { quote: `"Without music, life would be a mistake."`, quoteAuther: `--Friedrich Nietzsche`, },
    { quote: `"I am so clever that sometimes I don't understand a single word of what I am saying"`, quoteAuther: `--Oscar Wilde`, },
];

function getQoute(){
    var newNumber;
    while (true) {
        newNumber = Math.round(Math.random() * 20);
        if (newNumber != prevNumber) {
            break;
        } 
    }
    prevNumber = newNumber;
    document.getElementById("quote").innerHTML=quoteList[newNumber].quote;
    document.getElementById("quoteAuther").innerHTML=quoteList[newNumber].quoteAuther;
};