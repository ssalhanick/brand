import './Hero.css'

export default function Hero() {
    const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
    }

    const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="hero" id="hero" aria-label="Introduction">
            <div className="hero__bg" aria-hidden="true" />
            <div className="container hero__inner">
                <p className="hero__eyebrow fade-in-up">Software Engineer • Dallas, TX</p>
                <h1 className="hero__name fade-in-up fade-in-up--delay-1">
                    Scott<br />
                    <span className="hero__name-accent">Salhanick</span>
                </h1>
                <p className="hero__tagline fade-in-up fade-in-up--delay-2">
                    Over 10 years building backend systems, APIs, and intelligent web experiences. Currently exploring the intersection of AI/ML and product engineering.
                </p>
                <div className="hero__cta fade-in-up fade-in-up--delay-3">
                    <a href="#projects" className="btn btn-primary" onClick={scrollToProjects}>
                        View My Work
                    </a>
                    <a href="#contact" className="btn btn-outline" onClick={scrollToContact}>
                        Get In Touch
                    </a>
                </div>
                <div className="hero__links fade-in-up fade-in-up--delay-4">
                    <a href="https://github.com/ssalhanick" target="_blank" rel="noopener noreferrer" className="hero__social-link">
                        GitHub
                    </a>
                    <span className="hero__social-sep" aria-hidden="true">·</span>
                    <a href="mailto:ssalhanick@gmail.com" className="hero__social-link">
                        Email
                    </a>
                    <span className="hero__social-sep" aria-hidden="true">·</span>
                    <a href="https://linkedin.com/in/ssalhanick" target="_blank" rel="noopener noreferrer" className="hero__social-link">
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    )
}
