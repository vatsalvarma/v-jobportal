// SEARCH JOBS
function searchJobs() {
    const searchInput = document.getElementById("search");
    if (!searchInput) return; // prevents errors on other pages

    const value = searchInput.value.toLowerCase();
    const jobs = document.querySelectorAll(".job");

    jobs.forEach(job => {
        job.style.display = job.innerText.toLowerCase().includes(value)
            ? "block"
            : "none";
    });
}

// APPLY BUTTON
function applyJob(role) {
    alert("Application submitted for " + role + " ✅");
}

// OPEN JOB MODAL
function openJob(title, company, review) {
    const modal = document.getElementById("jobModal");
    if (!modal) return;

    document.getElementById("jobTitle").innerText = title;
    document.getElementById("company").innerText = company;
    document.getElementById("review").innerText = review;

    modal.style.display = "flex";
}

// CLOSE MODAL
function closeModal() {
    const modal = document.getElementById("jobModal");
    if (modal) modal.style.display = "none";
}
