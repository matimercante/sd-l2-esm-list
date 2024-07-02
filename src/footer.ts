export function footerComponent() {
  const footer = document.createElement("footer");
  footer.innerHTML = `
    <a href="index.html">Home</a>
    <p>Contactanos al 123456789</p>`;
  footer.style.border = "solid 3px black";
  footer.style.padding = "12px";
  return footer;
}
