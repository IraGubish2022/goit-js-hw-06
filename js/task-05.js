
    const inputEl = document.querySelector('#name-input');
    const spanEl = document.querySelector('#name-output'); 


inputEl.addEventListener('input' , (Event) => {
    if (Event.currentTarget.value.trim() !== '') {
        spanEl.textContent = Event.currentTarget.value;
    }
    else {
        spanEl.textContent = 'Anonymous';
    }
})