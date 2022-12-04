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
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: false,
                        mode: "repulse",
                    }
                },
                modes: {
                    repulse: {
                        distance: 177,
                        duration: 0.4,
                    },
                    push: {
                        quantity: 7,
                    },
                },
            },
            particles: {
                links: {
                    enable: false,
                    distance: 200,
                    color:"#0000ff",
                },
                collisions: {
                    enable: true,
                },
                move: {
                    enable: true,
                    speed: {min: .1, max: 1}
                },
                opacity: {
                    value: {min: 0.1, max: 0.7}
                },
                size: {
                    value: {min: 1, max: 3}
                },
            },
            pasuseOnBlur: {
                enable: true,
            },
        };
    }, []);

    const particlesInit = useCallback((engine) => {
        loadSlim(engine);

}, []);

    return <Particles id={props.id} init={particlesInit} options = {options}/>
};

export default ParticlesComponent;