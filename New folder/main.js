'use strict';

// modal variables

const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal functinon
const modalCloseFunc = function () { modal.classList.add('closed')}

// modal EventListener

modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);


// notification toast variables

const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');


// notification toast eventListener

toastCloseBtn.addEventListener('click', function () {
  notificationToast.closelist.add('closed');
});