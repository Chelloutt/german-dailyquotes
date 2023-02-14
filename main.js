const clickbtn = document.getElementById("btn");
const quotes = document.getElementById("quote");
const author = document.getElementById("author");

const ApiKey = 'ee893cae65msh738d38a82c2f60ep17b9fajsn8f0dafaeef02';


const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": ApiKey,
  },
};
const ApiUrl =
  "https://quotes15.p.rapidapi.com/quotes/random/?language_code=de";


async function getQoute() {
     
    quotes.innerText = "getting quotes...";
    const response = await fetch(ApiUrl, options);
    const data = await response.json();
    console.log(data.originator.name);
    quotes.innerText = `"${data.content}"`;
    author.innerText = `-${data.originator.name}`;

    
}

clickbtn.addEventListener("click", getQoute)