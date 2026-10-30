import { brand } from '../brand'
import Reveal from './Reveal'

export default function Story() {
  const story = brand.story

  return (
    <section className="section story" id="story">
      <div className="container story-grid">
        <Reveal className="story-gallery">
          <figure className="story-main">
            <img src={story.image} alt={story.imageAlt} loading="lazy" />
            <figcaption>{story.imageCaption}</figcaption>
          </figure>
          <figure className="story-inset">
            <img
              src={story.insetImage}
              alt={story.insetImageAlt}
              loading="lazy"
            />
          </figure>
        </Reveal>

        <Reveal className="story-copy" delay={100}>
          <p className="eyebrow">{story.eyebrow}</p>
          <h2 className="section-title story-title">
            {story.title} <em>{story.titleAccent}</em>
          </h2>
          <div className="story-text">
            {story.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <blockquote className="story-quote">
            “{story.quote}”
          </blockquote>
          <div className="story-signature">
            <strong>{story.signature}</strong>
            <span>{story.role}</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
