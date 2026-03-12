import './Skills.css'

const skillGroups = [
    {
        category: 'Backend & APIs',
        skills: ['RESTful API Design', 'Backend Application Development', 'System Integration', 'Authentication & Auth Flows', 'JSON / Data Interchange'],
    },
    {
        category: 'Languages',
        skills: ['JavaScript / TypeScript', 'Python', 'PHP', 'Bash / Shell', 'HTML / CSS', 'SQL', 'NoSQL', 'Cypher'],
    },
    {
        category: 'Platforms & Tools',
        skills: ['Git / GitHub', 'CI/CD Pipelines', 'Automated Testing', 'Monitoring & Log Analysis', 'WordPress Multisite'],
    },
    {
        category: 'AI / ML',
        skills: ['Applied Machine Learning', 'Data Mining', 'Business Analytics', 'Python ML Ecosystem', 'MCP Servers', 'Vector Databases', 'TensorFlow'],
    },
    {
        category: 'Systems & Architecture',
        skills: ['Distributed Web Architecture', 'Relational Databases / SQL', 'Microservices & Integrations', 'Technical Documentation'],
    },
]

export default function Skills() {
    return (
        <section className="skills section" id="skills" aria-labelledby="skills-title">
            <div className="container">
                <p className="section-label">Technical Skills</p>
                <h2 className="section-title" id="skills-title">What I Work With</h2>
                <div className="section-divider" />
                <div className="skills__grid">
                    {skillGroups.map((group, i) => (
                        <div key={group.category} className="skills__card reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                            <div className="skills__card-header">
                                <h3 className="skills__category">{group.category}</h3>
                            </div>
                            <div className="skills__tags">
                                {group.skills.map((skill) => (
                                    <span key={skill} className="skills__tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
