import './Projects.css'

const projects = [
    {
        title: 'UTD Campus WordPress Platform & Block Plugin',
        category: 'Enterprise Platform',
        description:
            'Architected a 125-site WordPress multisite serving 50 university departments and 10,000+ daily users. Built a standalone ACF plugin housing 10 custom dynamic blocks. The plugin ships through a dedicated Bitbucket repository with its own CI/CD pipeline.',
        tags: ['WordPress Multisite', 'ACF', 'Custom Blocks', 'PHP', 'CI/CD', 'Design Systems', 'Accessibility', 'REST API'],
        impact: '10 dynamic blocks in daily use across 50+ university departments',
        accent: 'navy',
    },
    {
        title: 'Stomping Ground Web Ecosystem',
        category: 'Full-Stack Development',
        description:
            'Built multiple customer-facing web applications for a live comedy theater serving 1,100 monthly visitors and 100 actively listed shows. Replaced a fully manual event workflow with a cron-driven sync pipeline integrating Eventbrite, Humanitix, and The Events Calendar WordPress plugin. Eliminated redundant data entry that was producing sync errors and costing significant staff time each month.',
        tags: ['System Architecture', 'WordPress', 'API Integration', 'PHP', 'TypeScript', 'CI/CD'],
        impact: 'Eliminated ~10 hrs/month of manual event entry across 30 monthly events',
        accent: 'accent',
    },
    {
        title: 'Mortgage Denial Predictor',
        category: 'Machine Learning',
        description:
            'Trained a CatBoost classifier on 12.2 million HMDA mortgage records to predict loan denial outcomes. Performed full pipeline work including data cleaning, feature engineering, class imbalance handling, and model tuning. CatBoost outperformed all other candidate models across every evaluation metric.',
        tags: ['Python', 'CatBoost', 'Scikit-learn', 'HMDA', 'Feature Engineering', 'Classification'],
        impact: '88.7% accuracy, 90% ROC-AUC, 74.5% F1 on 12.2M records',
        accent: 'cream',
    },
    {
        title: 'Legal Citation Graph & Hallucination Detector',
        category: 'AI / ML + Graph',
        description:
            'Built a legal citation knowledge graph using CourtListener data, Neo4j, and Milvus to model citation relationships with cosine similarity-weighted edges via LegalBERT embeddings. Includes a hallucination detection layer that estimates the probability a given legal citation was fabricated by an LLM rather than a real case.',
        tags: ['Neo4j', 'Milvus', 'LegalBERT', 'Vector Search', 'Graph Database', 'NLP', 'LLM Safety'],
        impact: 'Hallucination probability scoring on LLM-generated legal citations',
        accent: 'navy',
    },
]

export default function Projects() {
    return (
        <section className="projects section" id="projects" aria-labelledby="projects-title">
            <div className="container">
                <p className="section-label">Work & Projects</p>
                <h2 className="section-title" id="projects-title">What I've Built</h2>
                <div className="section-divider" />
                <div className="projects__grid">
                    {projects.map((p, i) => (
                        <article
                            key={i}
                            className={`projects__card projects__card--${p.accent} reveal`}
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            <div className="projects__card-top">
                                <span className="projects__category">{p.category}</span>
                                <h3 className="projects__title">{p.title}</h3>
                                <p className="projects__description">{p.description}</p>
                            </div>
                            <div className="projects__card-bottom">
                                <div className="projects__tags">
                                    {p.tags.map((tag) => (
                                        <span key={tag} className="projects__tag">{tag}</span>
                                    ))}
                                </div>
                                <p className="projects__impact">
                                    <span className="projects__impact-icon" aria-hidden="true">✦</span>
                                    {p.impact}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
