let inputEl = document.getElementById("input");
let resultEl = document.getElementById("result");
let myFormEl = document.getElementById("myForm");
let wordoutEl = document.getElementById("wordout");
let displayEl = document.getElementById("display");
let introEl = document.getElementById("intro");

myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    const keyword = inputEl.value;
    const api_key = "AIzaSyDGndi-Ov8hgOVZJvb3oi7H9c3g05-tfNU";
    let options = {
        method: "GET"
    };
    fetch(`https://www.googleapis.com/youtube/v3/search?q=${keyword}&key=${api_key}`, options)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let search_appearances = data.pageInfo.totalResults;
            console.log(search_appearances);
            resultEl.textContent = search_appearances;
            wordoutEl.textContent = keyword;
            introEl.classList.add("d-none");
            displayEl.classList.remove("d-none");
        });

});
/*
const today= new Date();
    const startDate= new Date(today);
    startDate.setFullYear(startDate.getFullYear()-1);
    const endDate= new Date(today);
    endDate.setFullYear(endDate.getFullYear()-1);
    let sum=0;
    for(let i=0;i<12;i++){
        if(startDate.getMonth()===11){
            endDate.setMonth(0);
            endDate.setFullYear(startDate.getFullYear()+1);
        }else if(startDate.getMonth()===12){
            startDate.setMonth(0);
            startDate.setFullYear(startDate.getFullYear()+1);
        }else{
            endDate.setMonth(startDate.getMonth()+1);
        }
    
    
    
    let start_year=startDate.getFullYear();
    let start_month=startDate.getMonth();
    let start_date=startDate.getDate();
    let s_date=`${start_year}-${start_month+1}-${start_date}`;
    
    let end_year=endDate.getFullYear();
    let end_month=endDate.getMonth();
    let end_date=endDate.getDate();
    let e_date=`${end_year}-${end_month+1}-${end_date}`;
    

    
    fetch(`https://www.googleapis.com/youtube/v3/search?q=${keyword}&publishedAfter=${s_date}T00:00:00Z&publishedBefore=${e_date}T23:59:59Z&key=${api_key}`, options)
        .then(response => response.json())
        .then(data => {
            let search_appearances = data.pageInfo.totalResults;
            console.log(search_appearances);
            const days=Math.floor(((new Date(endDate))-(new Date(startDate)))/(1000*60*60*24))+1;
            search_appearances=search_appearances/days;
            sum+=search_appearances;
            
            startDate.setMonth(startDate.getMonth()+1);
        });
    
    
    }
    
    resultEl.textContent = sum/12;
            wordoutEl.textContent = keyword;
            introEl.classList.add("d-none");
            displayEl.classList.remove("d-none");
    
});
*/
