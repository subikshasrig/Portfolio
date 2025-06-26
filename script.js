// ===== Education Slider ===== //
const eduSlider = document.getElementById('eduSlider');
const stageLabels = document.querySelectorAll('.stage');

function updateStages() {
  const value = parseInt(eduSlider.value);
  stageLabels.forEach(label => label.classList.remove('active'));

  if (value < 33.33) {
    stageLabels[0].classList.add('active');
  } else if (value < 66.66) {
    stageLabels[1].classList.add('active');
  } else {
    stageLabels[2].classList.add('active');
  }
}

eduSlider.addEventListener('input', updateStages);
window.addEventListener('load', updateStages);

// ===== Level Dropdown & Progress Bar ===== //
const levelSelect = document.getElementById('levelSelect');
const levelBarFill = document.getElementById('levelBarFill');

function updateLevelBar() {
  const value = levelSelect.value;
  levelBarFill.style.width = value + '%';
}

levelSelect.addEventListener('change', updateLevelBar);
window.addEventListener('load', updateLevelBar);

