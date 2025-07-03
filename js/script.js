function toggleMenu() {
  const navMenu = document.getElementById('navMenu');
  const hamburger = document.querySelector('.hamburger');
  const body = document.body;
  
  // Create overlay if it doesn't exist
  let overlay = document.querySelector('.nav-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    overlay.addEventListener('click', toggleMenu);
    body.appendChild(overlay);
  }
  
  // Toggle classes
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
  overlay.classList.toggle('active');
  
  // Prevent body scroll when menu is open
  if (navMenu.classList.contains('active')) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = '';
  }
}

// Close menu when clicking on nav links
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });
});

// Dropdown functionality for services and FAQs
function toggleDropdown(header) {
  const dropdownItem = header.parentElement;
  const isActive = dropdownItem.classList.contains('active');
  
  // Determine if this is a service dropdown or FAQ item
  const isServiceDropdown = dropdownItem.classList.contains('dropdown-item');
  const isFaqItem = dropdownItem.classList.contains('faq-item');
  
  if (isServiceDropdown) {
    // For service dropdowns: close all service dropdowns first
    const allServiceDropdowns = document.querySelectorAll('.dropdown-item');
    allServiceDropdowns.forEach(item => {
      item.classList.remove('active');
    });
    
    // If the clicked dropdown wasn't active, open it
    if (!isActive) {
      dropdownItem.classList.add('active');
    }
  } else if (isFaqItem) {
    // For FAQ items: simply toggle the clicked item (allow multiple open)
    dropdownItem.classList.toggle('active');
  }
}

// Portfolio functionality
function openPortfolio(projectId) {
  const portfolioGrid = document.querySelector('.portfolio-grid-section');
  const projectDetail = document.getElementById('projectDetail');
  
  // Hide portfolio grid and show project detail
  portfolioGrid.style.display = 'none';
  projectDetail.style.display = 'block';
  
  // Scroll to top of project detail
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  // Load project content based on ID
  loadProjectContent(projectId);
}

function closeProject() {
  const portfolioGrid = document.querySelector('.portfolio-grid-section');
  const projectDetail = document.getElementById('projectDetail');
  
  // Hide project detail and show portfolio grid
  projectDetail.style.display = 'none';
  portfolioGrid.style.display = 'block';
  
  // Scroll to portfolio grid
  portfolioGrid.scrollIntoView({ behavior: 'smooth' });
}

function loadProjectContent(projectId) {
  const projectTitle = document.getElementById('projectTitle');
  const projectScope = document.getElementById('projectScope');
  const projectContent = document.getElementById('projectContent');
  
  // Project data
  const projects = {
    1: {
      title: 'Bare Beauty',
      scope: 'Feed Redesign | Brand Messaging | Organic Strategy',
      content: 'project1Content'
    },
    2: {
      title: 'Elysian Home',
      scope: 'Feed Redesign | Visual Identity | Content Strategy',
      content: 'project2Content'
    },
    3: {
      title: 'EmpowerHer',
      scope: 'Feed Redesign | Brand Cohesion | Wellness Messaging',
      content: 'project3Content'
    },
    4: {
      title: 'Enchanté',
      scope: 'Feed Redesign | Brand Refinement | Visual Storytelling',
      content: 'project4Content'
    },
    5: {
      title: 'Evolve Yoga Studio',
      scope: 'Feed Redesign | Brand Identity | Wellness Content Flow',
      content: 'project5Content'
    },
    6: {
      title: 'Nailed',
      scope: 'Feed Redesign | Brand Identity | Sales-Driven Visuals',
      content: 'project6Content'
    },
    7: {
      title: 'Pure Balance',
      scope: 'Feed Redesign | Story Highlights | Brand Cohesion | Organic Growth Strategy',
      content: 'project7Content'
    },
    8: {
      title: 'Serenova',
      scope: 'Feed Redesign | Brand Identity | Content Direction | Organic Growth',
      content: 'project8Content'
    }
  };
  
  const project = projects[projectId];
  if (project) {
    projectTitle.textContent = project.title;
    projectScope.textContent = project.scope;
    
    // Show/hide content sections
    const allSections = projectContent.querySelectorAll('.project-section');
    allSections.forEach(section => {
      section.style.display = 'none';
    });
    
    if (project.content === 'project1Content') {
      const project1Section = document.getElementById('project1Content');
      if (project1Section) {
        project1Section.style.display = 'block';
      }
    } else if (project.content === 'project2Content') {
      const project2Section = document.getElementById('project2Content');
      if (project2Section) {
        project2Section.style.display = 'block';
      }
    } else if (project.content === 'project3Content') {
      const project3Section = document.getElementById('project3Content');
      if (project3Section) {
        project3Section.style.display = 'block';
      }
    } else if (project.content === 'project4Content') {
      const project4Section = document.getElementById('project4Content');
      if (project4Section) {
        project4Section.style.display = 'block';
      }
    } else if (project.content === 'project5Content') {
      const project5Section = document.getElementById('project5Content');
      if (project5Section) {
        project5Section.style.display = 'block';
      }
    } else if (project.content === 'project6Content') {
      const project6Section = document.getElementById('project6Content');
      if (project6Section) {
        project6Section.style.display = 'block';
      }
    } else if (project.content === 'project7Content') {
      const project7Section = document.getElementById('project7Content');
      if (project7Section) {
        project7Section.style.display = 'block';
      }
    } else if (project.content === 'project8Content') {
      const project8Section = document.getElementById('project8Content');
      if (project8Section) {
        project8Section.style.display = 'block';
      }
    } else {
      // For coming soon projects, show a placeholder
      showComingSoonContent();
    }
  }
}

function showComingSoonContent() {
  const projectContent = document.getElementById('projectContent');
  projectContent.innerHTML = `
    <div class="container">
      <div style="text-align: center; padding: 4rem 2rem;">
        <h2 style="font-size: 2.5rem; margin-bottom: 1rem; color: #333;">Coming Soon</h2>
        <p style="font-size: 1.2rem; color: #666; max-width: 600px; margin: 0 auto;">
          This project showcase is being prepared. Check back soon to see the amazing work we've done for this client!
        </p>
        <div style="margin-top: 3rem;">
          <button onclick="closeProject()" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; padding: 1rem 2rem; border-radius: 30px; font-size: 1rem; cursor: pointer; transition: all 0.3s ease;">
            Back to Portfolio
          </button>
        </div>
      </div>
    </div>
  `;
}
