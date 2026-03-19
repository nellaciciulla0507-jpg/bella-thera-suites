const features = [
  "Executive-style furnished therapy suites",
  "All-inclusive monthly pricing",
  "Cleaning service included",
  "Utilities included",
  "Coffee and water for clients",
  "Furnished professional lobby",
  "Paper products included",
  "Weekly mail delivery service",
  "Ample on-site parking",
  "Two bathrooms on site",
  "1–3 year flexible lease terms",
  "Designed for autonomous licensed professionals"
];

const fit = ["LMHC", "LMFT", "LCSW", "Psychologists", "APRN-PMHNP practitioners"];

const options = [
  {
    title: "Full-Time Suites",
    price: "$1,250–$1,500/mo",
    detail:
      "6 rooms available Monday through Friday for professionals who want a consistent, polished home base."
  },
  {
    title: "Part-Time Suites",
    price: "$350–$800/mo",
    detail:
      "3 suites available for 1–3 weekdays per week, ideal for growing practices or hybrid schedules."
  },
  {
    title: "Weekend Access",
    price: "$250–$400/mo",
    detail:
      "Weekend-only rental options for clinicians seeking premium space without a full weekday commitment."
  }
];

const gallery = [
  { src: "/exterior.jpg", alt: "Bella Thera-suites exterior", large: true },
  { src: "/room1.jpg", alt: "Therapy suite interior" },
  { src: "/room2.jpg", alt: "Furnished office suite" },
  { src: "/lobby1.jpg", alt: "Furnished lobby" },
  { src: "/lobby2.jpg", alt: "Luxury clinical waiting room", large: true },
  { src: "/kitchen.jpg", alt: "Shared kitchenette" },
  { src: "/office1.jpg", alt: "Executive therapy office" },
  { src: "/office2.jpg", alt: "Additional therapy suite" },
  { src: "/hallway.jpg", alt: "Interior hallway" },
  { src: "/aerial.jpg", alt: "Building and parking overview", large: true }
];

export default function Page() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-inner">
          <div className="nav">
            <div className="brand">
              <div className="logo-wrap">
                <img src="/logo.png" alt="Bella Mental Health logo" />
              </div>
              <div>
                <p className="eyebrow">Bella Mental Health</p>
                <p className="subbrand">Luxury clinical suite rentals for independent mental health professionals</p>
              </div>
            </div>
            <a className="btn btn-secondary" href="#interest-form">
              Inquire Now
            </a>
          </div>

          <div className="hero-grid">
            <div>
              <div className="badge">Viera, Florida • Calm, polished, move-in-ready practice space</div>
              <h1>
                Bella Mental Health | <span className="thera">Thera-suites</span>
              </h1>
              <p className="lead">
                Executive-style, all-inclusive furnished suites for autonomous licensed clinicians who want a
                luxury clinical environment without the hassle of maintenance, utilities, furnishings, or
                day-to-day office management.
              </p>

              <div className="hero-actions">
                <a className="btn btn-primary" href="#availability">
                  View Rental Options
                </a>
                <a className="btn btn-secondary" href="#gallery">
                  See The Suites
                </a>
              </div>

              <div className="hero-stats">
                <div className="stat">
                  <strong>6</strong>
                  <span>Full-time suites</span>
                </div>
                <div className="stat">
                  <strong>3</strong>
                  <span>Part-time weekday options</span>
                </div>
                <div className="stat">
                  <strong>2</strong>
                  <span>Bathrooms + ample parking</span>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="hero-card-grid">
                <div className="wide">
                  <img src="/exterior.jpg" alt="Exterior of Bella Thera-suites" />
                </div>
                <div>
                  <img src="/lobby1.jpg" alt="Lobby" />
                </div>
                <div>
                  <img src="/room1.jpg" alt="Therapy room" />
                </div>
              </div>

              <div className="card-note">
                <p className="eyebrow">What makes this different</p>
                <p>
                  A refined, luxury clinical suite model under the Bella brand for licensed mental health
                  professionals who want independence, credibility, and a space that already feels established,
                  elevated, and client-ready.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container grid-2">
          <div>
            <p className="eyebrow" style={{ color: "#173F73", opacity: 0.7 }}>
              Positioning
            </p>
            <h2 className="section-title">Luxury feel. Clinical professionalism. Zero operational drag.</h2>
          </div>

          <div className="feature-grid">
            {features.map((item) => (
              <div className="feature" key={item}>
                <p>
                  <span /> {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-white" id="availability">
        <div className="container">
          <div style={{ maxWidth: 760 }}>
            <p className="eyebrow" style={{ color: "#173F73", opacity: 0.7 }}>
              Availability
            </p>
            <h2 className="section-title">Rental options built for different stages of practice</h2>
            <p className="section-copy">
              Whether you need a full-time suite, a few consistent weekdays, or weekend access, Bella Mental
              Health | <span className="thera">Thera-suites</span> offers flexible terms without sacrificing the
              luxury clinical look and feel your clients expect.
            </p>
          </div>

          <div className="option-grid">
            {options.map((option) => (
              <div className="option" key={option.title}>
                <p className="eyebrow" style={{ color: "#173F73", opacity: 0.6 }}>
                  {option.title}
                </p>
                <div className="price">{option.price}</div>
                <p className="section-copy" style={{ fontSize: 15 }}>
                  {option.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="banner">
            <div>
              <h3 style={{ marginTop: 0, fontSize: 30 }}>Lease requirements</h3>
              <p className="section-copy" style={{ color: "rgba(255,255,255,0.85)" }}>
                1–3 year flexible lease terms. Tenants must be independently licensed and carry their own
                professional liability insurance.
              </p>
            </div>

            <div className="banner-box">
              <p className="eyebrow">Ideal fit</p>
              <div className="pills">
                {fit.map((role) => (
                  <span className="pill" key={role}>
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery">
        <div className="container">
          <div style={{ maxWidth: 760 }}>
            <p className="eyebrow" style={{ color: "#173F73", opacity: 0.7 }}>
              Photo gallery
            </p>
            <h2 className="section-title">A calm, polished environment your clients will immediately trust</h2>
            <p className="section-copy">
              The space blends executive professionalism with a calm, luxury clinical feel, including furnished
              offices, a welcoming lobby, shared amenities, and convenient access in a highly visible location.
            </p>
          </div>

          <div className="gallery-grid">
            {gallery.map((item, idx) => (
              <div key={idx} className={item.large ? "large" : ""}>
                <img src={item.src} alt={item.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-white">
        <div className="container dual-grid">
          <div className="info-card">
            <p className="eyebrow" style={{ color: "#173F73", opacity: 0.7 }}>
              Why clinicians choose this model
            </p>
            <h2 className="section-title" style={{ fontSize: 34 }}>
              Private practice presence without office headaches
            </h2>
            <p className="section-copy">
              Bella Mental Health | <span className="thera">Thera-suites</span> is designed for professionals who
              want autonomy while still operating from a premium, fully supported environment.
            </p>
            <p className="section-copy">
              Instead of managing furnishings, utilities, cleaning, paper goods, lobby presentation, and
              maintenance issues, you step into a turnkey luxury clinical suite that lets you stay focused on
              client care and business growth.
            </p>
            <p className="section-copy">
              It is especially well suited for independent clinicians who want to elevate how they are perceived
              by clients, referral sources, and collaborators without committing to a full office build-out on
              their own.
            </p>
          </div>

          <div className="form-card" id="interest-form">
            <p className="eyebrow">Interest form</p>
            <h2 style={{ marginTop: 8, fontSize: 34 }}>Tell us what you are looking for</h2>
            <p className="section-copy" style={{ color: "rgba(255,255,255,0.8)" }}>
              Use this section as your inquiry form. You can keep it here as a website form and connect
              submissions to your email or CRM.
            </p>

            <form
              className="form-grid"
              action="mailto:Nellac@bellapsychologicalservices.com"
              method="post"
              encType="text/plain"
            >
              <input className="input" name="Full Name" placeholder="Full name" />
              <input className="input" name="Email" placeholder="Email address" />
              <input className="input" name="Phone" placeholder="Phone number" />
              <input className="input" name="License Type" placeholder="License type" />
              <input className="input full" name="Practice Name" placeholder="Practice or business name" />

              <select className="select" name="Interested In" defaultValue="">
                <option value="" disabled>
                  Interested in
                </option>
                <option>Full-Time Suite</option>
                <option>Part-Time Weekday Suite</option>
                <option>Weekend Rental</option>
                <option>Not sure yet</option>
              </select>

              <select className="select" name="Desired Start Timeframe" defaultValue="">
                <option value="" disabled>
                  Desired start timeframe
                </option>
                <option>Immediately</option>
                <option>Within 30 days</option>
                <option>Within 60–90 days</option>
                <option>Just exploring</option>
              </select>

              <textarea
                className="textarea full"
                name="Details"
                placeholder="Tell us about the suite type you want, how many days you need, your specialty, and any questions you have."
              />

              <div className="form-foot full">
                <p className="small" style={{ color: "rgba(255,255,255,0.6)", margin: 0 }}>
                  This form can be connected later to a more advanced intake system. For now, it can trigger an
                  email inquiry.
                </p>
                <button className="btn btn-primary" type="submit">
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section>
        <div className="container footer-callout">
          <div className="dual-grid" style={{ alignItems: "center" }}>
            <div>
              <p className="eyebrow" style={{ color: "#173F73", opacity: 0.7 }}>
                Next step
              </p>
              <h2 className="section-title" style={{ fontSize: 34 }}>
                Position your practice inside a space that already feels established
              </h2>
              <p className="section-copy">
                Bella Mental Health | <span className="thera">Thera-suites</span> offers an elevated, client-ready
                setting for independent mental health professionals who want convenience, professionalism, and a
                stronger brand presence from day one.
              </p>
            </div>

            <div className="contact-box">
              <p className="eyebrow">Contact</p>
              <p>
                <strong>Business:</strong> Bella Mental Health
              </p>
              <p>
                <strong>Brand:</strong> Bella Mental Health | <span className="thera">Thera-suites</span>
              </p>
              <p>
                <strong>Address:</strong> 2955 Pineda Plaza Way, Suite 209, Viera, FL
              </p>
              <p>
                <strong>Phone:</strong> 321-419-4947
              </p>
              <p>
                <strong>Email:</strong> Nellac@bellapsychologicalservices.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
