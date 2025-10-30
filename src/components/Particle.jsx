import { useRef, useEffect } from "react";

export default function TrianglesWithStarsBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let stars = [];
        let particles = [];
        let blobs = [];
        const numStars = 380;
        const numParticles = 40;
        let animationFrameId;
        let blobInterval;
        let mouse = { x: null, y: null };

        function resizeCanvas() {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        }
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // track mouse
        canvas.addEventListener("mousemove", (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        });

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
        function createBlob(x = Math.random() * canvas.width, y = Math.random() * canvas.height, size = 280 + Math.random() * 50) {
            const lifetime = 8000; // ms
            const now = Date.now();
            const points = 6 + Math.floor(Math.random() * 5);
            const variations = Array.from({ length: points }, () => Math.random() * 2 * Math.PI);

            return {
                x,
                y,
                size,
                baseOpacity: 0.05 + Math.random() * 0.25, // min/max opacity range
                angleOffset: Math.random() * Math.PI * 2,
                points,
                variations,
                hue: Math.floor(Math.random() * 360),
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                startTime: now,
                lifetime,
                endTime: now + lifetime,
                lastSplit: 0, // cooldown tracker
            };
        }

        // --- Draw organic blob ---
        function drawBlob(blob) {
            const { x, y, size, baseOpacity, angleOffset, variations, startTime, lifetime } = blob;
            const t = (Date.now() - startTime) * 0.002;
            const radiusVariation = size / 6;

            // fade in/out
            const elapsed = Date.now() - startTime;
            const fadeIn = Math.min(elapsed / 500, 1);
            const fadeOut = Math.max(0, (blob.endTime - Date.now()) / lifetime);
            const currentOpacity = baseOpacity * fadeIn * fadeOut;

            ctx.beginPath();
            let coords = [];
            for (let i = 0; i < blob.points; i++) {
                const angle = (i / blob.points) * Math.PI * 2 + angleOffset;
                const radius = size + Math.sin(t + variations[i % variations.length]) * radiusVariation;
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
            const hue = (Date.now() / 50 + x + y) % 360;
            gradient.addColorStop(0, `hsla(${hue}, 80%, 70%, ${currentOpacity})`);
            gradient.addColorStop(1, `hsla(${(hue + 40) % 360}, 80%, 40%, ${currentOpacity * 0.8})`);

            ctx.fillStyle = gradient;
            ctx.fill();
        }

        // --- Animation loop ---
        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // stars
            for (const s of stars) {
                const flicker = Math.sin(Date.now() * s.flickerSpeed + s.phase) * 0.5 + 0.5;
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255,255,255,${s.baseOpacity * flicker})`;
                ctx.fill();
            }

            // blobs
            for (let i = blobs.length - 1; i >= 0; i--) {
                const blob = blobs[i];
                drawBlob(blob);

                // drift
                blob.x += blob.vx;
                blob.y += blob.vy;
                blob.angleOffset += 0.005;

                // bounce
                if (blob.x < -blob.size || blob.x > canvas.width + blob.size) blob.vx *= -1;
                if (blob.y < -blob.size || blob.y > canvas.height + blob.size) blob.vy *= -1;

                // lifetime removal
                if (Date.now() > blob.endTime) {
                    blobs.splice(i, 1);
                    continue;
                }

                // interaction: split on mouse hover (with cooldown)
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = mouse.x - blob.x;
                    const dy = mouse.y - blob.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < blob.size && Date.now() - blob.lastSplit > 300) {
                        blob.lastSplit = Date.now();
                        blobs.splice(i, 1);

                        // spawn two smaller blobs
                        for (let j = 0; j < 2; j++) {
                            blobs.push(
                                createBlob(
                                    blob.x + (Math.random() - 0.5) * blob.size * 0.5,
                                    blob.y + (Math.random() - 0.5) * blob.size * 0.5,
                                    blob.size * 0.6
                                )
                            );
                        }
                    }
                }
            }

            animationFrameId = requestAnimationFrame(draw);
        }

        // spawn blobs periodically
        blobInterval = setInterval(() => {
            blobs.push(createBlob());
        }, 2000);

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
            className="absolute inset-0 w-full h-full "
            style={{ zIndex: 50 }}
        />
    );
}
