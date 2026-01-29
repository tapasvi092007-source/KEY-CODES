const insert = document.getElementById("insert");

insert.innerHTML = `
  <div class="color">
    <table>
      <tr>
        <th>Key</th>
        <th>KeyCode</th>
        <th>Code</th>
      </tr>
      <tr id="outputRow">
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
  </div>`;

const table = insert.querySelector("table");

window.addEventListener("keydown", (e) => {
  table.innerHTML = `
    <tr>
      <th>Key</th>
      <th>KeyCode</th>
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>`;
});