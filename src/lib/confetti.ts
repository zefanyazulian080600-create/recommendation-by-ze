"use client";

/**
 * Lightweight, zero-dependency Gen Z Confetti & Sparkle particle burst
 * Colors: Matcha (#AEAC78), Butter (#F2C46A), Espresso (#4C4541), Cream (#FCF0DA), Hot Coral (#EE4D2D)
 */
export function triggerConfetti(originX?: number, originY?: number) {
  if (typeof window === "undefined") return;

  const colors = ["#AEAC78", "#F2C46A", "#4C4541", "#FCF0DA", "#EE4D2D", "#FFFDF0"];
  const count = 38;
  const startX = originX ?? window.innerWidth / 2;
  const startY = originY ?? window.innerHeight / 2;

  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.inset = "0";
  container.style.pointerEvents = "none";
  container.style.zIndex = "9999";
  document.body.appendChild(container);

  for (let i = 0; i < count; i++) {
    const particle = document.createElement("div");
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.floor(Math.random() * 8) + 6;
    const isRound = Math.random() > 0.4;

    particle.style.position = "absolute";
    particle.style.left = `${startX}px`;
    particle.style.top = `${startY}px`;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.backgroundColor = color;
    particle.style.borderRadius = isRound ? "50%" : "2px";
    particle.style.border = "1px solid rgba(76, 69, 65, 0.4)";
    particle.style.transform = `rotate(${Math.random() * 360}deg)`;
    particle.style.transition = "all 0.9s cubic-bezier(0.25, 1, 0.5, 1)";
    particle.style.opacity = "1";

    container.appendChild(particle);

    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 160 + 60;
    const destX = Math.cos(angle) * velocity;
    const destY = Math.sin(angle) * velocity + 40; // gravity bias
    const rot = (Math.random() - 0.5) * 720;

    // Trigger frame
    requestAnimationFrame(() => {
      particle.style.transform = `translate(${destX}px, ${destY}px) rotate(${rot}deg) scale(0.6)`;
      particle.style.opacity = "0";
    });
  }

  setTimeout(() => {
    container.remove();
  }, 1000);
}
