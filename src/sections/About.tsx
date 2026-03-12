import './About.css'

export default function About() {
    return (
        <section className="about section" id="about" aria-labelledby="about-title">
            <div className="container">
                <div className="about__grid reveal">
                    <div className="about__content">
                        <p className="section-label">About Me</p>
                        <h2 className="section-title" id="about-title">
                            Engineer at the intersection of systems and intelligence.
                        </h2>
                        <div className="section-divider" />
                        <p className="about__text">
                            Hi! I'm Scott, a software engineer with over 10 years of experience building
                            backend systems, RESTful APIs, and complex web platforms. My work at
                            the University of Texas at Dallas has centered on architecting reliable,
                            scalable infrastructure for 50 departments and 10,000 daily users.
                        </p>
                        <p className="about__text">
                            Outside of enterprise systems, I've led architecture and development for
                            production applications at Stomping Ground Comedy Theater, building
                            ticketing, scheduling, and content delivery systems from the ground up.
                        </p>
                        <p className="about__text">
                            I'm currently completing a dual MS in Information Technology Management
                            / MBA and deepening my focus on Applied Machine Learning and data-driven
                            product development.
                        </p>

                    </div>

                    {/* <div className="about__visual">
                        <div className="about__avatar-wrap">
                            <img
                                src="/avatar-tie.svg"
                                alt="Scott Salhanick"
                                className="about__avatar"
                            />

                        </div>
                    </div> */}

                </div>
            </div>
        </section>
    )
}
