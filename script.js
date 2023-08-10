let inputEl = document.getElementById("input");
let resultEl = document.getElementById("result");
let myFormEl = document.getElementById("myForm");
let wordoutEl = document.getElementById("wordout");
let displayEl = document.getElementById("display");
let introEl = document.getElementById("intro");

myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    const keyword = inputEl.value;
    const api_key = "AIzaSyC1Pr8vOXSouTf0AmbBLqNsZG8zAjVkN_k";
    let options = {
        method: "GET"
    };
    fetch(`https://www.googleapis.com/youtube/v3/search?q=${keyword}&key=${api_key}`, options)
        .then(response => response.json())
        .then(data => {
            let search_appearances = data.pageInfo.totalResults;
            console.log(search_appearances);
            resultEl.textContent = search_appearances;
            wordoutEl.textContent = keyword;
            introEl.classList.add("d-none");
            displayEl.classList.remove("d-none");
        });

});