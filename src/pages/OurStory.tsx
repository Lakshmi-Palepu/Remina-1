import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './OurStory.css'

export default function OurStory() {
  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className="os-hero">
        <div className="os-hero-bg-circle"></div>
        <div className="os-hero-bg-circle2"></div>
        <div className="os-hero-inner">
          <div className="os-hero-pill">Origin story</div>
          <h1 className="os-hero-h1">A man with dementia<br />picked up a pen.<br /><em>And drew our logo.</em></h1>
          <p className="os-hero-sub">This is the story of how Remina got its name, its logo, and the science that explains why it works — told exactly as it happened.</p>
          <div className="os-hero-scroll">
            <span>Scroll to read the story</span>
            <span>↓</span>
          </div>
        </div>
      </section>

      {/* ── THE SCIENCE ── */}
      <section className="os-section os-science-bg" id="science">
        <div className="os-inner">
          <div className="os-eyebrow" style={{ color: 'var(--green-dark)' }}>The science</div>
          <h2 className="os-section-h2">Why personalised memory care<br />works — in plain language.</h2>
          <div className="os-divider" style={{ background: 'var(--green)' }}></div>

          <p className="os-lead">Before we built Remina, we needed to understand <strong>why</strong> it was working. So we met with neurologists, dementia specialists, psychiatrists, and neuropsychotherapists. We walked in with our outcomes and asked one question: <strong>can you help us understand why this is working?</strong></p>
          <p className="os-lead">What they told us changed the way we think about everything.</p>

          <div className="os-quote-block">
            <p>The brain does not store all memories the same way. Dementia does not destroy them all equally — or at the same pace.</p>
          </div>

          <p className="os-lead">The memories that fade first are recent ones — what you had for breakfast, what day it is, where your keys are. These are the <strong>direct highways</strong>. In dementia, they collapse early.</p>
          <p className="os-lead">But there is another category — <strong>autobiographical memory</strong>. The memories tied to who you are. Your wedding day. The smell of your mother's kitchen. The face of your first student who made you proud. These are encoded differently. Stored deeper. Reinforced over decades. Tied to emotion, to identity, to meaning. <strong>They fade last.</strong></p>
          <p className="os-lead">That window — when deep personal memories are still partially accessible — is exactly the window Remina works in.</p>

          <div className="os-science-grid">
            <div className="os-sci-highlight">
              <div className="os-sci-label">Case study — Damodaran</div>
              <div className="os-sci-text">"He could not reliably say the word <em>red</em> when shown a red object. But show him a photograph of his wife's saree — and the colour came back. Not through the damaged highway. Through love."</div>
            </div>
            <div className="os-sci-highlight os-sci-amber">
              <div className="os-sci-label" style={{ color: 'var(--amber-dark)' }}>Case study — Rama Devi</div>
              <div className="os-sci-text" style={{ color: '#7B4F00' }}>"She could recall Tamil New Year vividly — the food, the family, the joy. But her brain could not stamp it as <em>finished</em>. From her neurological perspective, it genuinely felt like now."</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DAMODARAN ── */}
      <section className="os-section" style={{ background: '#fff' }} id="damodaran">
        <div className="os-inner">
          <div className="os-eyebrow" style={{ color: 'var(--green-dark)' }}>The mechanism</div>
          <h2 className="os-section-h2">Two people. Two different<br />mechanisms. Both real.</h2>
          <div className="os-divider" style={{ background: 'var(--green)' }}></div>

          <div className="os-damo-grid">
            <div>
              <div className="os-mechanism-card os-mc-green">
                <div className="os-eyebrow" style={{ color: 'var(--green-dark)' }}>Damodaran — colour recognition</div>
                <p style={{ fontSize: '.95rem', lineHeight: '1.85', color: 'var(--mid)', marginTop: '.5rem' }}>Colour recognition works through three layers simultaneously — the raw visual signal from the eyes, the semantic label in the brain that says <em>that is called red</em>, and the emotional association that says <em>red is the colour of my wife's saree on our wedding day</em>.</p>
                <p style={{ fontSize: '.95rem', lineHeight: '1.85', color: 'var(--mid)', marginTop: '.8rem' }}>The semantic labelling layer had weakened. But the emotional association network — anchored in the amygdala — stays intact much longer. <strong style={{ color: 'var(--green-deep)' }}>That network is the scenic route. And the scenic route was still open.</strong></p>
                <p style={{ fontSize: '.95rem', lineHeight: '1.85', color: 'var(--mid)', marginTop: '.8rem' }}>There is a principle in neuroscience: neurons that fire together, wire together. Every time we activated his emotional memory of that saree, we pulled the colour label through the back door. Repeat it enough times — and the brain begins building a new associative pathway. <strong style={{ color: 'var(--green-deep)' }}>A new road.</strong></p>
              </div>
            </div>

            <div>
              <div className="os-mechanism-card os-mc-amber">
                <div className="os-eyebrow" style={{ color: 'var(--amber-dark)' }}>Rama Devi — temporal orientation</div>
                <p style={{ fontSize: '.95rem', lineHeight: '1.85', color: 'var(--mid)', marginTop: '.5rem' }}>Normally when we recall a memory, the brain does two things simultaneously — it retrieves the content, and it attaches a temporal tag: <em>this is finished, this belongs to the past</em>.</p>
                <p style={{ fontSize: '.95rem', lineHeight: '1.85', color: 'var(--mid)', marginTop: '.8rem' }}>In her condition, the content retrieval stayed partially intact but the temporal tagging mechanism broke down. She retrieved Tamil New Year vividly — but her brain could not stamp it as completed. <strong style={{ color: '#7B4F00' }}>She was not confused or making it up. Her brain was simply missing the timestamp.</strong></p>
                <p style={{ fontSize: '.95rem', lineHeight: '1.85', color: 'var(--mid)', marginTop: '.8rem' }}>What our reinforcement therapy does is provide an external temporal anchor — since her internal one is broken. The photographs we take during the event become that anchor. Visual evidence that it was captured, completed, and finished.</p>
              </div>
              <div className="os-quote-block" style={{ marginTop: '1.2rem' }}>
                <p>We are not repairing the brain. We are using its remaining plasticity to rebuild access to functions that lost their original route.</p>
                <div className="os-attr">Remina clinical framework</div>
              </div>
            </div>
          </div>

          <div style={{ background: '#f8f8f8', borderRadius: '14px', padding: '1.8rem 2rem', marginTop: '2rem', border: '1.5px solid var(--border)' }}>
            <div className="os-eyebrow" style={{ color: 'var(--muted)' }}>What this means — and what it does not</div>
            <p style={{ fontSize: '.95rem', lineHeight: '1.85', color: 'var(--mid)', marginTop: '.5rem' }}>Remina is not reversing dementia. We are not claiming a cure. We are not a medical treatment. What we are doing is using the brain's remaining plasticity — and the emotional network's relative resilience — to rebuild functional pathways that improve daily engagement, reduce agitation, and slow the rate of cognitive withdrawal. The improvement is real. <strong style={{ color: 'var(--charcoal)' }}>But it is functional improvement — not neurological repair.</strong> That honesty is itself a strength. Because we know exactly what we are doing, why it works, and where the boundaries are.</p>
          </div>
        </div>
      </section>

      {/* ── CLINICAL TEAM ── */}
      <section className="os-section" style={{ background: 'var(--bg-warm)' }} id="clinical">
        <div className="os-inner">
          <div className="os-eyebrow" style={{ color: 'var(--green-dark)' }}>The people behind the science</div>
          <h2 className="os-section-h2">Two doctors joined<br />our advisory team.</h2>
          <div className="os-divider" style={{ background: 'var(--green)' }}></div>
          <p className="os-lead">The doctors didn't just validate what we were doing. <strong>Two of them joined our clinical advisory team.</strong> They help us review outcomes, refine our routines, and ensure that everything we build is responsible, grounded, and appropriate for this population.</p>
          <p className="os-lead">A lot of the research documentation — the clinical literature review, the evidence mapping — has been built with rigorous care. The science is not decorative. It is the foundation everything else rests on.</p>
        </div>
      </section>

      {/* ── THE NAME ── */}
      <section className="os-section" style={{ background: '#fff' }} id="name">
        <div className="os-inner">
          <div className="os-eyebrow" style={{ color: 'var(--pink-dark)' }}>The name</div>
          <h2 className="os-section-h2">It didn't come from a<br />branding agency.</h2>
          <div className="os-divider" style={{ background: 'var(--pink)' }}></div>

          <p className="os-lead">We started with <strong>Mnemosyne</strong> — Greek goddess of memory. Intellectually beautiful. Mythologically perfect. Every founder loves a name like that.</p>
          <p className="os-lead">But every time we said it to a caregiver, to a family member, to a patient's daughter — we watched their face. There was always a half-second pause. A slight distance. <strong>It was the right idea. But it wasn't the right feeling.</strong></p>
          <p className="os-lead">And in this space — feeling is everything.</p>

          <div className="os-timeline">
            <div className="os-tl-item">
              <div className="os-tl-dot os-tl-dot-green"></div>
              <div className="os-tl-title">The name didn't come from a workshop</div>
              <div className="os-tl-body">It came from a patient. A man who had been using the platform for months. The one with the colour recognition challenges — the agitation with generic therapy — the transformation when we anchored his routines in his own memories.</div>
            </div>
            <div className="os-tl-item">
              <div className="os-tl-dot os-tl-dot-amber"></div>
              <div className="os-tl-title">A quiet conversation</div>
              <div className="os-tl-body">That day, the founder was explaining what they were building. He told him — at the centre is memory. And around it, wrapping it, protecting it — is love and care. The patient didn't say much. He just listened.</div>
            </div>
            <div className="os-tl-item">
              <div className="os-tl-dot os-tl-dot-pink"></div>
              <div className="os-tl-title">He picked up a pen</div>
              <div className="os-tl-body">A few minutes later — quietly — he drew something on paper. A circle in the middle. Petals around it. The circle was uneven. The petals weren't symmetrical. The lines were slightly shaky. That drawing became our logo.</div>
            </div>
          </div>

          <div className="os-meaning-strip">
            <div className="os-meaning-cell">
              <div className="os-mc-label" style={{ color: 'var(--green-dark)' }}>Re</div>
              <div className="os-mc-word" style={{ color: 'var(--green)' }}>Re—</div>
              <div className="os-mc-desc">Reminiscence. Going back. Finding what was always there.</div>
            </div>
            <div className="os-meaning-cell">
              <div className="os-mc-label" style={{ color: 'var(--amber-dark)' }}>mina</div>
              <div className="os-mc-word" style={{ color: 'var(--amber)' }}>—mina</div>
              <div className="os-mc-desc">Soft, warm, human. A name you can say to someone you love.</div>
            </div>
            <div className="os-meaning-cell">
              <div className="os-mc-label" style={{ color: 'var(--pink-dark)' }}>Together</div>
              <div className="os-mc-word" style={{ color: 'var(--pink)' }}>Remina</div>
              <div className="os-mc-desc">Love. Care. Memory. In one word.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE LOGO ── */}
      <section className="os-section os-logo-bg" id="logo">
        <div className="os-inner">
          <div className="os-eyebrow" style={{ color: 'var(--green)' }}>The logo</div>
          <h2 className="os-section-h2 os-white">We didn't clean it up.<br />We didn't hand it to a designer<br /><em style={{ color: 'var(--green)' }}>and say make it perfect.</em></h2>
          <div className="os-divider" style={{ background: 'var(--green)' }}></div>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: 'rgba(255,255,255,.55)', marginBottom: '1.4rem' }}>We kept the irregular shapes. We kept the human lines. We kept the slightly shaky lettering.</p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: 'rgba(255,255,255,.55)', marginBottom: '2.5rem' }}><strong style={{ color: 'rgba(255,255,255,.85)' }}>Because memory is not geometric. Care is not algorithmic. And love — love is never perfectly symmetrical.</strong></p>

          <div className="os-logo-reveal">
            <div>
              <div style={{ background: '#f5f0e8', borderRadius: '20px', padding: '2rem', textAlign: 'center' }}>
                <img src="/images/reminalogo.jpeg" alt="Original hand-drawn Remina logo sketch" style={{ maxWidth: '100%', borderRadius: '12px' }} />
              </div>
              <div className="os-logo-label">
                <div className="os-logo-label-title" style={{ color: 'rgba(255,255,255,.7)' }}>The original sketch</div>
                <div className="os-logo-label-sub" style={{ color: 'rgba(255,255,255,.35)' }}>Drawn by hand, on paper</div>
              </div>
            </div>

            <div className="os-arrow-between">
              <div className="os-arrow-line"></div>
              <div className="os-arrow-tip">↓</div>
            </div>

            <div>
              <div style={{ background: '#fff', borderRadius: '20px', padding: '2rem', textAlign: 'center' }}>
                <img src="/images/remina-logo.png" alt="Official Remina logo" style={{ maxWidth: '100%', maxHeight: '120px', objectFit: 'contain' }} />
              </div>
              <div className="os-logo-label">
                <div className="os-logo-label-title" style={{ color: 'rgba(255,255,255,.7)' }}>The official logo</div>
                <div className="os-logo-label-sub" style={{ color: 'rgba(255,255,255,.35)' }}>The original, preserved</div>
              </div>
            </div>
          </div>

          <div className="os-shreya-card">
            <div className="os-shreya-icon">S</div>
            <div>
              <div className="os-shreya-quote">"We kept the imperfections because they are the point. A perfect logo would have been a lie. This one tells the truth."</div>
              <div className="os-shreya-attr">— Remina founder</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="os-cta-section">
        <h2 className="os-section-h2" style={{ marginBottom: '0.8rem' }}>Ready to bring this into<br /><em style={{ color: 'var(--green)' }}>your community?</em></h2>
        <p style={{ fontSize: '1rem', color: 'var(--mid)', maxWidth: '480px', margin: '0 auto 2rem', lineHeight: '1.8' }}>A 90-day pilot. No commitment. A genuine conversation about whether Remina is right for your community.</p>
        <a href="https://calendly.com/remina-demo" className="os-btn-cta" target="_blank" rel="noopener noreferrer">
          Book a 20-minute demo →
        </a>
      </section>

      <Footer />
    </>
  )
}
