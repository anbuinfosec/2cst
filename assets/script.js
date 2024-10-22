/*
Made by @anbuinfosec
Facebook: https://www.facebook.com/anbuinfosec
Github: https://www.github.com/anbuinfosec
Telegram: https://www.t.me/anbuinfosec
*/

var mainDiv = document.getElementById('main-button');
mainDiv.addEventListener('click', function(){
  this.children.item(0).classList.toggle('fa-times');
  this.classList.toggle('open');
});

const currentDate = new Date();
const subjectNames = {
    "25721" : "BANGLA-II",
    "25722" : "ENGLISH-II",
    "25812" : "PHYSICAL EDUCATION",
    "25921" : "MATHEMATICS-II",
    "25913" : "CHEMISTRY",
    "25922" : "PHYSICS-II",
    "28521" : "PYTHON PROGRAMMING",
    "28522" : "GRAPHICS DESIGN-I",
    "26811" : "BASIC ELECTRONICS"
};

const teachersName = {
    "MSI" : "SAIFUL SIR",
    "KB": "KHALEDA MAM",
    "BS": "BADSHA SIR",
    "SC": "SAMARJIT SIR",
    "RSR-2": "EMA MAM",
    "MUG": "MEJBAH SIR",
    "SK": "SELIM SIR",
    "UAL": "LIZA MAM"
};

const routine = {
    "Sunday": [
        {
            "period": 1,
            "subject_code": "25921",
            "room_number": "337",
            "teacher_name": "RSR-2",
            "start_time": "08:00 AM",
            "end_time": "09:30 AM"
        },
        {
            "period": 2,
            "subject_code": "25722",
            "room_number": "337",
            "teacher_name": "KB",
            "start_time": "09:30 AM",
            "end_time": "10:15 AM"
        },
        {
            "period": 3,
            "subject_code": "25721",
            "room_number": "337",
            "teacher_name": "MSI",
            "start_time": "10:15 AM",
            "end_time": "11:00 AM"
        },
        {
            "period": 4,
            "subject_code": "28522",
            "room_number": "LAB-1",
            "teacher_name": "SK",
            "start_time": "11:00 AM",
            "end_time": "01:15 PM"
        }
    ],
    "Monday": [
        {
            "period": 1,
            "subject_code": "25812",
            "room_number": "FIELD",
            "teacher_name": "BS",
            "start_time": "08:00 AM",
            "end_time": "10:15 AM"
        },
        {
            "period": 2,
            "subject_code": "25913",
            "room_number": "CHY LAB",
            "teacher_name": "SC",
            "start_time": "10:15 AM",
            "end_time": "12:30 PM"
        },
        {
            "period": 3,
            "subject_code": "26811",
            "room_number": "305",
            "teacher_name": "UAL",
            "start_time": "12:30 PM",
            "end_time": "01:15 PM"
        }
    ],
    "Tuesday": [
        {
            "period": 1,
            "subject_code": "25913",
            "room_number": "336",
            "teacher_name": "SC",
            "start_time": "08:00 AM",
            "end_time": "08:45 AM"
        },
        {
            "period": 2,
            "subject_code": "25921",
            "room_number": "336",
            "teacher_name": "RSR-2",
            "start_time": "08:45 AM",
            "end_time": "09:30 AM"
        },
        {
            "period": 3,
            "subject_code": "25722",
            "room_number": "336",
            "teacher_name": "KB",
            "start_time": "09:30 AM",
            "end_time": "10:15 AM"
        },
        {
            "period": 4,
            "subject_code": "28521",
            "room_number": "336",
            "teacher_name": "MUG",
            "start_time": "10:15 AM",
            "end_time": "11:00 AM"
        },
        {
            "period": 5,
            "subject_code": "26811",
            "room_number": "AV-1",
            "teacher_name": "UAL",
            "start_time": "11:00 AM",
            "end_time": "01:15 PM"
        },
    ],
    "Wednesday": [
        {
            "period": 1,
            "subject_code": "28521",
            "room_number": "LAB-1",
            "teacher_name": "MUG",
            "start_time": "08:00 AM",
            "end_time": "10:15 AM"
        },
        {
            "period": 2,
            "subject_code": "25913",
            "room_number": "336",
            "teacher_name": "SC",
            "start_time": "10:15 AM",
            "end_time": "11:45 AM"
        },
        {
            "period": 3,
            "subject_code": "26811",
            "room_number": "336",
            "teacher_name": "UAL",
            "start_time": "11:45 AM",
            "end_time": "12:30 PM"
        },
        {
            "period": 4,
            "subject_code": "25921",
            "room_number": "336",
            "teacher_name": "RSR-2",
            "start_time": "12:30 PM",
            "end_time": "01:15 PM"
        }
    ],
    "Thursday": [
        {
            "period": 1,
            "subject_code": "28522",
            "room_number": "LAB-1",
            "teacher_name": "SK",
            "start_time": "08:00 AM",
            "end_time": "10:15 AM"
        },
        {
            "period": 2,
            "subject_code": "28521",
            "room_number": "433",
            "teacher_name": "MUG",
            "start_time": "10:15 AM",
            "end_time": "11:00 AM"
        },
        {
            "period": 3,
            "subject_code": "25921",
            "room_number": "433",
            "teacher_name": "RSR-2",
            "start_time": "11:00 AM",
            "end_time": "12:30 PM"
        },
        {
            "period": 4,
            "subject_code": "25721",
            "room_number": "433",
            "teacher_name": "MSI",
            "start_time": "12:30 PM",
            "end_time": "01:15 PM"
        }
    ]
};

const displayCurrentDateTime = () => {
    const currentDateElement = document.getElementById('currentDate');
    const currentTimeElement = document.getElementById('currentTime');

    currentDateElement.textContent = currentDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    currentTimeElement.textContent = currentDate.toLocaleTimeString('en-US');
};

const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
};

const displayRoutine = (selectedDay) => {
    const routineTable = document.getElementById('routineTable').getElementsByTagName('tbody')[0];
    routineTable.innerHTML = '';
    if (routine[selectedDay]) {
        routine[selectedDay].forEach(classInfo => {
            const row = routineTable.insertRow();
            // const cellPeriod = row.insertCell(0);
            const cellTime = row.insertCell(0);
            const cellSubjectName = row.insertCell(1);
            const cellRoomNumber = row.insertCell(2);
            const cellTeacherName = row.insertCell(3);
            const cellDuration = row.insertCell(4);

            // cellPeriod.textContent = classInfo.period;
            cellTime.textContent = `${classInfo.start_time} - ${classInfo.end_time}`;
            
            const subjectName = subjectNames[classInfo.subject_code] || "Unknown Subject";
            cellSubjectName.textContent = subjectName;
        
            cellRoomNumber.textContent = classInfo.room_number;

            const teacherName = teachersName[classInfo.teacher_name] || teacher_name;    
            cellTeacherName.textContent = teacherName;

            const startTime = new Date(`${currentDate.toDateString()} ${classInfo.start_time}`);
            const endTime = new Date(`${currentDate.toDateString()} ${classInfo.end_time}`);
            const durationMinutes = (endTime.getTime() - startTime.getTime()) / (1000 * 60);

            cellDuration.textContent = formatDuration(durationMinutes);
        });
    } else {
        const row = routineTable.insertRow();
        const cell = row.insertCell(0);
        cell.colSpan = 6;
        cell.textContent = "No classes today!";
        cell.style.textAlign = 'center';
    }
};

const displaySelectedDay = () => {
    const selectedDay = document.getElementById('daySelect').value;
    displayRoutine(selectedDay);
};

window.onload = () => {
    displayCurrentDateTime();
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
    const currentDay = dayNames[currentDate.getDay()];

    if (routine[currentDay]) {
        displayRoutine(currentDay);
    } else {
        console.log("No routine available for today.");
    }
};
