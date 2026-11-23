$(document).ready(function () {
  // Clicking a manager highlights all direct reports in the same team.
  $(".employee.manager").on("click", function () {
    const teamMembers = $(this).parent().children(".employee");
    teamMembers.removeClass("highlighted sibling");
    $(this).addClass("highlighted");
    $(this).siblings(".employee").addClass("highlighted");
  });

  // .next() selects the contact block immediately following the employee details.
  $(".employee").hover(
    function () { $(this).children(".contact").stop(true, true).slideDown(160); },
    function () { $(this).children(".contact").stop(true, true).slideUp(160); }
  );

  // .children() targets only the direct employee cards in the clicked department.
  $(".department-title").on("click", function () {
    $(this).siblings(".team").children(".employee").toggleClass("highlighted");
  });

  // Choose a random employee and use .siblings() to highlight their teammates.
  $("#randomEmployee").on("click", function () {
    const employees = $(".employee");
    const selected = employees.eq(Math.floor(Math.random() * employees.length));
    employees.removeClass("highlighted sibling");
    selected.addClass("highlighted");
    selected.siblings(".employee").addClass("sibling");
  });

  // .parent() finds the department and .find() locates its team to collapse/expand it.
  $(".department-title").on("dblclick", function () {
    $(this).parent().find(".team").slideToggle(250);
  });
});
