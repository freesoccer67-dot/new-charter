const roles = [
  ["Super Admin", "Alles openen"],
  ["Office", "Dashboard, routes, charters, settings"],
  ["Planner", "Routes"],
  ["Finance", "Invoices, payments, disputes"],
  ["Charter", "Eigen dashboard"],
];

const nav = ["Dashboard", "Routes", "Charters", "Invoices", "Payments", "Disputes", "Settings"];

export default function Home() {
  return (
    <main className="page">
      <div className="shell">
        <section className="hero">
          <div className="panel left">
            <div className="brand-row">
              <div className="logo"><span className="logo-mark">CP</span><span>Charterportaal</span></div>
              <span className="badge">Phase 1 · Auth foundation</span>
            </div>
            <h1>High-end portal foundation voor transportbedrijven.</h1>
            <p className="lead">
              Login, role-based access control, dashboard shell en guarded placeholders. Routes,
              marketplace, voertuigen, facturen, disputes en payments kunnen later als modules toegevoegd worden.
            </p>
            <div className="actions">
              <button className="btn primary">Bekijk dashboard preview</button>
              <button className="btn secondary">Role access bekijken</button>
            </div>
            <div className="role-grid">
              {roles.map(([name, text]) => (
                <div className="role-card" key={name}><strong>{name}</strong><span>{text}</span></div>
              ))}
            </div>
          </div>

          <div className="panel login">
            <div className="login-box">
              <span className="badge gray">Supabase Auth ready</span>
              <h2>Inloggen</h2>
              <p>Split-screen auth pagina met email/password flow, forgot password en reset-password basis.</p>
              <div className="field"><label>Email</label><div className="input">office@charterportaal.nl</div></div>
              <div className="field"><label>Password</label><div className="input">••••••••••••</div></div>
              <button className="btn primary">Login</button>
              <p className="footer-note">Nieuwe gebruikers starten als charter. Admin rollen worden expliciet toegekend.</p>
            </div>
          </div>
        </section>

        <section className="panel preview">
          <aside className="sidebar">
            <div className="side-logo"><span className="logo-mark">CP</span><span>Charterportaal</span></div>
            <nav className="nav">
              {nav.map((item, index) => (
                <div className={index === 0 ? "nav-item active" : "nav-item"} key={item}>
                  <span>{item}</span>{index > 0 && <span className="soon">Soon</span>}
                </div>
              ))}
            </nav>
          </aside>
          <div className="main">
            <div className="topbar">
              <div><span className="badge">Office dashboard</span><h2>Welkom terug, Daya</h2></div>
              <div className="avatar">D</div>
            </div>
            <div className="kpis">
              <div className="kpi"><small>Active roles</small><strong>5</strong></div>
              <div className="kpi"><small>Protected modules</small><strong>7</strong></div>
              <div className="kpi"><small>RLS tables</small><strong>3</strong></div>
              <div className="kpi"><small>Auth status</small><strong>Ready</strong></div>
            </div>
            <div className="modules">
              <div className="module"><small>Foundation</small><h3>One source of truth</h3><p>Roles, navigation, access rules and landing logic are controlled from one config pattern.</p></div>
              <div className="module"><small>Defence in depth</small><h3>Middleware + guards + RLS</h3><p>Access is checked before rendering and again at database level for safer SaaS growth.</p></div>
              <div className="module"><small>Next phases</small><h3>Modules stay placeholders</h3><p>Routes, bidding, vehicles, invoices and disputes can be added without rebuilding auth.</p></div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
