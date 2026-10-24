import { services, site } from '../data/site.js'
import { MaybeLink } from './Field.jsx'
import MarginNote from './MarginNote.jsx'
import styles from './Commissions.module.css'

const PROCESS = [
  ['Talk', 'A short call or message thread to understand what you need and whether I am the right fit.'],
  ['Scope', 'A written plan with what is included, what is not, and a realistic timeline.'],
  ['Build', 'Work in small steps with a live preview link you can check at any time.'],
  ['Hand over', 'Deployment, a simple guide to updating content, and the source code.'],
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
              I take on freelance work alongside my degree. I&rsquo;m best suited to small, well-defined projects where a
              careful, responsive builder matters more than a large agency.
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
