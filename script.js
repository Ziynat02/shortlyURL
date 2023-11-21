let copyBtn = document.getElementById("copyBtn");
let link = document.getElementById("link");
let shortLink = document.getElementById("shortLink");
let shortUrls = document.getElementById("shortUrls");

async function copyContent(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Content copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
}

async function shortenIt() {
  const url = "https://url-shortener-service.p.rapidapi.com/shorten";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "49ffa17bfcmshc128bf5bd21722bp1a1389jsn358cb34149e1",
      "X-RapidAPI-Host": "url-shortener-service.p.rapidapi.com",
    },
    body: new URLSearchParams({
      url: "https://google.com/",
    }),
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
shortenIt();
