/* ==============================================================
   INSANE CYBERSECURITY BACKGROUND SYSTEM
============================================================== */

const canvas = document.createElement('canvas');
const container = document.getElementById('canvas-container');
container.appendChild(canvas);

const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let nodes = [];
const nodeCount = 70;

let mouse = { x: null, y: null };

// Create nodes
for (let i = 0; i < nodeCount; i++) {
  nodes.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.6,
    vy: (Math.random() - 0.5) * 0.6
  });
}

// Mouse tracking
window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

// // Scan wave
// let scanY = 0;

// // Attack flash timer
// let attackFlash = 0;

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // // 🔴 RANDOM ATTACK FLASH
  // if (Math.random() < 0.002) {
  //   attackFlash = 10;
  // }

  // if (attackFlash > 0) {
  //   ctx.fillStyle = "rgba(255,0,0,0.08)";
  //   ctx.fillRect(0, 0, canvas.width, canvas.height);
  //   attackFlash--;
  // }

  // // 🔵 SCAN WAVE
  // scanY += 1.5;
  // if (scanY > canvas.height) scanY = 0;

  // const gradient = ctx.createLinearGradient(0, scanY - 60, 0, scanY);
  // gradient.addColorStop(0, "rgba(0,255,204,0)");
  // gradient.addColorStop(1, "rgba(0,255,204,0.15)");

  // ctx.fillStyle = gradient;
  // ctx.fillRect(0, scanY - 60, canvas.width, 60);

  // Nodes
  nodes.forEach(node => {

    // 🧠 CLUSTERING EFFECT (AI feel)
    if (mouse.x && mouse.y) {
      let dx = mouse.x - node.x;
      let dy = mouse.y - node.y;
      let dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 150) {
        node.x += dx * 0.01;
        node.y += dy * 0.01;
      }
    }

    node.x += node.vx;
    node.y += node.vy;

    if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
    if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

    let dx = mouse.x - node.x;
    let dy = mouse.y - node.y;
    let dist = Math.sqrt(dx * dx + dy * dy);

    let radius = 2;
    let color = "#06b6d4";

    // 🟢 THREAT ZONE
    if (dist < 120) {
      radius = 5;
      color = "#00ffcc";
    }

    ctx.beginPath();
    ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();

    ctx.shadowBlur = 12;
    ctx.shadowColor = color;
  });

  // Connections + DATA FLOW
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {

      let dx = nodes[i].x - nodes[j].x;
      let dy = nodes[i].y - nodes[j].y;
      let dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 130) {
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);

        ctx.strokeStyle = "rgba(6,182,212,0.2)";
        ctx.stroke();

        // ⚡ DATA PACKET FLOW
        let t = (Date.now() % 2000) / 2000;

        let px = nodes[i].x + (nodes[j].x - nodes[i].x) * t;
        let py = nodes[i].y + (nodes[j].y - nodes[i].y) * t;

        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#00ffcc";
        ctx.fill();
      }
    }
  }

  requestAnimationFrame(animate);
}

animate();

// Resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});



/* ==============================================================
   Typed.js Setup
============================================================== */
var typed = new Typed('.typed-text', {
  strings: [
    'LLM Security & Prompt Injection Defense.',
    'Network Monitoring & Threat Detection.',
    'Machine Learning for Cybersecurity.'
  ],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 2000,
  loop: true
});


/* ==============================================================
   Mobile Nav Menu
============================================================== */
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}