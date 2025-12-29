showDate = (event) => {
  if (event.target.value.length > 0) {
    let currentTime = moment()
      .tz(event.target.value)
      .format("dddd, MMMM D, YYYY h:mm A");

    let cityName = event.target.options[event.target.selectedIndex].text;

    alert(`It is ${currentTime} in ${cityName}`);
  }
};

let currentTimeElement = document.querySelector("#countries-dropdown-menu");
currentTimeElement.addEventListener("change", showDate);
