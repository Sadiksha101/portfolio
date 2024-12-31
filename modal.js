// Load modals from an external HTML file
document.addEventListener('DOMContentLoaded', () => {
    fetch('projects/modal.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load modals.');
        }
        return response.text();
      })
      .then(html => {
        document.getElementById('modals-container').innerHTML = html;
      })
      .catch(error => console.error(error));
  });
  
  function openModal(projectId) {
    const modal = document.getElementById(`${projectId}-modal`);
    if (modal) {
      modal.style.display = 'flex';
    }
  }
  
  function closeModal(projectId) {
    const modal = document.getElementById(`${projectId}-modal`);
    if (modal) {
      modal.style.display = 'none';
    }
  }
  
  // Close modal when clicking outside content
  window.onclick = function (event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  };
  

  function showTechDetails(tech) {
    // Hide all details first
    document.querySelectorAll('.tech-details').forEach(function (detail) {
        detail.classList.remove('show');
    });

    // Show the details for the selected tech
    const techDetails = document.getElementById(tech + '-details');
    if (techDetails) {
        techDetails.classList.add('show');
    }
}
