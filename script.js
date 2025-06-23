const eduSlider = document.getElementById('eduSlider');
const sliderThumb = document.getElementById('sliderThumb');

function updateSliderThumb() {
  const value = parseInt(eduSlider.value);
  const percent = value * 33.33;
  sliderThumb.style.left = `${percent}%`;
}

eduSlider.addEventListener('input', updateSliderThumb);
window.addEventListener('load', updateSliderThumb);

document.querySelectorAll(".projects button").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Project details will open in a new tab.");
  });
});
