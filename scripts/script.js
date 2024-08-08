const popUp = document.getElementById("popup")
popUp.addEventListener('click', function() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
})