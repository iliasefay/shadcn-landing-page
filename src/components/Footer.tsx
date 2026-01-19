import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex"
          >
            <LogoIcon />
            Integrated Analytics
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Follow Us</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              LinkedIn
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Twitter
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              YouTube
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Services</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#services"
              className="opacity-60 hover:opacity-100"
            >
              Data Analytics
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#services"
              className="opacity-60 hover:opacity-100"
            >
              Cloud Solutions
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#services"
              className="opacity-60 hover:opacity-100"
            >
              Enterprise Apps
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Company</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#about"
              className="opacity-60 hover:opacity-100"
            >
              About Us
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#team"
              className="opacity-60 hover:opacity-100"
            >
              Our Team
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#testimonials"
              className="opacity-60 hover:opacity-100"
            >
              Case Studies
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Resources</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#faq"
              className="opacity-60 hover:opacity-100"
            >
              FAQ
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#cta"
              className="opacity-60 hover:opacity-100"
            >
              Contact
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#newsletter"
              className="opacity-60 hover:opacity-100"
            >
              Newsletter
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024 Integrated Analytics. All rights reserved.
        </h3>
      </section>
    </footer>
  );
};
