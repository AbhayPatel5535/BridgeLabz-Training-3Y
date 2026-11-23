document.addEventListener("DOMContentLoaded", function () {
  const API_URL = "http://localhost:3002/employees";
  const employeeContainer = document.getElementById("employees");
  const message = document.getElementById("message");

  // Fetch all employees with XMLHttpRequest as required in this question.
  function loadEmployees() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", API_URL);
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        renderEmployees(JSON.parse(xhr.responseText));
        message.textContent = "";
      } else {
        message.textContent = "Could not load employees. Check JSON Server on port 3002.";
      }
    };
    xhr.onerror = function () { message.textContent = "Network error while loading employees."; };
    xhr.send();
  }

  function renderEmployees(employees) {
    employeeContainer.innerHTML = "";
    employees.forEach(function (employee) {
      const row = document.createElement("article");
      row.className = "employee-row";

      const details = document.createElement("div");
      const name = document.createElement("strong");
      name.textContent = employee.name;
      const status = document.createElement("span");
      status.className = "status " + employee.status;
      status.textContent = employee.status.toUpperCase();
      details.append(name, document.createElement("br"), status);

      const button = document.createElement("button");
      button.type = "button";
      button.textContent = employee.status === "active" ? "Set Inactive" : "Set Active";
      button.addEventListener("click", function () {
        updateStatus(employee, row, status, button);
      });

      row.append(details, button);
      employeeContainer.appendChild(row);
    });
  }

  // PATCH updates only the status field; the UI is changed optimistically and rolled back on failure.
  function updateStatus(employee, row, statusElement, button) {
    const oldStatus = employee.status;
    const newStatus = oldStatus === "active" ? "inactive" : "active";
    employee.status = newStatus;
    statusElement.textContent = newStatus.toUpperCase();
    statusElement.className = "status " + newStatus;
    button.textContent = newStatus === "active" ? "Set Inactive" : "Set Active";
    button.disabled = true;

    const xhr = new XMLHttpRequest();
    xhr.open("PATCH", API_URL + "/" + employee.id);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function () {
      button.disabled = false;
      if (xhr.status < 200 || xhr.status >= 300) {
        employee.status = oldStatus;
        statusElement.textContent = oldStatus.toUpperCase();
        statusElement.className = "status " + oldStatus;
        button.textContent = oldStatus === "active" ? "Set Inactive" : "Set Active";
        message.textContent = "Update failed. Employee status was restored.";
      } else {
        message.textContent = "Updated " + employee.name + " to " + newStatus + ".";
      }
    };
    xhr.onerror = function () {
      button.disabled = false;
      employee.status = oldStatus;
      statusElement.textContent = oldStatus.toUpperCase();
      statusElement.className = "status " + oldStatus;
      button.textContent = oldStatus === "active" ? "Set Inactive" : "Set Active";
      message.textContent = "Network error. Employee status was restored.";
    };
    xhr.send(JSON.stringify({ status: newStatus }));
  }

  loadEmployees();
});
