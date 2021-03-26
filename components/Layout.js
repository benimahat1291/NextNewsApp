import { useEffect } from "react"
import Head from "next/head"
import { Toolbar } from "./toolbar"
import 'bootswatch/dist/darkly/bootstrap.min.css';
import Aos from "aos";
import "aos/dist/aos.css"
import Particles from "react-particles-js"

const Layout = (props) => {

    useEffect(() => {
        Aos.init({ duration: 1000 })

    }, [])


    return (
        <>
            <div>
                <Head>
                    <title>NextNews</title>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Fugaz+One&family=Raleway&display=swap" rel="stylesheet"/>
                        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
                </Head>

                    <Particles id="particles-js"
                        params={{
                            "particles": {
                                "number": {
                                    "value": 5,
                                    "density": {
                                        "enable": true,
                                        "value_area": 800
                                    }
                                },
                                "color": {
                                    "value": "#0275d8"
                                },
                                "shape": {
                                    "type": "polygon",
                                    "stroke": {
                                        "width": 0,
                                        "color": "#000"
                                    },
                                    "polygon": {
                                        "nb_sides": 10
                                    },
                                    "image": {
                                        "src": "img/github.svg",
                                        "width": 100,
                                        "height": 100
                                    }
                                },
                                "opacity": {
                                    "value": 0.3,
                                    "random": true,
                                    "anim": {
                                        "enable": false,
                                        "speed": 1,
                                        "opacity_min": 0.1,
                                        "sync": false
                                    }
                                },
                                "size": {
                                    "value": 160,
                                    "random": false,
                                    "anim": {
                                        "enable": true,
                                        "speed": 25,
                                        "size_min": 40,
                                        "sync": false
                                    }
                                },
                                "line_linked": {
                                    "enable": false,
                                    "distance": 200,
                                    "color": "#ffffff",
                                    "opacity": 1,
                                    "width": 2
                                },
                                "move": {
                                    "enable": true,
                                    "speed": 1,
                                    "direction": "none",
                                    "random": false,
                                    "straight": true,
                                    "out_mode": "out",
                                    "bounce": false,
                                    "attract": {
                                        "enable": false,
                                        "rotateX": 600,
                                        "rotateY": 1200
                                    }
                                }
                            },
                            "interactivity": {
                                "detect_on": "canvas",
                                "events": {
                                    "onhover": {
                                        "enable": false,
                                        "mode": "grab"
                                    },
                                    "onclick": {
                                        "enable": false,
                                        "mode": "push"
                                    },
                                    "resize": true
                                },
                                "modes": {
                                    "grab": {
                                        "distance": 400,
                                        "line_linked": {
                                            "opacity": 1
                                        }
                                    },
                                    "bubble": {
                                        "distance": 400,
                                        "size": 12,
                                        "duration": 2,
                                        "opacity": 1,
                                        "speed": 3
                                    },
                                    "repulse": {
                                        "distance": 200,
                                        "duration": 1
                                    },
                                    "push": {
                                        "particles_nb": 4
                                    },
                                    "remove": {
                                        "particles_nb": 2
                                    }
                                }
                            },
                            "retina_detect": true
                        }}>

                    </Particles>
                    <div className="layout">
                        <Toolbar />
                        {props.children}
                    </div>

            </div>
        </>
    )
}

export default Layout
