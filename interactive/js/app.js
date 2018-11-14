const inputs = document.querySelectorAll(".controls input");
const value = document.querySelector(".value");
const name = document.querySelector(".name");
const reset = document.querySelector(".reset");

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
  value.textContent = this.value;
  name.textContent = this.name;
}

function setDefault(evt) {
  [...inputs].map(e => {
    e.value = e.dataset.default;
    const suffix = e.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${e.name}`, e.value + suffix);
  });
  value.textContent = 0;
  name.textContent = "";
}

inputs.forEach(i => i.addEventListener("change", handleUpdate));
reset.addEventListener("click", setDefault);
