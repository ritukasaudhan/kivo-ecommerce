import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="about-page">

      {/* Hero */}
      <div className="about-hero">
        <div>
          <p className="page-eyebrow">ABOUT KIVO</p>

          <h1>
            Shopping made
            <span> simple.</span>
          </h1>
        </div>

        <p className="about-hero-text">
          Kivo is a modern e-commerce experience focused on
          making everyday shopping simple, organized, and
          enjoyable.
        </p>
      </div>

      {/* Story */}
      <div className="about-story">

        <div className="about-story-heading">
          <p className="page-eyebrow">OUR APPROACH</p>

          <h2>
            Designed around
            <br />
            the way people shop.
          </h2>
        </div>

        <div className="about-story-content">
          <p>
            We believe an online store should do more than
            display products. It should help customers discover
            what they need quickly and make confident decisions.
          </p>

          <p>
            Kivo brings products, categories, search, filtering,
            shopping cart management, and a clean interface
            together in one simple experience.
          </p>

          <Link to="/products" className="text-link">
            Explore products
            <ArrowRight size={17} />
          </Link>
        </div>

      </div>

      {/* Values */}
      <div className="about-values">

        <div className="section-heading">
          <p>WHAT MATTERS</p>
          <h2>Built with purpose</h2>
        </div>

        <div className="values-grid">

          <div className="value-card">
            <CheckCircle2 size={22} />

            <h3>Simple experience</h3>

            <p>
              Clear navigation and intuitive interactions make
              it easy to find and manage products.
            </p>
          </div>

          <div className="value-card">
            <CheckCircle2 size={22} />

            <h3>Thoughtful selection</h3>

            <p>
              Products are organized into meaningful categories
              to make browsing more convenient.
            </p>
          </div>

          <div className="value-card">
            <CheckCircle2 size={22} />

            <h3>Responsive design</h3>

            <p>
              The interface adapts across desktop, tablet,
              and mobile screen sizes.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;