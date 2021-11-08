refreshButton.addEventListener('click', refresh);

var url = "https://api.adviceslip.com/advice";

$.getJSON(url, function (data) {
  
  display.innerHTML = data.slip.advice;
})

function refresh() {
  window.location.reload()
}