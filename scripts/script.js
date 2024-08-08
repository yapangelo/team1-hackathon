const popUp = document.querySelectorAll(".popup")
popUp.addEventListener('click', function() {
    var popup = document.querySelectorAll(".popuptext");
    popup.classList.toggle("show");
})