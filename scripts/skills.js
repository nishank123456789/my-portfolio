// skills.js - Add hover animation to skill bars

const skills = document.querySelectorAll('.skill');

skills.forEach(skill => {
    skill.addEventListener('mouseenter', () => {
        const skillLevel = skill.querySelector('.skill-level');
        skillLevel.style.width = '100%';
    });

    skill.addEventListener('mouseleave', () => {
        const skillLevel = skill.querySelector('.skill-level');
        const width = skillLevel.getAttribute('data-width');
        skillLevel.style.width = width;
    });
});
