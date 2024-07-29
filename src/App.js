import React, { useRef, useEffect } from "react";
import MenuPage from "./components/MenuPage/MenuPage";
import Topper from "./components/Topper/Topper";
import Footer from "./components/Footer/Footer";
import MainSection from "./components/MainSection/MainSection";
import About from "./components/About/About";
import "./App.css";
import "@fontsource/comfortaa";

function App() {
    const locationRef = useRef(null);
    const menuRef = useRef(null);
    const coffeeRef = useRef(null);
    const pageContainerRef = useRef(null);

    useEffect(() => {
        const container = pageContainerRef.current;
        let isScrolling = false;

        const handleScroll = (e) => {
            if (isScrolling) return;
            isScrolling = true;

            const { deltaY } = e;
            const currentScroll =
                window.innerWidth <= 768
                    ? container.scrollTop
                    : container.scrollLeft;
            const dimension =
                window.innerWidth <= 768
                    ? window.innerHeight
                    : window.innerWidth;

            if (deltaY > 0) {
                container.scrollTo({
                    top:
                        window.innerWidth <= 768
                            ? currentScroll + dimension
                            : undefined,
                    left:
                        window.innerWidth > 768
                            ? currentScroll + dimension
                            : undefined,
                    behavior: "smooth",
                });
            } else {
                container.scrollTo({
                    top:
                        window.innerWidth <= 768
                            ? currentScroll - dimension
                            : undefined,
                    left:
                        window.innerWidth > 768
                            ? currentScroll - dimension
                            : undefined,
                    behavior: "smooth",
                });
            }

            setTimeout(() => {
                isScrolling = false;
            }, 1000);
        };

        container.addEventListener("wheel", handleScroll);

        return () => {
            container.removeEventListener("wheel", handleScroll);
        };
    }, []);

    return (
        <div className="App">
            <Topper
                footerRef={locationRef}
                menuRef={menuRef}
                coffeeRef={coffeeRef}
            />
            <div className="PageContainer" ref={pageContainerRef}>
                <div className="Page1">
                    <MainSection />
                </div>
                <div className="Page2">
                    <About coffeeRef={coffeeRef} />
                </div>
                <div className="Page3">
                    <MenuPage coffeeRef={coffeeRef} />
                </div>
                <div className="Page4">
                    <About coffeeRef={coffeeRef} />
                </div>
            </div>
            <Footer className="Footer" pageContainerRef={pageContainerRef} />
        </div>
    );
}

export default App;
