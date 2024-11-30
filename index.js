var hearts = document.querySelectorAll(".heart");

// Add a click event listener to each heart
hearts.forEach(heart => {
    heart.addEventListener("click", function(event) {
        // Set the 'fill' of the clicked heart to red
        event.target.setAttribute('fill', 'red');
    });
});

// topclose

var topClose=document.getElementById("topClose")
var topPath=document.getElementById("topPath")
topClose.addEventListener("click",function(){
    topPath.style.display="none"
})

//sidenav
var sidenav =document.getElementById("sidenav")
var menuclose=document.getElementById("menuclose")
var menubar=document.getElementById("menubar")

menubar.addEventListener("click",function(){
    sidenav.style.left="0%"
})

menuclose.addEventListener("click",function(){
    sidenav.style.left="-50%"
})