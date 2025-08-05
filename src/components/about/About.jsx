import React from "react";
import Back from "../common/Back";
import Heading from "../common/Heading";
import { FaInstagram, FaTiktok, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./about.css";

const About = () => {
  return (
    <>
      <section className="about">
        {/* <Back name="About Us" title="About Us - Who We Are?" /> */}
        <div className="container flex mtop">
          <div className="left row">
            <Heading
              title="Empowering Dreams Through Innovation and Integrity"
              subtitle="The Great Eagle Praanda - Leading Real Estate Solutions"
            />

            <p>
              The Great Eagle Praanda is a visionary real estate agency focused
              on creating exceptional living and investment experiences. We
              blend innovation with excellence to deliver trusted property
              solutions that meet the evolving needs of individuals, families,
              and businesses across Nigeria and beyond.
            </p>
            <p>
              Our mission is simple: to help you find spaces that inspire —
              whether you're buying, selling, renting, or investing. Backed by a
              passionate team, deep market insights, and a client-first
              approach, we are committed to helping you soar higher in your
              property journey.
            </p>

            <div className="ceo-profile flex items-center mt-8 gap-4">
              <img
                src="/images/cindy.jpg"
                alt="Ngozika Cinderella Adichie, CEO"
                className="rounded-full w-20 h-20 object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold">
                  Ngozika Cinderella Adichie
                </h3>
                <p className="text-gray-600">
                  Chief Executive Officer Ngozika leads The Great Eagle Praanda
                  with vision, passion, and commitment to excellence. Under her
                  leadership, the company is redefining real estate experiences
                  in Nigeria.
                </p>

                {/* Social media icons container */}
                <div className="social-section mt-6">
                  <h4 className="contact-us-title mb-4 font-semibold text-lg">
                    Contact Us
                  </h4>
                  <div className="social-icons">
                    <a
                      href="https://www.instagram.com/da_billionaire_queen"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="social-link"
                    >
                      <FaInstagram />
                      <span className="social-name">Instagram</span>
                    </a>
                    <a
                      href="https://www.tiktok.com/@ngozika.cinderell"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="TikTok"
                      className="social-link"
                    >
                      <FaTiktok />
                      <span className="social-name">TikTok</span>
                    </a>
                    <a
                      href="https://x.com/NgoziAdichie"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                      className="social-link"
                    >
                      <FaTwitter />
                      <span className="social-name">Twitter</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ngozi-cinderella-adichie"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="social-link"
                    >
                      <FaLinkedin />
                      <span className="social-name">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
