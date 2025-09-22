import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import bg from "../assets/images/intro.jpg";
import video from "../assets/video.mp4";
import FrameScroller from '../components/FrameScroller';
gsap.registerPlugin(ScrollTrigger);

const Gsap = () => {
    const videoContainerRef = useRef(null);
    const videoRef = useRef(null);
    const h1Ref = useRef();
    const h1Ref1 = useRef();
    const scrollRef = useRef();
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    useGSAP(() => {
        gsap.to("#box", {
            y: windowHeight - 550,
            borderRadius: "100%",
            rotation: 360,
            backgroundColor: "green",
            repeat: -1,
            scale: 1.5,
            yoyo: true,
            duration: 2,
            stagger: 0.2,
            ease: "power1.inOut",
        });

    }, []);

    useGSAP(() => {
        const boxes = gsap.utils.toArray(scrollRef.current.children);

        boxes.forEach((boxes) => {
            gsap.to(boxes, {
                x: windowWidth - 200,
                y: -200,
                rotation: 360,
                borderRadius: "100%",
                backgroundColor: "green",
                scale: 2,
                scrollTrigger: {
                    trigger: boxes,
                    start: 'bottom bottom',
                    end: 'top 10%',
                    scrub: true,
                },
                ease: "power1.inOut",
            },)

        });

    }, { scope: scrollRef });

    useGSAP(() => {
        gsap.from(h1Ref.current.querySelectorAll("span"), {
            opacity: 0,
            y: 50,
            duration: 1,
            color: "blue",
            repeat: -1,
            stagger: 0.1, // <-- this staggers each letter
            ease: "back.out(1.7)",
            scrub: true,
        });

        gsap.from(h1Ref1.current.querySelectorAll("span"), {
            opacity: 0,
            y: 50,
            duration: 1,
            color: "blue",
            repeat: -1,
            stagger: 0.1, // <-- this staggers each letter
            ease: "back.out(1.7)",
            scrub: true,
        });


    }, []);

    useEffect(() => {
        const video = videoRef.current;

        // ensure metadata is loaded
        video.addEventListener("loadedmetadata", () => {
            gsap.to(video, {
                currentTime: video.duration, // animate from 0 to full duration
                ease: "none",
                scrollTrigger: {
                    trigger: video,
                    start: "top top",
                    end: "bottom top",
                    scrub: true, // sync with scroll
                    pin: true,   // keep video in place
                },
            });
        });
    }, []);



    return (
        <div className="relative">
            {/* First section with background image */}
            <div className="min-h-[100vh] bg-slate-500 text-white relative"
                
            >
                <h1 ref={h1Ref} id="text" className="text-8xl font-bold text-center mb-10 pt-[10%] "> {"Have Fun Animating".split("").map((letter, index) => (
                    <span key={index} className="inline-block">{letter}</span>
                ))}</h1>

                <h1 ref={h1Ref1} id="text" className="text-8xl font-bold text-center mb-10 pt-10 "> {"Joseph".split("").map((letter, index) => (
                    <span key={index} className="inline-block">{letter}</span>
                ))}</h1>

                <div className="min-h-[100vh] flex grid-cols-3 gap-10">
                    <div id="box" className="w-32 h-32 bg-indigo-900 rounded-lg shadow-lg relative mb-10 top-60"></div>
                    <div id="box" className="w-32 h-32 bg-indigo-900 rounded-lg shadow-lg relative mb-10 top-60"></div>
                    <div id="box" className="w-32 h-32 bg-indigo-900 rounded-lg shadow-lg relative mb-10 top-60"></div>
                    <div id="box" className="w-32 h-32 bg-indigo-900 rounded-lg shadow-lg relative mb-10 top-60"></div>
                    <div id="box" className="w-32 h-32 bg-indigo-900 rounded-lg shadow-lg relative mb-10 top-60"></div>
                    <div id="box" className="w-32 h-32 bg-indigo-900 rounded-lg shadow-lg relative mb-10 top-60"></div>
                    <div id="box" className="w-32 h-32 bg-indigo-900 rounded-lg shadow-lg relative mb-10 top-60"></div>
                    <div id="box" className="w-32 h-32 bg-indigo-900 rounded-lg shadow-lg relative mb-10 top-60"></div>
                    <div id="box" className="w-32 h-32 bg-indigo-900 rounded-lg shadow-lg relative mb-10 top-60"></div>
                    <div id="box" className="w-32 h-32 bg-indigo-900 rounded-lg shadow-lg relative mb-10 top-60"></div>
                    <div id="box" className="w-32 h-32 bg-indigo-900 rounded-lg shadow-lg relative mb-10 top-60"></div>
                    <div id="box" className="w-32 h-32 bg-indigo-900 rounded-lg shadow-lg relative mb-10 top-60"></div>
                    <div id="box" className="w-32 h-32 bg-indigo-900 rounded-lg shadow-lg relative mb-10 top-60"></div>
                </div>
            </div>

            {/* Scrolling boxes section */}
            <div className="min-h-[300vh] bg-slate-700 text-white relative" ref={scrollRef}>
                <div id="boxes" className="w-32 h-32 bg-indigo-900 rounded-lg shadow-lg relative mb-10 top-60"></div>
                <div id="boxes" className="w-32 h-32 bg-indigo-900 rounded-lg shadow-lg relative mb-10 top-60"></div>
                <div id="boxes" className="w-32 h-32 bg-indigo-900 rounded-lg shadow-lg relative mb-10 top-60"></div>
                <div id="boxes" className="w-32 h-32 bg-indigo-900 rounded-lg shadow-lg relative mb-10 top-60"></div>
            </div>

            {/* Video section */}
            <div className="relative min-h-[300vh]" ref={videoContainerRef}>
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    ref={videoRef}
                    muted
                    playsInline
                    autoPlay
                    loop
                    src={video}
                />
            </div>

            
        </div>
    );

}
export default Gsap;