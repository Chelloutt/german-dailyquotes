const clickbtn = document.getElementById("btn");
const translated = document.getElementById("translated");
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
    quotes.innerText = `"${data.content}"`;
    author.innerText = `-${data.originator.name}`;
  

    const encodedParams = new URLSearchParams();
    encodedParams.append("from", "de");
    encodedParams.append("to", "ar");
    encodedParams.append("text", data.content);
    
    const options2 = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'ee893cae65msh738d38a82c2f60ep17b9fajsn8f0dafaeef02',
        'X-RapidAPI-Host': 'translo.p.rapidapi.com'
      },
      body: encodedParams
    };
    
    fetch('https://translo.p.rapidapi.com/api/v3/translate', options2)
    .then(response => response.json())
    .then(response =>  translated.innerText =   (response.translated_text))
    .catch(err => console.error(err));
  
}



clickbtn.addEventListener("click", getQoute);











