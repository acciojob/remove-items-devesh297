document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("colorSelect");
  const button = document.querySelector("input[type='button']");

  button.addEventListener("click", () => {
    const selectedOption = select.options[select.selectedIndex];
    if (selectedOption) {
      selectedOption.remove(); 
    }
  });
});
