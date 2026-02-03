function generateResume(){

  // layout switch
  const resume = document.getElementById("resume");
  const layout = document.getElementById("layout").value;
  resume.className = "resume " + layout;

  // basic info
  document.getElementById("r-name").innerText =
    document.getElementById("name").value;

  document.getElementById("r-role").innerText =
    document.getElementById("role").value;

  document.getElementById("r-contact").innerText =
    document.getElementById("phone").value + " | " +
    document.getElementById("email").value;

  document.getElementById("r-summary").innerText =
    document.getElementById("summary").value;

  // experience
  document.getElementById("r-company").innerText =
    document.getElementById("company").value;

  document.getElementById("r-expRole").innerText =
    document.getElementById("expRole").value;

  document.getElementById("r-years").innerText =
    document.getElementById("years").value;

  // education
  // 10th
const edu10Val = document.getElementById("edu10").value;
const edu10Li = document.getElementById("r-edu10");
if (edu10Val.trim() !== "") {
  edu10Li.innerText = "10th: " + edu10Val;
  edu10Li.style.display = "list-item";
} else {
  edu10Li.style.display = "none";
}

// 12th
const edu12Val = document.getElementById("edu12").value;
const edu12Li = document.getElementById("r-edu12");
if (edu12Val.trim() !== "") {
  edu12Li.innerText = "12th: " + edu12Val;
  edu12Li.style.display = "list-item";
} else {
  edu12Li.style.display = "none";
}

// UG
const ugVal = document.getElementById("ugCollege").value;
const ugLi = document.getElementById("r-ugCollege");
if (ugVal.trim() !== "") {
  ugLi.innerText = "UG: " + ugVal;
  ugLi.style.display = "list-item";
} else {
  ugLi.style.display = "none";
}

// PG
const pgVal = document.getElementById("pgCollege").value;
const pgLi = document.getElementById("r-pgCollege");
if (pgVal.trim() !== "") {
  pgLi.innerText = "PG: " + pgVal;
  pgLi.style.display = "list-item";
} else {
  pgLi.style.display = "none";
}


  // skills
  const skillsBox = document.getElementById("r-skills");
  skillsBox.innerHTML = "";
  const skills = document.getElementById("skills").value;

  if(skills.trim() !== ""){
    skills.split(",").forEach(s=>{
      let li = document.createElement("li");
      li.innerText = s.trim();
      skillsBox.appendChild(li);
    });
  }

  // photo
  const file = document.getElementById("photo").files[0];
  if(file){
    const reader = new FileReader();
    reader.onload = function(){
      document.getElementById("r-photo").src = reader.result;
    }
    reader.readAsDataURL(file);
  }
}

function downloadPDF(){
  html2pdf().set({
    margin:20,
    filename:"My_Resume.pdf",
    html2canvas:{scale:2},
    jsPDF:{format:"a4", orientation:"portrait"},
    pagebreak:{mode:["css","legacy"]}
  }).from(document.getElementById("resume")).save();
}
