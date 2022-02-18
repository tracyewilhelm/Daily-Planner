var agendaInput = document.querySelector(".agenda");

var saveButton = $(".btn");
localStorage.getItem("newItem", JSON.parse(newItem));

saveButton.addEventListener("click", function (event) {
  event.preventDefault();

  var newItem = {
    updateAgenda: agendaInput.value,
  };

  console.log(newItem);
  localStorage.setItem("newItem", JSON.stringify(newItem));
});
console.log(localStorage);
//when they click a save button (does it need to be a new function for each save button?)
//the information is stored in local storage

//then the information is retrieved from local storage and kept in the text area (not actually a text area)
