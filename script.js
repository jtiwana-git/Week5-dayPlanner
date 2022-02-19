let today = moment().format("dddd Do MMMM YYYY");
// Time of day on html

$("#currentDay").text(today);

// Time - will display (Hour only)
let hour = moment().format("HH");



// Save button on click, save each appointments when booked
$(".saveBtn").on("click", function (event) {
var value = $(this).siblings(".description").val();
var time =$(this).parent().attr("data-time");

localStorage.setItem(`block-${time}`, value);
localStorage.getItem(`block-${time}`);

});



// will change colour (block) depending on the time
$("div").each(function () {
    let workTime = parseInt($(this).attr("data-time"));
  
    if (workTime > hour) {
        $(this).addClass("future")

    } else if (workTime == hour) {
       $(this).addClass("present")
    }
    else {
        $(this).addClass("past")

    };
})



