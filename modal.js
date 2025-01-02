document.addEventListener('DOMContentLoaded', () => {
  // Fetch the Ramro modal HTML file and load it into the ramro modal container
  fetch('projects/modal.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to load modal.html');
      }
      return response.text();
    })
    .then(html => {
      document.getElementById('ramro-modal-container').innerHTML = html;
    })
    .catch(error => console.error('Error loading modal.html:', error));

  // Fetch the Mosaic modal HTML file and load it into the mosaic modal container
  fetch('projects/mosaic.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to load mosaic.html');
      }
      return response.text();
    })
    .then(html => {
      document.getElementById('mosaic-modal-container').innerHTML = html;
    })
    .catch(error => console.error('Error loading mosaic.html:', error));

    fetch('projects/qart.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to load qart.html');
      }
      return response.text();
    })
    .then(html => {
      document.getElementById('qart-modal-container').innerHTML = html;
    })
    .catch(error => console.error('Error loading qart.html:', error));

    fetch('projects/goldsage.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to load goldsage.html');
      }
      return response.text();
    })
    .then(html => {
      document.getElementById('goldsage-modal-container').innerHTML = html;
    })
    .catch(error => console.error('Error loading weavolution.html:', error));

    fetch('projects/weavolution.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to load weavolution.html');
      }
      return response.text();
    })
    .then(html => {
      document.getElementById('weavolution-modal-container').innerHTML = html;
    })
    .catch(error => console.error('Error loading weavolution.html:', error));

    fetch('projects/1dollar.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to load 1dollar.html');
      }
      return response.text();
    })
    .then(html => {
      document.getElementById('1dollar-modal-container').innerHTML = html;
    })
    .catch(error => console.error('Error loading 1dollar.html:', error));

    
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

  // Remove the 'selected' class from all tags
  document.querySelectorAll('.tag').forEach(function (tag) {
    tag.classList.remove('selected');
  });

  // Show the details for the selected tech
  const techDetails = document.getElementById(tech + '-details');
  if (techDetails) {
    techDetails.classList.add('show');
  }

  // Add the 'selected' class to the clicked tag
  const selectedTag = document.querySelector(`.tag[data-tech="${tech}"]`);
  if (selectedTag) {
    selectedTag.classList.add('selected');
  }
}
