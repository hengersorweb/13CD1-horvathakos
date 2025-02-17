import React from "react";
import { Link,NavLink } from "react-router-dom";

const Navbar = (() => {
    return(
        <div>
            <nav className="dtc v-mid w-75 tr" >
                <Link className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" to ='/'>Főoldal</Link>
                <NavLink className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" to = '/ermesek'>Az olimpia érmesei</NavLink>
                <NavLink className="link dim dark-gray f6 f5-ns dib" to = '/mermesek'>A magyar érmese</NavLink>
            </nav>
        </div>
    )
})

export default Navbar