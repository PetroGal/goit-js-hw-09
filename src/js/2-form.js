import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

const formRefs = {
  formEl: document.querySelector('.feedback-form'),
  inputEl: document.querySelector('.form-input'),
  textAreaEl: document.querySelector('.form-textarea'),
};

populateFormFields();

function handleFormInput(event) {
  event.preventDefault();

  formData[event.target.name] = event.target.value.trim();

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function handleFormSubmit(event) {
  event.preventDefault();

  if (
    formRefs.inputEl.value.length === 0 &&
    formRefs.textAreaEl.value.length === 0
  ) {
    alert('Please fill all the fields');
  } else {
    console.log(formData);
  }

  event.currentTarget.reset('feedback-form-state');
  localStorage.removeItem('feedback-form-state');
  formData = {};
}

function populateFormFields() {
  formRefs.inputEl.value = formData.email || '';
  formRefs.textAreaEl.value = formData.message || '';
}

formRefs.formEl.addEventListener('submit', handleFormSubmit);
formRefs.formEl.addEventListener('input', handleFormInput);
