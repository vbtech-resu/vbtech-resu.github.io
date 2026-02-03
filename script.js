function generateResume(){
    document.getElementById("r-name").innerText =
        document.getElementById("name").value;

    document.getElementById("r-role").innerText =
        document.getElementById("role").value;

    document.getElementById("r-phone").innerText =
        document.getElementById("phone").value;

    document.getElementById("r-email").innerText =
        document.getElementById("email").value;

    document.getElementById("r-summary").innerText =
        document.getElementById("summary").value;

    document.getElementById("r-education").innerText =
        document.getElementById("education").value;

    document.getElementById("r-experience").innerText =
        document.getElementById("experience").value;

    let skills = document.getElementById("skills").value.split(",");
    let skillsList = document.getElementById("r-skills");
    skillsList.innerHTML = "";

    skills.forEach(skill=>{
        let li = document.createElement("li");
        li.innerText = skill.trim();
        skillsList.appendChild(li);
    });
}

function downloadPDF(){
    const resume = document.getElementById("resume");
    html2pdf()
        .set({
            margin: 0.5,
            filename: 'Resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        })
        .from(resume)
        .save();
}
