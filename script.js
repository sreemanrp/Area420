 // Subjects data
 const subjects = [
  { name: "CSE", link: "#", topics: ["FSAD", "MP", "AOOP", "DBMS"] },
  { name: "AI&DS", link: "#", topics: ["DL", "FSAD", "DAA", "MP"] },
  { name: "CSIT", link: "#", topics: ["FSAD", "MP", "AOOP", "DBMS"] }
];

// Function to show subject content page
function showPage(subject) {
  // Hide all content pages
  document.querySelectorAll('.content-page').forEach(page => page.style.display = 'none');
  document.getElementById(subject).style.display = 'block';
}

// Function to show resources for a selected topic
function showResources(subject) {
  document.getElementById('subject-name').innerText = subject;
  document.getElementById('resources').style.display = 'block';
}

// Functions to display lists for Assignments, Tutorials, Workbooks
function showAssignments() {
  document.getElementById('assignments').style.display = 'block';
}

function showTutorials() {
  document.getElementById('tutorials').style.display = 'block';
}

function showLWorkbooks() {
  document.getElementById('l-workbooks').style.display = 'block';
}

function showSWorkbooks() {
  document.getElementById('s-workbooks').style.display = 'block';
}

// Question icon toggle
function toggleHelpOptions() {
  const helpOptions = document.getElementById('help-options');
  if (helpOptions.style.display === 'block') {
      helpOptions.style.display = 'none';
  } else {
      helpOptions.style.display = 'block';
  }
}

// Close popup if clicked outside of it
document.addEventListener('click', function (event) {
  if (!event.target.closest('.popup') && !event.target.closest('.question-icon')) {
      document.getElementById('help-options').style.display = 'none';
  }
});

// Help & FAQ clicked
function helpFAQ() {
  alert('Under construction');
}

// Show Upload Option
function showUpload() {
  alert('Please contact the admin to upload the files');
}

// Login Popup
function openPopup() {
  document.getElementById('popup-overlay').style.display = 'flex';
}

// Close Login Popup
function closePopup() {
  document.getElementById('popup-overlay').style.display = 'none';
}

// Function to search subjects in the search bar
function searchSubjects() {
  let query = document.getElementById('search-bar').value.toLowerCase();
  document.querySelectorAll('.file-name').forEach(file => {
      const fileName = file.textContent.toLowerCase();
      if (fileName.includes(query)) {
          file.style.display = 'block';
      } else {
          file.style.display = 'none';
      }
  });
}