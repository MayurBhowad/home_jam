import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="navbar">
                    <div className="logo">
                        <img src="https://www.myhomejam.com/wp-content/uploads/2020/09/asdfasdfasdfHomejam.png" width="100px" height="auto" alt="homejam" />
                    </div>
                    <ul className="nav-list">
                        <li className="nav-itme" ><a href="#"><img src="assets/images/search.png" width="20px" height="auto" alt="" /> <span>Search</span></a></li>
                        <li className="nav-itme" ><a href="#" ><span>Help</span></a></li>
                        <li className="nav-itme" ><a href="#" ><span>Account</span></a></li>
                        <li className="nav-itme" ><a href="#" ><img src="assets/images/shoppin_bag.png" width="20px" height="auto" alt="" /></a></li>
                        <div className="menu-toggle">
                            <li className="humburger nav-itme" ><a href="#"><img src="assets/images/humburger.png" width="20px" height="auto" alt="" /></a> </li>
                            <li className="nav-itme" ><i class="fa fa-times" aria-hidden="true"></i></li>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
