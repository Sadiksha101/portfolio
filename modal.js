// Load modals from an external HTML file
document.addEventListener('DOMContentLoaded', () => {
    fetch('modals.html')
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
  