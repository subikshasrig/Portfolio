const contentData = {
  about: `
    <h2>About Me</h2>
    <p>Hi! I'm an adventurer-developer with a love for web design and interactive storytelling. I code like I quest — with purpose and coffee!</p>
  `,
  projects: `
    <h2>Projects</h2>
    <ul>
      <li>🔧 PixelQuest: A retro RPG game</li>
      <li>🧪 SpellBook App: A magical spell tracker</li>
      <li>🎮 GameDev Tools: UI Kits for Unity/Unreal</li>
    </ul>
  `,
  contact: `
    <h2>Contact</h2>
    <p>Email: <a href="mailto:adventurer@devmail.com">adventurer@devmail.com</a></p>
    <p>GitHub: <a href="https://github.com/yourhandle" target="_blank">yourhandle</a></p>
    <p>LinkedIn: <a href="https://linkedin.com/in/yourhandle" target="_blank">yourhandle</a></p>
  `
};

document.querySelectorAll('.pocket').forEach(pocket => {
  pocket.addEventListener('click', () => {
    const section = pocket.getAttribute('data-section');
    document.getElementById('content').innerHTML = contentData[section];
    document.getElementById('infoPanel').style.display = 'block';
  });
});

function closePanel() {
  document.getElementById('infoPanel').style.display = 'none';
}
