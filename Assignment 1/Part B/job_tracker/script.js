// DOM elements
const applicationForm = document.getElementById('applicationForm');
const applicationList = document.getElementById('applicationList');
const profileForm = document.getElementById('profileForm');
const showApplicationsBtn = document.getElementById('showApplications');
const showProfileBtn = document.getElementById('showProfile');
const applicationsSection = document.getElementById('applicationsSection');
const profileSection = document.getElementById('profileSection');

// Application data
let applications = JSON.parse(localStorage.getItem('applications')) || [];
let profile = JSON.parse(localStorage.getItem('profile')) || {};

// Event listeners
applicationForm.addEventListener('submit', addApplication);
profileForm.addEventListener('submit', saveProfile);
showApplicationsBtn.addEventListener('click', showApplications);
showProfileBtn.addEventListener('click', showProfile);

// Functions
function addApplication(e) {
    e.preventDefault();
    const application = {
        id: Date.now(),
        jobId: document.getElementById('jobId').value,
        dateApplied: document.getElementById('dateApplied').value,
        role: document.getElementById('role').value,
        company: document.getElementById('company').value,
        resume: document.getElementById('resume').files[0] ? document.getElementById('resume').files[0].name : ''
    };
    applications.push(application);
    saveApplications();
    displayApplications();
    applicationForm.reset();
}

function saveApplications() {
    localStorage.setItem('applications', JSON.stringify(applications));
}

function displayApplications() {
    applicationList.innerHTML = '';
    applications.forEach(app => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${app.company}</strong> - ${app.role}<br>
            Job ID: ${app.jobId} | Date Applied: ${app.dateApplied}<br>
            Resume: ${app.resume}
            <button class="delete-btn" onclick="deleteApplication(${app.id})">Delete</button>
            <button class="edit-btn" onclick="editApplication(${app.id})">Edit</button>
        `;
        applicationList.appendChild(li);
    });
}

function deleteApplication(id) {
    applications = applications.filter(app => app.id !== id);
    saveApplications();
    displayApplications();
}

function editApplication(id) {
    const app = applications.find(app => app.id === id);
    document.getElementById('jobId').value = app.jobId;
    document.getElementById('dateApplied').value = app.dateApplied;
    document.getElementById('role').value = app.role;
    document.getElementById('company').value = app.company;
    applications = applications.filter(app => app.id !== id);
    saveApplications();
    displayApplications();
}

function saveProfile(e) {
    e.preventDefault();
    profile = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        summary: document.getElementById('summary').value
    };
    localStorage.setItem('profile', JSON.stringify(profile));
    alert('Profile saved successfully!');
}

function loadProfile() {
    document.getElementById('name').value = profile.name || '';
    document.getElementById('email').value = profile.email || '';
    document.getElementById('phone').value = profile.phone || '';
    document.getElementById('summary').value = profile.summary || '';
}

function showApplications() {
    applicationsSection.style.display = 'block';
    profileSection.style.display = 'none';
}

function showProfile() {
    applicationsSection.style.display = 'none';
    profileSection.style.display = 'block';
    loadProfile();
}

// Initial display
displayApplications();