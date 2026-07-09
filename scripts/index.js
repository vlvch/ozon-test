function ProgressBlock(parentClass) {
  const parent = document.querySelector(parentClass);

  function render() {
    parent.innerHTML = `
      <div class="progress">
        <div class="progress__title">Progress</div>
        <div class="progress__bar">
          <div class="progress__bar__line"></div>
          <div class="progress__bar__fill"></div>
        </div>
        <div class="progress__controls">
          <input
            class="controls__input"
            type="number"
            min="0"
            max="100"
            value="50"
            id="value"
            name="value"
          />
          <label class="controls__label" for="value">Value</label>
          <div
            class="controls__toggle"
            id="animate"
            role="button"
            tabindex="0"
          >
            <div class="toggle__circle"></div>
          </div>
          <label class="controls__label">Animate</label>
          <div
            class="controls__toggle"
            id="hide"
            role="button"
            tabindex="0"
          >
            <div class="toggle__circle"></div>
          </div>
          <label class="controls__label">Hide</label>
        </div>
      </div>
    `;
  }

  render();

  const progressBar = document.querySelector(".progress__bar");
  const progressLine = document.querySelector(".progress__bar__line");
  const input = document.getElementById("value");
  const animate = document.getElementById("animate");
  const hide = document.getElementById("hide");

  function setValue() {
    let value = parseInt(input.value) || 0;

    if (value < 0) value = 0;
    if (value > 100) value = 100;

    input.value = value;

    const onePercent = 360 / 100;
    progressLine.style.background =
      `conic-gradient(rgb(57, 82, 246) ${value * onePercent}deg, #e9e8e8 0deg)`;
  }

  function setAnimate() {
    animate.classList.toggle('active');
    progressLine.classList.toggle('animate');
  }

  function setHide() {
    hide.classList.toggle('active');
    progressBar.classList.toggle('hidden');
  }

  input.addEventListener("input", setValue);
  animate.addEventListener('click', setAnimate);
  hide.addEventListener('click', setHide);

}

ProgressBlock('.layout');