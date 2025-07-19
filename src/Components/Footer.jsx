import './Footer.css';

function Footer() {
    return(
        <footer className="footer">
            <div className="content">
                <h3 className="footer-logo">Hotel De Source(Oyinade)</h3>
                <p className="taglinee">....where class meets comfort</p>
                <p className="footer-copy">&copy;{new Date().getFullYear()} Hotel De Source (Oyinade). All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;