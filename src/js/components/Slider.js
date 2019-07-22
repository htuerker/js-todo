function plusSlider(n) {
  const projectsDiv = document.querySelector('.projects');
  let target;
  const remainder = projectsDiv.scrollLeft % 342;

  if (remainder === 0) {
    target = projectsDiv.scrollLeft + 342 * n;
  } else {
    target = projectsDiv.scrollLeft + 342 * Math.max(0, n) - remainder;
  }

  let prev = 0;
  const id = setInterval(frame, 10); // eslint-disable-line no-use-before-define

  function frame() {
    const current = projectsDiv.scrollLeft;
    projectsDiv.scrollLeft += (19 * n);
    if (projectsDiv.scrollLeft === prev) {
      clearInterval(id);
    } else {
      prev = current;
    }

    if (n > 0) {
      if (projectsDiv.scrollLeft >= target) {
        projectsDiv.scrollLeft = target;
        clearInterval(id);
      }
    } else {
      if (projectsDiv.scrollLeft <= target) {
        projectsDiv.scrollLeft = target;
        clearInterval(id);
      }
    }
  }
}

function PrevButton() {
  const prevButton = document.createElement('i');
  prevButton.className = 'fas fa-arrow-left prev-btn';
  prevButton.addEventListener('click', () => plusSlider(-1));

  return prevButton;
}

function NextButton() {
  const nextButton = document.createElement('i');
  nextButton.className = 'fas fa-arrow-right next-btn';
  nextButton.addEventListener('click', () => plusSlider(1));

  return nextButton;
}


let isDown = false;
let startX;
let scrollLeft;

function holdSlider(e) {
  const projectsDiv = document.querySelector('.projects');
  isDown = true;
  startX = e.pageX - projectsDiv.offsetLeft;
  scrollLeft = delete projectsDiv.scrollLeft;
}

function unholdSlider() {
  isDown = false;
}

function dragSlider(e) {
  const projectsDiv = document.querySelector('.projects');
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - projectsDiv.offsetLeft;
  const walk = (x - startX) * 1;
  projectsDiv.scrollLeft = scrollLeft - walk;
}

export {
  PrevButton,
  NextButton,
  holdSlider,
  unholdSlider,
  dragSlider,
};
