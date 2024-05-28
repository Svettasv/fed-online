export function showAlert(element) {
  element.addEventListener("click", () => {
    alert("Hello component!");
  });
}
