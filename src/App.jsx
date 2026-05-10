import "./index.css";

import kitty1 from "./assets/kitty-1.png";
import kitty2 from "./assets/kitty-2.png";
import kitty3 from "./assets/kitty-3.png";
import kitty4 from "./assets/kitty-4.png";

function App() {
  return (
    <main className="page">
      <header className="navbar">
        <a href="#home" className="brand">
          <img src={kitty1} alt="Luna Creative logo" />
          <span>Luna Criativa</span>
          <strong>❤</strong>
        </a>

        <nav>
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact" className="nav-cta">Hire me ♡</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="bg-dots"></div>
        <div className="heart heart-one">♡</div>
        <div className="heart heart-two">☆</div>
        <div className="heart heart-three">♡</div>

        <div className="hero-left">
          <p className="eyebrow">
            THUMBNAILS <span>•</span> SHORTS EDITING <span>•</span> SOCIAL CONTENT
          </p>

          <h1>
            Cute visuals
            <br />
            with a
            <br />
            <em>professional</em>
            <br />
            strategy.
          </h1>

          <p className="hero-text">
            I create scroll-stopping thumbnails, short-form videos,
            and visual content designed to increase attention, clicks,
            and engagement.
          </p>

          <div className="hero-actions">
            <a href="#work" className="btn primary">
              <span>🎀</span>
              View portfolio
            </a>

            <a href="#contact" className="btn secondary">
              <span>♡</span>
              Contact me
            </a>
          </div>

          <div className="stats">
            <div className="stat-card">
              <span className="stat-icon">⚡</span>
              <div>
                <strong>24-48h</strong>
                <p>Fast delivery</p>
              </div>
            </div>

            <div className="stat-card">
              <span className="stat-icon">🎯</span>
              <div>
                <strong>CTR</strong>
                <p>Focused design</p>
              </div>
            </div>

            <div className="stat-card">
              <span className="stat-icon">☆</span>
              <div>
                <strong>100%</strong>
                <p>Client satisfaction</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <img src={kitty2} alt="Cute character with camera" className="kitty kitty-camera" />
          <img src={kitty3} alt="Cute character peeking" className="kitty kitty-peek" />
          <img src={kitty4} alt="Cute character sitting" className="kitty kitty-sit" />
          <img src={kitty1} alt="Cute character laptop" className="kitty kitty-laptop" />

          <div className="sketch-heart">♡</div>
          <div className="sketch-star">☆</div>
          <div className="sketch-lines">╱╱</div>

          <div className="preview-window">
            <div className="window-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="preview-content">
              <p>YouTube Thumbnail</p>
              <h3>High CTR visual concept</h3>

              <div className="thumbnail-demo">
                <strong>WOW!</strong>
              </div>
            </div>

            <div className="bow">🎀</div>
          </div>
        </div>
      </section>

      <section className="quick-services" id="services">
        <article>
          <span>▷</span>
          <div>
            <h3>YouTube Thumbnails</h3>
            <p>High-impact thumbnails designed to get clicks.</p>
          </div>
        </article>

        <article>
          <span>▣</span>
          <div>
            <h3>Shorts / Reels Editing</h3>
            <p>Short videos with captions, effects and fast pacing.</p>
          </div>
        </article>

        <article>
          <span>✎</span>
          <div>
            <h3>Social Media Content</h3>
            <p>Engaging visuals for posts, banners and more.</p>
          </div>
        </article>

        <article>
          <span>❤</span>
          <div>
            <h3>Brand Style</h3>
            <p>Consistent, cute and professional visual identity.</p>
          </div>
        </article>
      </section>

      <section className="section work" id="work">
        <div className="section-title">
          <p>Selected Work</p>
          <h2>Portfolio samples for creators, channels and social brands.</h2>
        </div>

        <div className="work-grid">
          <article className="work-card big">
            <span>Thumbnail Design</span>
            <h3>Gaming & Movie Thumbnails</h3>
            <p>Bold composition, strong emotion, contrast and clear focal points.</p>
          </article>

          <article className="work-card">
            <span>Shorts Editing</span>
            <h3>Fast-paced social videos</h3>
            <p>Captions, cuts, sound effects and retention-focused editing.</p>
          </article>

          <article className="work-card">
            <span>Social Content</span>
            <h3>Clean visual posts</h3>
            <p>Soft, cute and professional content for brands and creators.</p>
          </article>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="about-box">
          <div>
            <p>About me</p>
            <h2>Creative visuals with a cute style and business purpose.</h2>
          </div>

          <p>
            I create thumbnails, short videos and visual content for creators who need
            beautiful, consistent and engaging designs. My goal is to make every piece
            of content feel polished, clickable and memorable.
          </p>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="contact-card">
          <p>Available for projects</p>
          <h2>Let’s create visuals people want to click.</h2>
          <a href="mailto:your@email.com" className="btn primary">
            Send message
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;