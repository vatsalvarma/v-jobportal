function searchJobs() {
    const value = document.getElementById("search").value.toLowerCase();
    document.querySelectorAll(".job").forEach(job => {
        job.style.display = job.innerText.toLowerCase().includes(value)
            ? "block"
            : "none";
    });
}

function applyJob(role) {
    alert("Application submitted for " + role + " ✅");
}


function openJob(title, company, review) {
    document.getElementById("jobTitle").innerText = title;
    document.getElementById("company").innerText = company;
    document.getElementById("review").innerText = review;
    document.getElementById("jobModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("jobModal").style.display = "none";
}
