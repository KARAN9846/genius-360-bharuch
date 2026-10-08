"use client";

import { useEffect, useRef } from "react";

import styles from "./CelebrationConfetti.module.css";

type ConfettiShape = "rectangle" | "circle" | "diamond";

type ConfettiParticle = {
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  rotationSpeed: number;
  velocityX: number;
  velocityY: number;
  gravity: number;
  wobble: number;
  wobbleSpeed: number;
  wobbleAmount: number;
  opacity: number;
  color: string;
  shape: ConfettiShape;
};

const COLORS = [
  "#1769E0",
  "#0B2F6B",
  "#E53935",
  "#93C5FD",
  "#60A5FA",
  "#FFFFFF",
];

export default function CelebrationConfetti() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let lastTime = performance.now();

    const particles: ConfettiParticle[] = [];

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const getParticleCount = () => {
      if (width <= 480) {
        return 18;
      }

      if (width <= 768) {
        return 28;
      }

      if (width <= 1024) {
        return 40;
      }

      return 55;
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();

      const devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      width = rect.width;
      height = rect.height;

      canvas.width = Math.round(width * devicePixelRatio);

      canvas.height = Math.round(height * devicePixelRatio);

      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    };

    const createParticle = (initialY?: number): ConfettiParticle => {
      const mobile = width <= 640;

      return {
        x: Math.random() * width,

        y: initialY ?? -20 - Math.random() * 150,

        width: 5 + Math.random() * (mobile ? 4 : 7),

        height: 7 + Math.random() * (mobile ? 7 : 12),

        rotation: Math.random() * Math.PI * 2,

        rotationSpeed: (Math.random() - 0.5) * 0.12,

        velocityX: (Math.random() - 0.5) * (mobile ? 0.5 : 0.8),

        velocityY: 0.7 + Math.random() * (mobile ? 0.9 : 1.5),

        gravity: 0.018 + Math.random() * 0.02,

        wobble: Math.random() * Math.PI * 2,

        wobbleSpeed: 0.015 + Math.random() * 0.025,

        wobbleAmount: 0.15 + Math.random() * 0.6,

        opacity: 0.65 + Math.random() * 0.35,

        color: COLORS[Math.floor(Math.random() * COLORS.length)],

        shape:
          Math.random() < 0.7
            ? "rectangle"
            : Math.random() < 0.5
              ? "circle"
              : "diamond",
      };
    };

    const resetParticle = (particle: ConfettiParticle) => {
      const fresh = createParticle(-20);

      Object.assign(particle, fresh);
    };

    const drawParticle = (particle: ConfettiParticle) => {
      context.save();

      context.translate(particle.x, particle.y);

      context.rotate(particle.rotation);

      context.globalAlpha = particle.opacity;

      context.fillStyle = particle.color;

      if (particle.shape === "circle") {
        context.beginPath();

        context.arc(0, 0, particle.width / 2, 0, Math.PI * 2);

        context.fill();
      } else if (particle.shape === "diamond") {
        context.beginPath();

        context.moveTo(0, -particle.height / 2);

        context.lineTo(particle.width / 2, 0);

        context.lineTo(0, particle.height / 2);

        context.lineTo(-particle.width / 2, 0);

        context.closePath();

        context.fill();
      } else {
        context.fillRect(
          -particle.width / 2,
          -particle.height / 2,
          particle.width,
          particle.height,
        );
      }

      context.restore();
    };

    const fillParticles = () => {
      particles.length = 0;

      const count = getParticleCount();

      for (let i = 0; i < count; i += 1) {
        particles.push(createParticle(Math.random() * height));
      }
    };

    const animate = (currentTime: number) => {
      const delta = Math.min((currentTime - lastTime) / 16.67, 2);

      lastTime = currentTime;

      context.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i -= 1) {
        const particle = particles[i];

        particle.wobble += particle.wobbleSpeed * delta;

        particle.velocityY += particle.gravity * delta;

        particle.velocityX *= Math.pow(0.995, delta);

        particle.x +=
          particle.velocityX * delta +
          Math.sin(particle.wobble) * particle.wobbleAmount;

        particle.y += particle.velocityY * delta;

        particle.rotation += particle.rotationSpeed * delta;

        if (particle.y > height - 80) {
          particle.opacity -= 0.02 * delta;
        }

        drawParticle(particle);

        if (particle.y > height + 30 || particle.opacity <= 0) {
          resetParticle(particle);
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    resize();
    fillParticles();

    if (reducedMotion) {
      context.clearRect(0, 0, width, height);

      particles.forEach(drawParticle);
    } else {
      animationFrame = requestAnimationFrame(animate);
    }

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className={styles.container} aria-hidden="true">
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
}
