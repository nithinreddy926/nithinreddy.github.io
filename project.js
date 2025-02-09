// Define the projectsData array with project details
const projectsData = [
    {
        image: 'images/project1.jpg',  // Path to project image
        title: 'AI Chatbot',  // Project title
        description: 'A machine learning model to power a chatbot for customer service.',  // Project description
        tags: ['Python', 'TensorFlow', 'AI'],  // Tags related to the project
        github: 'https://github.com/username/ai-chatbot',  // GitHub link
        demo: 'https://demo.com/ai-chatbot'  // Demo link
    },
    {
        image: 'images/project2.jpg',  // Path to project image
        title: 'Web Scraper',  // Project title
        description: 'A web scraping tool for extracting product details from e-commerce sites.',  // Project description
        tags: ['Node.js', 'Web Scraping'],  // Tags related to the project
        github: 'https://github.com/username/web-scraper',  // GitHub link
        demo: 'https://demo.com/web-scraper'  // Demo link
    },
    {
        image: 'images/project3.jpg',  // Path to project image
        title: 'Data Analysis Dashboard',  // Project title
        description: 'A dashboard for visualizing data trends and insights.',  // Project description
        tags: ['JavaScript', 'D3.js', 'Data Visualization'],  // Tags related to the project
        github: 'https://github.com/username/data-dashboard',  // GitHub link
        demo: 'https://demo.com/data-dashboard'  // Demo link
    }
    // You can add more projects as needed
];

// Function to render projects dynamically
function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');  // Get the container for the projects

    // Loop through each project and create its card
    projectsData.forEach(project => {
        // Create the project card div
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        // Add HTML content inside the project card
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `
                        <span class="project-tag">${tag}</span>
                    `).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                        </svg>
                        Code
                    </a>
                    <a href="${project.demo}" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M10 6h-4a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-4"></path>
                            <path d="M20 10l-10 10"></path>
                            <path d="M15 5l5 5"></path>
                        </svg>
                        Demo
                    </a>
                </div>
            </div>
        `;

        // Append the project card to the projects grid
        projectsGrid.appendChild(projectCard);
    });
}

// Ensure the DOM is fully loaded before running the renderProjects function
document.addEventListener('DOMContentLoaded', renderProjects);
