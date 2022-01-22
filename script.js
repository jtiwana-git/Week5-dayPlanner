let today = moment().format("dddd Do MMMM YYYY");
// Time of day on html
$("#currentDay").text(today);

// Time (Hour only)
let hour = moment().format("HH");

// Save button on click, save each appointments when booked
$(".saveBtn").on("click", function (event) {
    const textEl = document.querySelectorAll("textarea")
    localStorage.setItem("Appointment9", textEl.text);

})

// will change colour (block) depending on the time
$("div").each(function () {
    let workTime = parseInt($(this).attr("id"));
    if (workTime > hour) {
        $(this).addClass("future")

    } else if (workTime == hour) {
       $(this).addClass("present")
    }
    else {
        $(this).addClass("past")

    };
})



