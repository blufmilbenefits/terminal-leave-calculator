//Initialize variables
var leaveStartDate, extraLeaveDays, earnedDays, separationDate, ptdy, input
var terminalLeave = 0
var currentTab = 0
var todaysDate = new Date()

document.getElementsByClassName("today")[2].value = new Date().toISOString().substr(0, 10)
document.getElementById("progressBar").style.width = "0%"

// Main calculation for involuntary separation calculation
function invSeparationCalculation() {
  if (document.getElementById("plannedInvSeparateDate").value == "" || extraLeaveDays == "") {
    document.getElementsByClassName("calculated-output")[2].innerHTML = `Please make sure you complete all parts of the form.`
  } else {
    terminalLeave = 0
    if (document.getElementsByClassName("leaveInput")[2].value == "" && document.getElementsByClassName("daysAlreadyEarned")[2].value == "") {
      terminalLeave += 60
    } else if (document.getElementsByClassName("daysAlreadyEarned")[2].value !== "") {
      terminalLeave += +calculateEarnedDays(new Date(`${todaysDate.getFullYear()}-${todaysDate.getMonth() + 2}-1`), new Date(`${+separationDate.getFullYear()}-${+separationDate.toISOString().substr(5, 2)}-1`))
      terminalLeave += +document.getElementsByClassName("daysAlreadyEarned")[2].value
    } else if (document.getElementsByClassName("leaveInput")[2].value !== "") {
      terminalLeave += +document.getElementsByClassName("leaveInput")[2].value
    }
    leaveStartDate.setDate(leaveStartDate.getDate() - (terminalLeave + +extraLeaveDays))
    var leaveStartMonth = leaveStartDate.toLocaleString('default', { month: 'long' });
    var separationMonth = separationDate.toLocaleString('default', { month: 'long' });
    document.getElementsByClassName("calculated-output")[2].innerHTML = `With a final separation date of ${separationMonth} ${separationDate.getDate()}, ${separationDate.getFullYear()} (${separationDate.toLocaleDateString('en-US')}), you should start terminal leave on ${leaveStartMonth} ${leaveStartDate.getDate()}, ${leaveStartDate.getFullYear()} (${leaveStartDate.toLocaleDateString('en-US')}). This assumes ${extraLeaveDays} days of PTDY and ${terminalLeave} days of terminal leave, including the leave earned while on terminal leave.`
  }
}

function extraLeave() {
  event.srcElement.style.borderColor = "#33466e"
  if (event.srcElement.id == "yes-extraLeave") {
    document.getElementById("no").style.borderColor = "transparent"
    document.getElementById("yes-ptdy").style.borderColor = "transparent"
    document.getElementById("extraLeaveDays").style.display = "block"
    document.getElementById("extraLeaveDays").focus()
  } else if (event.srcElement.id == "yes-ptdy") {
    document.getElementById("extraLeaveDays").style.display = "block"
    document.getElementById("extraLeaveDays").focus()
    document.getElementById("no").style.borderColor = "transparent"
    document.getElementById("yes-extraLeave").style.borderColor = "transparent"
  } else {
    document.getElementById("extraLeaveDays").style.display = "none"
    document.getElementById("yes-extraLeave").style.borderColor = "transparent"
    document.getElementById("yes-ptdy").style.borderColor = "transparent"

  }
}

//Event listeners
document.getElementById("plannedInvSeparateDate").addEventListener("change", function () {
  input = this.value;
  separationDate = new Date(`${input}${new Date().toISOString().substr(10)}`);
  leaveStartDate = new Date(`${input}${new Date().toISOString().substr(10)}`);
});
document.getElementsByClassName("today")[2].addEventListener("change", function () {
  todaysDate = document.getElementsByClassName("today")[2].value
})
document.getElementsByClassName("calculate")[2].addEventListener("click", invSeparationCalculation)
document.getElementById("invSeperate").addEventListener("click", function () {
  document.getElementById("situation").style.display = "none"
  showTab(0, document.getElementsByClassName("involuntary-separation-tab"))
});
document.getElementsByClassName("calculate")[2].addEventListener("click", invSeparationCalculation)
document.getElementById("extraLeaveDays").addEventListener("input", function () {
  extraLeaveDays = this.value
})
document.getElementsByClassName("home")[2].addEventListener("click", function () {
  currentTab = 0
  tab = document.getElementsByClassName("involuntary-separation-tab")
  for (i = 0; i < tab.length; i++) {
    tab[i].style.display = "none"
  }
  document.getElementById("situation").style.display = "block"
  document.getElementById("progressBar").style.width = "0%"
})
document.getElementsByClassName("reset")[2].addEventListener("click", function () {
  separationDate = new Date(`${input}${new Date().toISOString().substr(10)}`);
  leaveStartDate = new Date(`${input}${new Date().toISOString().substr(10)}`);
  terminalLeave = 0
})

