let button = document.getElementById("btn");
let inputDay = document.getElementById("day");
let inputMonth = document.getElementById("month");
let inputYear = document.getElementById("year");

button.addEventListener("click", function () {
  let day = inputDay.value;
  let month = inputMonth.value;
  let year = inputYear.value;

  let date = new Date(year, month - 1, day); // month - 1 because month starts from 0
  let yearOfBirth = date.getFullYear();
  let monthOfBirth = date.getMonth() + 1; // month + 1 because month starts from 0
  let dayOfBirth = date.getDate();
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth() + 1;
  let currentDay = currentDate.getDate();
  let years = currentYear - yearOfBirth;
  let months = currentMonth - monthOfBirth;
  let days = currentDay - dayOfBirth;
  let result_years = document.querySelector(".result_years");
  let result_months = document.querySelector(".result_months");
  let result_days = document.querySelector(".result_days");

  if (currentYear < yearOfBirth) {
    years--;
  } else if (currentYear == yearOfBirth) {
    if (currentYear < yearOfBirth) {
      years--;
    }
  }

  if (currentMonth < monthOfBirth) {
    months += 12;
  } else if (currentMonth == monthOfBirth) {
    if (currentMonth < monthOfBirth) {
      months += 12;
    }
  }

  if (currentDay < dayOfBirth) {
    days += 30;
  } else if (currentDay == dayOfBirth) {
    if (currentDay < dayOfBirth) {
      days += 30;
    }
  }

  result_years.innerHTML = `${years}`;
  result_months.innerHTML = `${months}`;
  result_days.innerHTML = `${days}`;
});
