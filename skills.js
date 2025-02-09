function renderSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    
    skillsData.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        
        skillCard.innerHTML = `
            <div class="skill-header">
                ${skill.icon}
                <h3>${skill.category}</h3>
            </div>
            <ul class="skill-list">
                ${skill.items.map(item => `
                    <li class="skill-item">${item}</li>
                `).join('')}
            </ul>
        `;
        
        skillsGrid.appendChild(skillCard);
    });
}

document.addEventListener('DOMContentLoaded', renderSkills);
