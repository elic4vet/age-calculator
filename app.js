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

/*Birth Date*/
let yearOfBirth = date.getFullYear();
let monthOfBirth = date.getMonth() + 1; // month + 1 because month starts from 0
let dayOfBirth = date.getDate();

/*Current Date*/
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth() + 1;
let currentDay = currentDate.getDate();

/*Results*/
let years = currentYear - yearOfBirth;
let months = currentMonth - monthOfBirth;
let days = currentDay - dayOfBirth;

let result_years = document.querySelector(".result_years");
let result_months = document.querySelector(".result_months");
let result_days = document.querySelector(".result_days");

function checkYear() {
  if (+inputYear.value > 2023 || +inputYear.value < 1) {
    errorYear.textContent = "Must be a valid Year";
    return false;
  } else {
    errorYear.innerHTML = "";
    return true;
  }
}

function checkMonth() {
  if (+inputMonth.value > 12 || +inputMonth.value < 1) {
    errorMonth.textContent = "Must be a valid Month";
    return false;
  } else {
    errorMonth.innerHTML = "";
    return true;
  }
}

function checkDay() {
  if (+inputDay.value < 1 || day.value > 31) {
    errorDay.textContent = "Must be a valid Day";
    return false;
  } else {
    errorDay.innerHTML = "";
    return true;
  }
}

function CalculateDate() {
  checkYear();
  checkMonth();
  checkDay();
  result_years.innerHTML = years;
  result_months.innerHTML = months;
  result_days.innerHTML = days;
}

button.addEventListener("click", CalculateDate);
