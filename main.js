let counter = 1;

function openModalWindow() {
  document.getElementById('target').innerHTML += `
    <div id="${counter}" class="modalWindows">
      <p> Modal window ${counter} </p>
      <button onclick="closeModalWindow(${counter})">&times</button>
    </div>
  `;
  counter++;
}

function closeModalWindow(windowId) {
  document.getElementById(windowId).remove();
}
