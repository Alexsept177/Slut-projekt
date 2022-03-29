const sideNav = document.getElementById("mySidenav");
function openNav() {
  sideNav.style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.querySelector("header").style.marginLeft = "250px";
}
function closeNav() {
  sideNav.style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.querySelector("header").style.marginLeft= "0";
}
