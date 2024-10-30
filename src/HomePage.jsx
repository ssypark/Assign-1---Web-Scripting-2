import React from "react";
import pogBanner from "./assets/pog-banner.png";

function HomePage() {

    const imageStyle = {
        width: "100%",
        height: "auto"
    }


    const headerStyle = {
        backgroundColor: "#6f4e37",
        color: 'white',
        padding: '10px',
        textAlign: 'center'
    }
    return (
        <>
            <header>
                <h1 className="text-3xl"> Your #1 Pog Repo! </h1>
            </header>
            <main>
                <img src={pogBanner} style={imageStyle} />
                <h2>Our Pog Store</h2>
                <ul>
                    <li>
                        <img />
                        <div>
                            <h3>Slammers</h3>
                            <p>Price</p>
                        </div>
                    </li>
                </ul>
            </main>
            <footer>
                <p>&copy; 2024 Pog Store</p>
            </footer>
        </>
    );
}

export default HomePage;