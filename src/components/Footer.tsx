import './Footer.css'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="footer" role="contentinfo">
            <div className="container footer__inner">
                <div className="footer__brand">
                    <span className="footer__logo">SS<span className="footer__logo-dot">.</span></span>
                    <p className="footer__tagline">Software Engineer · Dallas, TX</p>
                </div>
                <nav className="footer__nav" aria-label="Footer navigation">
                    <a href="#about" className="footer__link">About</a>
                    <a href="#skills" className="footer__link">Skills</a>
                    <a href="#experience" className="footer__link">Experience</a>
                    <a href="#projects" className="footer__link">Projects</a>
                    <a href="#contact" className="footer__link">Contact</a>
                </nav>
                <p className="footer__copy">© {year} Scott Salhanick. All rights reserved.</p>
            </div>
        </footer>
    )
}
