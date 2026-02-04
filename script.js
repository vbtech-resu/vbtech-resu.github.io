const inputs = document.querySelectorAll("input, textarea");

inputs.forEach(i=>{
  i.addEventListener("input", updateResume);
});

photo.addEventListener("change", updateResume);

function updateResume(){

  // BASIC
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
  r-edu.innerHTML="";
  [["10",edu10.value],["12",edu12.value],["UG",ug.value],["PG",pg.value]]
  .forEach(e=>{
    if(e[1]){
      const li=document.createElement("li");
      li.innerText=e[0];
      r-edu.appendChild(li);
    }
  });
  sec-edu.style.display = r-edu.children.length?"block":"none";

  // EXPERIENCE
  const exp=[company.value,role.value,years.value].filter(Boolean).join(" – ");
  r-exp.innerText=exp;
  sec-exp.style.display=exp?"block":"none";

  // SKILLS
  r-skills.innerHTML="";
  skills.value.split(",").forEach(s=>{
    if(s.trim()){
      const li=document.createElement("li");
      li.innerText=s.trim();
      r-skills.appendChild(li);
    }
  });
  sec-skill.style.display=r-skills.children.length?"block":"none";

  // SUMMARY
  r-summary.innerText=summary.value;
  sec-summary.style.display=summary.value?"block":"none";
}

function downloadPDF(){
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF("p","mm","a4");

  pdf.html(document.getElementById("resume"),{
    margin:20,
    autoPaging:"text",
    callback:(doc)=>doc.save("My_Resume.pdf")
  });
}
