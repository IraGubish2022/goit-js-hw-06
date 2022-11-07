const inputElm = document.querySelector("#validation-input");
const validationInputEl = Number(inputElm.getAttribute(`data-length`));

console.log(validationInputEl);

inputElm.addEventListener('blur', onBlur);

function addRemoveColor(remove, add) {
  inputElm.classList.remove(remove);
  inputElm.classList.add(add);
}

function onBlur(event) {
  if (event.currentTarget.value.length === validationInputEl) {
    addRemoveColor('invalid', 'valid');
  } else {
    addRemoveColor('valid', 'invalid');
  }
}
