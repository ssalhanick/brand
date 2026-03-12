import { useState, useEffect } from 'react'
import './Nav.css'

const links = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
]

export default function Nav() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault()
        setMenuOpen(false)
        const target = document.querySelector(href)
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <header className={`nav${scrolled ? ' nav--scrolled' : ''}`} role="banner">
            <div className="nav__inner container">
                <a href="#hero" className="nav__logo" onClick={(e) => handleLink(e, '#hero')}>
                    <img src="/avatar-tie.svg" alt="Scott Salhanick" className="nav__logo-img" />
                </a>

                <nav className="nav__links" aria-label="Main navigation">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="nav__link"
                            onClick={(e) => handleLink(e, link.href)}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <a href="mailto:ssalhanick@gmail.com" className="btn btn-primary nav__cta">
                    Hire Me
                </a>

                <button
                    className={`nav__burger${menuOpen ? ' nav__burger--open' : ''}`}
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((o) => !o)}
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>

            {/* Mobile menu */}
            <div className={`nav__mobile${menuOpen ? ' nav__mobile--open' : ''}`} aria-hidden={!menuOpen}>
                {links.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        className="nav__mobile-link"
                        onClick={(e) => handleLink(e, link.href)}
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </header>
    )
}
