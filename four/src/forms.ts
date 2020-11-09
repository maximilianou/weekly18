export const formData = (form: HTMLFormElement) => {
  const inputs = document.querySelectorAll('input');
  let values: { [prop: string ]: string} = {};

  inputs.forEach( input => {
    values[input.id] = input.value;
  });
  return values;
}