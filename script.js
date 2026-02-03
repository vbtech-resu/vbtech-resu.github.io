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
  document.getElementById("r-edu10").innerText =
    "10th: " + document.getElementById("edu10").value;

  document.getElementById("r-edu12").innerText =
    "12th: " + document.getElementById("edu12").value;

  document.getElementById("r-ugcollege").innerText =
    "UG: " + document.getElementById("ugcollege").value;

  document.getElementById("r-pgcollege").innerText =
    "PG: " + document.getElementById("pgcollege").value;

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
