import { services, site } from '../data/site.js'
import { MaybeLink } from './Field.jsx'
import MarginNote from './MarginNote.jsx'
import styles from './Commissions.module.css'

const PROCESS = [
  ['Talk', 'We discuss what you need and whether it is a good fit for my skills.'],
  ['Scope', 'A written scope of what is included and what is not, agreed before work starts.'],
  ['Build', 'I work in small steps and share preview links as the project progresses.'],
  ['Hand over', 'Deployment and handover of the source code, as agreed in the scope.'],
]

export default function Commissions() {
  return (
    <section id="commissions" className={styles.section} aria-labelledby="commissions-title">
      <div className="wrap">
        <div className={`grid ${styles.head}`}>
          <h2 id="commissions-title" className={styles.heading} data-reveal="">
            Commis&shy;sions
          </h2>
          <div className={styles.intro} data-reveal="">
            <p>
              I take on small, well-defined freelance projects alongside my degree, mainly websites and React front ends
              built with the tools I use in my own projects.
            </p>
            <MarginNote tone="lime">Straight answers on what I can and can&rsquo;t take on.</MarginNote>
          </div>
        </div>

        <ol className={`grid ${styles.services}`}>
          {services.map((service, i) => (
            <li key={service.title} className={styles.service} data-reveal="">
              <span className={styles.no}>0{i + 1}</span>
              <h3 className={styles.title}>{service.title}</h3>
              <p>{service.body}</p>
              <p className={styles.proof}>{service.proof}</p>
            </li>
          ))}
        </ol>

        <div className={`grid ${styles.process}`}>
          <h3 className={styles.processTitle} data-reveal="">
            How we&rsquo;d work
          </h3>
          <ol className={styles.steps}>
            {PROCESS.map(([step, text]) => (
              <li key={step} data-reveal="">
                <span className={styles.step}>{step}</span>
                <span>{text}</span>
              </li>
            ))}
          </ol>
        </div>

        <p className={styles.cta} data-reveal="">
          <MaybeLink href={site.links.upwork} className={styles.ctaLink}>
            Hire me on Upwork →
          </MaybeLink>
          <a href="#contact" className={styles.ctaSecondary}>
            Or get in touch directly
          </a>
        </p>
      </div>
    </section>
  )
}
