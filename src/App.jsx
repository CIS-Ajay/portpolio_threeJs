// /* eslint-disable react/no-unknown-property */
// import { OrbitControls, Sparkles } from '@react-three/drei'
// import { Canvas, useFrame } from '@react-three/fiber'
// import { useRef } from 'react';
// import React from 'react';

import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"
// import { Jump } from "./components/Jump"

const App = () => {

  // const RotatingCube=()=>{
  //   const meshRef = useRef();
  //   useFrame(()=>{
  //     if(meshRef.current){
  //       meshRef.current.rotation.x += 0.01;
  //       meshRef.current.rotation.y += 0.01;
  //     }
  //   })
  //   return(
  //     <mesh ref={meshRef}>
  //       <cylinderGeometry attach="geometry" args={[1,1,1]}/>
  //       <meshLambertMaterial color={0x468585} emissive={0x468585}/>
  //       <Sparkles count={100}  scale={1} size={6} speed={0.02} noise={0.2}/>
  //     </mesh>
  //   )
  // }

  return (
    // <Canvas style={{height: '100vh', width: '100vw', display:'flex', justifyContent:'center', textAlign:'center'}}>
    //   <OrbitControls enablePan enableZoom enableRotate />
    //   <directionalLight position={[1,1,1]} intensity={10} color={0x9CDBAC}/>
    //   <color attach="background" args={['#F0F0F0']}/>
    //   <RotatingCube/>
    // </Canvas>
    <main className="max-w-7xl mx-auto">
      <Navbar/>
      <Hero/>
      {/* <Jump/> */}
    </main>
  )
}

export default App
