const projects = [
  { number: '01', name: 'ABSU Trade', type: 'Campus marketplace', description: 'A student-focused marketplace designed to make campus commerce more accessible, discoverable and trustworthy.', stack: 'Product development · Next.js · Supabase', status: 'Live', href: 'https://absutrade.com.ng' },
  { number: '02', name: 'VectorVault', type: 'Developer platform', description: 'A minimalist code-hosting and collaboration platform shaped around the needs of student developers and independent builders.', stack: 'Next.js · Supabase · Vercel', status: 'In development', href: 'https://github.com/ericprince957-cloud/vectorvault' },
  { number: '03', name: 'Techlaza', type: 'E-commerce', description: 'An online retail experience, including store configuration, product structure and commerce workflows.', stack: 'WordPress · WooCommerce', status: 'Client project', href: 'https://techlaza.com.ng' },
  { number: '04', name: 'Ugoo Uzoho & Company', type: 'Professional services', description: 'A digital presence for a legal practice, designed to communicate credibility, clarity and professional trust.', stack: 'Web design · Frontend development', status: 'Client project', href: 'https://client-demo-law-firm.vercel.app' },
];

const capabilities = ['Frontend development', 'Next.js & React', 'TypeScript', 'Supabase', 'Vercel & deployment', 'WordPress & WooCommerce', 'Product thinking', 'Entrepreneurship'];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Prince Eric home">PE<span>.</span></a>
        <nav aria-label="Main navigation"><a href="#about">About</a><a href="#work">Selected work</a><a href="#journey">Journey</a><a href="#contact" className="nav-contact">Let&apos;s talk <span>↗</span></a></nav>
      </header>

      <section className="hero section-wrap" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="availability-dot"/> INDEPENDENT BUILDER · NIGERIA</div>
          <h1>Software Engineer<br/><span className="muted-heading">&amp; Entrepreneur.</span></h1>
          <p className="hero-intro">I&apos;m Prince Eric. I build digital products, explore technology and turn practical ideas into useful experiences.</p>
          <div className="hero-actions"><a className="button button-dark" href="#work">Explore my work <span>↗</span></a><a className="text-link" href="#about">A little about me <span>↓</span></a></div>
          <div className="hero-meta"><span>BASED IN NIGERIA</span><span>BUILDING WITH INTENTION</span></div>
        </div>
        <div className="hero-art" aria-label="Prince Eric monogram artwork"><div className="art-topline"><span>PERSONAL PORTFOLIO</span><span>EST. 2026</span></div><div className="monogram">P<span>E</span></div><div className="art-caption"><span>PRINCE ERIC</span><span>ENGINEERING / BUSINESS / IDEAS</span></div><div className="art-index">01 — 04</div></div>
        <div className="scroll-note"><span className="scroll-line"/> SCROLL TO EXPLORE</div>
      </section>

      <section className="intro-band"><div className="section-wrap intro-grid"><p className="section-kicker">01 / THE INTRODUCTION</p><div><h2>Curious about what technology can make possible.</h2><p className="body-copy">I&apos;m a student, builder and entrepreneur with a growing interest in software engineering and products that solve everyday problems. I enjoy moving between ideas, design, code and the realities of building something people can use.</p><a className="underlined-link" href="#about">More about my approach <span>↗</span></a></div></div></section>

      <section className="section-wrap content-section" id="about"><div className="section-heading"><p className="section-kicker">02 / ABOUT ME</p><span className="section-index">A WORK IN PROGRESS, BY DESIGN.</span></div><div className="about-grid"><h2>Learning by building.<br/><span className="serif-italic">Growing by doing.</span></h2><div className="about-text"><p>I&apos;m Prince Eric, a Nigerian software engineering enthusiast and entrepreneur, currently studying at Abia State University.</p><p>My path is hands-on: learning modern web technologies, collaborating on client projects and developing independent products. I&apos;m especially interested in the intersection of technology, business and access — making useful tools available to more people.</p><p>This site is my living record: the work I&apos;ve done, the things I&apos;m learning and the ideas I&apos;m pursuing next.</p><div className="signature">Prince Eric<span>— Software Engineer &amp; Entrepreneur</span></div></div></div></section>

      <section className="work-section" id="work"><div className="section-wrap"><div className="section-heading"><p className="section-kicker">03 / SELECTED WORK</p><span className="section-index">A FEW THINGS I&apos;VE HELPED BRING TO LIFE.</span></div><div className="work-intro"><h2>Selected projects<span>.</span></h2><p>Digital products and client work across commerce, professional services and developer tools.</p></div><div className="project-list">{projects.map((project) => <a className="project-row" href={project.href} target="_blank" rel="noreferrer" key={project.number}><span className="project-number">{project.number}</span><div className="project-main"><span className="project-type">{project.type}</span><h3>{project.name}</h3><p>{project.description}</p><span className="project-stack">{project.stack}</span></div><div className="project-side"><span className="project-status">{project.status}</span><span className="project-arrow">↗</span></div></a>)}</div></div></section>

      <section className="section-wrap content-section" id="journey"><div className="section-heading"><p className="section-kicker">04 / THE JOURNEY</p><span className="section-index">EDUCATION, WORK &amp; INITIATIVE.</span></div><div className="journey-grid"><h2>Building a foundation<br/>for the long run.</h2><div className="timeline"><div className="timeline-item"><span className="timeline-date">PRESENT</span><div><h3>Student · Abia State University</h3><p>Undergraduate student, learning, experimenting and building alongside my studies.</p></div></div><div className="timeline-item"><span className="timeline-date">FOUNDER</span><div><h3>Vector Codes</h3><p>Founder of an independent digital solutions company helping businesses establish and improve their online presence. <a href="https://vectorcodes.vercel.app/" target="_blank" rel="noreferrer">Visit company website ↗</a></p></div></div><div className="timeline-item"><span className="timeline-date">ONGOING</span><div><h3>Independent product building</h3><p>Exploring software products, developer tools and practical solutions for communities around me.</p></div></div></div></div></section>

      <section className="skills-section"><div className="section-wrap skills-grid"><div><p className="section-kicker">05 / TOOLKIT &amp; MINDSET</p><h2>Tools I work with.<br/><span className="serif-italic">Skills I keep sharpening.</span></h2></div><div className="skill-cloud">{capabilities.map((item) => <span key={item}>{item}<b>↗</b></span>)}</div></div></section>

      <section className="contact-section" id="contact"><div className="section-wrap"><p className="section-kicker">06 / OPEN TO GOOD WORK</p><h2>Have an idea?<br/><span>Let&apos;s make it useful.</span></h2><div className="contact-bottom"><p>I&apos;m open to meaningful collaborations, interesting projects and conversations about technology, products and business.</p><a className="button button-light" href="mailto:vectorcodes15@gmail.com">Get in touch <span>↗</span></a></div><div className="social-links"><a href="mailto:vectorcodes15@gmail.com">EMAIL ↗</a><a href="https://github.com/ericprince957-cloud" target="_blank" rel="noreferrer">GITHUB ↗</a><a href="https://www.linkedin.com/in/vector-codes-0a540141a/" target="_blank" rel="noreferrer">LINKEDIN ↗</a><a href="https://vectorcodes.vercel.app/" target="_blank" rel="noreferrer">VECTOR CODES ↗</a></div></div></section>

      <footer className="site-footer"><a className="wordmark" href="#top">PE<span>.</span></a><span>© {new Date().getFullYear()} PRINCE ERIC. BUILT WITH INTENTION.</span><a href="#top">BACK TO TOP ↑</a></footer>
    </main>
  );
}
