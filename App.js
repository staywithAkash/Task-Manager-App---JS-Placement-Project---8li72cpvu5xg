let lielement = null;
const drag = (event) => {
  lielement = event.target;
  setTimeout(() => {
    event.target.className = " hide";
  }, 0);
};
const dragEnd = (event) => {
  event.target.className = " taskpara";
};

//clearing the task from textArea
let btn = document.getElementById("id-btn");
btn.addEventListener("click", (e) => {
  document.getElementById("copyText").value = "";
});

//Add task
let taskb = document.querySelector(".btn1");
taskb.addEventListener("click", (e) => {
  let copytask = document.getElementById("copyText").value;
  let para = document.createElement("li");
  let para2=document.createElement("textarea");
  para2.setAttribute("type","text");
  para2.className="taskpara";
  para.textContent = copytask;
  para.className = "taskpara";
  para.setAttribute("draggable", "true");
  para.style.border = "2px solid #80898a";
  para.style.backgroundColor = "#acbfc2";
  para.style.margin = "1px";
  para.addEventListener("dragstart", drag);
  para.addEventListener("dragend", dragEnd);
  let addpara = document.getElementById("listpara");
  addpara.appendChild(para);
  para.appendChild(para2);
});

//drop the task
const section = document.querySelectorAll(".section-drop");
section.forEach((element) => {
  element.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  element.addEventListener("drop", (e) => {
    e.preventDefault();
    e.target.appendChild(lielement);
  });
});
