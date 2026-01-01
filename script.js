function searchJobs() {
    let input = document.getElementById("search").value.toLowerCase();
    document.querySelectorAll(".job").forEach(job => {
        job.style.display = job.innerText.toLowerCase().includes(input)
            ? "block"
            : "none";
    });
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
