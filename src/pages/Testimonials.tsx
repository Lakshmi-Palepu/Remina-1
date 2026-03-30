import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Testimonials.css'

function Stars() {
  return (
    <div className="t-stars">
      {[1,2,3,4,5].map(i => <div key={i} className="t-star"></div>)}
    </div>
  )
}

export default function Testimonials() {
  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <div className="t-page-hero">
        <div className="t-hero-eyebrow">Real results. Real people.</div>
        <h1 className="t-hero-h1">What memory care communities<br />say about <em>Remina.</em></h1>
        <p className="t-hero-sub">Every voice on this page is from someone who works in or lives alongside memory care — every day. Names and community names are kept confidential. The results are not.</p>
        <div className="t-role-pills">
          <a href="#ed"     className="t-role-pill rp-green">Executive Directors</a>
          <a href="#mcd"    className="t-role-pill rp-amber">Memory Care Directors</a>
          <a href="#cna"    className="t-role-pill rp-pink">CNAs &amp; Caregivers</a>
          <a href="#family" className="t-role-pill rp-blue">Families</a>
          <a href="#don"    className="t-role-pill rp-purple">Directors of Nursing</a>
        </div>
      </div>

      {/* ── 1. EXECUTIVE DIRECTORS ── */}
      <section className="t-role-section bg-white" id="ed">
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="t-role-header">
            <div className="t-role-icon-wrap" style={{ background: 'var(--green-light)' }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect x="6" y="4" width="20" height="24" rx="3" stroke="#1a9460" strokeWidth="2"/>
                <line x1="11" y1="10" x2="21" y2="10" stroke="#1a9460" strokeWidth="1.8" strokeLinecap="round"/>
                <line x1="11" y1="15" x2="21" y2="15" stroke="#1a9460" strokeWidth="1.8" strokeLinecap="round"/>
                <line x1="11" y1="20" x2="17" y2="20" stroke="#1a9460" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <div className="t-role-eyebrow" style={{ color: 'var(--green-dark)' }}>Role 01 — Executive Director</div>
              <div className="t-role-title">The business case.<br />In their own words.</div>
              <p className="t-role-desc">Executive Directors care about occupancy, survey results, PRN rates and caregiver retention. These are the metrics they are measured on. This is what they say Remina moved.</p>
            </div>
          </div>

          <div className="t-testi-grid">
            <div className="t-testi-card tc-accent-green wide">
              <div className="t-tc-kpi-row">
                <span className="t-tc-kpi kpi-green">PRN rate: 17.8% → 13.1%</span>
                <span className="t-tc-kpi kpi-green">90 days</span>
                <span className="t-tc-kpi kpi-green">Zero dignity deficiencies on survey</span>
              </div>
              <Stars />
              <div className="t-tc-quote">"</div>
              <p className="t-tc-body">Our antipsychotic rate had been stuck at <strong>17.8% for three years</strong>. We brought in consultants. We ran new protocols. Nothing moved it. Within 90 days of Remina going live, it was at <strong>13.1%</strong>. The state surveyor visited two weeks later. For the first time in our history, we had <strong>zero deficiencies in the area of resident dignity</strong>. I didn't tell her about Remina. She asked us what we had changed. That was the moment I knew this was not a pilot programme anymore.</p>
              <div className="t-tc-footer">
                <div className="t-tc-avatar" style={{ background: 'var(--green-dark)' }}>ED</div>
                <div><div className="t-tc-name">Executive Director</div></div>
                <div className="t-tc-tag kpi-green">Executive Director</div>
              </div>
            </div>

            <div className="t-testi-card tc-accent-green">
              <div className="t-tc-kpi-row">
                <span className="t-tc-kpi kpi-green">LOS +2.1 months</span>
                <span className="t-tc-kpi kpi-green">Occupancy +4 pts</span>
              </div>
              <Stars />
              <div className="t-tc-quote">"</div>
              <p className="t-tc-body">I track average length of stay obsessively. Every tenth of a month matters to my bottom line. Since Remina, our LOS has gone up <strong>2.1 months on average</strong>. That is not a rounding error. That is families choosing to keep their loved ones with us longer because they see their person being cared for as a <strong>person, not a diagnosis</strong>. Occupancy is up four points. The ROI conversation is over for me.</p>
              <div className="t-tc-footer">
                <div className="t-tc-avatar" style={{ background: 'var(--green-dark)' }}>ED</div>
                <div><div className="t-tc-name">Executive Director</div></div>
                <div className="t-tc-tag kpi-green">Executive Director</div>
              </div>
            </div>
          </div>

          <div className="t-impact-strip">
            <div><div className="t-is-label">Avg PRN reduction</div><div className="t-is-num">24%</div><div className="t-is-sub">across all ED-reported pilots</div></div>
            <div className="t-is-divider"></div>
            <div><div className="t-is-label">LOS improvement</div><div className="t-is-num">+1.5 mo</div><div className="t-is-sub">average across communities</div></div>
            <div className="t-is-divider"></div>
            <div><div className="t-is-label">Survey deficiencies</div><div className="t-is-num">↓ 68%</div><div className="t-is-sub">in resident rights &amp; dignity</div></div>
            <div className="t-is-divider"></div>
            <div><div className="t-is-label">Payback period</div><div className="t-is-num">&lt;30 days</div><div className="t-is-sub">for a 60-resident community</div></div>
          </div>
        </div>
      </section>

      {/* ── 2. MEMORY CARE DIRECTORS ── */}
      <section className="t-role-section bg-warm" id="mcd">
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="t-role-header">
            <div className="t-role-icon-wrap" style={{ background: 'var(--amber-light)' }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="10" r="5" stroke="#d4891a" strokeWidth="2"/>
                <path d="M6 26c0-5.5 4.5-9 10-9s10 3.5 10 9" stroke="#d4891a" strokeWidth="2" strokeLinecap="round"/>
                <path d="M22 8l2 2-4 4" stroke="#d4891a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div className="t-role-eyebrow" style={{ color: 'var(--amber-dark)' }}>Role 02 — Memory Care Director</div>
              <div className="t-role-title">The clinical picture.<br />Shift by shift.</div>
              <p className="t-role-desc">Memory Care Directors live inside the data — NPI compliance, sundowning patterns, behaviour tracking, staff assignment. This is where Remina changes their day.</p>
            </div>
          </div>

          <div className="t-testi-grid">
            <div className="t-testi-card tc-accent-amber">
              <div className="t-tc-kpi-row">
                <span className="t-tc-kpi kpi-amber">PRN calls ↓ 28% in 60 days</span>
                <span className="t-tc-kpi kpi-amber">Shift handoff solved</span>
              </div>
              <Stars />
              <div className="t-tc-quote">"</div>
              <p className="t-tc-body">The hardest part of my job has always been <strong>shift handoff</strong>. The night aide knows things the day aide doesn't. A new hire doesn't know what a three-year veteran learned the slow way. Remina made that problem disappear. Every caregiver on every shift has the <strong>same depth of knowledge about every resident</strong>. Our PRN call rate dropped 28% in the first 60 days. My CNAs stopped coming to me saying "I don't know what to do." They already knew.</p>
              <div className="t-tc-footer">
                <div className="t-tc-avatar" style={{ background: 'var(--amber-dark)' }}>MCD</div>
                <div><div className="t-tc-name">Memory Care Director</div></div>
                <div className="t-tc-tag kpi-amber">MC Director</div>
              </div>
            </div>

            <div className="t-testi-card tc-accent-amber">
              <div className="t-tc-kpi-row">
                <span className="t-tc-kpi kpi-amber">Sundowning incidents ↓ 33%</span>
                <span className="t-tc-kpi kpi-amber">NPI documentation 100% compliant</span>
              </div>
              <Stars />
              <div className="t-tc-quote">"</div>
              <p className="t-tc-body">Sundowning is the thing that keeps me up at night — literally. Before Remina, my 4pm to 6pm window was chaos. Now my caregivers know, before they walk into a room at 3:45pm, <strong>exactly what this resident needs when the light changes</strong>. Our sundowning incidents are down 33%. My <strong>NPI documentation is 100% compliant for the first time ever</strong>.</p>
              <div className="t-tc-footer">
                <div className="t-tc-avatar" style={{ background: 'var(--amber-dark)' }}>MCD</div>
                <div><div className="t-tc-name">Memory Care Director</div></div>
                <div className="t-tc-tag kpi-amber">MC Director</div>
              </div>
            </div>

            <div className="t-testi-card tc-accent-amber">
              <div className="t-tc-kpi-row">
                <span className="t-tc-kpi kpi-amber">Staff assignment quality up</span>
                <span className="t-tc-kpi kpi-amber">Family complaints ↓ 41%</span>
              </div>
              <Stars />
              <div className="t-tc-quote">"</div>
              <p className="t-tc-body">I can now assign caregivers to residents based on <strong>relationship match, not just schedule</strong>. The system shows me who responds best to whom. Family complaints about "my mother doesn't seem to know any of the staff" have dropped 41%. Families see the Lifebook being used. <strong>They can see that she is.</strong></p>
              <div className="t-tc-footer">
                <div className="t-tc-avatar" style={{ background: 'var(--amber-dark)' }}>MCD</div>
                <div><div className="t-tc-name">Memory Care Director</div></div>
                <div className="t-tc-tag kpi-amber">MC Director</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. CNAs & CAREGIVERS ── */}
      <section className="t-role-section bg-white" id="cna">
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="t-role-header">
            <div className="t-role-icon-wrap" style={{ background: 'var(--pink-light)' }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 6 C10 6 6 10 6 14 C6 20 16 27 16 27 C16 27 26 20 26 14 C26 10 22 6 16 6Z" stroke="#c01e58" strokeWidth="2" fill="none"/>
                <path d="M13 14h6M16 11v6" stroke="#c01e58" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <div className="t-role-eyebrow" style={{ color: 'var(--pink-dark)' }}>Role 03 — CNA &amp; Caregiver</div>
              <div className="t-role-title">The human moment.<br />Before every door.</div>
              <p className="t-role-desc">CNAs are the people who actually walk through the door. Their experience of Remina is the most immediate — and the most human.</p>
            </div>
          </div>

          <div className="t-testi-grid">
            <div className="t-testi-card tc-accent-pink wide">
              <div className="t-tc-kpi-row">
                <span className="t-tc-kpi kpi-pink">11 years as CNA</span>
                <span className="t-tc-kpi kpi-pink">Connected in first shift</span>
                <span className="t-tc-kpi kpi-pink">Zero PRN calls that week</span>
              </div>
              <Stars />
              <div className="t-tc-quote">"</div>
              <p className="t-tc-body">I have been a CNA for eleven years. Every community I worked at, I spent weeks just figuring out who the residents were. With Remina, I knew all of that <strong>before my first shift ended</strong>. I looked up one resident before I went in — retired schoolteacher, loved gospel music, her daughter is everything to her. I hummed a few bars of Amazing Grace and she held my hand. <strong>I have never connected with a resident that fast in eleven years.</strong> I did not use a single PRN call that week.</p>
              <div className="t-tc-footer">
                <div className="t-tc-avatar" style={{ background: 'var(--pink)' }}>CNA</div>
                <div><div className="t-tc-name">Certified Nursing Assistant</div></div>
                <div className="t-tc-tag kpi-pink">CNA</div>
              </div>
            </div>

            <div className="t-testi-card tc-accent-pink">
              <div className="t-tc-kpi-row">
                <span className="t-tc-kpi kpi-pink">Burnout reduced</span>
                <span className="t-tc-kpi kpi-pink">Stayed when she would have left</span>
              </div>
              <Stars />
              <div className="t-tc-quote">"</div>
              <p className="t-tc-body">I was close to leaving care work entirely. Every shift felt like I was managing people, not caring for them. <strong>Remina changed what it feels like to go to work.</strong> I know the people I care for. I know their lives. I renewed my contract. <strong>I wasn't going to.</strong></p>
              <div className="t-tc-footer">
                <div className="t-tc-avatar" style={{ background: 'var(--pink)' }}>CNA</div>
                <div><div className="t-tc-name">Care Aide</div></div>
                <div className="t-tc-tag kpi-pink">Caregiver</div>
              </div>
            </div>

            <div className="t-testi-card tc-accent-pink">
              <div className="t-tc-kpi-row">
                <span className="t-tc-kpi kpi-pink">De-escalated without PRN</span>
                <span className="t-tc-kpi kpi-pink">New hire, week 2</span>
              </div>
              <Stars />
              <div className="t-tc-quote">"</div>
              <p className="t-tc-body">I was two weeks in and a resident became very distressed. Instead of calling my supervisor I opened the app. His Lifebook said he was a veteran, that talking about his service <strong>made him feel proud and grounded</strong>. I asked him to tell me where he served. <strong>He calmed down in four minutes.</strong></p>
              <div className="t-tc-footer">
                <div className="t-tc-avatar" style={{ background: 'var(--pink)' }}>CNA</div>
                <div><div className="t-tc-name">Memory Care Aide</div></div>
                <div className="t-tc-tag kpi-pink">CNA</div>
              </div>
            </div>
          </div>

          <div className="t-impact-strip" style={{ background: 'var(--pink-light)', borderColor: '#f5c6d8' }}>
            <div><div className="t-is-label" style={{ color: 'var(--pink-dark)' }}>Caregiver retention</div><div className="t-is-num" style={{ color: 'var(--pink-dark)' }}>↑ 15%</div><div className="t-is-sub">CNAs stay longer when equipped</div></div>
            <div className="t-is-divider"></div>
            <div><div className="t-is-label" style={{ color: 'var(--pink-dark)' }}>Time to confidence</div><div className="t-is-num" style={{ color: 'var(--pink-dark)' }}>↓ 40%</div><div className="t-is-sub">new hires reach competency faster</div></div>
            <div className="t-is-divider"></div>
            <div><div className="t-is-label" style={{ color: 'var(--pink-dark)' }}>PRN calls by trained CNAs</div><div className="t-is-num" style={{ color: 'var(--pink-dark)' }}>↓ 31%</div><div className="t-is-sub">vs untrained peers on same unit</div></div>
            <div className="t-is-divider"></div>
            <div><div className="t-is-label" style={{ color: 'var(--pink-dark)' }}>Reported job satisfaction</div><div className="t-is-num" style={{ color: 'var(--pink-dark)' }}>+44%</div><div className="t-is-sub">in post-pilot caregiver survey</div></div>
          </div>
        </div>
      </section>

      {/* ── 4. FAMILIES ── */}
      <section className="t-role-section bg-warm" id="family">
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="t-role-header">
            <div className="t-role-icon-wrap" style={{ background: 'var(--blue-light)' }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="12" cy="9" r="4" stroke="#1d4ed8" strokeWidth="2"/>
                <circle cx="22" cy="11" r="3" stroke="#1d4ed8" strokeWidth="2"/>
                <path d="M4 26c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round"/>
                <path d="M22 19c2.8.5 5 3 5 6" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <div className="t-role-eyebrow" style={{ color: 'var(--blue-dark)' }}>Role 04 — Family Member</div>
              <div className="t-role-title">The fear that brought<br />them here. And what changed.</div>
              <p className="t-role-desc">Families place their most loved and most vulnerable person into the hands of strangers. Their deepest fear is that person becoming invisible. This is what they say when that fear goes away.</p>
            </div>
          </div>

          <div className="t-testi-grid">
            <div className="t-testi-card tc-accent-blue wide">
              <div className="t-tc-kpi-row">
                <span className="t-tc-kpi kpi-blue">First smile in weeks</span>
                <span className="t-tc-kpi kpi-blue">Family-initiated LOS extended</span>
              </div>
              <Stars />
              <div className="t-tc-quote">"</div>
              <p className="t-tc-body">My mother spent thirty years teaching second grade. On my next visit, her caregiver mentioned the azaleas — completely unprompted. My mother <strong>smiled for the first time in three weeks</strong>. I sat in my car afterwards and cried. We had been considering moving her to a facility closer to my sister. <strong>We are not moving her.</strong></p>
              <div className="t-tc-footer">
                <div className="t-tc-avatar" style={{ background: 'var(--blue)' }}>FAM</div>
                <div><div className="t-tc-name">Daughter</div><div className="t-tc-role">Mother — mid-stage Alzheimer's</div></div>
                <div className="t-tc-tag kpi-blue">Family</div>
              </div>
            </div>

            <div className="t-testi-card tc-accent-blue">
              <div className="t-tc-kpi-row">
                <span className="t-tc-kpi kpi-blue">Trust restored</span>
                <span className="t-tc-kpi kpi-blue">Complaints dropped to zero</span>
              </div>
              <Stars />
              <div className="t-tc-quote">"</div>
              <p className="t-tc-body">Before Remina, I called the community almost every day. Now I see it in the visit logs. <strong>Someone called him Coach last Tuesday. He talked for twenty minutes.</strong> I haven't called to check in unannounced in six weeks. That is not nothing.</p>
              <div className="t-tc-footer">
                <div className="t-tc-avatar" style={{ background: 'var(--blue)' }}>FAM</div>
                <div><div className="t-tc-name">Son</div><div className="t-tc-role">Father — early-stage dementia</div></div>
                <div className="t-tc-tag kpi-blue">Family</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. DIRECTORS OF NURSING ── */}
      <section className="t-role-section bg-white" id="don">
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="t-role-header">
            <div className="t-role-icon-wrap" style={{ background: 'var(--purple-light)' }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M6 8h20M6 14h14M6 20h10M6 26h16" stroke="#5B21B6" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="25" cy="22" r="5" fill="var(--purple-light)" stroke="#5B21B6" strokeWidth="2"/>
                <path d="M23 22h4M25 20v4" stroke="#5B21B6" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <div className="t-role-eyebrow" style={{ color: 'var(--purple-dark)' }}>Role 05 — Director of Nursing</div>
              <div className="t-role-title">Compliance, clinical risk<br />and what the data shows.</div>
              <p className="t-role-desc">Directors of Nursing are accountable for clinical outcomes, regulatory compliance and care documentation. Remina touches all three — in ways that show up directly in their audit trails and survey results.</p>
            </div>
          </div>

          <div className="t-testi-grid">
            <div className="t-testi-card tc-accent-purple">
              <div className="t-tc-kpi-row">
                <span className="t-tc-kpi kpi-purple">CMS survey — 0 citations</span>
                <span className="t-tc-kpi kpi-purple">NPI documentation 100%</span>
              </div>
              <Stars />
              <div className="t-tc-quote">"</div>
              <p className="t-tc-body">With Remina, <strong>every NPI is logged automatically the moment a caregiver confirms it</strong>. Our last CMS survey — zero citations in behavioural management. The surveyor reviewed six months of NPI records. They were complete, timestamped and tied to individual residents. <strong>That has never happened in my twelve years in this role.</strong></p>
              <div className="t-tc-footer">
                <div className="t-tc-avatar" style={{ background: 'var(--purple)' }}>DON</div>
                <div><div className="t-tc-name">Director of Nursing</div></div>
                <div className="t-tc-tag kpi-purple">Director of Nursing</div>
              </div>
            </div>

            <div className="t-testi-card tc-accent-purple">
              <div className="t-tc-kpi-row">
                <span className="t-tc-kpi kpi-purple">Hospitalisation rate ↓ 19%</span>
                <span className="t-tc-kpi kpi-purple">Incident reports ↓ 27%</span>
              </div>
              <Stars />
              <div className="t-tc-quote">"</div>
              <p className="t-tc-body">Since Remina, our hospitalisation rate from behavioural or distress-related causes is down <strong>19%</strong>. Incident reports across the unit are down 27%. The mechanism is simple: <strong>caregivers who know their residents earlier catch deterioration earlier</strong>. They notice when something is off because they know what normal looks like for that person.</p>
              <div className="t-tc-footer">
                <div className="t-tc-avatar" style={{ background: 'var(--purple)' }}>DON</div>
                <div><div className="t-tc-name">Director of Nursing</div></div>
                <div className="t-tc-tag kpi-purple">Director of Nursing</div>
              </div>
            </div>

            <div className="t-testi-card tc-accent-purple">
              <div className="t-tc-kpi-row">
                <span className="t-tc-kpi kpi-purple">Staff-to-incident ratio improved</span>
                <span className="t-tc-kpi kpi-purple">F605 compliance — first attempt</span>
              </div>
              <Stars />
              <div className="t-tc-quote">"</div>
              <p className="t-tc-body">F605 compliance used to be our most stressful survey area. We passed on the first attempt this year. The inspector reviewed our Remina NPI records and said, and I am quoting directly: <strong>"This is what F605 compliance is supposed to look like."</strong> Those words, in writing, in our survey report, are worth more to me than any marketing claim.</p>
              <div className="t-tc-footer">
                <div className="t-tc-avatar" style={{ background: 'var(--purple)' }}>DON</div>
                <div><div className="t-tc-name">Director of Nursing</div></div>
                <div className="t-tc-tag kpi-purple">Director of Nursing</div>
              </div>
            </div>
          </div>

          <div className="t-impact-strip" style={{ background: 'var(--purple-light)', borderColor: '#d8b4fe' }}>
            <div><div className="t-is-label" style={{ color: 'var(--purple-dark)' }}>F605 compliance</div><div className="t-is-num" style={{ color: 'var(--purple-dark)' }}>100%</div><div className="t-is-sub">in all surveyed pilot communities</div></div>
            <div className="t-is-divider"></div>
            <div><div className="t-is-label" style={{ color: 'var(--purple-dark)' }}>Hospitalisation rate</div><div className="t-is-num" style={{ color: 'var(--purple-dark)' }}>↓ 19%</div><div className="t-is-sub">behavioural/distress-related</div></div>
            <div className="t-is-divider"></div>
            <div><div className="t-is-label" style={{ color: 'var(--purple-dark)' }}>NPI documentation</div><div className="t-is-num" style={{ color: 'var(--purple-dark)' }}>100%</div><div className="t-is-sub">auto-logged — zero manual entry</div></div>
            <div className="t-is-divider"></div>
            <div><div className="t-is-label" style={{ color: 'var(--purple-dark)' }}>Survey citations</div><div className="t-is-num" style={{ color: 'var(--purple-dark)' }}>↓ 68%</div><div className="t-is-sub">in dignity &amp; behavioural mgmt areas</div></div>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section style={{ background: 'var(--charcoal)', padding: '4rem 3rem', textAlign: 'center' }}>
        <p style={{ fontSize: '.75rem', textTransform: 'uppercase', letterSpacing: '.16em', fontWeight: 700, color: 'var(--green)', marginBottom: '.8rem' }}>Ready to add your community's story?</p>
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 400, color: '#fff', marginBottom: '.8rem', letterSpacing: '-.02em' }}>Start a <em style={{ fontStyle: 'italic', color: 'var(--green)' }}>90-day pilot.</em> Free.</h2>
        <p style={{ fontSize: '.95rem', color: 'rgba(255,255,255,.5)', maxWidth: '480px', margin: '0 auto 2rem', lineHeight: '1.8' }}>No commitment. No sales pressure. A genuine conversation about whether Remina is right for your community.</p>
        <Link to="/#partner" style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', background: 'var(--green)', color: '#fff', padding: '.9rem 2.2rem', borderRadius: '32px', fontSize: '.95rem', fontWeight: 700, textDecoration: 'none', transition: 'background .2s' }}>Book a 20-minute demo →</Link>
        <p style={{ fontSize: '.8rem', color: 'rgba(255,255,255,.3)', marginTop: '1rem' }}>Argentum Nashville · May 18–20 2026 · Booth visit welcome</p>
      </section>

      <Footer />
    </>
  )
}
