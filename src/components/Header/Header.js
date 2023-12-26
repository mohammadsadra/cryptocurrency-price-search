import React from 'react';
import './Header.css';
import ColorChangingText from "../MultiColorText/ColorChangingText";


function Header() {
    return (
        <div className="Header">
            <ColorChangingText text="Cryptocurrency Price List" />
        </div>
    );
}

export default Header;
