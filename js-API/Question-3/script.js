$(document).ready(function () {
  const API_URL = "http://localhost:3003/tasks";

  // Reload the task list whenever the selected filter changes.
  function loadTasks(filter) {
    $("#message").text("Loading tasks...");
    $("#taskList").empty();

    // The selected filter is sent as a query parameter to JSON Server.
    const params = {};
    if (filter === "completed") {
      params.completed = true;
    } else if (filter !== "all") {
      params.priority = filter;
    }

    $.ajax({
      url: API_URL,
      method: "GET",
      data: params,
      dataType: "json"
    })
    .done(function (tasks) {
      $("#taskList").empty();
      if (tasks.length === 0) {
        $("#message").text("No tasks match this filter.");
        return;
      }
      $("#message").text("");

      tasks.forEach(function (task) {
        const row = $("<article>").addClass("task").toggleClass("completed", task.completed);
        const checkbox = $("<input>", { type: "checkbox", checked: task.completed, "aria-label": "Mark task completed" });
        const title = $("<span>").addClass("task-title").text(task.title);
        const priority = $("<span>").addClass("priority").text(task.priority + " priority");

        // PATCH toggles the completed field. If it fails, restore the previous checkbox state.
        checkbox.on("change", function () {
          const checkboxElement = this;
          const oldValue = task.completed;
          const newValue = checkboxElement.checked;
          checkboxElement.disabled = true;

          $.ajax({
            url: API_URL + "/" + task.id,
            method: "PATCH",
            contentType: "application/json",
            data: JSON.stringify({ completed: newValue })
          })
          .done(function () {
            task.completed = newValue;
            row.toggleClass("completed", newValue);
            $("#message").text("Task status updated.");
          })
          .fail(function () {
            checkboxElement.checked = oldValue;
            $("#message").text("Could not update task. Please try again.");
          })
          .always(function () { checkboxElement.disabled = false; });
        });

        row.append(checkbox, title, priority);
        $("#taskList").append(row);
      });
    })
    .fail(function () {
      $("#message").text("Unable to load tasks. Check JSON Server on port 3003.");
    });
  }

  $("#taskFilter").on("change", function () {
    loadTasks($(this).val());
  });

  loadTasks("all");
});
