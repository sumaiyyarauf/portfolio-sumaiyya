import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Tunnel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const boxes = containerRef.current.querySelectorAll(".box");

    gsap.to(boxes, {
      scale: 0.1,
      opacity: 0,
      stagger: {
        each: 0.1,
        repeat: -1,
        yoyo: true,
      },
      duration: 2,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden" ref={containerRef}>
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="box absolute border border-pink-500 rounded"
          style={{
            width: `${200 + i * 50}px`,
            height: `${200 + i * 50}px`,
            boxShadow: "0 0 20px rgba(255, 0, 255, 0.5)",
          }}
        ></div>
      ))}
    </div>
  );
};

export default Tunnel;
