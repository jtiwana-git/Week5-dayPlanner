let today = moment().format("dddd Do MMMM YYYY");
// Time of day on html

$("#currentDay").text(today);

// Time - will display (Hour only)
let hour = moment().format("HH");
console.log(hour);


// Save button on click, save each appointments when booked
$(".saveBtn").on("click", function (event) {
var timeBlock = $("#09");

timeBlock = localStorage.setItem("Appt", JSON.stringify(timeBlock));





    //     const textEl = document.getElementById("09");

// $("09").localStorage.setItem("Appointment9", JSON.stringify(textEl.value));
 

});

console.log(localStorage);

// will change colour (block) depending on the time
$("div").each(function () {
    let workTime = parseInt($(this).attr("data-time"));
    console.log (workTime);
    if (workTime > hour) {
        $(this).addClass("future")

    } else if (workTime == hour) {
       $(this).addClass("present")
    }
    else {
        $(this).addClass("past")

    };
})



