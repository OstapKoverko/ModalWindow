let counter = 1;

document.getElementById('button').onclick = function() {
  createModalWindow();
};

function createModalWindow() {
  let div = document.createElement('div');
  div.className = 'modalWindows';
  div.id = counter;
  div.innerHTML = `<p> Modal window ${counter} </p> <button onclick="closeModalWindow(${counter})">&times</button>`;
  document.body.appendChild(div);
  counter++;
}

function closeModalWindow(windowId) {
  document.getElementById(windowId).classList.add('disappearance');
  setTimeout(function() {
    document.getElementById(windowId).remove();
  }, 700);
}
