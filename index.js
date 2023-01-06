const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const circleConEls = document.querySelectorAll('.circle-container');
const spanConEls = document.querySelectorAll('.span-container');
let count = 0;
disableButton();

btnRight.addEventListener('click', () => {
    loadProgressBar();
    disableButton();
});

btnLeft.addEventListener('click', () => {
    decreseProgressBar();
    disableButton();
});

function loadProgressBar () {
    if (circleConEls.length > count) {
        const circleEl = circleConEls[count].querySelector('.loaded');
        circleEl.style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
    }

    if (spanConEls.length > count) {
        const spanEl = spanConEls[count].querySelector('.loaded');
        const clear = setTimeout(() => {
            spanEl.style.width = '100%';
            clearTimeout(clear);
        }, 500);
    }

    if (count < circleConEls.length) count++;
}

function decreseProgressBar () {
    if (count <= 0) return null;

    if (spanConEls.length >= count) {
        const spanEl = spanConEls[count - 1].querySelector('.loaded');
        spanEl.style.width = '0%';
    }

    const circleEl = circleConEls[count - 1].querySelector('.loaded');
    if (circleConEls.length === count) {
        circleEl.style.clipPath = 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)';
    } else {
        const clear = setTimeout(() => {
            circleEl.style.clipPath = 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)';
            clearTimeout(clear);
        }, 500); 
    }
    
    if (count > 0) count--;
}

function disableButton () {
    btnLeft.classList.remove('disabled');
    btnRight.classList.remove('disabled');
    if (count === 0) {
        btnLeft.classList.add('disabled');
    } else if (circleConEls.length === count) {
        btnRight.classList.add('disabled');
    }
}
