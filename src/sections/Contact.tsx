import './Contact.css'

export default function Contact() {
    return (
        <section className="contact section" id="contact" aria-labelledby="contact-title">
            <div className="container">
                <p className="section-label">Contact</p>
                <h2 className="section-title" id="contact-title">Let's Work Together</h2>
                <div className="section-divider" />
                <div className="contact__grid reveal">
                    <div className="contact__intro">
                        <p className="contact__text">
                            I'm open to full-time opportunities, contract work, and interesting
                            collaborations — especially at the intersection of systems engineering,
                            AI/ML, and product development.
                        </p>
                        <p className="contact__text">
                            The best way to reach me is via email. I typically respond within 24 hours.
                        </p>
                        <div className="contact__links">
                            <a
                                href="mailto:ssalhanick@gmail.com"
                                className="contact__link"
                                aria-label="Send email to Scott"
                            >
                                <span className="contact__link-icon" aria-hidden="true">✉</span>
                                ssalhanick@gmail.com
                            </a>
                            <a
                                href="https://github.com/ssalhanick"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact__link"
                                aria-label="View Scott's GitHub profile"
                            >
                                <span className="contact__link-icon" aria-hidden="true">⌥</span>
                                github.com/ssalhanick
                            </a>
                            <a
                                href="https://www.linkedin.com/in/scottsalhanick/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact__link"
                                aria-label="View Scott's LinkedIn profile"
                            >
                                <span className="contact__link-icon" aria-hidden="true">in</span>
                                linkedin.com/in/scottsalhanick
                            </a>
                        </div>
                    </div>
                    <div className="contact__cta-box">
                        <p className="contact__cta-label">Ready to connect?</p>
                        <a href="mailto:ssalhanick@gmail.com" className="btn btn-primary contact__cta-btn">
                            Send Me an Email
                        </a>
                        <p className="contact__cta-note">Based in Dallas, TX · Open to remote</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
