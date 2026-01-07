function start() {
  window.open("https://github.com/jankidarandale92", "_blank");
}

function openResume() {
  window.open("resume.pdf", "_blank");
}
const nameText = "Janki Darandale";
let index = 0;

function typeName() {
  if (index < nameText.length) {
    document.querySelector(".typing-name").textContent += nameText.charAt(index);
    index++;
    setTimeout(typeName, 120);
  }
}

window.onload = typeName;
