import React from "react";
import header_classes from  './Header.module.css';

const Header = () => {
    return (
        <header className={header_classes.header}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSo08Mi3qmkDV2ivCx-Xt0vZL5LeLAPbVP2yA&usqp=CAU' />
        </header>
    )
}

export default Header;