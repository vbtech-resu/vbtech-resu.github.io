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
bar.innerHTML = `
<b>${skill}</b>
<div style="background:#ddd;height:6px;">
<div style="width:${percent}%;height:6px;background:#1f3c88"></div>
</div>`;
r_skills.appendChild(bar);
});

if(photo.files[0]){
let r = new FileReader();
r.onload = ()=> r_photo.src = r.result;
r.readAsDataURL(photo.files[0]);
}
}

function download(){
html2pdf().from(resume).set({
filename:"ATS_Resume.pdf",
html2canvas:{scale:2},
jsPDF:{format:"a4"}
}).save();
}
