//initialize variables
var leaveStartDate, earnedDays, separationDate, input
var terminalLeave = 0
var currentTab = 0
var todaysDate = new Date()

document.getElementsByClassName("today")[1].value = new Date().toISOString().substr(0, 10)
document.getElementById("progressBar").style.width = "0%"

//Main calculation
function SeparationCalculation() {
  if ((document.getElementById("plannedSeparateDate").value == "")) {
    document.getElementsByClassName("calculated-output")[1].innerHTML = `Please make sure you complete all parts of the form.`
  } else {
    terminalLeave = 0
    if (document.getElementsByClassName("leaveInput")[1].value == "" && document.getElementsByClassName("daysAlreadyEarned")[1].value == "") {
      terminalLeave += 60
    } else if (document.getElementsByClassName("daysAlreadyEarned")[1].value !== "") {
      terminalLeave += +calculateEarnedDays(new Date(`${todaysDate.getFullYear()}-${todaysDate.getMonth() + 2}-1`), new Date(`${+separationDate.getFullYear()}-${+separationDate.toISOString().substr(5, 2)}-1`))
      terminalLeave += +document.getElementsByClassName("daysAlreadyEarned")[1].value
    } else if (document.getElementsByClassName("leaveInput")[1].value !== "") {
      terminalLeave += +document.getElementsByClassName("leaveInput")[1].value
    }
    leaveStartDate.setDate(leaveStartDate.getDate() - terminalLeave)
    var leaveStartMonth = leaveStartDate.toLocaleString("default", { month: "long" });
    var separationMonth = separationDate.toLocaleString("default", { month: "long" });
    document.getElementsByClassName("calculated-output")[1].innerHTML = `With a final separation date of ${separationMonth} ${separationDate.getDate()}, ${separationDate.getFullYear()} (${separationDate.toLocaleDateString('en-US')}), you should start terminal leave on ${leaveStartMonth} ${leaveStartDate.getDate()}, ${leaveStartDate.getFullYear()} (${leaveStartDate.toLocaleDateString('en-US')}). This assumes ${terminalLeave} days of terminal leave, including the leave earned while on terminal leave.`
  }
}


//Event listeners
document.getElementById("plannedSeparateDate").addEventListener("change", function () {
  input = this.value;
  separationDate = new Date(`${input}${new Date().toISOString().substr(10)}`);
  leaveStartDate = new Date(`${input}${new Date().toISOString().substr(10)}`);
});
document.getElementsByClassName("today")[1].addEventListener("change", function () {
  todaysDate = document.getElementsByClassName("today")[1].value
})
document.getElementsByClassName("calculate")[1].addEventListener("click", SeparationCalculation)
document.getElementById("seperate").addEventListener("click", function () {
  document.getElementById("situation").style.display = "none"
  showTab(0, document.getElementsByClassName("separation-tab"))
});
document.getElementsByClassName("home")[1].addEventListener("click", function () {
  currentTab = 0
  tab = document.getElementsByClassName("separation-tab")
  for (i = 0; i < tab.length; i++) {
    tab[i].style.display = "none"
  }
  document.getElementById("situation").style.display = "block"
  document.getElementById("progressBar").style.width = "0%"
})
document.getElementsByClassName("reset")[1].addEventListener("click", function () {
  separationDate = new Date(`${input}${new Date().toISOString().substr(10)}`);
  leaveStartDate = new Date(`${input}${new Date().toISOString().substr(10)}`);
  terminalLeave = 0
})
