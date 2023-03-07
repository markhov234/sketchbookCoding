// "use client";
// import { useEffect, useRef } from "react";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// function ModelViewer({ src }) {
//   const mount = useRef(null);

//   useEffect(() => {
//     const loader = new GLTFLoader();
//     loader.load(src, (gltf) => {
//       mount.current.appendChild(gltf.scene);
//     });
//   }, [src]);

//   return <div ref={mount} />;
// }
