//const refs = {
   // step: document.querySelector('.step'),
   // value: document.querySelector('#value'),
    //decrement: document.querySelector('.decrement'),
    //increment: document.querySelector('.increment'),
//};

//let counterValue = 0;
//let step = 1;

//const render = () => {
   // refs.value.textContent = counterValue;
//};

//const handleDecrement = () => {
   // counterValue -= step;
    //render ();
//};

//const handleIncrement = () => {
    //counterValue += step;
    //render ();
//};

//const handleStepChange = (Event) => {
   // step = Number(Event.target.value);
//};

//render ();

//refs.decrement.addEventListener('click' , handleDecrement);
//refs.increment.addEventListener('click' , handleIncrement);
//refs.step.addEventListener('change' , handleStepChange);
const refs = {
     countDecrement: document.querySelector('[data-action="decrement"]'),
     countIncrement: document.querySelector('[data-action="increment"]'),
     countValue: document.querySelector('#value')
 };
 refs.countDecrement.addEventListener('click', onDecrement);
 refs.countIncrement.addEventListener('click', onIncrement);
 let counterValue = 0;
 function onDecrement() {
    refs.countValue.textContent = counterValue -= 1;
 }
 function onIncrement() {
    refs.countValue.value = counterValue += 1;
    refs.countValue.textContent = refs.countValue.value;
 }