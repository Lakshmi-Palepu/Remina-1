import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Home.css'

export default function Home() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target) }
        })
      },
      { threshold: 0.12 }
    )
    document.querySelectorAll('.fade-up').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-tagline-strip">
            <span className="tag-love">Love.</span>
            <span className="tag-dot">·</span>
            <span className="tag-care">Care.</span>
            <span className="tag-dot">·</span>
            <span className="tag-memory">Memory.</span>
          </div>
          <h1 className="hero-h1">
            Care that knows<br /><em>who you were.</em>
          </h1>
          <p className="hero-sub">Not just your diagnosis. Not just your care plan.</p>
          <p className="hero-desc">
            Remina captures every resident's life story on admission day and turns it into
            personalised care guidance for every caregiver, every shift —
            before they open the door for the first time.
          </p>
          <div className="hero-cta-row">
            <a href="#partner" className="btn-primary-lg">
              Book a 20-minute demo <span style={{ fontSize: '1rem' }}>→</span>
            </a>
            <a href="#dorothy" className="btn-secondary">
              Read Dorothy's story <span className="btn-arrow">↓</span>
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <div className="hstat-num green">72%</div>
              <div className="hstat-label">residents have no documented life story on file</div>
            </div>
            <div>
              <div className="hstat-num amber">24%</div>
              <div className="hstat-label">reduction in PRN medication events in 90 days</div>
            </div>
            <div>
              <div className="hstat-num pink">$100</div>
              <div className="hstat-label">per resident / month — founding rate</div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-blob"></div>
          <div className="hero-blob-2"></div>
          <div className="phone-wrap">
            <div className="phone">
              <div className="phone-screen">
                <div className="phone-pill"></div>
                <div className="phone-top">
                  <div className="phone-eyebrow">Before you open the door</div>
                  <div className="phone-name">Dorothy Mitchell</div>
                </div>
                <div className="phone-content">
                  <div>
                    <div className="p-section-label">Her anchors</div>
                    <div className="p-anchor"><strong>English teacher, 34 years.</strong> Ask about a favourite student — she always remembers names.</div>
                  </div>
                  <div className="p-anchor"><strong>Patsy Cline</strong> calms her when agitated. Play it quietly.</div>
                  <div className="p-anchor">Daughter <strong>Anne</strong> calls Sundays. Mention Anne's name — it grounds her.</div>
                  <div>
                    <div className="p-npi">
                      <div className="p-npi-label">Active NPI recommendation</div>
                      <div className="p-npi-text">"Ask questions, don't give instructions. She taught for 34 years — she responds to being heard."</div>
                    </div>
                  </div>
                  <div className="p-btn">I used this NPI ✓</div>
                </div>
              </div>
            </div>
            <div className="float-card float-card-1">
              <div className="fc-label">PRN events this month</div>
              <div className="fc-value fc-green">↓ 24%</div>
              <div className="fc-sub">vs. last month</div>
            </div>
            <div className="float-card float-card-2">
              <div className="fc-label">Avg. length of stay</div>
              <div className="fc-value fc-pink">+3.2 mo</div>
              <div className="fc-sub">since Remina pilot</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <div className="stats-strip">
        <div className="ss-item fade-up">
          <div className="ss-num" style={{ color: 'var(--green-dark)' }}>5.8M</div>
          <div className="ss-label">Americans living with Alzheimer's — growing every year</div>
        </div>
        <div className="ss-item fade-up" style={{ transitionDelay: '0.1s' }}>
          <div className="ss-num" style={{ color: 'var(--amber-dark)' }}>16.2% → 12.4%</div>
          <div className="ss-label">Antipsychotic rate before and after a 90-day Remina pilot</div>
        </div>
        <div className="ss-item fade-up" style={{ transitionDelay: '0.2s' }}>
          <div className="ss-num" style={{ color: 'var(--pink)' }}>1 resident</div>
          <div className="ss-label">staying one extra month pays for Remina for the whole year</div>
        </div>
      </div>

      {/* ── DOROTHY ── */}
      <section className="section-dorothy" id="dorothy">
        <div className="dorothy-quote-mark">"</div>
        <div className="dorothy-inner">
          <div className="dorothy-card fade-up">
            <div className="dorothy-card-header">
              <div className="dorothy-avatar">D</div>
              <div>
                <div className="dorothy-card-name">Dorothy Mitchell</div>
                <div className="dorothy-card-age">83 years old · Memory Care resident</div>
              </div>
            </div>
            <div className="dorothy-facts-list">
              <div className="df"><div className="df-dot" style={{ background: 'var(--green)' }}></div><div className="df-text"><strong>English teacher</strong> for 34 years</div></div>
              <div className="df"><div className="df-dot" style={{ background: 'var(--amber)' }}></div><div className="df-text">Danced to <strong>Patsy Cline</strong> at her wedding</div></div>
              <div className="df"><div className="df-dot" style={{ background: 'var(--pink)' }}></div><div className="df-text">Daughter <strong>Anne</strong> calls every Sunday</div></div>
              <div className="df"><div className="df-dot" style={{ background: 'var(--green)' }}></div><div className="df-text">Coffee <strong>black</strong>, crosswords in <strong>pen</strong></div></div>
              <div className="df"><div className="df-dot" style={{ background: 'var(--amber)' }}></div><div className="df-text">Responds to questions — <strong>not instructions</strong></div></div>
              <div className="df"><div className="df-dot" style={{ background: 'var(--pink)' }}></div><div className="df-text">Lavender reminds her of <strong>her mother</strong></div></div>
            </div>
            <div className="dorothy-without">
              <strong>Without Remina:</strong> her caregiver walks in knowing her medication schedule, her fall risk score, her dietary restrictions. Nothing else.
            </div>
          </div>

          <div className="dorothy-story fade-up" style={{ transitionDelay: '0.15s' }}>
            <div className="dorothy-eyebrow">Why Remina exists</div>
            <h2 className="dorothy-h2">Her caregiver knew<br /><em>none of this.</em></h2>
            <p className="dorothy-p">She was kind, trained, and genuinely caring. She knew Dorothy's medication schedule. Her fall risk. Her dietary restrictions. <strong>But she walked into that room not knowing who Dorothy was.</strong></p>
            <p className="dorothy-p">So she said good morning, helped Dorothy dress, and moved to the next room. Dorothy sat in the dining room that morning, alone — not because no one cared. Because no one knew.</p>
            <p className="dorothy-p">This happens in every memory care community, every shift, every day. Not from neglect. From a system that captures what residents <em>need</em> — but never who they <em>are</em>.</p>
            <p className="dorothy-p">72% of dementia residents have no documented life history on file. The result is caregivers reaching for PRN medication because they do not know that Patsy Cline calms this resident. That lavender reminds her of her mother. That she responds to questions, not instructions.</p>
            <div className="dorothy-pullquote">
              <div className="dorothy-pullquote-text">"The disease doesn't define you. Your story does. Remina exists to make sure every caregiver knows that story."</div>
              <div className="dorothy-pullquote-attr">— The reason Remina was built</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section-how" id="how">
        <div className="how-inner">
          <div className="section-eyebrow">How it works</div>
          <h2 className="section-h2">Three moments.<br /><em>One resident. Every caregiver.</em></h2>
          <div className="how-steps">
            <div className="how-step fade-up">
              <div className="how-num n1">1</div>
              <div className="how-step-title">Lifebook intake</div>
              <div className="how-step-desc">On admission day, the family completes a 20-minute life story intake. Career, family, music, daily routines, emotional anchors. This becomes the resident's Lifebook — their identity in the system.</div>
            </div>
            <div className="how-step fade-up" style={{ transitionDelay: '0.15s' }}>
              <div className="how-num n2">2</div>
              <div className="how-step-title">Personalised care cascade</div>
              <div className="how-step-desc">Remina turns the Lifebook into personalised NPI recommendations — delivered to each caregiver before every interaction, on every shift, with one-tap confirmation.</div>
            </div>
            <div className="how-step fade-up" style={{ transitionDelay: '0.3s' }}>
              <div className="how-num n3">3</div>
              <div className="how-step-title">Automatic documentation</div>
              <div className="how-step-desc">Every confirmed NPI becomes a documentation record automatically. Your state inspection readiness report builds in real time. Zero additional paperwork.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THREE ROLES ── */}
      <section className="section-roles" id="roles">
        <div className="section-eyebrow">For your entire team</div>
        <h2 className="section-h2">One platform.<br /><em>Three roles. Everyone wins.</em></h2>
        <div className="roles-grid">
          <div className="role-card green-accent fade-up">
            <div className="role-icon green">🏢</div>
            <div className="role-num green">01 — Executive Director</div>
            <div className="role-title">The business case</div>
            <div className="role-focus">Occupancy · PRN rate · LOS · Inspection readiness</div>
            <p className="role-desc">One dashboard showing your occupancy trend, PRN reduction, average length of stay, and state inspection readiness score. Remina makes the clinical case visible in business terms.</p>
            <div className="role-outcomes">
              <div className="ro"><div className="ro-check green">✓</div>Occupancy protected through longer LOS</div>
              <div className="ro"><div className="ro-check green">✓</div>PRN reduction visible to families and inspectors</div>
              <div className="ro"><div className="ro-check green">✓</div>State inspection readiness — always current</div>
            </div>
          </div>
          <div className="role-card amber-accent fade-up" style={{ transitionDelay: '0.1s' }}>
            <div className="role-icon amber">🧠</div>
            <div className="role-num amber">02 — Memory Care Director</div>
            <div className="role-title">Clinical intelligence</div>
            <div className="role-focus">NPI cascade · Sundowning risk · Staff assignment</div>
            <p className="role-desc">Manage today's rounds, flag residents at sundowning risk, assign caregivers to residents they know — and see the NPI cascade recommendations for every resident in real time.</p>
            <div className="role-outcomes">
              <div className="ro"><div className="ro-check amber">✓</div>NPI cascade before every caregiver shift</div>
              <div className="ro"><div className="ro-check amber">✓</div>Sundowning risk alerts by hour of day</div>
              <div className="ro"><div className="ro-check amber">✓</div>Weekly behaviour trend for each resident</div>
            </div>
          </div>
          <div className="role-card pink-accent fade-up" style={{ transitionDelay: '0.2s' }}>
            <div className="role-icon pink">❤️</div>
            <div className="role-num pink">03 — Caregiver</div>
            <div className="role-title">The human moment</div>
            <div className="role-focus">Life story · NPI recommendation · One-tap log</div>
            <p className="role-desc">Before opening any door, the caregiver sees who this person is. Three personal anchors. One active NPI recommendation. One-tap confirmation that builds the documentation record automatically.</p>
            <div className="role-outcomes">
              <div className="ro"><div className="ro-check pink">✓</div>Complete life story before every interaction</div>
              <div className="ro"><div className="ro-check pink">✓</div>Personalised NPI recommendation every shift</div>
              <div className="ro"><div className="ro-check pink">✓</div>Zero paperwork — one tap logs everything</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DESIGN PARTNER ── */}
      <section className="section-partner" id="partner">
        <div className="spots-pill">
          <div className="pulse-dot"></div>
          2 of 3 founding spots remaining
        </div>
        <h2 className="partner-h2">Build this with us.<br /><em>Own the outcome.</em></h2>
        <p className="partner-sub">We are not selling software. We are looking for three memory care communities who want to shape the future of personalised dementia care — and become the founding partners of Remina.</p>
        <div className="terms-grid">
          <div className="term fade-up">
            <span className="term-icon">🌱</span>
            <div className="term-label">Pilot period</div>
            <div className="term-value">90 days free</div>
            <div className="term-note">Full platform. No commitment. Weekly calls directly with the founder.</div>
          </div>
          <div className="term fade-up" style={{ transitionDelay: '0.1s' }}>
            <span className="term-icon">🔒</span>
            <div className="term-label">Founding partner rate</div>
            <div className="term-value">$100 / resident / month</div>
            <div className="term-note">Locked for 2 full years after your pilot ends. Never increases.</div>
          </div>
          <div className="term fade-up" style={{ transitionDelay: '0.2s' }}>
            <span className="term-icon">🤝</span>
            <div className="term-label">What we ask</div>
            <div className="term-value">One honest hour per week</div>
            <div className="term-note">Your feedback shapes the product. Named as founding partner on the website (optional).</div>
          </div>
        </div>
        <a href="https://calendly.com/remina-demo" className="btn-primary-lg" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex' }}>
          Book your 20-minute demo →
        </a>
        <p className="partner-note">No sales pressure. A genuine conversation about whether Remina is right for your community.</p>
      </section>

      {/* ── CONFERENCE BANNER ── */}
      <div className="conference-banner">
        <span className="cb-label">Meet us</span>
        <div className="cb-divider"></div>
        <span className="cb-text">
          <strong>Argentum Senior Living Executive Conference</strong> — Nashville, TN — May 18–20, 2026
        </span>
        <a href="#partner" className="cb-cta">Book a booth meeting</a>
      </div>

      <Footer />
    </>
  )
}
