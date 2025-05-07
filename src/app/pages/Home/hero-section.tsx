"use client";

import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Group } from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ModelProps = {
  position?: [number, number, number];
  rotation?: [number, number, number];
};

const Model = React.forwardRef<Group, ModelProps>((props, ref) => {
  const { scene } = useGLTF("/3d/gaming_desktop_pc.glb");
  return <primitive ref={ref} object={scene} {...props} />;
});
Model.displayName = "Model";

const Hero: React.FC = () => {
  const modelRef = useRef<Group>(null!);

  useEffect(() => {
    if (!modelRef.current) return;

    // Start facing front (Math.PI * 1.5)
    modelRef.current.rotation.set(0, Math.PI * 1.5, 0);

    gsap.to(modelRef.current.rotation, {
      y: Math.PI * 1.5 + Math.PI, // rotate 180deg from initial
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: false,
      },
    });

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  return (
    <section
      id="hero-section"
      className="w-full h-screen flex items-center justify-center"
    >
      <div className="max-w-full w-full h-full">
        <Canvas camera={{ position: [0, 0, 18], fov: 45 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} />
          <Model ref={modelRef} position={[0, -1, 0]} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
