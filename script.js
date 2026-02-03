let imageLoaded = false;

function generate(){

  resume.className = "resume " + template.value;

  r_name.innerText = name.value;
  r_role.innerText = role.value;
  r_contact.innerText = phone.value + " | " + email.value;
  r_summary.innerText = summary.value;

  r_company.innerText = company.value;
  r_expRole.innerText = expRole.value;
  r_years.innerText = years.value;

  r_edu10.innerText = "10th: " + edu10.value;
  r_edu12.innerText = "12th: " + edu12.value;
  r_college.innerText = "College: " + college.value;

  r_skills.innerHTML = "";
  skills.value.split(",").forEach(s=>{
    let [skill, percent] = s.split(":");
    let bar = document.createElement("div");
    bar.style.marginBottom = "8px";
    bar.innerHTML = `
      <b>${skill}</b>
      <div style="background:#ddd;height:6px;">
        <div style="width:${percent || 70}%;height:6px;background:#1f3c88"></div>
      </div>`;
    r_skills.appendChild(bar);
  });

  // IMAGE LOAD FIX
  if(photo.files[0]){
    let reader = new FileReader();
    reader.onload = function(){
      r_photo.src = reader.result;
      imageLoaded = true;
    }
    reader.readAsDataURL(photo.files[0]);
  }else{
    imageLoaded = true;
  }
}


function download(){

  if(!imageLoaded){
    alert("Please generate resume first and wait for image to load");
    return;
  }

  const element = document.getElementById("resume");

  const opt = {
    margin:       10,
    filename:     'Professional_Resume.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, useCORS: true },
    jsPDF:        { unit: 'pt', format: 'a4', orientation: 'portrait' },
    pagebreak:    { mode: ['css','legacy'] }
  };

  html2pdf().set(opt).from(element).save();
}

