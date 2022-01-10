//list of hours
var hour_9am = (moment('9:00am', 'hh:mm A'));
var hour_10am = (moment('10:00am', 'hh:mm A'));
var hour_11am = (moment('11:00am', 'hh:mm A'));
var hour_12pm = (moment('12:00pm', 'hh:mm A'));
var hour_1pm = (moment('01:00pm', 'hh:mm A'));
var hour_2pm = (moment('2:00pm', 'hh:mm A'));
var hour_3pm = (moment('3:00pm', 'hh:mm A'));
var hour_4pm = (moment('4:00pm', 'hh:mm A'));
var hour_5pm = (moment('5:00pm', 'hh:mm A'));
var hour_6pm = (moment('6:00pm', 'hh:mm A'));

//set format of time display
document.getElementById("currentDay").innerHTML = moment().format('Do MMM YYYY');
var d1 = moment().calendar(); 

//set color scheme for all hours
if (moment().isBefore(hour_9am)) {
    document.getElementById("time_row_9am").style.backgroundColor="LightGrey";
} else if (moment().isBetween(hour_9am, hour_10am)) {
    document.getElementById("time_row_9am").style.backgroundColor="LightGreen";
} else {
    document.getElementById("time_row_9am").style.backgroundColor="LightPink";
}

if (moment().isBefore(hour_10am)) {
    document.getElementById("time_row_10am").style.backgroundColor="LightGrey";
} else if (moment().isBetween(hour_10am, hour_11am)) {
    document.getElementById("time_row_10am").style.backgroundColor="LightGreen";
} else {
    document.getElementById("time_row_10am").style.backgroundColor="LightPink";
}


if (moment().isBefore(hour_11am)) {
    document.getElementById("time_row_11am").style.backgroundColor="LightGrey";
} else if (moment().isBetween(hour_11am, hour_12pm)) {
    document.getElementById("time_row_11am").style.backgroundColor="LightGreen";
} else {
    document.getElementById("time_row_11am").style.backgroundColor="LightPink";
}

if (moment().isBefore(hour_12pm)) {
    document.getElementById("time_row_12pm").style.backgroundColor="LightGrey";
} else if (moment().isBetween(hour_12pm, hour_1pm)) {
    document.getElementById("time_row_12pm").style.backgroundColor="LightGreen";
} else {
    document.getElementById("time_row_12pm").style.backgroundColor="LightPink";
}

if (moment().isBefore(hour_1pm)) {
    document.getElementById("time_row_1pm").style.backgroundColor="LightGrey";
} else if (moment().isBetween(hour_1pm, hour_2pm)) {
    document.getElementById("time_row_1pm").style.backgroundColor="LightGreen";
} else {
    document.getElementById("time_row_1pm").style.backgroundColor="LightPink";
}

if (moment().isBefore(hour_2pm)) {
    document.getElementById("time_row_2pm").style.backgroundColor="LightGrey";
} else if (moment().isBetween(hour_2pm, hour_3pm)) {
    document.getElementById("time_row_2pm").style.backgroundColor="LightGreen";
} else {
    document.getElementById("time_row_2pm").style.backgroundColor="LightPink";
}

if (moment().isBefore(hour_3pm)) {
    document.getElementById("time_row_3pm").style.backgroundColor="LightGrey";
} else if (moment().isBetween(hour_3pm, hour_4pm)) {
    document.getElementById("time_row_3pm").style.backgroundColor="LightGreen";
} else {
    document.getElementById("time_row_3pm").style.backgroundColor="LightPink";
}

if (moment().isBefore(hour_4pm)) {
    document.getElementById("time_row_4pm").style.backgroundColor="LightGrey";
} else if (moment().isBetween(hour_4pm, hour_5pm)) {
    document.getElementById("time_row_4pm").style.backgroundColor="LightGreen";
} else {
    document.getElementById("time_row_4pm").style.backgroundColor="LightPink";
}

if (moment().isBefore(hour_5pm)) {
    document.getElementById("time_row_5pm").style.backgroundColor="LightGrey";
} else if (moment().isBetween(hour_5pm, hour_6pm)) {
    document.getElementById("time_row_5pm").style.backgroundColor="LightGreen";
} else {
    document.getElementById("time_row_5pm").style.backgroundColor="LightPink";
}

//9am Row Function
var task_9am = document.querySelector(".write_task_9am");
var checkbox_9am = document.querySelector(".save_task_9am");

function save_checkboxes_9am() {
    if (checkbox_9am.checked = true) {
        localStorage.setItem("task_9am", task_9am.value)
    } else if (checkbox.checked = false) {
        localStorage.removeItem("task_9am", task_9am.value)
    }
}

function retrieve_data_9am() {
    task_9am.value = localStorage.getItem("task_9am", task_9am.value);
}

checkbox_9am.addEventListener('change', save_checkboxes_9am);

function save_checkboxes_9am() {
    if (checkbox_9am.checked = true) {
        localStorage.setItem("task_9am", task_9am.value)
    } else if (checkbox.checked = false) {
        localStorage.removeItem("task_9am", task_9am.value)
    }
}

//10am Row Function
var task_10am = document.querySelector(".write_task_10am");
var checkbox_10am = document.querySelector(".save_task_10am");

function save_checkboxes_10am() {
    if (checkbox_10am.checked = true) {
        localStorage.setItem("task_10am", task_10am.value)
    } else if (checkbox.checked = false) {
        localStorage.removeItem("task_10am", task_10am.value)
    }
}

function retrieve_data_10am() {
    task_10am.value = localStorage.getItem("task_10am", task_10am.value);
}

checkbox_10am.addEventListener('change', save_checkboxes_10am);

function save_checkboxes_10am() {
    if (checkbox_10am.checked = true) {
        localStorage.setItem("task_10am", task_10am.value)
    } else if (checkbox.checked = false) {
        localStorage.removeItem("task_10am", task_10am.value)
    }
}

//11am Row Function
var task_11am = document.querySelector(".write_task_11am");
var checkbox_11am = document.querySelector(".save_task_11am");

function save_checkboxes_11am() {
    if (checkbox_11am.checked = true) {
        localStorage.setItem("task_11am", task_11am.value)
    } else if (checkbox.checked = false) {
        localStorage.removeItem("task_11am", task_11am.value)
    }
}

function retrieve_data_11am() {
    task_11am.value = localStorage.getItem("task_11am", task_11am.value);
}

checkbox_11am.addEventListener('change', save_checkboxes_11am);

function save_checkboxes_11am() {
    if (checkbox_11am.checked = true) {
        localStorage.setItem("task_11am", task_11am.value)
    } else if (checkbox.checked = false) {
        localStorage.removeItem("task_11am", task_11am.value)
    }
}


//12pm Row Function
var task_12pm = document.querySelector(".write_task_12pm");
var checkbox_12pm = document.querySelector(".save_task_12pm");

function save_checkboxes_12pm() {
    if (checkbox_12pm.checked = true) {
        localStorage.setItem("task_12pm", task_12pm.value)
    } else if (checkbox.checked = false) {
        localStorage.removeItem("task_12pm", task_12pm.value)
    }
}

function retrieve_data_12pm() {
    task_12pm.value = localStorage.getItem("task_12pm", task_12pm.value);
}

checkbox_12pm.addEventListener('change', save_checkboxes_12pm);

function save_checkboxes_12pm() {
    if (checkbox_12pm.checked = true) {
        localStorage.setItem("task_12pm", task_12pm.value)
    } else if (checkbox.checked = false) {
        localStorage.removeItem("task_12pm", task_12pm.value)
    }
}

//1pm Row Function
var task_1pm = document.querySelector(".write_task_1pm");
var checkbox_1pm = document.querySelector(".save_task_1pm");

function save_checkboxes_1pm() {
    if (checkbox_1pm.checked = true) {
        localStorage.setItem("task_1pm", task_1pm.value)
    } else if (checkbox.checked = false) {
        localStorage.removeItem("task_1pm", task_1pm.value)
    }
}

function retrieve_data_1pm() {
    task_1pm.value = localStorage.getItem("task_1pm", task_1pm.value);
}

checkbox_1pm.addEventListener('change', save_checkboxes_1pm);

function save_checkboxes_1pm() {
    if (checkbox_1pm.checked = true) {
        localStorage.setItem("task_1pm", task_1pm.value)
    } else if (checkbox.checked = false) {
        localStorage.removeItem("task_1pm", task_1pm.value)
    }
}

//2pm Row Function
var task_2pm = document.querySelector(".write_task_2pm");
var checkbox_2pm = document.querySelector(".save_task_2pm");

function save_checkboxes_2pm() {
    if (checkbox_2pm.checked = true) {
        localStorage.setItem("task_2pm", task_2pm.value)
    } else if (checkbox.checked = false) {
        localStorage.removeItem("task_2pm", task_2pm.value)
    }
}

function retrieve_data_2pm() {
    task_2pm.value = localStorage.getItem("task_2pm", task_2pm.value);
}

checkbox_2pm.addEventListener('change', save_checkboxes_2pm);

function save_checkboxes_2pm() {
    if (checkbox_2pm.checked = true) {
        localStorage.setItem("task_2pm", task_2pm.value)
    } else if (checkbox.checked = false) {
        localStorage.removeItem("task_2pm", task_2pm.value)
    }
}

//3pm Row Function
var task_3pm = document.querySelector(".write_task_3pm");
var checkbox_3pm = document.querySelector(".save_task_3pm");

function save_checkboxes_3pm() {
    if (checkbox_3pm.checked = true) {
        localStorage.setItem("task_3pm", task_3pm.value)
    } else if (checkbox.checked = false) {
        localStorage.removeItem("task_3pm", task_3pm.value)
    }
}

function retrieve_data_3pm() {
    task_3pm.value = localStorage.getItem("task_3pm", task_3pm.value);
}

checkbox_3pm.addEventListener('change', save_checkboxes_3pm);

function save_checkboxes_3pm() {
    if (checkbox_3pm.checked = true) {
        localStorage.setItem("task_3pm", task_3pm.value)
    } else if (checkbox.checked = false) {
        localStorage.removeItem("task_3pm", task_3pm.value)
    }
}

//4pm Row Function
var task_4pm = document.querySelector(".write_task_4pm");
var checkbox_4pm = document.querySelector(".save_task_4pm");

function save_checkboxes_4pm() {
    if (checkbox_4pm.checked = true) {
        localStorage.setItem("task_4pm", task_4pm.value)
    } else if (checkbox.checked = false) {
        localStorage.removeItem("task_4pm", task_4pm.value)
    }
}

function retrieve_data_4pm() {
    task_4pm.value = localStorage.getItem("task_4pm", task_4pm.value);
}

checkbox_4pm.addEventListener('change', save_checkboxes_4pm);

function save_checkboxes_4pm() {
    if (checkbox_4pm.checked = true) {
        localStorage.setItem("task_4pm", task_4pm.value)
    } else if (checkbox.checked = false) {
        localStorage.removeItem("task_4pm", task_4pm.value)
    }
}

//5pm Row Function
var task_5pm = document.querySelector(".write_task_5pm");
var checkbox_5pm = document.querySelector(".save_task_5pm");

function save_checkboxes_5pm() {
    if (checkbox_5pm.checked = true) {
        localStorage.setItem("task_5pm", task_5pm.value)
    } else if (checkbox.checked = false) {
        localStorage.removeItem("task_5pm", task_5pm.value)
    }
}

function retrieve_data_5pm() {
    task_5pm.value = localStorage.getItem("task_5pm", task_5pm.value);
}

checkbox_5pm.addEventListener('change', save_checkboxes_5pm);

function save_checkboxes_5pm() {
    if (checkbox_5pm.checked = true) {
        localStorage.setItem("task_5pm", task_4pm.value)
    } else if (checkbox.checked = false) {
        localStorage.removeItem("task_5pm", task_4pm.value)
    }
}

//save data to local storage
window.addEventListener("load", retrieve_data_9am);
window.addEventListener("load", retrieve_data_10am);
window.addEventListener("load", retrieve_data_11am);
window.addEventListener("load", retrieve_data_12pm);
window.addEventListener("load", retrieve_data_1pm);
window.addEventListener("load", retrieve_data_2pm);
window.addEventListener("load", retrieve_data_3pm);
window.addEventListener("load", retrieve_data_4pm);
window.addEventListener("load", retrieve_data_5pm);









