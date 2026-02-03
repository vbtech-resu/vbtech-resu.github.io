function generateResume(){

  document.getElementById("r-name").innerText =
    document.getElementById("name").value;

  document.getElementById("r-role").innerText =
    document.getElementById("role").value;

  document.getElementById("r-contact").innerText =
    document.getElementById("phone").value + " | " +
    document.getElementById("email").value;

  document.getElementById("r-summary").innerText =
    document.getElementById("summary").value;

  document.getElementById("r-company").innerText =
    document.getElementById("company").value;

  document.getElementById("r-expRole").innerText =
    document.getElementById("expRole").value;

  document.getElementById("r-years").innerText =
    document.getElementById("years").value;

  document.getElementById("r-edu10").innerText =
    "10th: " + document.getElementById("edu10").value;

  document.getElementById("r-edu12").innerText =
    "12th: " + document.getElementById("edu12").value;

  document.getElementById("r-college").innerText =
    "College: " + document.getElementById("college").value;

  // skills
  let skillBox = document.getElementById("r-skills");
  skillBox.innerHTML = "";
  document.getElementById("skills").value.split(",").forEach(s=>{
    let li = document.createElement("li");
    li.innerText = s.trim();
    skillBox.appendChild(li);
  });

  // photo
  let file = document.getElementById("photo").files[0];
  if(file){
    let reader = new FileReader();
    reader.onload = ()=> document.getElementById("r-photo").src = reader.result;
    reader.readAsDataURL(file);
  }
}

function downloadPDF(){
  html2pdf().from(document.getElementById("resume")).set({
    filename:"Resume.pdf",
    html2canvas:{scale:2},
    jsPDF:{format:"a4"}
  }).save();
}


