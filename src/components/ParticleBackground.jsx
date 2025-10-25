
import React, { useRef, useEffect, useCallback } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);

  const drawParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const parent = canvas.parentElement;

    canvas.width = parent.clientWidth;
    canvas.height = parent.clientHeight;

    let particles = [];
    const particleCount = 100;
    const mouse = {
      x: null,
      y: null,
      radius: 40,
    };

    const handleMouseMove = (event) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = event.clientX - rect.left;
        mouse.y = event.clientY - rect.top;
    };
    
    const handleMouseOut = () => {
        mouse.x = null;
        mouse.y = null;
    };

    parent.addEventListener('mousemove', handleMouseMove);
    parent.addEventListener('mouseout', handleMouseOut);

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }
        
        this.x += this.directionX;
        this.y += this.directionY;

        this.draw();
      }
    }

    function init() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        let size = Math.random() * 1.5 + 1;
        let x = Math.random() * (canvas.width - size * 2);
        let y = Math.random() * (canvas.height - size * 2);
        let directionX = (Math.random() * 0.4) - 0.2;
        let directionY = (Math.random() * 0.4) - 0.2;
        let color = 'rgba(0, 123, 255, 0.4)';
        particles.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }

    function connect() {
      let opacityValue = 1;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let distance =
            ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x)) +
            ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));

          if (distance < (canvas.width / 8) * (canvas.height / 8)) {
            opacityValue = 1 - (distance / 20000);
            
            let dx = mouse.x - particles[a].x;
            let dy = mouse.y - particles[a].y;
            let mouseDistance = Math.sqrt(dx*dx + dy*dy);

            if (mouse.x !== null && mouseDistance < mouse.radius) {
                opacityValue = 0;
            }

            ctx.strokeStyle = `rgba(0, 123, 255, ${opacityValue * 0.3})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      animationFrameId.current = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
      connect();
    }

    init();
    animate();
    
    return () => {
        if(animationFrameId.current) {
            cancelAnimationFrame(animationFrameId.current);
        }
        parent.removeEventListener('mousemove', handleMouseMove);
        parent.removeEventListener('mouseout', handleMouseOut);
    }
  }, []);
  
  useEffect(() => {
    const cleanup = drawParticles();
    
    const debouncedDraw = () => {
        let timeout;
        return () => {
            clearTimeout(timeout);
            if(animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
            timeout = setTimeout(drawParticles, 100);
        }
    }
    
    const handleResize = debouncedDraw();
    window.addEventListener('resize', handleResize);
    
    return () => {
        cleanup();
        window.removeEventListener('resize', handleResize);
    }
  }, [drawParticles]);

  return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }} />;
};

export default ParticleBackground;
