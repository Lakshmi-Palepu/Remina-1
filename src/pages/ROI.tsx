import { useState, useMemo } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './ROI.css'

import * as XLSX from 'xlsx-js-style'

const CONSUMER_DOMAINS = ['gmail','yahoo','hotmail','outlook','icloud','me','mac','aol','protonmail','zoho','ymail','live','msn','rediffmail']

function fmtE(n: number) { return '$' + Math.round(n).toLocaleString() }
function fmt(n: number) {
  if (n >= 1e6) return '$' + (n / 1e6).toFixed(2) + 'M'
  if (n >= 1e3) return '$' + Math.round(n / 1000) + 'k'
  return '$' + Math.round(n).toLocaleString()
}
function isConsumerEmail(email: string) {
  const domain = email.split('@')[1]?.split('.')[0]?.toLowerCase() || ''
  return CONSUMER_DOMAINS.includes(domain)
}

interface Inputs { res: number; rate: number; occ: number; los: number; prn: number; turn: number }
interface FormState { name: string; company: string; email: string }
interface FormErrors { name: boolean; company: boolean; email: boolean }

export default function ROI() {
  const [inputs, setInputs] = useState<Inputs>({ res: 50, rate: 7000, occ: 88, los: 24, prn: 16, turn: 8 })
  const [form, setForm] = useState<FormState>({ name: '', company: '', email: '' })
  const [errors, setErrors] = useState<FormErrors>({ name: false, company: false, email: false })
  const [downloadDone, setDownloadDone] = useState(false)
  const [downloading, setDownloading] = useState(false)

  const C = useMemo(() => {
    const { res, rate, occ, los, prn, turn } = inputs
    const remM = res * 100
    const remA = remM * 12
    const adm  = (res / los) * 12
    const losG = adm * 1.5 * rate
    const occU = Math.min(98 - occ, 3)
    const occG = (occU / 100) * res * rate * 12
    const cgC  = Math.round(res * 0.4)
    const exits= cgC * (turn / 100) * 12
    const turS = exits * 0.15 * 3500
    const prnS = res * 2.5 * 85 * 0.24 * 12
    const insS = 5000
    const totB = losG + occG + turS + prnS + insS
    const net  = totB - remA
    const roi  = totB / remA
    const days = Math.round((remA / totB) * 365)
    const cover= remA / rate
    return { res, rate, occ, los, prnRate: prn, turnover: turn, remA, remM, losG, occG, turS, prnS, totB, net, roi, days, cover, adm, occU, exits, cgC }
  }, [inputs])

  const set = (key: keyof Inputs) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputs(prev => ({ ...prev, [key]: Number(e.target.value) }))

  const pbPct  = Math.min(100, Math.round((C.days / 365) * 100))
  const pbText = C.days < 30 ? 'Under 1 month' : C.days < 60 ? '~' + Math.round(C.days / 30) + ' month' : Math.round(C.days / 30) + ' months'

  function handleDownload() {
    const ok = {
      name:    form.name.trim().length > 0,
      company: form.company.trim().length > 0,
      email:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()) && !isConsumerEmail(form.email.trim()),
    }
    setErrors({ name: !ok.name, company: !ok.company, email: !ok.email })
    if (!ok.name || !ok.company || !ok.email) return

    setDownloading(true)
    setTimeout(() => {
      try {
        generateExcel(form.name.trim(), form.company.trim(), form.email.trim(), C)
        setDownloadDone(true)
      } catch {
        alert('Download failed — please try again.')
      } finally {
        setDownloading(false)
      }
    }, 600)
  }

  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <div className="roi-hero">
        <div className="roi-hero-eyebrow">ROI Calculator</div>
        <h1 className="roi-hero-h1">What does Remina actually cost<br /><em>vs what it actually returns?</em></h1>
        <p className="roi-hero-sub">Enter your community's numbers. See your exact annual ROI in under 60 seconds. Then download the full Excel model to share with your board.</p>
        <div className="roi-hero-cost-pill">$100 / resident / month — founding partner rate</div>
      </div>

      <div className="roi-page-wrap">

        {/* ── CALCULATOR ── */}
        <div className="roi-calc-panel">
          <div className="roi-calc-header">
            <div>
              <div className="roi-calc-header-title">Your community ROI calculator</div>
              <div className="roi-calc-header-sub">Adjust sliders — results update instantly</div>
            </div>
          </div>
          <div className="roi-calc-body">

            <div className="roi-s-label">Your community</div>
            <div className="roi-inputs-grid">
              <div className="roi-inp-card">
                <div className="roi-inp-lbl">Memory care residents</div>
                <div className="roi-inp-row">
                  <input type="number" value={inputs.res} min={10} max={500} step={1} onChange={set('res')} />
                </div>
              </div>
              <div className="roi-inp-card">
                <div className="roi-inp-lbl">Monthly fee per resident</div>
                <div className="roi-inp-row"><span className="roi-inp-pfx">$</span>
                  <input type="number" value={inputs.rate} min={3000} max={15000} step={100} onChange={set('rate')} />
                </div>
              </div>
              <div className="roi-inp-card">
                <div className="roi-inp-lbl">Occupancy rate</div>
                <input type="range" min={70} max={98} value={inputs.occ} step={1} onChange={set('occ')} />
                <div className="roi-range-row"><span>70%</span><span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--charcoal)' }}>{inputs.occ}%</span><span>98%</span></div>
              </div>
              <div className="roi-inp-card">
                <div className="roi-inp-lbl">Avg. length of stay (months)</div>
                <div className="roi-inp-row">
                  <input type="number" value={inputs.los} min={6} max={60} step={1} onChange={set('los')} />
                </div>
              </div>
              <div className="roi-inp-card">
                <div className="roi-inp-lbl">Antipsychotic / PRN rate</div>
                <input type="range" min={5} max={35} value={inputs.prn} step={1} onChange={set('prn')} />
                <div className="roi-range-row"><span>5%</span><span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--charcoal)' }}>{inputs.prn}%</span><span>35%</span></div>
              </div>
              <div className="roi-inp-card">
                <div className="roi-inp-lbl">Monthly caregiver turnover</div>
                <input type="range" min={2} max={20} value={inputs.turn} step={1} onChange={set('turn')} />
                <div className="roi-range-row"><span>2%</span><span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--charcoal)' }}>{inputs.turn}%</span><span>20%</span></div>
              </div>
            </div>

            <div className="roi-s-label">Your ROI</div>
            <div className="roi-results-top">
              <div className="roi-big-kpi green">
                <div className="roi-bk-label green">Annual ROI</div>
                <div className="roi-bk-num green">{C.roi.toFixed(1)}x</div>
                <div className="roi-bk-sub">{fmtE(C.totB)} return on {fmtE(C.remA)} investment</div>
              </div>
              <div className="roi-big-kpi amber">
                <div className="roi-bk-label amber">Net annual benefit</div>
                <div className="roi-bk-num amber">{fmtE(C.net)}</div>
                <div className="roi-bk-sub">after Remina cost of {fmtE(C.remA)}/yr</div>
              </div>
            </div>

            <div className="roi-kpi-row">
              <div className="roi-mini-kpi"><div className="roi-mk-label">Remina annual cost</div><div className="roi-mk-val">{fmtE(C.remA)}</div><div className="roi-mk-note">{C.res} res × $100/mo × 12</div></div>
              <div className="roi-mini-kpi"><div className="roi-mk-label">LOS revenue gain</div><div className="roi-mk-val">{fmt(C.losG)}</div><div className="roi-mk-note">{C.adm.toFixed(1)} admissions/yr +1.5mo</div></div>
              <div className="roi-mini-kpi"><div className="roi-mk-label">Occupancy gain</div><div className="roi-mk-val">{fmt(C.occG)}</div><div className="roi-mk-note">+{C.occU} occ pts → revenue</div></div>
              <div className="roi-mini-kpi"><div className="roi-mk-label">Turnover saving</div><div className="roi-mk-val">{fmt(C.turS)}</div><div className="roi-mk-note">{Math.round(C.exits * 0.15)} exits saved × $3.5k</div></div>
            </div>

            <div className="roi-breakdown">
              <div className="roi-bd-row"><div className="roi-bd-left"><div className="roi-bd-dot" style={{ background: 'var(--green)' }}></div><div><div className="roi-bd-text">Length of stay revenue gain</div><div className="roi-bd-note">{C.adm.toFixed(1)} admissions/yr, each +1.5 months at {fmtE(C.rate)}/mo</div></div></div><div className="roi-bd-val pos">{fmtE(C.losG)}</div></div>
              <div className="roi-bd-row"><div className="roi-bd-left"><div className="roi-bd-dot" style={{ background: 'var(--green)' }}></div><div><div className="roi-bd-text">Occupancy improvement revenue</div><div className="roi-bd-note">+{C.occU} pts on {C.res} resident capacity</div></div></div><div className="roi-bd-val pos">{fmtE(C.occG)}</div></div>
              <div className="roi-bd-row"><div className="roi-bd-left"><div className="roi-bd-dot" style={{ background: 'var(--amber)' }}></div><div><div className="roi-bd-text">Caregiver turnover cost saved</div><div className="roi-bd-note">{C.exits.toFixed(1)} exits/yr, 15% reduction = {Math.round(C.exits * 0.15)} saved × $3,500</div></div></div><div className="roi-bd-val pos">{fmtE(C.turS)}</div></div>
              <div className="roi-bd-row"><div className="roi-bd-left"><div className="roi-bd-dot" style={{ background: 'var(--amber)' }}></div><div><div className="roi-bd-text">PRN medication cost reduction</div><div className="roi-bd-note">{C.res} res × 2.5 events/mo × $85 × 24% reduction × 12</div></div></div><div className="roi-bd-val pos">{fmtE(C.prnS)}</div></div>
              <div className="roi-bd-row"><div className="roi-bd-left"><div className="roi-bd-dot" style={{ background: '#9e9e9e' }}></div><div><div className="roi-bd-text">Inspection deficiency avoided</div><div className="roi-bd-note">Conservative — 1 deficiency/year</div></div></div><div className="roi-bd-val pos">$5,000</div></div>
              <div className="roi-bd-row roi-total-row"><div className="roi-bd-left"><div className="roi-bd-dot" style={{ background: 'var(--green-dark)' }}></div><div><div className="roi-bd-text" style={{ fontWeight: 700 }}>Total benefit</div></div></div><div className="roi-bd-val pos big">{fmtE(C.totB)}</div></div>
              <div className="roi-bd-row roi-cost-row"><div className="roi-bd-left"><div className="roi-bd-dot" style={{ background: '#e24b4a' }}></div><div><div className="roi-bd-text">Remina annual cost</div><div className="roi-bd-note">{C.res} res × $100/mo × 12 months</div></div></div><div className="roi-bd-val neg">({fmtE(C.remA)})</div></div>
              <div className="roi-bd-row roi-net-row"><div className="roi-bd-left"><div className="roi-bd-dot" style={{ background: 'var(--green-deep)' }}></div><div><div className="roi-bd-text" style={{ fontWeight: 700, fontSize: '13px' }}>Net annual benefit</div></div></div><div className="roi-bd-val pos big">{fmtE(C.net)}</div></div>
            </div>

            <div className="roi-payback-section">
              <div className="roi-pb-header"><span className="roi-pb-title">Payback period</span><span className="roi-pb-period">{pbText}</span></div>
              <div className="roi-pb-track"><div className="roi-pb-fill" style={{ width: pbPct + '%' }}></div></div>
              <div className="roi-pb-ticks"><span>Day 1</span><span>1 mo</span><span>3 mo</span><span>6 mo</span><span>12 mo</span></div>
              <div className="roi-payback-insight">
                <strong>The break-even in plain English:</strong> If just <strong>{Math.ceil(C.cover)}</strong> residents each stay one extra month, Remina pays for itself completely for the year. That is <strong>{(Math.ceil(C.cover) / C.res * 100).toFixed(1)}%</strong> of your residents.
              </div>
            </div>

            <div className={`roi-verdict ${C.roi >= 5 ? 'strong' : 'moderate'}`}>
              {C.roi >= 5 ? (
                <>
                  <div className="roi-verdict-title">Strong ROI — this is a clear financial fit</div>
                  <div className="roi-verdict-body">At {C.roi.toFixed(1)}x return, Remina generates {fmtE(C.net)} in net annual value on a {fmtE(C.remA)} investment. Payback period: {C.days} days. Just {Math.ceil(C.cover)} residents staying one extra month covers the full annual cost.</div>
                </>
              ) : (
                <>
                  <div className="roi-verdict-title">Positive ROI — {C.roi.toFixed(1)}x return, {C.days}-day payback</div>
                  <div className="roi-verdict-body">Remina generates {fmtE(C.net)} net annual value. The LOS gain alone covers {Math.round(C.losG / C.remA * 100)}% of annual cost. Try adjusting your rate or resident count to see the full picture.</div>
                </>
              )}
            </div>

            {/* ── EMAIL GATE ── */}
            {!downloadDone ? (
              <div className="roi-email-gate">
                <div className="roi-eg-title">Get your personalised ROI report</div>
                <div className="roi-eg-sub">Enter your details and we'll generate a full 3-sheet Excel model with your exact numbers — ready to share with your board or ownership group.</div>
                <div className="roi-eg-fields">
                  <div className="roi-eg-field">
                    <label htmlFor="f-name">Your name</label>
                    <input type="text" id="f-name" placeholder="Sarah Johnson" value={form.name} onChange={e => { setForm(p => ({ ...p, name: e.target.value })); setErrors(p => ({ ...p, name: false })) }} className={errors.name ? 'error' : ''} />
                    {errors.name && <div className="roi-eg-error">Please enter your name</div>}
                  </div>
                  <div className="roi-eg-field">
                    <label htmlFor="f-company">Community / company name</label>
                    <input type="text" id="f-company" placeholder="Silverpine Memory Care" value={form.company} onChange={e => { setForm(p => ({ ...p, company: e.target.value })); setErrors(p => ({ ...p, company: false })) }} className={errors.company ? 'error' : ''} />
                    {errors.company && <div className="roi-eg-error">Please enter your community name</div>}
                  </div>
                  <div className="roi-eg-field roi-eg-full">
                    <label htmlFor="f-email">Official work email <span style={{ color: 'var(--pink)', fontWeight: 700 }}>*</span></label>
                    <input type="email" id="f-email" placeholder="sarah.johnson@silverpine.com" value={form.email} onChange={e => { setForm(p => ({ ...p, email: e.target.value })); setErrors(p => ({ ...p, email: false })) }} className={errors.email ? 'error' : ''} />
                    {errors.email && <div className="roi-eg-error">Please enter a valid work email (no gmail, yahoo, hotmail)</div>}
                  </div>
                </div>
                <div className="roi-eg-privacy">Your email is used only to send this report and notify you about Remina updates. No spam, ever. We do not accept personal email addresses (gmail, yahoo, hotmail, outlook.com).</div>
                <button className="roi-btn-download" onClick={handleDownload} disabled={downloading}>
                  <svg viewBox="0 0 16 16" fill="none"><path d="M8 2v8M5 8l3 3 3-3M3 12h10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  {downloading ? 'Building your Excel...' : 'Download my ROI Excel report'}
                </button>
              </div>
            ) : (
              <div className="roi-success-msg show">
                <div className="roi-success-icon">✓</div>
                <div className="roi-success-title">{form.name.split(' ')[0]}, your ROI report is downloading</div>
                <div className="roi-success-body">Your personalised report for <strong>{form.company}</strong> is ready. Srikar from Remina will follow up at <strong>{form.email}</strong> within 24 hours.</div>
                <button className="roi-btn-dl-again" onClick={() => generateExcel(form.name, form.company, form.email, C)}>Download again</button>
              </div>
            )}

          </div>
        </div>

        {/* ── SIDEBAR ── */}
        <div className="roi-sidebar">
          <div className="roi-demo-cta">
            <div className="roi-demo-cta-title">See Remina live at Argentum</div>
            <div className="roi-demo-cta-sub">Nashville, TN · May 18–20, 2026. Book 15 minutes with Srikar at the booth.</div>
            <a href="https://calendly.com/remina-demo" target="_blank" rel="noopener noreferrer" className="roi-btn-cta">Book a booth meeting →</a>
            <div className="roi-spots-row"><div className="roi-pulse"></div><span className="roi-spots-txt">2 of 3 design partner spots remaining</span></div>
          </div>

          <div className="roi-side-card">
            <div className="roi-side-card-header green">Validated assumptions</div>
            <div className="roi-side-card-body">
              {[
                ['LOS improvement', '+1.5 months average', 'Peer-reviewed NPI literature — personalised dementia care extends stay'],
                ['PRN / antipsychotic reduction', '24% reduction', 'Remina pilot data — 16.2% → 12.4% antipsychotic rate'],
                ['Occupancy uplift', '+2 to +3 pts', 'Word-of-mouth referrals + inspection score improvements'],
                ['Caregiver turnover reduction', '15% fewer exits', 'SHRM senior living benchmark — equipped caregivers stay longer'],
                ['Replacement cost per caregiver', '$3,500 average', 'Recruiting, onboarding, training cost benchmark'],
                ['Inspection deficiency avoided', '$5,000 conservative', 'CMS civil monetary penalty range $5,000–$50,000'],
              ].map(([label, value, source]) => (
                <div key={label} className="roi-assumption-item">
                  <div className="roi-asm-label">{label}</div>
                  <div className="roi-asm-value">{value}</div>
                  <div className="roi-asm-source">{source}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="roi-side-card">
            <div className="roi-side-card-header charcoal">What the Excel contains</div>
            <div className="roi-side-card-body" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { num: '1', color: 'var(--green-light)', textColor: 'var(--green-deep)', title: 'Executive Summary', desc: 'One-page board-ready ROI summary with your numbers' },
                { num: '2', color: 'var(--amber-light)', textColor: '#e65100', title: 'Detailed Financial Model', desc: 'Live Excel formulas — change any input, all results update' },
                { num: '3', color: 'var(--pink-light)', textColor: 'var(--pink-dark)', title: 'KPI Dashboard', desc: 'Before vs After table — all 6 KPIs with sources' },
              ].map(({ num, color, textColor, title, desc }) => (
                <div key={num} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '4px', background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700, color: textColor, flexShrink: 0 }}>{num}</div>
                  <div><div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--charcoal)' }}>{title}</div><div style={{ fontSize: '11px', color: 'var(--muted)' }}>{desc}</div></div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </>
  )
}

// ── Excel generation ────────────────────────────────────────────────────────
type CalcResult = ReturnType<typeof calcDummy>
function calcDummy() { return { res:0,rate:0,occ:0,los:0,prnRate:0,turnover:0,remA:0,remM:0,losG:0,occG:0,turS:0,prnS:0,totB:0,net:0,roi:0,days:0,cover:0,adm:0,occU:0,exits:0,cgC:0 } }

function generateExcel(_name: string, company: string, email: string, L: CalcResult) {
  const wb = XLSX.utils.book_new()
  const money = (v: number) => Math.round(v)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fill  = (rgb: string) => ({ patternType:'solid', fgColor:{ rgb } })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fnt   = (opts: any) => ({ name:'Arial', ...opts })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const aln   = (h: string, v?: string, wrap?: boolean) => ({ horizontal:h, vertical:v||'center', wrapText:!!wrap })
  const bdr   = () => ({ top:{style:'thin',color:{rgb:'CCCCCC'}}, bottom:{style:'thin',color:{rgb:'CCCCCC'}}, left:{style:'thin',color:{rgb:'CCCCCC'}}, right:{style:'thin',color:{rgb:'CCCCCC'}} })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mk = (arr: string[]) => arr.map((r: string) => XLSX.utils.decode_range(r))

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function sc(ws: any, addr: string, val: any, s?: any, z?: string) {
    ws[addr] = { v: val, t: typeof val === 'number' ? 'n' : 's', s: s || {} }
    if (z) ws[addr].z = z
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function fc(ws: any, addr: string, f: string, v: any, s?: any, z?: string) {
    ws[addr] = { t: 'n', f, v, s: s || {} }
    if (z) ws[addr].z = z
  }

  // Sheet 1 — Executive Summary
  const ws1 = {} as Record<string, unknown>
  const E = {
    titleGreen : { fill:fill('2DBD7E'), font:fnt({bold:true,sz:16,color:{rgb:'FFFFFF'}}), alignment:aln('left','center') },
    subGreen   : { fill:fill('1A9460'), font:fnt({italic:true,sz:10,color:{rgb:'FFFFFF'}}), alignment:aln('left','center') },
    spacer     : { fill:fill('E8F8F0') },
    tagline    : { font:fnt({italic:true,sz:10,color:{rgb:'1A9460'}}), alignment:aln('left','center') },
    kpiGN      : { fill:fill('E8F8F0'), font:fnt({bold:true,sz:20,color:{rgb:'1A9460'}}), alignment:aln('center','center') },
    kpiAN      : { fill:fill('FFF8E1'), font:fnt({bold:true,sz:20,color:{rgb:'633806'}}), alignment:aln('center','center') },
    kpiGL      : { fill:fill('E8F8F0'), font:fnt({sz:9,color:{rgb:'1A9460'}}), alignment:aln('center','center') },
    kpiAL      : { fill:fill('FFF8E1'), font:fnt({sz:9,color:{rgb:'633806'}}), alignment:aln('center','center') },
    secDark    : { fill:fill('1C1C1C'), font:fnt({bold:true,sz:11,color:{rgb:'FFFFFF'}}), alignment:aln('left','center') },
    secGreen   : { fill:fill('1A9460'), font:fnt({bold:true,sz:11,color:{rgb:'FFFFFF'}}), alignment:aln('left','center') },
    inLbl      : (o: boolean) => ({ fill:fill(o?'F5F5F5':'FFFFFF'), font:fnt({sz:10,color:{rgb:'444444'}}), border:bdr(), alignment:aln('left','center') }),
    inVal      : (o: boolean) => ({ fill:fill(o?'F5F5F5':'FFFFFF'), font:fnt({bold:true,sz:11,color:{rgb:'1C1C1C'}}), border:bdr(), alignment:aln('right','center') }),
    inUnt      : (o: boolean) => ({ fill:fill(o?'F5F5F5':'FFFFFF'), font:fnt({sz:9,color:{rgb:'888888'}}), border:bdr(), alignment:aln('left','center') }),
    benLbl     : { fill:fill('FFFFFF'), font:fnt({sz:10,color:{rgb:'1C1C1C'}}), alignment:aln('left','center') },
    benVal     : { fill:fill('FFFFFF'), font:fnt({sz:10,color:{rgb:'1C1C1C'}}), alignment:aln('right','center') },
    benNot     : { fill:fill('FFFFFF'), font:fnt({italic:true,sz:8,color:{rgb:'888888'}}), alignment:aln('left','center',true) },
    totLbl     : { fill:fill('F5F5F5'), font:fnt({bold:true,sz:11,color:{rgb:'1C1C1C'}}), alignment:aln('left','center') },
    totVal     : { fill:fill('F5F5F5'), font:fnt({bold:true,sz:12,color:{rgb:'1A9460'}}), alignment:aln('right','center') },
    cstLbl     : { fill:fill('FFFFFF'), font:fnt({sz:10,color:{rgb:'1C1C1C'}}), alignment:aln('left','center') },
    cstVal     : { fill:fill('FFFFFF'), font:fnt({sz:10,color:{rgb:'B71C1C'}}), alignment:aln('right','center') },
    netLbl     : { fill:fill('E8F8F0'), font:fnt({bold:true,sz:11,color:{rgb:'1A9460'}}), alignment:aln('left','center') },
    netVal     : { fill:fill('E8F8F0'), font:fnt({bold:true,sz:12,color:{rgb:'1A9460'}}), alignment:aln('right','center') },
    payBanner  : { fill:fill('2DBD7E'), font:fnt({bold:true,sz:11,color:{rgb:'FFFFFF'}}), alignment:aln('center','center',true) },
    payNote    : { fill:fill('E8F8F0'), font:fnt({italic:true,sz:10,color:{rgb:'1A9460'}}), alignment:aln('left','center',true) },
    footer     : { font:fnt({italic:true,sz:9,color:{rgb:'AAAAAA'}}), alignment:aln('center','center') },
  }

  sc(ws1,'B2','REMINA – ROI Analysis Report', E.titleGreen)
  sc(ws1,'B3',`Prepared for: ${company}  |  Contact: ${email}`, E.subGreen)
  sc(ws1,'B4','', E.spacer)
  sc(ws1,'B5','Love. Care. Memory. – $100 per resident per month', E.tagline)
  sc(ws1,'B7', L.roi.toFixed(1)+'x', E.kpiGN)
  sc(ws1,'D7', money(L.net), E.kpiAN, '$#,##0')
  sc(ws1,'B9','Annual ROI Multiple', E.kpiGL)
  sc(ws1,'D9','Net Annual Benefit', E.kpiAL)
  sc(ws1,'B11','Your Community Inputs', E.secDark)

  ;[
    ['Memory care residents',      L.res,                              'residents'],
    ['Monthly fee per resident',   '$'+money(L.rate).toLocaleString(), '$/month'],
    ['Current occupancy rate',     L.occ+'%',                         ''],
    ['Average length of stay',     L.los+' months',                   ''],
    ['Current antipsychotic rate', L.prnRate+'%',                     ''],
    ['Monthly caregiver turnover', L.turnover+'%/mo',                 ''],
  ].forEach(([lbl, val, unit], i) => {
    const r = 12+i, o = i%2===0
    sc(ws1,`B${r}`, lbl,  E.inLbl(o))
    sc(ws1,`D${r}`, val,  E.inVal(o))
    if (unit) sc(ws1,`E${r}`, unit, E.inUnt(o))
  })

  sc(ws1,'B19','ROI Results – Annual Impact', E.secGreen)
  ;[
    ['Length of stay revenue gain',   money(L.losG), `${L.adm.toFixed(1)} admissions/yr × 1.5 extra months × $${money(L.rate).toLocaleString()}`],
    ['Occupancy improvement revenue', money(L.occG), `+${L.occU} pts uplift on ${L.res} residents`],
    ['Caregiver turnover cost saved', money(L.turS), `${L.exits.toFixed(1)} exits/yr, 15% reduction × $3,500`],
    ['PRN medication cost reduction', money(L.prnS), `${L.res} res × 2.5 events/mo × $85 × 24% × 12`],
    ['Inspection deficiency avoided', 5000,           'Conservative — 1 deficiency/year'],
  ].forEach(([lbl, val, note], i) => {
    const r = 20+i
    sc(ws1,`B${r}`, lbl,  E.benLbl)
    sc(ws1,`D${r}`, val,  E.benVal, '$#,##0')
    sc(ws1,`E${r}`, note, E.benNot)
  })

  sc(ws1,'B25','TOTAL BENEFIT',      E.totLbl); sc(ws1,'D25', money(L.totB), E.totVal, '$#,##0')
  sc(ws1,'B26','Remina Annual Cost', E.cstLbl); sc(ws1,'D26',-money(L.remA), E.cstVal, '$#,##0;($#,##0)')
  sc(ws1,'B27','NET ANNUAL BENEFIT', E.netLbl); sc(ws1,'D27', money(L.net),  E.netVal, '$#,##0')
  sc(ws1,'B29',`PAYBACK PERIOD: ${L.days} days  |  Just ${Math.ceil(L.cover)} resident-months cover the full annual cost  |  ROI: ${L.roi.toFixed(1)}x`, E.payBanner)
  sc(ws1,'B30',`If just ${Math.ceil(L.cover)} residents stay one extra month, Remina pays for itself completely for the year.`, E.payNote)
  sc(ws1,'B32','Remina — Love. Care. Memory.  |  hello@remina.ai  |  remina.ai  |  Argentum Nashville May 18–20 2026', E.footer)

  ws1['!ref'] = 'A1:F32'
  ws1['!merges'] = mk(['B2:E2','B3:E3','B4:E4','B5:E5','B7:C8','D7:E8','B9:C9','D9:E9','B11:E11','B12:C12','B13:C13','B14:C14','B15:C15','B16:C16','B17:C17','B19:E19','B20:C20','B21:C21','B22:C22','B23:C23','B24:C24','B25:C25','B26:C26','B27:C27','B29:E29','B30:E30','B32:E32'])
  ws1['!cols'] = [{wch:3},{wch:32},{wch:22},{wch:18},{wch:20},{wch:4}]
  XLSX.utils.book_append_sheet(wb, ws1, 'Executive Summary')

  // Sheet 2 — Detailed Model
  const ws2 = {} as Record<string, unknown>
  const M = {
    title  : { fill:fill('2DBD7E'), font:fnt({bold:true,sz:14,color:{rgb:'FFFFFF'}}), alignment:aln('left','center') },
    secDark: { fill:fill('1C1C1C'), font:fnt({bold:true,sz:11,color:{rgb:'FFFFFF'}}), alignment:aln('left','center') },
    secGrn : { fill:fill('1A9460'), font:fnt({bold:true,sz:11,color:{rgb:'FFFFFF'}}), alignment:aln('left','center') },
    inLbl  : { fill:fill('F5F5F5'), font:fnt({sz:10,color:{rgb:'444444'}}), border:bdr(), alignment:aln('left','center') },
    inVal  : { fill:fill('FFFFF0'), font:fnt({bold:true,sz:11,color:{rgb:'0000FF'}}), border:bdr(), alignment:aln('right','center') },
    outLbl : { fill:fill('FFFFFF'), font:fnt({sz:10,color:{rgb:'1C1C1C'}}), border:bdr(), alignment:aln('left','center') },
    outVal : { fill:fill('FFFFFF'), font:fnt({sz:10,color:{rgb:'1C1C1C'}}), border:bdr(), alignment:aln('right','center') },
    totLbl : { fill:fill('F5F5F5'), font:fnt({bold:true,sz:10,color:{rgb:'1C1C1C'}}), border:bdr(), alignment:aln('left','center') },
    totVal : { fill:fill('F5F5F5'), font:fnt({bold:true,sz:11,color:{rgb:'1C1C1C'}}), border:bdr(), alignment:aln('right','center') },
    netLbl : { fill:fill('E8F8F0'), font:fnt({bold:true,sz:10,color:{rgb:'1A9460'}}), border:bdr(), alignment:aln('left','center') },
    netVal : { fill:fill('E8F8F0'), font:fnt({bold:true,sz:11,color:{rgb:'1A9460'}}), border:bdr(), alignment:aln('right','center') },
    roiLbl : { fill:fill('F5F5F5'), font:fnt({bold:true,sz:10,color:{rgb:'1C1C1C'}}), border:bdr(), alignment:aln('left','center') },
    roiVal : { fill:fill('F5F5F5'), font:fnt({bold:true,sz:11,color:{rgb:'1C1C1C'}}), border:bdr(), alignment:aln('right','center') },
  }
  sc(ws2,'B1','REMINA — Detailed Financial Model', M.title)
  sc(ws2,'B3','INPUTS', M.secDark)
  ;[
    ['Number of memory care residents', L.res,          null   ],
    ['Monthly fee per resident ($)',    L.rate,         '$#,##0'],
    ['Current occupancy rate',          L.occ/100,      '0.0%' ],
    ['Average length of stay (months)', L.los,          '0.0'  ],
    ['Current antipsychotic rate',      L.prnRate/100,  '0.0%' ],
    ['Monthly caregiver turnover',      L.turnover/100, '0.0%' ],
  ].forEach(([lbl, val, z], i) => {
    const r = 4+i
    sc(ws2,`B${r}`, lbl, M.inLbl)
    sc(ws2,`C${r}`, val, M.inVal, z as string)
  })
  sc(ws2,'B11','CALCULATED OUTPUTS', M.secGrn)
  ;['Remina monthly cost','Remina annual cost','Annual admissions','LOS revenue gain','Occupancy uplift (pts)','Occupancy revenue gain','Caregiver count','Annual caregiver exits','Turnover saving','PRN cost saving','Inspection saving']
    .forEach((lbl, i) => sc(ws2,`B${12+i}`, lbl, M.outLbl))
  ;[
    ['C12','C4*100',                           L.res*100,  '$#,##0'],
    ['C13','C4*100*12',                        L.remA,     '$#,##0'],
    ['C14','C4/C7*12',                         L.adm,      '0.0'  ],
    ['C15','(C4/C7*12)*1.5*C5',               L.losG,     '$#,##0'],
    ['C16','MIN(0.98-C6,0.03)',                L.occU/100, '0.0%' ],
    ['C17','MIN(0.98-C6,0.03)*C4*C5*12',      L.occG,     '$#,##0'],
    ['C18','ROUND(C4*0.4,0)',                  L.cgC,      '0'    ],
    ['C19','ROUND(C4*0.4,0)*C9*12',           L.exits,    '0.0'  ],
    ['C20','ROUND(C4*0.4,0)*C9*12*0.15*3500', L.turS,     '$#,##0'],
    ['C21','C4*2.5*85*0.24*12',               L.prnS,     '$#,##0'],
    ['C22','5000',                             5000,       '$#,##0'],
  ].forEach(([addr, f, v, z]) => fc(ws2, addr as string, f as string, v, M.outVal, z as string))
  sc(ws2,'B23','TOTAL BENEFIT',         M.totLbl); fc(ws2,'C23','C15+C17+C20+C21+C22',    L.totB, M.totVal,'$#,##0')
  sc(ws2,'B24','NET ANNUAL BENEFIT',    M.netLbl); fc(ws2,'C24','C23-C13',                 L.net,  M.netVal,'$#,##0')
  sc(ws2,'B25','ROI multiple',          M.roiLbl); fc(ws2,'C25','C23/C13',                 L.roi,  M.roiVal,'0.0"x"')
  sc(ws2,'B26','Payback period (days)', M.roiLbl); fc(ws2,'C26','ROUND(C13/C23*365,0)',    L.days, M.roiVal,'0')
  ws2['!ref'] = 'A1:G26'
  ws2['!merges'] = mk(['B1:F1','B3:F3','C4:D4','C5:D5','C6:D6','C7:D7','C8:D8','C9:D9','B11:F11'])
  ws2['!cols'] = [{wch:3},{wch:36},{wch:18},{wch:18},{wch:4},{wch:4},{wch:4}]
  XLSX.utils.book_append_sheet(wb, ws2, 'Detailed Model')

  // Sheet 3 — KPI Dashboard
  const ws3 = {} as Record<string, unknown>
  const K = {
    title  : { fill:fill('1C1C1C'), font:fnt({bold:true,sz:14,color:{rgb:'FFFFFF'}}), alignment:aln('left','center') },
    subHdr : { fill:fill('F5F5F5'), font:fnt({bold:true,sz:10,color:{rgb:'444444'}}), alignment:aln('left','center') },
    colHdr : { fill:fill('1A9460'), font:fnt({bold:true,sz:10,color:{rgb:'FFFFFF'}}), border:bdr(), alignment:aln('center','center') },
    green  : { fill:fill('E8F8F0'), font:fnt({sz:10,color:{rgb:'1A9460'}}), border:bdr(), alignment:aln('left','center') },
    greenV : { fill:fill('E8F8F0'), font:fnt({bold:true,sz:11,color:{rgb:'1A9460'}}), border:bdr(), alignment:aln('center','center') },
    amber  : { fill:fill('FFF8E1'), font:fnt({sz:10,color:{rgb:'633806'}}), border:bdr(), alignment:aln('left','center') },
    amberV : { fill:fill('FFF8E1'), font:fnt({bold:true,sz:11,color:{rgb:'633806'}}), border:bdr(), alignment:aln('center','center') },
    pink   : { fill:fill('FDE8F1'), font:fnt({sz:10,color:{rgb:'880E4F'}}), border:bdr(), alignment:aln('left','center') },
    pinkV  : { fill:fill('FDE8F1'), font:fnt({bold:true,sz:11,color:{rgb:'880E4F'}}), border:bdr(), alignment:aln('center','center') },
    imprvt : { fill:fill('FFFFFF'), font:fnt({bold:true,sz:10,color:{rgb:'555555'}}), border:bdr(), alignment:aln('center','center') },
    source : { fill:fill('FFFFFF'), font:fnt({italic:true,sz:10,color:{rgb:'555555'}}), border:bdr(), alignment:aln('left','center') },
    disc   : { font:fnt({italic:true,sz:9,color:{rgb:'888888'}}), alignment:aln('left','center',true) },
  }
  sc(ws3,'B1','Remina KPI Impact Dashboard', K.title)
  sc(ws3,'B3','Before vs After — 90-day pilot outcomes', K.subHdr)
  ;['KPI','Before Remina','After Remina (90 days)','Improvement','Source'].forEach((h, i) => {
    sc(ws3, String.fromCharCode(66+i)+'4', h, K.colHdr)
  })
  ;[
    ['green','Length of Stay',            `${L.los} months`,                                                        `${(L.los+1.5).toFixed(1)} months`,                                    '+1.5 months',  'NPI peer-reviewed literature'],
    ['amber','Antipsychotic Rate',         `${L.prnRate}%`,                                                          `${(L.prnRate*0.76).toFixed(1)}%`,                                     '-24%',         'Remina pilot data'],
    ['green','Occupancy Rate',             `${L.occ}%`,                                                              `${Math.min(98,L.occ+L.occU)}%`,                                       `+${L.occU} pts`,'Family referrals + inspection'],
    ['pink', 'Caregiver Monthly Turnover', `${L.turnover}%/mo`,                                                      `${(L.turnover*0.85).toFixed(1)}%/mo`,                                 '-15%',         'SHRM senior living HR benchmark'],
    ['amber','PRN Events / Resident / Mo', '2.5/mo',                                                                 '1.9/mo',                                                              '-24%',         'Remina pilot data'],
    ['green','Monthly Revenue',            '$'+money(L.res*L.rate*L.occ/100).toLocaleString(),                       '$'+money(L.res*L.rate*Math.min(L.occ+L.occU,98)/100).toLocaleString(), '+$'+money(L.occG/12).toLocaleString()+'/mo','Calculated from occupancy model'],
  ].forEach(([theme, kpi, before, after, imprv, src], i) => {
    const r = 5+i
    sc(ws3,`B${r}`, kpi,   (K as Record<string, unknown>)[theme as string])
    sc(ws3,`C${r}`, before,(K as Record<string, unknown>)[theme+'V'])
    sc(ws3,`D${r}`, after, (K as Record<string, unknown>)[theme+'V'])
    sc(ws3,`E${r}`, imprv, K.imprvt)
    sc(ws3,`F${r}`, src,   K.source)
  })
  sc(ws3,'B13','All assumptions are conservative and sourced from peer-reviewed NPI literature, Remina pilot data, and senior living industry HR benchmarks (SHRM). Actual results may exceed these projections.', K.disc)
  ws3['!ref'] = 'A1:G13'
  ws3['!merges'] = mk(['B1:F1','B3:F3','B13:F13'])
  ws3['!cols'] = [{wch:3},{wch:28},{wch:22},{wch:24},{wch:18},{wch:38},{wch:4}]
  XLSX.utils.book_append_sheet(wb, ws3, 'KPI Dashboard')

  const fname = `Remina_ROI_${company.replace(/[^a-zA-Z0-9]/g,'_').substring(0,30)}.xlsx`
  XLSX.writeFile(wb, fname)
}
