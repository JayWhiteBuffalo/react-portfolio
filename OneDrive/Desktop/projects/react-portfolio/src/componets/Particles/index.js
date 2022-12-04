import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
// import { loadFull } from "tsparticles";
import { useCallback, useMemo } from "react";

const ParticlesComponent = (props) => {
    const options = useMemo(() => {

        return {
            background: {
                color: "#05061f",
            },
            fullScreen:{
                enable: true,
                zIndex: -1,
            },
            interactivity: {
                events:{
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    }
                },
                modes: {
                    repulse: {
                        distance: 100,
                    },
                },
            },
            particles: {
                links: {
                    enable: true,
                    distance: 80,
                },
                move: {
                    enable: true,
                    speed: {min: 1, max: 1}
                },
                opacity: {
                    value: {min: 0.1, max: 0.7}
                },
                size: {
                    value: {min: 1, max: 3}
                },
            },
        };
    }, []);

    const particlesInit = useCallback((engine) => {
        loadSlim(engine);

}, []);

    return <Particles id={props.id} init={particlesInit} options = {options}/>
};

export default ParticlesComponent;