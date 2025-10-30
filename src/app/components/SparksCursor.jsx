// "use client";
// import { useEffect, useState } from "react";

// export default function SparksCursor() {
//   const [sparks, setSparks] = useState([]);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const newSpark = {
//         x: e.clientX,
//         y: e.clientY,
//         id: Date.now(),
//       };
//       setSparks((prev) => [...prev.slice(-10), newSpark]); // max 10 sparks
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <>
//       {sparks.map((spark) => (
//         <div
//           key={spark.id}
//           style={{
//             position: "fixed",
//             left: spark.x,
//             top: spark.y,
//             width: 6,
//             height: 6,
//             background: "radial-gradient(circle, #fffc00, #ff0000)",
//             borderRadius: "50%",
//             pointerEvents: "none",
//             transform: "translate(-50%, -50%)",
//             animation: "sparkFade 0.5s forwards",
//           }}
//         />
//       ))}

//       <style jsx>{`
//         @keyframes sparkFade {
//           0% {
//             opacity: 1;
//             transform: translate(-50%, -50%) scale(1);
//           }
//           100% {
//             opacity: 0;
//             transform: translate(-50%, -50%) scale(2);
//           }
//         }
//       `}</style>
//     </>
//   );
// }













"use client";
import { useEffect, useState } from "react";

export default function SparksCursor() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newParticles = [];
      for (let i = 0; i < 3; i++) { // 3 sparks per move
        newParticles.push({
          x: e.clientX + Math.random() * 10 - 5, // slight randomness
          y: e.clientY + Math.random() * 10 - 5,
          size: Math.random() * 4 + 2,
          color: `hsl(${Math.random() * 50 + 40}, 100%, 50%)`,
          id: Date.now() + Math.random(),
        });
      }
      setParticles((prev) => [...prev.slice(-30), ...newParticles]); // max 30 particles
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "fixed",
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            background: p.color,
            borderRadius: "50%",
            pointerEvents: "none",
            transform: "translate(-50%, -50%)",
            animation: "sparkTrail 0.6s forwards",
          }}
        />
      ))}

      <style jsx>{`
        @keyframes sparkTrail {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0);
          }
        }
      `}</style>
    </>
  );
}
