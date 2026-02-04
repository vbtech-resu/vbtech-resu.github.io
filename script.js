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

  document.getElementById("r-address").innerText =
  document.getElementById("address").value;


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
  function setEducation(inputId, outputId, label) {
  const value = document.getElementById(inputId).value.trim();
  const li = document.getElementById(outputId);

  if (value !== "") {
    li.textContent = label + ": " + value;
    li.style.display = "list-item";
  } else {
    li.textContent = "";
    li.style.display = "none";
  }
}

// apply education logic
setEducation("edu10", "r-edu10", "10th");
setEducation("edu12", "r-edu12", "12th");
setEducation("ugcollege", "r-ugcollege", "UG");
setEducation("pgcollege", "r-pgcollege", "PG");


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

  const resume = document.getElementById("resume");

  // 🔥 Desktop clone for PDF
  const pdfResume = resume.cloneNode(true);
  pdfResume.classList.add("pdf-mode");

  // Screen se bahar rakho
  pdfResume.style.position = "absolute";
  pdfResume.style.left = "-9999px";
  pdfResume.style.top = "0";

  document.body.appendChild(pdfResume);

  html2pdf().set({
    margin:10,
    filename:"My_Resume.pdf",
    image:{ type:"jpeg", quality:0.98 },
    html2canvas:{ scale:2, useCORS:true },
    jsPDF:{ unit:"mm", format:"a4", orientation:"portrait" }
  })
  .from(pdfResume)
  .save()
  .then(()=>{
    document.body.removeChild(pdfResume);
  });
}
