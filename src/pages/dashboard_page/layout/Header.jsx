
import AppsIcon from '@mui/icons-material/Apps';
import MenuIcon from '@mui/icons-material/Menu';
import RefreshIcon from '@mui/icons-material/Refresh';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import ViewStreamSharpIcon from '@mui/icons-material/ViewStreamSharp';
import React from 'react';
import { default as googlekeep, default as profileimage } from '../../../assets/logo-keep.png';
import './Header.css';

const Header = () => {
return (
<>
<div className="header">
    <div className="left-section">
    <MenuIcon className="menu-icon" />
    <div className="logo-section">
        <img
        src={googlekeep}
        alt="keep"
        className="keep-image"
        />
        <div className="logo-text">Fundoo Notes</div>
    </div>
    </div>
    
    <div className="center-section">
    <div className="search-container">
        <SearchIcon className="search-icon" />
        <input type="text" placeholder="Search" className="search-input" />
    </div>
    </div>
    
    <div className="right-section">
    <RefreshIcon className="header-icon" />
    <ViewStreamSharpIcon className="header-icon" />
    <SettingsIcon className="header-icon" />
    <AppsIcon className="header-icon" />
    <img src={profileimage} alt="profile" className="profile-image" />
    </div>
</div>

</>
);
};

export default Header;
