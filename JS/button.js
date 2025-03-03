let allBtn = document.querySelectorAll(".btnComp");

for (let i = 0; i < allBtn.length; i++) {
  const completeBtn = allBtn[i];
  completeBtn.addEventListener("click", function (event) {
    let parent = event.target.parentElement.parentElement;
    console.log(parent);

    let title = parent.querySelector("h2").innerText;
    let time = getCurrentTime();
    let taskAssigned = document.getElementById("taskAssigned").innerText;
    taskAssigned = parseInt(taskAssigned);
    taskAssigned -= 1;
    document.getElementById("taskAssigned").innerText = taskAssigned;
    let completedTask = document.getElementById("completedTask").innerText;
    completedTask = parseInt(completedTask);
    completedTask += 1;
    document.getElementById("completedTask").innerText = completedTask;

    alert(`
        Board Updated Successfully .`)

    if (taskAssigned == 0) {
      alert(`
        Congrats . You Have Completed All The Current Task.

        `);
    }
    completeBtn.setAttribute("disabled", "true");
    completeBtn.style.backgroundColor = "rgb(211, 211, 211)";

    let history = `
        <div class="bg-green-50 p-4 rounded-md">
                  <p>You have compted task <span class="font-bold"> ${title}</span> </p>
                  <p>Time : ${getCurrentTime()}</p>
                </div>
        `;


    document
      .getElementById("history")
      .insertAdjacentHTML("afterbegin", history);
  });
}

function getCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const period = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

  return `${hours}:${formattedMinutes}:${formattedSeconds} ${period}`;
}

document.getElementById("clearHistory").addEventListener("click", function () {
    document.getElementById("history").innerHTML = "";
  });

document.getElementById("themeChanger").addEventListener("click", function () {
    function getRandomLightColor() {
      const r = Math.floor(200 + Math.random() * 56);
      const g = Math.floor(200 + Math.random() * 56);
      const b = Math.floor(200 + Math.random() * 56);
      return `rgb(${r}, ${g}, ${b})`;
    }
  
    document.body.style.backgroundColor = getRandomLightColor();
  });
