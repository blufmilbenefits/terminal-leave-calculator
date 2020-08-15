//initialize variables
var leaveStartDate, conusOrOconus, earnedDays, retirementDate, ptdy, terminalLeave, input
var currentTab = 0
var calculateBtn = document.getElementsByClassName("calculate")[0]
var progressPercetage = document.getElementById("percentage")
var todaysDate = new Date()

document.getElementsByClassName("today")[0].value = new Date().toISOString().substr(0, 10)
document.getElementById("progressBar").style.width = "0%"

//Main Calculation
function retirementCalculation() {
  terminalLeave = 0
  if (conusOrOconus == "" || (document.getElementById("plannedRetireDate").value == "" && document.getElementById("enlistmentDate").value == "")) {
    document.getElementsByClassName("calculated-output")[0].innerHTML = `Please make sure you complete all parts of the form.`
  } else {
    if (conusOrOconus == "conus") {
      ptdy = 20
    } else if (conusOrOconus == "oconus") {
      ptdy = 30
    }
    if (document.getElementsByClassName("leaveInput")[0].value == "" && document.getElementsByClassName("daysAlreadyEarned")[0].value == "") {
      terminalLeave += 60
    } else if (document.getElementsByClassName("daysAlreadyEarned")[0].value !== "") {
      terminalLeave += +calculateEarnedDays(new Date(`${todaysDate.getFullYear()}-${todaysDate.getMonth() + 2}-1`), new Date(`${+retirementDate.getFullYear()}-${+retirementDate.toISOString().substr(5, 2)}-1`))
      terminalLeave += +document.getElementsByClassName("daysAlreadyEarned")[0].value
    } else if (document.getElementsByClassName("leaveInput")[0].value !== "") {
      terminalLeave += +document.getElementsByClassName("leaveInput")[0].value
    }
    terminalLeave += +calculateEarnedDays(new Date(`${+retirementDate.getFullYear() - 1}-10-1`), new Date(`${+retirementDate.getFullYear()}-${+retirementDate.toISOString().substr(5, 2)}-1`))
    leaveStartDate.setDate(leaveStartDate.getDate() - (terminalLeave + +ptdy))
    var leaveStartMonth = leaveStartDate.toLocaleString('default', { month: 'long' });
    var retirementMonth = retirementDate.toLocaleString('default', { month: 'long' });
    document.getElementsByClassName("calculated-output")[0].innerHTML = `With a final retirement date of ${retirementMonth} ${retirementDate.getDate()}, ${retirementDate.getFullYear()} (${retirementDate.toLocaleDateString('en-US')}), you should start terminal leave on ${leaveStartMonth} ${leaveStartDate.getDate()}, ${leaveStartDate.getFullYear()} (${leaveStartDate.toLocaleDateString('en-US')}). This assumes ${ptdy} days of PTDY and ${terminalLeave} days of terminal leave, including the leave earned while on terminal leave (${earnedDays}).`
  }
}

function conus() {
  conusOrOconus = event.srcElement.id
  event.srcElement.style.borderColor = "#33466e"
  if (event.srcElement.id == "conus") {
    document.getElementById("oconus").style.borderColor = "transparent"
  } else {
    document.getElementById("conus").style.borderColor = "transparent"
  }
}

//Event listeners
document.getElementById("plannedRetireDate").addEventListener("change", function () {
  document.getElementById("enlistmentDate").value = ""
  input = new Date(this.value)
  if (+input.getDate() !== 1) {
    input.setDate(1)
    input.setMonth(+input.getMonth() + 1)
  }
  retirementDate = new Date(`${input.getFullYear()}-${input.toISOString().substr(5, 2)}-${input.getDate()}`);
  leaveStartDate = new Date(`${input.getFullYear()}-${input.toISOString().substr(5, 2)}-${input.getDate()}`);
});
document.getElementById("enlistmentDate").addEventListener("change", function () {
  document.getElementById("plannedRetireDate").value = ""
  input = new Date(this.value);
  input.setFullYear(+input.getFullYear() + 20)
  if (+input.getDate() !== 1) {
    input.setDate(1)
    input.setMonth(+input.getMonth() + 1)
  }
  retirementDate = new Date(`${input.getFullYear()}-${input.toISOString().substr(5, 2)}-${input.getDate()}`);
  leaveStartDate = new Date(`${input.getFullYear()}-${input.toISOString().substr(5, 2)}-${input.getDate()}`);
});
document.getElementsByClassName("leaveInput")[0].addEventListener("input", function () {
  document.getElementsByClassName("daysAlreadyEarned")[0].value = ""
})
document.getElementsByClassName("today")[0].addEventListener("change", function () {
  todaysDate = document.getElementsByClassName("today")[0].value
})
calculateBtn.addEventListener("click", retirementCalculation)
document.getElementById("retire").addEventListener("click", function () {
  document.getElementById("situation").style.display = "none"
  showTab(0, document.getElementsByClassName("retirement-tab"))
});
document.getElementsByClassName("home")[0].addEventListener("click", function () {
  currentTab = 0
  var tab = document.getElementsByClassName("retirement-tab")
  for (i = 0; i < tab.length; i++) {
    tab[i].style.display = "none"
  }
  document.getElementById("situation").style.display = "block"
  document.getElementById("progressBar").style.width = "0%"
})
document.getElementsByClassName("daysAlreadyEarned")[0].addEventListener("input", function () {
  document.getElementsByClassName("leaveInput")[0].value = ""
})
document.getElementsByClassName("reset")[0].addEventListener("click", function () {
  retirementDate = input
  leaveStartDate = input
  terminalLeave = 0
})
