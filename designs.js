class Layout {
  constructor() {
    this.height = 0;
    this.width = 0;
    this.color = 'black';
    this.mouseDown = false;
  }
}

function makeGrid(layout) {
  const cells = layout.height * layout.width;
  const grid = document.getElementById('grid-wrapper');

  grid.innerHTML = '';
  for (let i = 0; i < cells; i++) {
    const cell = document.createElement('div');
    cell.className = 'box';
    grid.appendChild(cell);
  }
  grid.style.cssText = ` display: inline-grid;
                         grid-template-columns: repeat(${layout.width}, 25px);
                         grid-template-rows: repeat(${layout.height}, 25px);
                         justify-content: center;
                         border-bottom: 1px solid;
                         border-left: 1px solid; `
  grid.addEventListener('mouseover', e => {
    if (e.target.id !== 'grid-wrapper' && layout.mouseDown) {
      e.target.style.backgroundColor = layout.color;
    }
  });
}

function run() {
  let layout = new Layout();
  const form = document.getElementById('sizePicker');
  const colorElem = document.getElementById('colorPicker');
  document.body.onmousedown = function() {
    layout.mouseDown = true;
  }
  document.body.onmouseup = function() {
    layout.mouseDown = false;
  }
  form.addEventListener('submit', e => {
    e.preventDefault();
    layout.height = document.getElementById('inputHeight').value;
    layout.width = document.getElementById('inputWidth').value;
    makeGrid(layout);
  });
  colorElem.addEventListener('change', () => {
    layout.color = colorElem.value;
  });

}


run();
