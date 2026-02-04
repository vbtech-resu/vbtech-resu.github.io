function generateResume(){

  r-name.innerText = name.value;
  r-contact.innerText =
    [phone.value, email.value].filter(Boolean).join(" | ");
  r-address.innerText = address.value;

  // PHOTO
  if(photo.files[0]){
    const reader = new FileReader();
    reader.onload = ()=> r-photo.src = reader.result;
    reader.readAsDataURL(photo.files[0]);
  }

  // EDUCATION
  r-edu.innerHTML = "";
  [["10",edu10.value],["12",edu12.value],["UG",ug.value],["PG",pg.value]]
  .forEach(e=>{
    if(e[1]){
      const li=document.createElement("li");
      li.innerText=e[0];
      r-edu.appendChild(li);
    }
  });
  sec-edu.style.display = r-edu.children.length ? "block" : "none";

  // EXPERIENCE
  const exp = [company.value, role.value, years.value].filter(Boolean).join(" – ");
  r-exp.innerText = exp;
  sec-exp.style.display = exp ? "block" : "none";

  // SKILLS
  r-skills.innerHTML="";
  skills.value.split(",").forEach(s=>{
    if(s.trim()){
      const li=document.createElement("li");
      li.innerText=s.trim();
      r-skills.appendChild(li);
    }
  });
  sec-skill.style.display = r-skills.children.length ? "block" : "none";

  // SUMMARY
  r-summary.innerText = summary.value;
  sec-summary.style.display = summary.value ? "block" : "none";
}

function downloadResume(){
  html2pdf().set({
    margin:15,
    filename:"My_Resume.pdf",
    html2canvas:{ scale:2 },
    jsPDF:{ unit:"mm", format:"a4", orientation:"portrait" }
  }).from(document.getElementById("resume")).save();
}
