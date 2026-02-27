export class Modal {
  constructor(modalId) {
    this.modalElement = document.getElementById(modalId);
    this.closeBtn = this.modalElement.querySelector('#close-modal-btn');
    this.setupCloseListener();
  }

  open() {
    this.modalElement.classList.add('modal-showed');
  }

  close() {
    this.modalElement.classList.remove('modal-showed');
  }

  isOpen() {
    return this.modalElement.classList.contains('modal-showed');
  }

  setupCloseListener() {
    this.closeBtn.addEventListener('click', () => this.close());
  }
}