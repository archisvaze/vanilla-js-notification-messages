//buttons
let errorButton = document.querySelector(".error-btn");
let warningButton = document.querySelector(".warning-btn");
let infoButton = document.querySelector(".info-btn");
let successButton = document.querySelector(".success-btn");
//alerts
let errorAlert = document.querySelector(".error")
let warningAlert = document.querySelector(".warning")
let infoAlert = document.querySelector(".info")
let successAlert = document.querySelector(".success")


let errorFlag = false;
let warningFlag = false;
let infoFlag = false;
let succesFlag = false;

errorButton.addEventListener("click", (e) => {
    errorAlert.classList.add("show")
    setTimeout(() => {
        if (errorFlag !== true) {
            errorAlert.classList.remove("show")
        }
    }, 2000)
})
warningButton.addEventListener("click", (e) => {
    warningAlert.classList.add("show")
    setTimeout(() => {
        if (warningFlag !== true) {
            warningAlert.classList.remove("show")
        }
    }, 2000)
})
infoButton.addEventListener("click", (e) => {
    infoAlert.classList.add("show")
    setTimeout(() => {
        if (infoFlag !== true) {
            infoAlert.classList.remove("show")
        }
    }, 2000)
})
successButton.addEventListener("click", (e) => {
    successAlert.classList.add("show")
    setTimeout(() => {
        if (succesFlag !== true) {
            successAlert.classList.remove("show")
        }
    }, 2000)
})


//errorAlert mouse over and leave handler
errorAlert.addEventListener('mouseover', (e) => {
    errorFlag = true;
})
errorAlert.addEventListener('mouseleave', (e) => {
    errorFlag = false;
    setTimeout(() => {
        errorAlert.classList.remove("show")
    }, 1000)

})
//warningAlert mouse over and leave handler
warningAlert.addEventListener('mouseover', (e) => {
    warningFlag = true;
})
warningAlert.addEventListener('mouseleave', (e) => {
    warningFlag = false;
    setTimeout(() => {
        warningAlert.classList.remove("show")
    }, 1000)

})
//infoAlert mouse over and leave handler
infoAlert.addEventListener('mouseover', (e) => {
    infoFlag = true;
})
infoAlert.addEventListener('mouseleave', (e) => {
    infoFlag = false;
    setTimeout(() => {
        infoAlert.classList.remove("show")
    }, 1000)

})
//successAlert mouse over and leave handler
successAlert.addEventListener('mouseover', (e) => {
    succesFlag = true;
})
successAlert.addEventListener('mouseleave', (e) => {
    succesFlag = false;
    setTimeout(() => {
        successAlert.classList.remove("show")
    }, 1000)

})