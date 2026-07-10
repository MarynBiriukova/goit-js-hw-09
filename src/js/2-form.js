//import { document } from "postcss";

//console.log("Form");

import '@fontsource/montserrat/500.css';

let formData = {
    email: "", message: ""
};
const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
//const textarea = form.querySelector("textarea");

form.addEventListener("submit", onFormSubmit);
form.addEventListener("input", onFormInput);

popForm();


function onFormSubmit(evt) {
    evt.preventDefault();

    formData.email = form.elements.email.value.trim();
    formData.message = form.elements.message.value.trim();
    //formData = { email, message };

    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }

    console.log("Submitted formData:", formData);
 
    localStorage.removeItem(STORAGE_KEY);
    formData.email = "";
    formData.message = "";
    form.reset();

}

function onFormInput(evt) {
  
  formData.email = form.elements.email.value.trim();
  formData.message = form.elements.message.value.trim();
  
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));   
    
}

function popForm() {
    const savedFormData = localStorage.getItem(STORAGE_KEY);
   
    if (savedFormData) {
        const parseData = JSON.parse(savedFormData);
        
        if (parseData.email) form.elements.email.value = parseData.email.trim();
        if (parseData.message) form.elements.message.value = parseData.message.trim();
        
    }
    
}
