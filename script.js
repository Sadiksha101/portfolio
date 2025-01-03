// Create an Intersection Observer to trigger animation when the About section comes into view
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      const aboutText = document.querySelector('.about-text');
      const aboutImage = document.querySelector('.about-image');
  
      // If the About section is in view, add the 'animate' class to trigger animation
      if (entry.isIntersecting) {
        aboutText.classList.add('animate');
        aboutImage.classList.add('animate');
      } else {
        // When the section goes out of view, remove the 'animate' class to reset the animation
        aboutText.classList.remove('animate');
        aboutImage.classList.remove('animate');
      }
    });
  }, {
    threshold: 0.1,  // Trigger when 10% of the About section comes into view
  });
  
  // Start observing the About section
  const aboutSection = document.getElementById('about');
  observer.observe(aboutSection);
  



//skill section

document.addEventListener('DOMContentLoaded', function() {
  const skillsSection = document.getElementById('skills');
  const skillsGrid = document.querySelector('.skills-grid');

  function handleScroll() {
    const rect = skillsSection.getBoundingClientRect();
    // Check if the section is in the viewport
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      // Reset animation class to restart the animation
      skillsGrid.classList.remove('animate');
      // Force reflow to reset animation
      void skillsGrid.offsetWidth; // This triggers a reflow
      skillsGrid.classList.add('animate');
    }
  }

  window.addEventListener('scroll', handleScroll);

  // Check if the section is already in view on page load
  handleScroll();
});
