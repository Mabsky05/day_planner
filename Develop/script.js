
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


document.getElementById("currentDay").innerHTML = moment();
var d1 = moment().calendar(); 

hours = {
//moment instances of hours
hour_9am: (moment('9:00am', 'hh:mm A')),
hour_10am:(moment('10:00am', 'hh:mm A')),
hour_11am: (moment('11:00am', 'hh:mm A')),
hour_12pm: (moment('12:00pm', 'hh:mm A')),
hour_1pm: (moment('01:00pm', 'hh:mm A')),
hour_2pm:(moment('2:00pm', 'hh:mm A')),
hour_3pm: (moment('3:00pm', 'hh:mm A')),
hour_4pm: (moment('4:00pm', 'hh:mm A')),
hour_5pm: (moment('5:00pm', 'hh:mm A')),
hour_6pm: (moment('6:00pm', 'hh:mm A')),
}
//add hours to hour_list in html

//for (i=0;i<9;i++) {
//    document.querySelector(".hour_list").innerHTML += hour;
//}




//set color scheme for all hours
if (moment().isBefore(hour_9am)) {
    document.getElementById("hour_9am").style.backgroundColor="LightGrey";
} else if (moment().isBetween(hour_9am, hour_10am)) {
    document.getElementById("hour_9am").style.backgroundColor="LightGreen";
} else {
    document.getElementById("hour_9am").style.backgroundColor="LightPink";
}

if (moment().isBefore(hour_10am)) {
    document.getElementById("hour_10am").style.backgroundColor="LightGrey";
} else if (moment().isBetween(hour_10am, hour_11am)) {
    document.getElementById("hour_10am").style.backgroundColor="LightGreen";
} else {
    document.getElementById("hour_10am").style.backgroundColor="LightPink";
}


if (moment().isBefore(hour_11am)) {
    document.getElementById("hour_11am").style.backgroundColor="LightGrey";
} else if (moment().isBetween(hour_11am, hour_12pm)) {
    document.getElementById("hour_11am").style.backgroundColor="LightGreen";
} else {
    document.getElementById("hour_11am").style.backgroundColor="LightPink";
}

if (moment().isBefore(hour_12pm)) {
    document.getElementById("hour_12pm").style.backgroundColor="LightGrey";
} else if (moment().isBetween(hour_12pm, hour_1pm)) {
    document.getElementById("hour_12pm").style.backgroundColor="LightGreen";
} else {
    document.getElementById("hour_12pm").style.backgroundColor="LightPink";
}

if (moment().isBefore(hour_1pm)) {
    document.getElementById("hour_1pm").style.backgroundColor="LightGrey";
} else if (moment().isBetween(hour_1pm, hour_2pm)) {
    document.getElementById("hour_1pm").style.backgroundColor="LightGreen";
} else {
    document.getElementById("hour_1pm").style.backgroundColor="LightPink";
}

if (moment().isBefore(hour_2pm)) {
    document.getElementById("hour_2pm").style.backgroundColor="LightGrey";
} else if (moment().isBetween(hour_2pm, hour_3pm)) {
    document.getElementById("hour_2pm").style.backgroundColor="LightGreen";
} else {
    document.getElementById("hour_2pm").style.backgroundColor="LightPink";
}

if (moment().isBefore(hour_3pm)) {
    document.getElementById("hour_3pm").style.backgroundColor="LightGrey";
} else if (moment().isBetween(hour_3pm, hour_4pm)) {
    document.getElementById("hour_3pm").style.backgroundColor="LightGreen";
} else {
    document.getElementById("hour_3pm").style.backgroundColor="LightPink";
}

if (moment().isBefore(hour_4pm)) {
    document.getElementById("hour_4pm").style.backgroundColor="LightGrey";
} else if (moment().isBetween(hour_4pm, hour_5pm)) {
    document.getElementById("hour_4pm").style.backgroundColor="LightGreen";
} else {
    document.getElementById("hour_4pm").style.backgroundColor="LightPink";
}

if (moment().isBefore(hour_5pm)) {
    document.getElementById("hour_5pm").style.backgroundColor="LightGrey";
} else if (moment().isBetween(hour_5pm, hour_6pm)) {
    document.getElementById("hour_5pm").style.backgroundColor="LightGreen";
} else {
    document.getElementById("hour_5pm").style.backgroundColor="LightPink";
}


//set 
var task = document.querySelector(".write_task");
//var tasks = $(".write_task")

//set checkbox save function
var checkbox = document.querySelector(".save_task");
//var checkboxes = $(".save_task").bind(save_checkboxes);

var time_rows = document.getElementsByTagName("time_row")


function save_checkboxes() {
    if (checkbox.checked = true) {
        localStorage.setItem("task", task.value)
    } else if (checkbox.checked = false) {
        localStorage.removeItem("task", task.value)
    }
}


function retrieve_data() {
    task.value = localStorage.getItem("task", task.value);

}








checkbox.addEventListener('change', save_checkboxes);

window.addEventListener("load", retrieve_data);



//window.addEventListener("load", retrieve_data );

/*
function checkbox_clear () {
    if (checkbox.checked = true) {
    write_task.value = localStorage.getItem("task");
    } 
}

//save all checkboxes on page load

window.addEventListener("load", checkbox_clear);
/*







//moment (current day, desired time)

//console.log(d1);
//console.log(moment().format("YYYY-MM-DD"));
*/


