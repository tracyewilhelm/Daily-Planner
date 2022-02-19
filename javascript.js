var nineAMText = $("#nineAMText");
var nineAMButton = $("#nineAMButton");
var updateAgenda = $(".agenda");
var currentTime = $("#currentDay");
var timeTableEl = $(".timeTable");
var date = new Date();
var currentHour = date.getHours();

var hourRows = $(".hour");
// .attr("datetime");

console.log(currentHour);
console.log(hourRows);
console.log(updateAgenda);

$(".hour").each(function () {
  var thisRowHour = parseInt($(this).attr("datetime"));
  //console.log(thisRowHour);
  // console.log(currentHour);
  var tableHeader = $(this).parent().parent();
  if (currentHour > thisRowHour) {
    tableHeader.removeClass("future");
    tableHeader.removeClass("present");
    tableHeader.addClass("past");
  } else if (currentHour === thisRowHour) {
    tableHeader.removeClass("past");
    tableHeader.removeClass("future");
    tableHeader.addClass("present");
  } else {
    tableHeader.removeClass("present");
    tableHeader.removeClass("past");
    tableHeader.addClass("future");
  }
});

for (let i = 0; i < hourRows.length; i++) {
  var element = hourRows[i];
  console.log(element);
}

currentTime.append(moment().format("MMMM Do YYYY, h:mm:ss a"));

for (i = 0; i < updateAgenda.length; i++) {
  // console.log(updateAgenda[i]);
  var idName = updateAgenda[i].id;
  console.log(idName);
  var agendaText = localStorage.getItem(idName);
  console.log(agendaText);
  if (agendaText) {
    updateAgenda[i].value = agendaText;
  }
}

timeTableEl.on("click", ".saveButton", function (event) {
  console.log("save Button?");
  var newAgendaItem = $(event.target).parent().prev().children(".agenda").val();
  var timeID = $(event.target).parent().prev().children(".agenda").attr("id");
  console.log({ newAgendaItem, timeID });
  localStorage.setItem(timeID, newAgendaItem);
});
