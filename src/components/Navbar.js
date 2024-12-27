function Navbar() {
    return (
        <header className="bg-black text-white rounded-full my-2 m-8">
            <nav>
                <div className="container flex items-center justify-between py-2 mx-auto">
                    {/* logo section */}
                    <a href="#" className="logo ml-10">NEXTZONE</a>

                    {/* navigation links */}
                    <ul className="nav-links flex space-x-8 font-thin text-sm">
                        <li> <a href="#">Home</a> </li>
                        <li> <a href="#">About Us</a> </li>
                        <li> <a href="#">Porfolio</a> </li>
                        <li> <a href="#">Services</a> </li>
                        <li> <a href="#"> Contact Us</a></li>
                    </ul>

                    {/* action button */}
                    <div className="action-buttons space-x-4 px-0 mr-4">
                        <button className="icon-button  bg-orange-500 sm:bg-blue-500 hover:bg-orange-600 py-3 px-5 rounded-full border-black text-black font-semibold mr-0">↗</button>
                        <button className="cta-button bg-orange-500 px-7 py-3 rounded-full hover:bg-orange-600 text-black border-black font-semibold text-sm">REQUEST A PROPOSAL</button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
