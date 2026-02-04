function generateResume(){

  // BASIC
  r-name.innerText = name.value;
  r-contact.innerText =
    [phone.value, email.value].filter(Boolean).join(" | ");
  r-address.innerText = address.value;

  // PHOTO
  if(photo.files[0]){
    const r = new FileReader();
    r.onload = () => r-photo.src = r.result;
    r.readAsDataURL(photo.files[0]);
  }

  // EDUCATION
  const eduList = document.getElementById("r-edu-list");
  eduList.innerHTML = "";

  [["10",edu10.value],["12",edu12.value],["UG",ug.value],["PG",pg.value]]
  .forEach(e=>{
    if(e[1]){
      const li = document.createElement("li");
      li.innerText = e[0];
      eduList.appendChild(li);
    }
  });

  document.getElementById("r-education").style.display =
    eduList.children.length ? "block" : "none";

  // EXPERIENCE
  const expText = [company.value, role.value, years.value].filter(Boolean).join(" – ");
  r-exp.innerText = expText;
  r-experience.style.display = expText ? "block" : "none";

  // SKILLS
  r-skills.innerHTML = "";
  skills.value.split(",").forEach(s=>{
    if(s.trim()){
      const li = document.createElement("li");
      li.innerText = s.trim();
      r-skills.appendChild(li);
    }
  });
  r-skills-sec.style.display = r-skills.children.length ? "block" : "none";

  // SUMMARY
  r-summary.innerText = summary.value;
  r-summary-sec.style.display = summary.value ? "block" : "none";
}

function downloadPDF(){
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF("p","mm","a4");

  pdf.html(document.getElementById("resume"),{
    margin:20,
    autoPaging:"text",
    callback:function(doc){
      doc.save("My_Resume.pdf");
    }
  });
}
