// select the h1 element
const title = document.getElementById("pageTitle");
const purple = 'rgb(55, 43, 227)';
const hiddenText = document.getElementById('hiddenText');
const shownText = document.getElementById('shownText');
// pause animation function
function pauseAnimation() {
  title.style.animationPlayState = "paused";
}

// resume animation function
function resumeAnimation() {
  title.style.animationPlayState = "running";
}

function createNewElement() {
    const newElement = document.createElement('div');
    newElement.style.background = purple;
    newElement.style.width = '20px';
    newElement.style.height = '20px';
    newElement.style.borderRadius = '50%';
    newElement.style.position = 'absolute';
    newElement.style.left = Math.random() * window.innerWidth + 'px';
    newElement.style.top = Math.random() * window.innerHeight + 'px';
    document.body.appendChild(newElement);
    hiddenText.style.display = 'block';
    shownText.style.display = 'none';
  }

document.addEventListener('click', createNewElement);