import './Experience.css'

interface Experience {
    title: string
    org: string
    location: string
    period: string
    type: string
    highlights: string[]
}

const experiences: Experience[] = [
    {
        title: 'Web Software Developer, Office of Communications',
        org: 'University of Texas at Dallas',
        location: 'Richardson, TX',
        period: '2021 - Present',
        type: 'Full-time',
        highlights: [
            'Designed, developed, and supported backend APIs and web applications across a 125-site WordPress environment serving 50 departments and 10,000 users daily.',
            'Served as primary escalation point for production issues across 40+ themes, reducing mean resolution time from days to hours through systematic log analysis, API debugging, and direct partnership with technical and non-technical stakeholders, authoring operational documentation that further enables staff to independently resolve common issues without escalation.',
            'Sole architect and implementer of CI/CD pipelines and automated Sass/JS compilation workflows, eliminating ~75 hours of manual cross-repo deployment work annually and standardizing release processes across plugins and themes repos for 25 campus partner departments.',
        ],
    },
    {
        title: 'Web Developer, Office of Communications',
        org: 'University of Texas at Dallas',
        location: 'Richardson, TX',
        period: '2019 - 2021',
        type: 'Full-time',
        highlights: [
            'Created custom themes based on university brand standards and incorporated functionality for specific client needs.',
            'Managed and maintained high visibility sites within the university cluster including Human Resources, University Police, and the International Center.',
        ],
    },
    {
        title: 'Web Developer, Student Affairs',
        org: 'University of Texas at Dallas',
        location: 'Richardson, TX',
        period: '2017 - 2019',
        type: 'Full-time',
        highlights: [
            'Maintained, refactored, and improved codebase for over 60 departments within the division of Student Affairs.',
            'Solved problems using interdepartmental resources while communicating solutions to clients in accessible language.',
        ],
    },
    {
        title: 'Lead Developer & Architect',
        org: 'Stomping Ground Comedy Theater',
        location: 'Dallas, TX',
        period: 'September 2017 - Present',
        type: 'Volunteer',
        highlights: [
            'Served as lead developer and architect for multiple production web applications supporting ticketing, scheduling, and content delivery systems.',
            'Designed and maintained ETL-style integrations connecting 2 external platforms and an internal ticketing system, standardizing data models across customer-facing and operational systems, replacing manual data entry and saving ~180 hours of reconciliation work annually across ~30 monthly events, with full architecture documentation for long-term maintainability.',
        ],
    },
    {
        title: 'Interactive Media Specialist',
        org: 'World Affairs Council',
        location: 'Dallas, TX',
        period: '2015 - 2017',
        type: 'Full-time',
        highlights: [
            'Conducted regular code maintenance and oversaw dissemination of content for the general public and an exclusive membership base.',
            'Created tracked donation landing pages for a month-long fundraising campaign that yielded $100,000 and used tracking data for a more focused follow-on campaign.',
            'Produced a bi-monthly foreign policy podcast featuring high-profile live interviews with international and domestic leaders.',
        ],
    },
    {
        title: 'Lead Multimedia Specialist',
        org: 'TravelHost Inc.',
        location: 'Dallas, TX',
        period: '2014 - 2015',
        type: 'Full-time',
        highlights: [
            'Orchestrated design, production, and preflight of bi-monthly and quarterly magazines across 12 markets in the United States, reaching 9 million readers annually.',
        ],
    },
]

const fullTime = experiences.filter((e) => e.type === 'Full-time')
const volunteer = experiences.filter((e) => e.type === 'Volunteer')

function Timeline({ items }: { items: Experience[] }) {
    return (
        <div className="experience__timeline">
            {items.map((exp, i) => (
                <div key={i} className="experience__item reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                    <div className="experience__line" aria-hidden="true">
                        <div className="experience__dot" />
                    </div>
                    <div className="experience__card">
                        <div className="experience__header">
                            <div>
                                <h3 className="experience__title">{exp.title}</h3>
                                <p className="experience__org">{exp.org}</p>
                                <p className="experience__location">{exp.location}</p>
                            </div>
                            <div className="experience__meta">
                                <span className="experience__period">{exp.period}</span>
                            </div>
                        </div>
                        <ul className="experience__highlights">
                            {exp.highlights.map((h, j) => (
                                <li key={j} className="experience__highlight">
                                    <span className="experience__bullet" aria-hidden="true">▸</span>
                                    {h}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default function Experience() {
    return (
        <section className="experience section" id="experience" aria-labelledby="experience-title">
            <div className="container">
                <p className="section-label">Experience</p>
                <h2 className="section-title" id="experience-title">Where I've Worked</h2>
                <div className="section-divider" />

                <div className="experience__group">
                    <h3 className="experience__group-label">Professional</h3>
                    <Timeline items={fullTime} />
                </div>

                <div className="experience__group">
                    <h3 className="experience__group-label">Volunteer</h3>
                    <Timeline items={volunteer} />
                </div>
            </div>
        </section>
    )
}
