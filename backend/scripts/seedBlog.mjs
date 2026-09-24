/**
 * Blog seed script
 * Run:  cd backend && node scripts/seedBlog.mjs
 *
 * - Removes old lorem-ipsum test posts
 * - Adds 4 quality published blog posts
 */
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true },
  excerpt: { type: String, default: '', trim: true },
  content: { type: String, required: true },
  coverImage: { type: String, default: '' },
  coverPublicId: { type: String, default: '' },
  category: { type: String, default: 'General', trim: true },
  tags: { type: [String], default: [] },
  author: { type: String, default: 'MBX Solutions' },
  published: { type: Boolean, default: false },
  views: { type: Number, default: 0 },
}, { timestamps: true })

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema)

const posts = [
  {
    title: '5 Proven Ways to Reduce Claim Denials in Home Health Billing',
    slug: 'reduce-claim-denials-home-health-billing',
    excerpt: 'Claim denials quietly drain agency revenue. Here are five field-tested strategies our RCM team uses to cut denial rates and accelerate reimbursements.',
    category: 'Billing',
    tags: ['denials', 'billing', 'revenue cycle', 'home health'],
    author: 'MBX Solutions',
    published: true,
    content: `Claim denials are one of the biggest hidden threats to a home health agency's cash flow. Industry studies show that nearly 65% of denied claims are never reworked — which means agencies are literally leaving money on the table. The good news? Most denials are preventable.

## 1. Verify Eligibility Before Every Episode

The single most common cause of denial is lost eligibility. Insurance coverage changes, plan terminations and authorization lapses happen silently between visits.

- Run eligibility checks at intake and again before each billing episode
- Confirm prior authorizations are valid through the entire certification period
- Document verification reference numbers in the patient chart

## 2. Get Documentation Right the First Time

Payers deny claims for missing signatures, incomplete OASIS data and inconsistent visit notes. Your clinicians are your first line of defense.

- Use point-of-care documentation tools to catch errors in real time
- Standardize physician order formats across your agency
- Audit 5% of charts weekly to catch patterns before payers do

## 3. Scrub Claims Before Submission

A clean claim rate above 95% should be your minimum standard. Automated claim scrubbing catches issues like mismatched diagnosis codes, date-of-service errors and billing beyond authorized visit limits.

### What a good scrubber catches

- HCPCS and ICD-10 code mismatches
- Modifier errors (especially modifiers for LUPA thresholds)
- Duplicate submission attempts

## 4. Track Denials by Root Cause

Every denial letter is data. Tag each denial by reason — eligibility, authorization, documentation, coding, timely filing — and review the trend monthly. Most agencies discover that 3 root causes generate 80% of their denials.

## 5. Set a 48-Hour Rework SLA

Aged denials lose appeal windows. Assign clear ownership, rework within 48 hours of receipt, and track appeal outcomes. Agencies that rework denials within two days recover significantly more revenue than those batching weekly.

## The Bottom Line

Denial management isn't a back-office chore — it's a revenue strategy. Agencies that combine front-end verification, clean documentation and disciplined rework routinely cut denial rates by half within two quarters.

Need help getting there? Our RCM team offers a free billing audit that identifies exactly where your denials are coming from.`,
  },
  {
    title: 'ICD-10 Coding for Hospice: Common Mistakes and How to Avoid Them',
    slug: 'icd-10-coding-hospice-common-mistakes',
    excerpt: 'Accurate hospice coding protects both compliance and reimbursement. Learn the coding mistakes that trigger audits — and the workflows that prevent them.',
    category: 'Coding',
    tags: ['coding', 'hospice', 'icd-10', 'compliance'],
    author: 'MBX Solutions',
    published: true,
    content: `Hospice coding is unlike any other discipline in medical billing. You are not coding to maximize payment — you are coding to paint an accurate clinical picture that supports terminal prognosis. That distinction is where most agencies get into trouble.

## Mistake 1: Using Stale or Unspecific Terminal Diagnoses

The terminal diagnosis on the claim must match the physician certification and the plan of care. Agencies often carry forward a diagnosis from admission even after the disease process has evolved.

- Reconcile the primary terminal diagnosis at every recertification
- Use the most specific ICD-10 code available — unspecified codes invite scrutiny
- Ensure the certifying physician's documentation supports the code billed

## Mistake 2: Ignoring the Domino Effect of Secondary Diagnoses

Secondary diagnoses drive visit intensity and supply needs. If comorbidities like diabetes, cardiac disease or dysphagia are absent from coding, reviewers may question why related services were delivered.

### Best practice

- Code all active comorbidities each billing period
- Remove resolved conditions — carrying "zombie" codes is an audit flag
- Cross-check coded conditions against medication lists

## Mistake 3: Poor Documentation Alignment

MAC reviewers compare the claim, the clinical record and the physician narrative. Any mismatch — a coded symptom with no supporting note, or a documented symptom that is never coded — weakens your position in an audit.

## Mistake 4: Missing NPI and Physician Detail Errors

Simple administrative errors like mismatched attending physician NPIs or missing attending physician information remain a top reason for hospice claim rejections. Automate this check in your claim scrubber.

## Building a Compliance-First Coding Workflow

- Implement dual coding or 10% retrospective review for new admissions
- Hold monthly coding huddles between clinical and billing teams
- Track denial reasons tied to coding and feed them back into education
- Keep a coding bulletin for quarterly ICD-10 updates

## The Bottom Line

Clean hospice coding is a team sport. When clinicians document precisely and coders translate that documentation faithfully, claims stand up to scrutiny and revenue flows without disruption.

Want a second set of eyes on your coding? Our certified coders provide free coding audits for hospice and home health agencies.`,
  },
  {
    title: 'The 2026 Home Health Payment Rule: What Agencies Need to Know',
    slug: '2026-home-health-payment-rule-agencies-guide',
    excerpt: 'CMS updates reshape PDGM rates, wage indexes and compliance expectations for the new year. Here is a practical breakdown of what changes and how to prepare.',
    category: 'Industry News',
    tags: ['pdgm', 'cms', 'payment rule', 'home health'],
    author: 'MBX Solutions',
    published: true,
    content: `Every year, the CMS Home Health Final Rule resets the financial landscape for agencies. The 2026 rule brings payment updates, wage index revisions and policy refinements that directly affect your per-episode revenue. Here's what matters operationally.

## What Changed in the 2026 Final Rule

### Payment update

CMS finalized a net payment update for home health agencies reflecting the home health market basket percentage increase, partially offset by productivity adjustments. Agencies in higher wage index regions will see more movement than others.

### Wage index revisions

The annual wage index refresh reshuffles county-level rates. If your county's index moved, your per-visit and per-episode revenue shifts with it — for better or worse.

### Behavioral assumption adjustments

CMS continues refining its calculated behavioral cost savings from PDGM. These permanent adjustments influence the final payment percentage, so budget projections should be updated, not rolled forward from last year's model.

## What This Means for Your Agency

- **Re-run your 2026 budget** using the new wage index for every county you serve
- **Review LUPA thresholds** — utilization patterns near thresholds deserve monitoring
- **Reassess visit utilization** under updated case-mix weights, especially for neurological and wound care patient groups

## Compliance Items Hiding in the Rule

Payment rules aren't just about money. Each cycle, CMS tightens expectations around:

- Quality reporting program participation and data submission windows
- EVV compliance for personal care and home health services
- Accuracy of outcome and assessment data (OASIS-E submissions)

Miss these and you may face payment penalties that dwarf any rate update.

## How to Prepare This Quarter

1. Pull your top 20 HHRG case-mix codes and compare weighted revenue under 2026 rates
2. Meet with your billing partner to model best-case and worst-case scenarios
3. Train clinical managers on any documentation changes affecting coding
4. Calendar every CMS submission deadline for the year

## The Bottom Line

Agencies that treat the Final Rule as a planning event — not a headline — protect margins while competitors scramble. If you'd like a review of how the 2026 changes affect your specific payer mix, our team offers a free payment impact analysis.`,
  },
  {
    title: 'HIPAA Compliance in a Remote Billing World: A Practical Checklist',
    slug: 'hipaa-compliance-remote-billing-checklist',
    excerpt: 'Remote work expanded PHI risk surfaces overnight. This practical checklist covers the administrative, technical and physical safeguards every billing operation needs.',
    category: 'Compliance',
    tags: ['hipaa', 'compliance', 'remote work', 'security'],
    author: 'MBX Solutions',
    published: true,
    content: `Medical billing runs on Protected Health Information, and the modern billing operation is distributed — coders, billers and QA staff often work across cities, time zones and even countries. Remote flexibility is here to stay, and so is HIPAA. Here is a practical checklist to keep both.

## Administrative Safeguards

The administrative backbone of HIPAA applies to people and process, not just software.

- Signed Business Associate Agreements (BAAs) with every vendor touching PHI
- Documented workforce HIPAA training at hire and annually thereafter
- Role-based access policies: staff see only the PHI their function requires
- A written incident response plan with defined escalation paths
- Quarterly access reviews — remove accounts the day someone transitions off

## Technical Safeguards

Technical controls are where most remote breaches actually happen.

### Must-haves for remote billing teams

- Company-managed devices with full-disk encryption — no personal laptops for PHI
- Multi-factor authentication on every system that stores or transmits PHI
- VPN or zero-trust network access; never expose RDP or billing systems to the open internet
- Automatic screen lock and idle timeouts
- Audit logging on EHR and billing platforms, reviewed monthly

### Communication hygiene

- Only HIPAA-compliant platforms for email, messaging and file transfer
- No PHI in personal email, SMS or consumer chat apps — ever
- Encrypted, access-controlled file storage instead of local desktops

## Physical Safeguards — Even at Home

Physical safeguards apply at the kitchen table too.

- Private workspace where screens are not visible to household members
- Privacy filters on laptop screens for staff in shared living spaces
- Printed PHI prohibited; shredding policies for anything that slips through
- Device inventory tracked, with immediate remote-wipe capability

## Common Gaps We See in Audits

- Staff forwarding Explanation of Benefits to personal email "to work later"
- Shared logins for billing software "to save on licenses"
- Offboarding done in bulk monthly instead of same-day
- BAAs missing with small vendors like transcription or courier services

## The Bottom Line

HIPAA compliance isn't a certificate on the wall — it's a living system of controls that adapts to how your team actually works. Remote operations raise the bar, but with disciplined safeguards, your billing workflow can be both flexible and audit-ready.

Want an objective look at your billing operation's compliance posture? Request a free audit from our compliance team.`,
  },
]

async function main() {
  const uri = process.env.MONGODB_URI
  if (!uri) {
    console.error('MONGODB_URI missing in backend/.env')
    process.exit(1)
  }
  await mongoose.connect(uri)
  console.log('Connected to MongoDB')

  // Remove old test/lorem posts (keep anything user created that looks intentional)
  const del = await Blog.deleteMany({
    $or: [
      { content: /ipsam suscipit/i },
      { content: /eveniet sunt/i },
      { content: /dolorum commodi/i },
      { content: /est non sint nesciun/i },
      { title: /^(Untitled|Test|Demo)/i },
    ],
  })
  console.log(`Removed ${del.deletedCount} test post(s)`)

  for (const post of posts) {
    const res = await Blog.updateOne(
      { slug: post.slug },
      { $set: post },
      { upsert: true }
    )
    const slug = post.slug
    if (res.upsertedCount) console.log(`Inserted: ${slug}`)
    else console.log(`Updated:  ${slug}`)
  }

  const total = await Blog.countDocuments()
  console.log(`Done. Total blog posts in DB: ${total}`)
  await mongoose.disconnect()
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
