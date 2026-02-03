function generateResume(){

document.getElementById("r-name").innerText = name.value;
document.getElementById("r-role").innerText = role.value;
document.getElementById("r-contact").innerText = phone.value + " | " + email.value;
document.getElementById("r-summary").innerText = summary.value;

let skillsArr = skills.value.split(",");
let skillList = document.getElementById("r-skills");
skillList.innerHTML = "";
skillsArr.forEach(s=>{
let li = document.createElement("li");
li.innerText = s.trim();
skillList.appendChild(li);
});

document.getElementById("r-edu10").innerText = "10th: " + edu10.value;
document.getElementById("r-edu12").innerText = "12th: " + edu12.value;
document.getElementById("r-college").innerText = "College: " + college.value;

document.getElementById("r-company").innerText = company.value;
document.getElementById("r-expRole").innerText = expRole.value;
document.getElementById("r-years").innerText = years.value;

let file = document.getElementById("photo").files[0];
if(file){
let reader = new FileReader();
reader.onload = function(){
document.getElementById("r-photo").src = reader.result;
};
reader.readAsDataURL(file);
}
}

function downloadPDF(){
html2pdf()
.set({
margin:0.5,
filename:"Professional_Resume.pdf",
image:{type:"jpeg", quality:0.98},
html2canvas:{scale:2},
jsPDF:{unit:"in", format:"a4", orientation:"portrait"}
})
.from(document.getElementById("resume"))
.save();
}
