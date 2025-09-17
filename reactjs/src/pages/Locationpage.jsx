import Loadingscreen from "../layoutpages/Loadingscreen";
import "./location.css";
import { useEffect, useState } from "react";

const Locationpage = () => {
    const address = "One Golden Square Mall, New Cairo";
    const mapsPlaceUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    const mapsDirUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
    const mapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const calc = () => {
            const now = new Date();
            let m = now.getHours() * 60 + now.getMinutes();
            if (m < 120) m += 1440;
            setIsOpen(m >= 600 && m < 1560);
        };
        calc();
        const id = setInterval(calc, 60000);
        return () => clearInterval(id);
    }, []);

    const [copied, setCopied] = useState(false);
    const copyAddress = async () => {
        try {
            await navigator.clipboard.writeText(address);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch {
            window.prompt("Copy address:", address);
        }
    };

    return (
<>
        <Loadingscreen />
        <div className="location-wrap">
            <div className="glass header-card">
                <div className="loc-title">Floria Café & Lounge</div>
                <div className={`chip ${isOpen ? "open" : "closed"}`}>
                    {isOpen ? "Open now" : "Closed"}
                </div>
                <div className="info-row" style={{ gridColumn: "1 / -1" }}>
                    <address className="addr">📍 {address}</address>
                    <div className="actions">
                        <a className="btn primary" href={mapsDirUrl} target="_blank" rel="noreferrer">Get directions</a>
                        <a className="btn" href={mapsPlaceUrl} target="_blank" rel="noreferrer">Open in Maps</a>
                        <button className="btn" onClick={copyAddress}>Copy address</button>
                    </div>
                </div>
            </div>

            <div className="grid">
                <div className="glass map-card">
                    <div className="map-outer">
                        <iframe title="Floria Café Location Map" src={mapsEmbedSrc} loading="lazy" />
                    </div>
                </div>

                <div className="glass hours-card">
                    <h3>Working Hours</h3>
                    <ul className="hours-list">
                        <li>Daily: 10:00 AM – 2:00 AM</li>
                    </ul>

                    {/* 3D model below working hours */}
                    <model-viewer
                        src="/models_3d/pink-coffee.glb"
                        alt="3D model preview"
                        camera-controls
                        auto-rotate
                        ar
                        shadow-intensity="1"
                        style={{ width: "100%", height: 380, background: "transparent", borderRadius: 12 , overflow: "hidden" }}
                    />
                </div>
            </div>

            {copied && <div className="toast">Address copied!</div>}
        </div>
        
        </>
    );
};

export default Locationpage;