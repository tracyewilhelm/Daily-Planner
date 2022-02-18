var nineAMText = $("#nineAMText");
var nineAMButton = $("#nineAMButton");
var updateAgenda = $(".agenda");
var currentTime = $("#currentDay");
var timeTableEl = $(".timeTable");
var currentHour = currentTime;

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

if (currentHour < hour) {
  $(this).removeClass("future");
  $(this).removeClass("present");
  $(this).addClass("past");
} else if (currentHour === hour) {
  $(this).removeClass("past");
  $(this).removeClass("future");
  $(this).addClass("present");
} else {
  $(this).removeClass("present");
  $(this).removeClass("past");
  $(this).addClass("future");
}

// nineAMButton.on("click", function (event) {
//   event.preventDefault();

//   nineAMTextSave();
// });

// function nineAMTextSave() {
//   var userInputNineAM = nineAMText.val();
//   localStorage.setItem("userInputNineAM", JSON.stringify(userInputNineAM));
// }
// newAgendaItem();

//when they click a save button (does it need to be a new function for each save button?)
//the information is stored in local storage

//then the information is retrieved from local storage and kept in the text area (not actually a text area)
