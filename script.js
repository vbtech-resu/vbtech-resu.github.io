let imageLoaded = false;

function generate(){

  // form values
  const nameVal = document.getElementById("name").value;
  const roleVal = document.getElementById("role").value;
  const phoneVal = document.getElementById("phone").value;
  const emailVal = document.getElementById("email").value;
  const summaryVal = document.getElementById("summary").value;
  const skillsVal = document.getElementById("skills").value;

  const edu10Val = document.getElementById("edu10").value;
  const edu12Val = document.getElementById("edu12").value;
  const collegeVal = document.getElementById("college").value;

  const companyVal = document.getElementById("company").value;
  const expRoleVal = document.getElementById("expRole").value;
  const yearsVal = document.getElementById("years").value;

  const templateVal = document.getElementById("template").value;

  // resume elements
  const resume = document.getElementById("resume");
  resume.className = "resume " + templateVal;

  document.getElementById("r-name").innerText = nameVal;
  document.getElementById("r-role").innerText = roleVal;
  document.getElementById("r-contact").innerText = phoneVal + " | " + emailVal;
  document.getElementById("r-summary").innerText = summaryVal;

  document.getElementById("r-company").innerText = companyVal;
  document.getElementById("r-expRole").innerText = expRoleVal;
  document.getElementById("r-years").innerText = yearsVal;

  document.getElementById("r-edu10").innerText = "10th: " + edu10Val;
  document.getElementById("r-edu12").innerText = "12th: " + edu12Val;
  document.getElementById("r-college").innerText = "College: " + collegeVal;

  // skills
  const skillBox = document.getElementById("r-skills");
  skillBox.innerHTML = "";

  if(skillsVal.trim() !== ""){
    skillsVal.split(",").forEach(item=>{
      let parts = item.split(":");
      let skill = parts[0].trim();
      let percent = parts[1] ? parts[1].trim() : 70;

      let div = document.createElement("div");
      div.style.marginBottom = "10px";
      div.innerHTML = `
        <b>${skill}</b>
        <div style="background:#ddd;height:6px;border-radius:3px">
          <div style="width:${percent}%;height:6px;background:#1f3c88;border-radius:3px"></div>
        </div>
      `;
      skillBox.appendChild(div);
    });
  }

  // photo
  const photo = document.getElementById("photo").files[0];
  const img = document.getElementById("r-photo");

  if(photo){
    const reader = new FileReader();
    reader.onload = function(){
      img.src = reader.result;
      imageLoaded = true;
    }
    reader.readAsDataURL(photo);
  }else{
    imageLoaded = true;
  }
}



function download(){

  if(!imageLoaded){
    alert("Please generate resume first");
    return;
  }

  const resume = document.getElementById("resume");

  html2pdf().set({
    margin: 20,
    filename: "Professional_Resume.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: "pt", format: "a4", orientation: "portrait" },
    pagebreak: { mode: ['css','legacy'] }
  }).from(resume).save();
}

