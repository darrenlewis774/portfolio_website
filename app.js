const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents");
const works = document.getElementsByClassName("work");
const services = document.getElementsByClassName("service");
const servicesBtn = document.getElementById("servicesBtn");
const portfolioBtn = document.getElementById("portfolioBtn");
let worksHidden = true;
let servicesHidden = true;

// Check if additional rows of elements in services section are hidden, and
// display if so. If however additional rows of elements are already displayed, hide.
servicesBtn.addEventListener("click", event =>{
  if(servicesHidden){
    for(service of services){
      service.classList.remove("hidden");
      servicesBtn.innerHTML = "See less";
      servicesHidden = false;
    }
  }
  else{
    let i = 0;
    for(service of services){
      if(i > 2){    // Do not remove 'hidden' class from first row
        service.classList.add("hidden");
      }
      i++;
      servicesBtn.innerHTML = "See more";
      servicesHidden = true;
    }
  }
})

// Check if additional rows of elements in portfolio section are hidden, and
// display if so. If however additional rows of elements are already displayed, hide.
portfolioBtn.addEventListener("click", event =>{
  if(worksHidden){
    for(work of works){
      work.classList.remove("hidden");
      portfolioBtn.innerHTML = "See less";
      worksHidden = false;
    }
  }
  else{
    let i = 0;
    for(work of works){
      if(i > 2){    // Do not remove 'hidden' class from first row
        work.classList.add("hidden");
      }
      i++;
      portfolioBtn.innerHTML = "See more";
      worksHidden = true;
    }
  }
})

function openTab(tabName){
  // Remove 'active-link' class from all tab links
  for(tabLink of tabLinks){
    tabLink.classList.remove("active-link")
  }
  // Remove 'active-tab' class from all tabs
  for(tabContent of tabContents){
    tabContent.classList.remove("active-tab")
  }
  // Add 'active-link' class to selected link
  event.target.classList.add("active-link");
  // Add 'active-tab' class to selected tab. This tab name is
  // passed as an argument to openTab funtion from onclick in HTML
  document.getElementById(tabName).classList.add("active-tab");
}
const sideMenu = document.getElementById("side-menu");

function openMenu(){
  // Move menu to be visible
  sideMenu.style.right = "0";
}

function closeMenu(){
  // Move menu to be not visible
  sideMenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbw7RfUgXJPEATzc81OB8dASgpjERbOZtoLU1AbCx96hzoZ77ZMaCMLn5oO6A7l9X6hZEQ/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

// Submit details from form to Google sheet, then return confirmation message to user
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(() => {
        msg.innerHTML = "";
      }, 5000)
      form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})