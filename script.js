const eduSlider = document.getElementById('eduSlider');
const stageLabels = document.querySelectorAll('.stage');

function updateStages() {
  const value = parseInt(eduSlider.value);

  // Remove active state from all
  stageLabels.forEach(label => label.classList.remove('active'));

  // Highlight the correct stage
  if (value < 33.33) {
    stageLabels[0].classList.add('active'); // School
  } else if (value < 66.66) {
    stageLabels[1].classList.add('active'); // HS
  } else {
    stageLabels[2].classList.add('active'); // Uni
  }
}

eduSlider.addEventListener('input', updateStages);
window.addEventListener('load', updateStages);
