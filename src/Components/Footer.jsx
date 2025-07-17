import './Footer.css';

function Footer() {
    return(
        <footer className="footer">
            <div className="content">
                <h3 className="footer-logo">Hotel De Source(Oyinade)</h3>
                <p className="taglinee">....where class meets comfort</p>
                <div className="footer-links">
                    <a href="/">Home</a>
                     <a href="/about">About Us</a>
                       <a href="/rooms">Our Rooms</a>
                      <a href="/menu">Menu</a>
                       <a href="/contact">Contact</a>
                       <a href='/gallery'>Gallery</a>
                </div>
                <p className="footer-copy">&copy;{new Date().getFullYear()} Zayn Events & Cakes. all rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;