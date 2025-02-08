export function getFormInput(formEl) {
  if (!formEl.checkValidity()) {
    formEl.classList.add('was-validated');
    return;
  } else {
    const input = Array.from(formEl.querySelectorAll('.form-control')).reduce(
      (struct, current) => {
        struct[current.name] = current.value;
        return struct;
      },
      {}
    );
    clearInput(formEl);
    formEl.classList.remove('was-validated');
    return input;
  }

  function clearInput(formEl) {
    formEl.querySelectorAll('.form-control').forEach((input) => {
      input.value = '';
    });
  }
}
