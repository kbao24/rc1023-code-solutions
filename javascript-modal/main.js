var isOpen = false;
var $openModal = document.querySelector('.open-modal');
var $dismissModal = document.querySelector('.dismiss-modal');
var $modalContainer = document.querySelector('.modal-container');

function toggleModal() {
  isOpen = !isOpen;
  if (isOpen) {
    $modalContainer.className = 'modal-container';
  } else {
    $modalContainer.className = 'modal-container hidden';
  }
}

$openModal.addEventListener('click', toggleModal);
$dismissModal.addEventListener('click', toggleModal);
