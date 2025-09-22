import { useRef, useEffect } from "react";

export default function TrianglesWithStarsBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let stars = [];
        let particles = [];
        let blobs = [];
        const numStars = 280;
        const numParticles = 40;
        const maxDistance = 150;
        let animationFrameId;
        let blobInterval;

        function resizeCanvas() {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        }
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // --- Initialize stars ---
        function createStars() {
            stars = [];
            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 1.5,
                    baseOpacity: Math.random() * 0.5 + 0.3,
                    flickerSpeed: Math.random() * 0.02 + 0.005,
                    phase: Math.random() * Math.PI * 2,
                });
            }
        }

        // --- Initialize particles ---
        function createParticles() {
            particles = [];
            for (let i = 0; i < numParticles; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.6,
                    vy: (Math.random() - 0.5) * 0.6,
                    radius: 2 + Math.random() * 2,
                    opacity: 0.3 + Math.random() * 0.7,
                });
            }
        }

        createStars();
        createParticles();

        // --- Create organic blob ---
        // --- Create organic blob (no overlap) ---
        function createBlob() {
            const lifetime = 8000; // ms
            const now = Date.now();
            const padding = 20; // minimum gap between blobs

            let blob;
            let safe = false;
            let tries = 0;

            while (!safe && tries < 50) { // try up to 50 times
                tries++;

                const points = 6 + Math.floor(Math.random() * 5);
                const variations = Array.from({ length: points }, () => Math.random() * 2 * Math.PI);
                const minOpacity = 0.1;
                const maxOpacity = 0.17;

                blob = {
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: 250 + Math.random() * 60,
                    baseOpacity: minOpacity + Math.random() * (maxOpacity - minOpacity),
                    angleOffset: Math.random() * Math.PI * 2,
                    points,
                    variations,
                    hue: Math.floor(Math.random() * 360),
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    startTime: now,
                    lifetime,
                    endTime: now + lifetime,
                };

                // check overlap with existing blobs
                safe = blobs.every(b => {
                    const dx = b.x - blob.x;
                    const dy = b.y - blob.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    return dist > (b.size + blob.size + padding);
                });
            }

            if (safe) blobs.push(blob);
        }


        // --- Draw organic blob ---
        function drawBlob(blob) {
            const { x, y, size, baseOpacity, angleOffset, startTime, variations, points, endTime } = blob;
            const now = Date.now();
            const elapsed = now - startTime;
            const remaining = endTime - now;
            const t = elapsed * 0.002; // smooth oscillation
            const radiusVariation = size / 6;

            // Fade in (first 1s) and fade out (last 1s)
            const fadeDuration = 1000;
            let opacity = baseOpacity;
            if (elapsed < fadeDuration) {
                opacity *= elapsed / fadeDuration; // fade in
            } else if (remaining < fadeDuration) {
                opacity *= remaining / fadeDuration; // fade out
            }

            ctx.beginPath();

            let coords = [];
            for (let i = 0; i < points; i++) {
                const angle = (i / points) * Math.PI * 2 + angleOffset;
                const radius = size + Math.sin(t + variations[i]) * radiusVariation;
                const px = x + Math.cos(angle) * radius;
                const py = y + Math.sin(angle) * radius;
                coords.push({ px, py });
            }

            for (let i = 0; i < coords.length; i++) {
                const curr = coords[i];
                const next = coords[(i + 1) % coords.length];
                const midX = (curr.px + next.px) / 2;
                const midY = (curr.py + next.py) / 2;
                if (i === 0) ctx.moveTo(midX, midY);
                else ctx.quadraticCurveTo(curr.px, curr.py, midX, midY);
            }

            ctx.closePath();

            const gradient = ctx.createRadialGradient(x, y, size * 0.2, x, y, size * 1.2);
            const hue = (now / 50 + x + y) % 360;
            gradient.addColorStop(0, `hsla(${hue}, 80%, 70%, ${opacity})`);
            gradient.addColorStop(1, `hsla(${(hue + 40) % 360}, 80%, 40%, ${opacity * 0.8})`);

            ctx.fillStyle = gradient;
            ctx.fill();
        }

        // --- Animation loop ---
        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // --- Draw stars ---
            for (const s of stars) {
                const flicker = Math.sin(Date.now() * s.flickerSpeed + s.phase) * 0.5 + 0.5;
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255,255,255,${s.baseOpacity * flicker})`;
                ctx.fill();
            }

            // --- Draw & update blobs ---
            blobs = blobs.filter((blob) => Date.now() < blob.endTime); // remove expired blobs
            for (const blob of blobs) {
                drawBlob(blob);

                // drift
                blob.x += blob.vx;
                blob.y += blob.vy;

                // gentle wobble
                blob.angleOffset += 0.002;

                // bounce at edges
                if (blob.x < -blob.size || blob.x > canvas.width + blob.size) blob.vx *= -1;
                if (blob.y < -blob.size || blob.y > canvas.height + blob.size) blob.vy *= -1;
            }

            animationFrameId = requestAnimationFrame(draw);
        }

        // spawn blobs periodically
        blobInterval = setInterval(createBlob, 2000);

        draw();

        return () => {
            cancelAnimationFrame(animationFrameId);
            clearInterval(blobInterval);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 20 }}
        />
    );
}
