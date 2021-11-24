var popup = document.getElementById( 'popup' );
var popupClose = document.getElementById('popup-close');

popupClose.addEventListener("click", togglePopup, false);

function togglePopup() {
    popup.classList.toggle('popup-shown');
}