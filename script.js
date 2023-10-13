function addTask() {
  // Get the input value
  var taskText = document.getElementById("taskInput").value;

  // If the input is not empty, add a new row to the table
  if (taskText.trim() !== '') {
      var table = document.getElementById("taskTable");
      var newRow = table.insertRow(1); // Inserts a new row at the second position

      var cell1 = newRow.insertCell(0);
      var cell2 = newRow.insertCell(1);

      cell1.innerHTML = taskText;
      cell2.innerHTML = '<button class="action-button" type="button" onclick="removeTask(this)">Done</button>';

      // Clear the input field
      document.getElementById("taskInput").value = '';
  }
}

function removeTask(button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
