function generateResume(){

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

  document.getElementById("r-company").innerText =
    document.getElementById("company").value;

  document.getElementById("r-expRole").innerText =
    document.getElementById("expRole").value;

  document.getElementById("r-years").innerText =
    document.getElementById("years").value;

  setEdu("edu10","r-edu10","10th");
  setEdu("edu12","r-edu12","12th");
  setEdu("ugcollege","r-ugcollege","UG");
  setEdu("pgcollege","r-pgcollege","PG");

  const skillsBox = document.getElementById("r-skills");
  skillsBox.innerHTML = "";
  document.getElementById("skills").value.split(",").forEach(s=>{
    if(s.trim()){
      const li = document.createElement("li");
      li.innerText = s.trim();
      skillsBox.appendChild(li);
    }
  });

  const file = document.getElementById("photo").files[0];
  if(file){
    const reader = new FileReader();
    reader.onload = ()=> document.getElementById("r-photo").src = reader.result;
    reader.readAsDataURL(file);
  }
}

function setEdu(input, output, label){
  const val = document.getElementById(input).value.trim();
  const li = document.getElementById(output);
  if(val){
    li.innerText = label + ": " + val;
    li.style.display = "list-item";
  }else{
    li.style.display = "none";
  }
}

function downloadResume(){
  const resume = document.getElementById("resume");
  const header = resume.querySelector(".header");

  // force desktop layout
  resume.classList.add("capture-desktop");
  header.style.flexDirection = "row";
  header.style.textAlign = "left";

  const isMobile = window.innerWidth <= 768;

  if(isMobile){
    // 📱 MOBILE → IMAGE (safe & reliable)
    html2canvas(resume, {
      scale: 2,
      useCORS: true
    }).then(canvas => {
      const link = document.createElement("a");
      link.download = "My_Resume.png";
      link.href = canvas.toDataURL("image/png");
      link.click();

      resume.classList.remove("capture-desktop");
      header.style.flexDirection = "";
      header.style.textAlign = "";
    });

  }else{
    // 💻 DESKTOP → PDF (text never blank)
    html2pdf().set({
      margin: [8,8,8,8],
      filename: "My_Resume.pdf",
      html2canvas:{
        scale: 2,      // 🔒 text-safe
        useCORS: true
      },
      jsPDF:{
        unit: "mm",
        format: "a4",
        orientation: "portrait"
      }
    }).from(resume).save().then(()=>{
      resume.classList.remove("capture-desktop");
      header.style.flexDirection = "";
      header.style.textAlign = "";
    });
  }
}
