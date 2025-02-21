

const currentCityTag = document.querySelector(".current-city");
let currentCity = localStorage.getItem("city");


if (!currentCity) {
  localStorage.setItem("city", "București");
  currentCity = "București";
}

// Actualizam orasul afisat pe ecran.
currentCityTag.innerHTML = currentCity;

// Afisam vremea curenta si predictia pe 5 zile.
displayCurrentWeather(currentCity);
displayWeatherForecast(currentCity);





const backToTopButton = document.getElementById("back-to-top");

        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) { 
                document.body.classList.add("show-button");
            } else {
                document.body.classList.remove("show-button");
            }
        });

        backToTopButton.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth" 
            });
        });