const skins = ["basic", "modern", "dark"];
let currentIndex = 1; // Start with 'modern' skin because this is the default css file linked to audioList.html
const skinLink = document.getElementById("skinLink");
const btn = document.getElementById("changeSkinBtn");

btn.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % skins.length;
  skinLink.href = `SKINS/${skins[currentIndex]}.css`;
});
