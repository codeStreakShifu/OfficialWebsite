// src/components/FrameScroller.jsx
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FrameScroller = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [images, setImages] = useState([]);
  const [currentFrame, setCurrentFrame] = useState(0);

  // ✅ Configuration
  const TOTAL_FRAMES = 1017;      // number of frames you exported
  const STEP = 2;                 // show every 2nd frame (reduces flicker)
  const FRAMES_TO_USE = Math.floor(TOTAL_FRAMES / STEP);
  const BASE_PATH = '/frames/frame_'; // must be in public/frames/

  // ✅ Preload frames
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = Array.from({ length: FRAMES_TO_USE }, (_, i) => {
        return new Promise((resolve) => {
          const img = new Image();
          const frameNumber = String((i * STEP) + 1).padStart(4, '0'); // 0001, 0003, 0005...
          img.src = `${BASE_PATH}${frameNumber}.jpg`;
          img.onload = () => resolve(img);
        });
      });

      const loadedImages = await Promise.all(imagePromises);
      setImages(loadedImages);

      // Draw first frame
      if (canvasRef.current && loadedImages.length > 0) {
        drawFrame(loadedImages[0]);
      }
    };

    preloadImages();
  }, []);

  // ✅ Setup canvas + ScrollTrigger
  useEffect(() => {
    if (!images.length) return;

    const canvas = canvasRef.current;

    const resizeCanvas = () => {
      const { width, height } = images[0];
      const ratio = width / height;

      canvas.width = window.innerWidth;
      canvas.height = window.innerWidth / ratio;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        markers: false,
      },
    });

    tl.to({}, {
      frame: FRAMES_TO_USE - 1,
      snap: 'frame',
      ease: 'none',
      onUpdate: function () {
        const frameIndex = Math.min(
          Math.floor(this.targets()[0].frame),
          FRAMES_TO_USE - 1
        );

        if (frameIndex !== currentFrame) {
          setCurrentFrame(frameIndex);
          drawFrame(images[frameIndex]);
        }
      },
    });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      tl.kill();
    };
  }, [images, currentFrame]);

  // ✅ Draw frame
  const drawFrame = (image) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-black"
      style={{ height: '5000vh' }} // longer scroll for smoother playback
    >
      <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden z-10">
        <canvas
          ref={canvasRef}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default FrameScroller;
