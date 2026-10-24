import { isPlaceholder } from '../data/placeholder.js'
import { site } from '../data/site.js'
import Field from './Field.jsx'
import Highlight from './Highlight.jsx'
import MarginNote from './MarginNote.jsx'
import { PlaceholderMedia } from './Placeholder.jsx'
import styles from './Profile.module.css'

const HIGHLIGHT = 'learns by building'

// Highlights the key phrase wherever it appears in Darshna's own words.
function ProfileParagraph({ value }) {
  if (typeof value !== 'string' || !value.includes(HIGHLIGHT)) return <Field value={value} />
  const [before, after] = value.split(HIGHLIGHT)
  return (
    <>
      {before}
      <Highlight>{HIGHLIGHT}</Highlight>
      {after}
    </>
  )
}

export default function Profile() {
  const { portrait, education } = site

  return (
    <section id="profile" className={styles.section} aria-labelledby="profile-title">
      <div className={`wrap grid ${styles.inner}`}>
        <div className={styles.portrait} data-reveal="">
          {isPlaceholder(portrait) ? (
            <PlaceholderMedia label={portrait.label} ratio="4 / 5" tone="ink" />
          ) : (
            <img
              src={portrait.src}
              srcSet={portrait.srcSet}
              sizes="(min-width: 56rem) 40vw, 100vw"
              alt={portrait.alt}
              width={portrait.width}
              height={portrait.height}
              loading="lazy"
              decoding="async"
            />
          )}
          <p className={styles.credit}>
            Portrait{isPlaceholder(portrait) ? ' · to be supplied' : portrait.credit ? ` · ${portrait.credit}` : ''}
          </p>
        </div>

        <div className={styles.essay}>
          <h2 id="profile-title" className={styles.heading} data-reveal="">
            <span className={styles.kicker}>Profile</span>
            Learning <em>by</em> building.
          </h2>

          {site.profile.map((para, i) => (
            <p key={i} className={i === 0 && typeof para === 'string' ? styles.first : undefined} data-reveal="">
              {i === 0 && typeof para === 'string' ? (
                <>
                  {/* A span rather than ::first-letter, which would also enlarge a following apostrophe. */}
                  <span className={styles.drop}>{para[0]}</span>
                  <ProfileParagraph value={para.slice(1)} />
                </>
              ) : (
                <ProfileParagraph value={para} />
              )}
            </p>
          ))}

          <dl className={styles.facts} data-reveal="">
            <div>
              <dt>Degree</dt>
              <dd>{education.degree}</dd>
            </div>
            <div>
              <dt>University</dt>
              <dd>{education.school}</dd>
            </div>
            <div>
              <dt>Years</dt>
              <dd>{education.years}</dd>
            </div>
          </dl>

          <MarginNote arrow className={styles.note}>
            A developing engineer, not a senior one. Expect honest labels and fast learning.
          </MarginNote>
        </div>
      </div>
    </section>
  )
}
