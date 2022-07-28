const today     =   new Date();
const thisYear  =   today.getFullYear();
const footer    =   document.querySelector("footer");
const copyright =   document.createElement("p");

copyright.textContent = `Sasha Ponomar ${thisYear}`;
footer.appendChild(copyright);

/* Skills*/
const skills = ['Communication', 'Determenation', 'Critical thinking', 'JavaScript', 'HTML', 'CSS'];
const skillsSection = document.getElementById ('skills');
const skillsList = skillsSection.querySelector('ul');

for (i = 0; i < skills.length; i++) {
    skill = document.createElement("li");
    skill.innerText = `${skills[i]}`; 
    skillsList.appendChild(skill);
  }