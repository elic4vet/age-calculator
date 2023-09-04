let button = document.getElementById("btn");
let inputDay = document.getElementById("day");
let inputMonth = document.getElementById("month");
let inputYear = document.getElementById("year");

/*errors*/
let errorDay = document.querySelector(".errorDay");
let errorMonth = document.querySelector(".errorMonth");
let errorYear = document.querySelector(".errorYear");
/*inputs values*/

let day = inputDay.value;
let month = inputMonth.value;
let year = inputYear.value;

let date = new Date(year, month - 1, day); // month - 1 because month starts from 0

/*Current Date*/
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth() + 1;
let currentDay = currentDate.getDate();

/*Results*/
let years = currentYear - year;
let months = currentMonth - month;
let days = currentDay - day;

let result_years = document.querySelector(".result_years");
let result_months = document.querySelector(".result_months");
let result_days = document.querySelector(".result_days");

function checkYear() {
  if (+inputYear.value > 2023 || +inputYear.value < 1) {
    errorYear.textContent = "Must be a valid Year";
    inputYear.classList.add("invalid");
    return false;
  } else {
    errorYear.innerHTML = "";
    inputYear.classList.remove("invalid");
    return true;
  }
}

function checkMonth() {
  if (+inputMonth.value > 12 || +inputMonth.value < 1) {
    errorMonth.textContent = "Must be a valid Month";
    inputMonth.classList.add("invalid");
    return false;
  } else {
    errorMonth.innerHTML = "";
    inputMonth.classList.remove("invalid");
    return true;
  }
}

function checkDay() {
  if (+inputDay.value < 1 || day.value > 31) {
    errorDay.textContent = "Must be a valid Day";
    inputDay.classList.add("invalid");
    return false;
  } else {
    errorDay.innerHTML = "";
    inputDay.classList.remove("invalid");
    return true;
  }
}

function CalculateDate() {
  if (!checkYear() && !checkMonth() && !checkDay()) {
    // if any of the functions return false, the function will stop and return false and the results will not be shown
    return false;
  } else {
    result_years.innerHTML = years;
    result_months.innerHTML = months;
    result_days.innerHTML = days;
    return true;
  }
}

button.addEventListener("click", CalculateDate);
