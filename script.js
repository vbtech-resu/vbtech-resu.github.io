function generateResume(){

  document.getElementById("r-name").innerText = name.value;
  document.getElementById("r-role").innerText = role.value;
  document.getElementById("r-contact").innerText =
    phone.value + " | " + email.value;
  document.getElementById("r-address").innerText = address.value;

  document.getElementById("r-summary").innerText = summary.value;

  document.getElementById("r-company").innerText = company.value;
  document.getElementById("r-expRole").innerText = expRole.value;
  document.getElementById("r-years").innerText = years.value;

  r-edu10.innerText = edu10.value;
  r-edu12.innerText = edu12.value;
  r-ug.innerText = ug.value;
  r-pg.innerText = pg.value;

  const skillsBox = document.getElementById("r-skills");
  skillsBox.innerHTML = "";
  skills.value.split(",").forEach(s=>{
    if(s.trim()){
      const li = document.createElement("li");
      li.innerText = s.trim();
      skillsBox.appendChild(li);
    }
  });

  const file = photo.files[0];
  if(file){
    const reader = new FileReader();
    reader.onload = ()=> r-photo.src = reader.result;
    reader.readAsDataURL(file);
  }
}

function downloadResume(){
  const resume = document.getElementById("resume");
  resume.classList.add("pdf-mode");

  html2pdf().set({
    margin:0,
    filename:"My_Resume.pdf",
    image:{type:"jpeg", quality:1},
    html2canvas:{scale:2},
    jsPDF:{unit:"mm", format:"a4", orientation:"portrait"}
  }).from(resume).save().then(()=>{
    resume.classList.remove("pdf-mode");
  });
}
