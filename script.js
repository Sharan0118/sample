fetch("http://localhost:3000/api/student")
.then(response => response.json())
.then(data => {

document.getElementById("name").innerText = data.name;
document.getElementById("progress").innerText = data.progress;
document.getElementById("focus").innerText = data.focusLevel;
document.getElementById("completed").innerText = data.completedLessons;
document.getElementById("pending").innerText = data.pendingLessons;

})
.catch(error => console.log(error));