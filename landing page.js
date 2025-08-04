function goToPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
}
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username && password) {
    goToPage('explorePage');
  } else {
    alert("Please enter username and password.");
  }
}
function selectDestination(destinationName) {
  goToPage('bookingPage');
  const selectElement = document.getElementById("destinationSelect");
  for (let i = 0; i < selectElement.options.length; i++) {
    if (selectElement.options[i].text === destinationName) {
      selectElement.selectedIndex = i;
      break;
    }
  }
}
