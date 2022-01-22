console.log("test");
let day = moment();
let time = moment().format('h');
let pastHour = moment().subtract(1, "H").format("H");
let aheadHour = moment().add(12, "H").format("H"); 

$("#currentDay").text(day.format("dddd Do MMMM YYYY"));




let saveToPlanner = () => {
    const textEl = document.querySelectorAll("textarea")
const inputTextEl =document.querySelectorAll("inputText");
    localStorage.setItem("Appointment9", textEl.text);
  }

  document.addEventListener("text", ()=>{
      document.getElementById("save9").addEventListener('click', saveToPlanner);
  });