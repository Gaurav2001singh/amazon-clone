//Nav-Bar header 

let searchBarOpt = document.querySelectorAll("#CategorySelect");
searchBarOpt.forEach((Opt) =>{
    Opt.addEventListener("change",function(){
        let selectedValue = this.value;
        if(selectedValue){
            let opturl = "https://www.amazon.com/s"
            window.location.href = `${opturl}?k=${selectedValue}`
        }
        
    })
})

let suggestionsList = document.getElementById("suggestionsList");
const suggestions = ["Laptop", "iPhone", "Headphones", "Shoes", "Smartwatch", "Books", "Camera", "Gaming Console", "Tablet","Speakers"];


let searchInput = document.getElementById("search-input");
searchInput.addEventListener("keydown",(event)=>{
    if(event.key === "Enter"){
        search()
    }  
})
searchInput.addEventListener("focus", () => {
    updateSuggestions();
    suggestionsList.style.display = "block";
    suggestionsList.style.backgroundColor = "#232F3E";
    suggestionsList.style.color = "white";
});

function updateSuggestions() {
    let query = searchInput.value.toLowerCase();
    suggestionsList.innerHTML = "";

    let filteredSuggestions = suggestions.filter(item => item.toLowerCase().includes(query));

    filteredSuggestions.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        li.addEventListener("click", () => {
            searchInput.value = item;
            suggestionsList.style.display = "none";
            search();
        });
        suggestionsList.appendChild(li);
    });

    suggestionsList.style.display = filteredSuggestions.length ? "block" : "none";
}

function search() {
    const query = searchInput.value.trim();
    const category = categorySelect.value;

    if (query) {
        let searchURL = `https://www.amazon.com/s?k=${query}`;
        if (category !== "All Categories") {
            searchURL += `&i=${category}`;
        }
        window.open(searchURL, "_blank");
    }
}

let searchBtn = document.getElementById("search-button");
searchBtn.addEventListener("click",()=>{
    search()
});

function search () {
    const query = searchInput.value.trim()
    if(query){
        window.open(`https://www.amazon.com/s?k=${query}`, "_blank")
    }
}

//location

function fetchLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                let apiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;

                try {
                    let response = await fetch(apiUrl);
                    let data = await response.json();

                    let address = data.address;
                    let area = address.neighbourhood || address.suburb || address.village || address.town || address.city || address.state || "Unknown Area";

                    document.querySelector(".add-second").textContent = area;
                } catch (error) {
                    console.error("Error fetching location:", error);
                    document.querySelector(".add-second").textContent = "Location not found";
                }
            },
            (error) => {
                console.error("Geolocation error:", error);
                document.querySelector(".add-second").textContent = "Location access denied";
            }
        );
    } else {
        document.querySelector(".add-second").textContent = "Geolocation not supported";
    }
}
fetchLocation();

//Header-Language

document.addEventListener("DOMContentLoaded", () => {
    const navLanguage = document.getElementById("navlanguage");

    // Create languageMenu div dynamically
    const languageMenu = document.createElement("div");
    languageMenu.classList.add("languageMenu");
    languageMenu.innerHTML = `
        <label><input type="radio" name="language" checked> English - EN</label>
        <hr>
        <label><input type="radio" name="language"> हिंदी - HI</label>
        <label><input type="radio" name="language"> தமிழ் - TA</label>
        <label><input type="radio" name="language"> తెలుగు - TE</label>
        <label><input type="radio" name="language"> ಕನ್ನಡ - KN</label>
        <label><input type="radio" name="language"> മലയാളം - ML</label>
        <label><input type="radio" name="language"> বাংলা - BN</label>
        <label><input type="radio" name="language"> मराठी - MR</label>
        <hr>
        <div class="languageMenu-footer">
            <a href="#">Change country/region</a>
        </div>
    `;

    navLanguage.appendChild(languageMenu);

    navLanguage.addEventListener("mouseover", () => {
        languageMenu.classList.add("show");
    });

    navLanguage.addEventListener("mouseleave", () => {
        languageMenu.classList.remove("show");
    });
});

//Header-Sihn in    

const navSignIn = document.getElementById("navSignIn");
const dropdown = document.getElementById("dropdown");

navSignIn.addEventListener("mouseenter", () => {
    dropdown.style.display = "block";
    });

    navSignIn.addEventListener("mouseleave", () => {
            dropdown.style.display = "none";
    });

//Header-Cart

let cartPage = "cart.html";
let cartButton = document.getElementById("navcart");

cartButton.addEventListener("click", function() {
    setTimeout(() => {
        document.location = cartPage;
    },100);
});

         
//nav penel

const menuIcon = document.getElementById("menuIcon");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeBtn");

menuIcon.addEventListener("click", () => {
    sidebar.style.left = "0";
});

closeBtn.addEventListener("click", () => {
    sidebar.style.left = "-340px";
});

// Shop sections
let boxes = document.querySelectorAll(".box img");
boxes.forEach((box,i)=>{
    box.addEventListener("click",(e)=>{
        const link = box.getAttribute("data-link");
        window.location.href = link;
    });
    
})


// Boxcontent1

let boxContet = document.querySelectorAll(".box1-content img");
boxContet.forEach((content)=>{    
    content.addEventListener("click",()=>{
        const link = content.getAttribute("data-link");
        window.location.href = link;
    })
})
//slidesimages

let images = document.querySelectorAll(".slides img");
let totalSlides = images.length;
let slides = document.querySelector(".slides");
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");
let index = 0;
function showSlide(i) {
    if (i >= totalSlides) { 
        index = 0;
    }
    if (i < 0) { 
        index = totalSlides - 1; 
    }
    slides.style.transform = `translateX(${-index * 100}%)`;
}

nextBtn.addEventListener("click", () => {
    index++;
    showSlide(index);
});

prevBtn.addEventListener("click", () => {
    index--;
    showSlide(index);
});

// Auto-slide
setInterval(() => {
    index++;
    showSlide(index);
}, 1000);



        