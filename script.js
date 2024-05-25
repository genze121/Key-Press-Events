const spanElement = document.querySelector("span");

window.addEventListener("keypress", event => {
  spanElement.innerHTML = `<table>
  <thead>
  <th>Key</th>
  <th>Key Code</th>
  <th>Code</th>
  </thead>
  <tbody>
  <tr>
  <td>${event.key === " " ? "Space Bar" : event.key}</td>
  <td>${event.keyCode}</td>
  <td>${event.code}</td>
  </tr>
  </tbody>
  </table>`;
});
