import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const formData = {
  email: '',
  message: '',
};

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

function handleEmailInput(event) {
  event.preventDefault();
}

function handleTextareaInput(event) {
  event.preventDefault();
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

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  event.currentTarget.reset('feedback-form-state');
  localStorage.removeItem('feedback-form-state');
}

function populateFormFields() {
  const data = localStorage.getItem('feedback-form-state');

  const parsedData = JSON.parse(data);

  if (!data) return;
  formRefs.inputEl.value = parsedData.email;
  formRefs.textAreaEl.value = parsedData.message;
}

formRefs.inputEl.addEventListener('input', handleEmailInput);
formRefs.textAreaEl.addEventListener('input', handleTextareaInput);
formRefs.formEl.addEventListener('submit', handleFormSubmit);
formRefs.formEl.addEventListener('input', handleFormInput);
