const formRef = document.querySelector("form.login-form");

function onSubmit(e) {
  e.preventDefault();

  const { email, password } = e.currentTarget.elements;

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (!emailValue || !passwordValue) {
    return alert("Будь ласка, заповніть всі поля форми");
  }

  console.log({ email: emailValue, password: passwordValue });
  e.currentTarget.reset();
}

formRef.addEventListener("submit", onSubmit);
