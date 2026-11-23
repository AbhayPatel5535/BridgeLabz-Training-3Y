document.addEventListener("DOMContentLoaded", function () {
  const API_URL = "http://localhost:3005/timetable";
  const daySelect = document.getElementById("daySelect");
  const timetable = document.getElementById("timetable");
  const message = document.getElementById("message");

  // Fetch the selected day's timetable using the day query parameter.
  function loadTimetable(day) {
    message.textContent = "Loading timetable...";
    timetable.innerHTML = "";

    fetch(API_URL + "?day=" + encodeURIComponent(day))
      .then(function (response) {
        if (!response.ok) throw new Error("Could not fetch timetable");
        return response.json();
      })
      .then(function (classes) {
        if (classes.length === 0) {
          message.textContent = "No classes today.";
          return;
        }

        message.textContent = "";
        const table = document.createElement("table");
        const thead = document.createElement("thead");
        const headerRow = document.createElement("tr");

        ["Subject Name", "Faculty", "Time"].forEach(function (heading) {
          const th = document.createElement("th");
          th.textContent = heading;
          headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);

        const tbody = document.createElement("tbody");
        classes.forEach(function (classItem) {
          const row = document.createElement("tr");
          [classItem.subject, classItem.faculty, classItem.time].forEach(function (value) {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
          });
          tbody.appendChild(row);
        });

        table.appendChild(tbody);
        timetable.appendChild(table);
      })
      .catch(function () {
        message.textContent = "Unable to load timetable. Check JSON Server on port 3005.";
      });
  }

  daySelect.addEventListener("change", function () {
    loadTimetable(daySelect.value);
  });

  loadTimetable(daySelect.value);
});
