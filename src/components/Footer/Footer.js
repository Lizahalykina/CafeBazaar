import React, { useEffect, useState } from "react";
import "./Footer.css";

function Footer({ pageContainerRef }) {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const container = pageContainerRef.current;

        const handleScroll = () => {
            const currentScroll = container.scrollLeft;
            const totalWidth = container.scrollWidth - container.clientWidth;
            const scrollPercentage = (currentScroll / totalWidth) * 85;
            setScrollPosition(scrollPercentage);
        };

        container.addEventListener("scroll", handleScroll);
        return () => {
            container.removeEventListener("scroll", handleScroll);
        };
    }, [pageContainerRef]);

    const scrollToPage = (page) => {
        const container = pageContainerRef.current;
        const width = window.innerWidth;
        container.scrollTo({
            left: width * page,
            behavior: "smooth",
        });
    };

    return (
        <div className="Footer">
            <div
                className="ScrollElement"
                style={{ left: `${scrollPosition}%` }}
                onClick={() => scrollToPage(0)}
            >
                <div className="circle"></div>
                <div className="line-arrow">
                    <div className="line"></div>
                    <div className="arrow-tip"></div>
                </div>
            </div>
            <p>Reviews</p>
        </div>
    );
}

export default Footer;
