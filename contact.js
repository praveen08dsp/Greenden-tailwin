//slecting side navbar.menuicon

var sidenav =document.getElementById("side-nav")
var menuicon= document.getElementById("menu-icon")


menuicon.addEventListener("click",function()

{

sidenav.style.right=0

})
var closenav = document.getElementById("close-nav")
closenav.addEventListener("click",function() {

    sidenav.style.right="-50%"
})