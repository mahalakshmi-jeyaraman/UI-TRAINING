$.getJSON('locations.json', function (data) {
    $.each(data, function (index, obj) {
      var locationDiv = $('<div class="locationDiv">');
      var img = $('<img>').attr('src', obj.country);
      var Locations = $('<div class="Locations">');
      var country = $('<p>').text(obj.state);
      var state = $('<p>').text(obj.city);
      var phone = $('<p>').text(obj.contact);
      Locations.append(country, state, phone);
      locationDiv.append(img, Locations);
      $('#content3').append(locationDiv);
    });
  });
const buttons = document.querySelectorAll(".button");
const contents = document.querySelectorAll(".content");

function toggleActiveClass() {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
  this.classList.add("active");
}

function toggleContent() {
  contents.forEach((content) => {
    content.classList.remove("active-content");
  });
  const contentId = this.getAttribute("data-content");
  const content = document.querySelector(contentId);
  content.classList.add("active-content");

  if (!content) {
    contents[0].classList.add("active-content");
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", toggleActiveClass);
  button.addEventListener("click", toggleContent);
});

contents[0].classList.add("active-content");
buttons[0].classList.add("active");
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
