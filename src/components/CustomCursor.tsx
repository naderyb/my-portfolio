'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<HTMLDivElement[]>([]);
  const glowRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Add 5 trailing dots
  const trailCount = 5;

  useEffect(() => {
    const isTouchDevice = () =>
      typeof window !== 'undefined' &&
      (window.innerWidth < 768 || 'ontouchstart' in window);

    setIsMobile(isTouchDevice());
    if (isTouchDevice()) return;

    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;
    const speed = 0.2;

    // Trail Positions
    const trailPositions = Array(trailCount).fill({ x: 0, y: 0 });

    const animate = () => {
      currentX += (mouseX - currentX) * speed;
      currentY += (mouseY - currentY) * speed;

      if (cursorRef.current)
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

      if (glowRef.current)
        glowRef.current.style.transform = `translate3d(${currentX - 20}px, ${currentY - 20}px, 0)`;

      // Update trail
      trailPositions.unshift({ x: currentX, y: currentY });
      trailPositions.pop();

      trailRefs.current.forEach((dot, i) => {
        const pos = trailPositions[i + 1] || trailPositions[0];
        if (dot)
          dot.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      });

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    
      const target = e.target as HTMLElement;
      const isHovering = target.closest('button, a, input, textarea, select, label');
    
      if (cursorRef.current && glowRef.current) {
        if (isHovering) {
          cursorRef.current.classList.add('hovering');
          glowRef.current.classList.add('hovering');
        } else {
          cursorRef.current.classList.remove('hovering');
          glowRef.current.classList.remove('hovering');
        }
      }
    };    

    document.addEventListener('mousemove', handleMouseMove);
    animate();

    // GSAP scroll-triggered glow pulse
    if (glowRef.current) {
      gsap.to(glowRef.current, {
        scale: 1.4,
        opacity: 0.6,
        scrollTrigger: {
          trigger: '#contact', // adjust this to a scrollable section
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
        ease: 'power2.inOut',
      });
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Main Cursor */}
      <div ref={cursorRef} className="cursor-main" />

      {/* Trailing Dots */}
      {Array.from({ length: trailCount }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) trailRefs.current[i] = el;
          }}
          className="cursor-trail"
        />
      ))}

      {/* Glow Ring */}
      <div ref={glowRef} className="cursor-glow" />
    </>
  );
}
