import React from "react";
import Particles from "react-tsparticles";
import particlesConfig from './particlesFunc';

export default function ParticleBackground() {
    return ( <Particles params={particlesConfig} /> );
}