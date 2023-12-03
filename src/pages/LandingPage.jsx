import React, { useRef, useEffect } from 'react';
import "../css/LandingPage.css";
import 'bootstrap/dist/css/bootstrap.css';
import RedButton from "../assests/breezy_button.svg"


export function LandingPage() {
    const main = useRef();
    const afterMain = useRef();

    useEffect(() => {
        const mainOptions = {
            root: null, // Use the viewport as the root
            rootMargin: '0px',
            threshold: 0.5, // Trigger when at least 50% of the element is visible
        };

        const mainObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    afterMain.current.classList.add("fadeIn");
                    afterMain.current.classList.remove("fadeOut");
                    main.current.classList.add("fadeOut");
                    main.current.classList.remove("fadeIn");
                } else {
                    afterMain.current.classList.add("fadeOut");
                    afterMain.current.classList.remove("fadeIn");
                    main.current.classList.add("fadeIn");
                    main.current.classList.remove("fadeOut");
                }
            });
        }, mainOptions);

        mainObserver.observe(main.current);
        mainObserver.observe(afterMain.current);

        return () => {
            mainObserver.unobserve(main.current);
            mainObserver.unobserve(afterMain.current);
        };
    }, []);

    return (
        <div style={{ backgroundColor: "#f9f4e3" }}>
            <div className='main fadeIn' ref={main}>
                <h1 className='heroSection'>
                    <span className='B'>B</span>
                    <span className='R'>R</span>
                    <span className='E-1'>E</span>
                    <span className='E-2'>E</span>
                    <span className='Z'>Z</span>
                    <span className='Y'>Y</span>
                </h1>
                {/* <h4 className='arrow'>↓</h4> */}
            </div>
            <div className='afterMain fadeOut' ref={afterMain}>
                <div className="breath">
                    <button>
                        <RedButton/>
                    </button>
                </div>
                {/* <div className='container text-center'>
                    <div className='row'>
                        <div className='col-sm-6 b'>
                            <h1>Breathe</h1>
                        </div>
                        <div className='col-sm-6'>
                            <h1>Calender</h1>
                        </div>
                        <div className='col-sm-6'>
                            <h1>Notebook</h1>
                        </div>
                        <div className='col-sm-6'>
                            <h1>Post-its</h1>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}
