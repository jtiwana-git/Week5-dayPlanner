console.log("test");
let day = moment();
let time = moment().format('h');
let pastHour = moment().subtract(1, "H").format("H");
let aheadHour = moment().add(12, "H").format("H"); 


$("#currentDay").text(day.format("dddd Do MMMM YYYY"));

$("time-block").text(day.format("hh"));


$(document).ready(function() {
    var block = $("row");

$.each(time-block, function(block) {
    $(time-block).removeClass("past");
    $(time-block).removeClass("present");
    $(time-block).removeClass("future");

    // Turn "data-time" to number
    var dataAttNum = $(time-block).data("time");
    var dataTime = Number(dataAttNum);

    if (dataTime < time) {
        $(textarea).addClass("past");
      } else if (dataTime === time) {
        $(textarea).addClass("present");
      } else if (dataTime > time) {
        $(time-block).addClass("future");
      }
});

});





let saveToPlanner = () => {
    const textEl = document.querySelectorAll("textarea")
    localStorage.setItem("Appointment9", textEl.text);
  }

  document.addEventListener("text", function(){
      document.getElementById("save9").addEventListener('click', saveToPlanner);
  });