import './Education.css'

const education = [
    {
        degree: 'Masters of Science in Information Technology Management',
        institution: 'University of Texas at Dallas',
        period: 'Expected August 2026',
        type: 'Graduate',
        certificates: ['Applied Machine Learning', 'Data Mining & Business Analytics'],
    },
    {
        degree: 'Masters of Business Administration',
        institution: 'University of Texas at Dallas',
        period: 'Expected August 2026',
        type: 'Graduate',
        certificates: [],
    },
    {
        degree: 'Bachelor of Arts',
        institution: 'Loyola University Chicago',
        period: 'Completed',
        type: 'Undergraduate',
        certificates: [],
    },
]

export default function Education() {
    return (
        <section className="education section" id="education" aria-labelledby="education-title">
            <div className="container">
                <p className="section-label">Education</p>
                <h2 className="section-title" id="education-title">Credentials</h2>
                <div className="section-divider" />
                <div className="education__grid">
                    {education.map((edu, i) => (
                        <div key={i} className="education__card reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                            <div className="education__left">
                                <span className="education__type">{edu.type}</span>
                                <h3 className="education__degree">{edu.degree}</h3>
                                <p className="education__institution">{edu.institution}</p>
                                <p className="education__period">{edu.period}</p>
                            </div>
                            {edu.certificates.length > 0 && (
                                <div className="education__certs">
                                    <p className="education__certs-label">Certificates</p>
                                    {edu.certificates.map((cert) => (
                                        <div key={cert} className="education__cert">
                                            <span className="education__cert-icon" aria-hidden="true">◆</span>
                                            {cert}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
