export class Form {
  constructor(formId) {
    this.formElement = document.getElementById(formId);
  }

  getValues() {
    const formData = new FormData(this.formElement);
    const userData = Object.fromEntries(formData.entries());
    return userData;
  }

  isValid() {
    return this.formElement.checkValidity();
  }

  reset() {
    this.formElement.reset();
  }
}