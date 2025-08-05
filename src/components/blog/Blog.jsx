import React from "react";
import Back from "../common/Back";
import "../blog/blog.css";
import coverImage from "../images/about.jpg";

const Blog = () => {
  return (
    <section className="blog-section">
      <Back name="" title="" cover={coverImage} />

      <div className="blog-header">
        <h1>The Need for Smart Investment in Today’s Economy</h1>
        <p>
          In a world where inflation eats into savings and job security is no
          longer guaranteed, smart investment is no longer optional — it’s
          essential.
        </p>
      </div>

      <div className="blog-content">
     
        <div className="blog-block">
          <h2>The Need for Smart Investment in Today’s Economy</h2>
          <p>
            In a world where inflation eats into savings and job security is no
            longer guaranteed, smart investment is no longer optional — it’s
            essential. Gone are the days when simply saving money in a bank
            account was enough to secure your future. Today, the smart investor
            is the one who stays ahead of economic shifts, leverages
            opportunities, and builds wealth with strategy.
          </p>
          <div className="image-wrapper">
            <img src="/images/investment1.jpg" alt="Smart Investment Intro" />
          </div>
        </div>

        <div className="blog-block">
          <h2>💡 What Is Smart Investment</h2>
          <p>
            Smart investment means making informed, strategic decisions with
            your money — not just based on trends, but on long-term value. It’s
            about putting your money where it can grow, rather than letting it
            sit idle. Whether it’s real estate, agriculture, stocks, mutual
            funds, or digital assets, smart investing involves proper research,
            timing, and risk management.
          </p>
          <div className="image-wrapper">
            <img src="/images/investment2.jpg" alt="Smart Investment Meaning" />
          </div>
        </div>

        <div className="blog-block">
          <h2>📉 Why It’s Needed Now More Than Ever</h2>
          <ul>
            <li>
              <strong>Rising Cost of Living:</strong> Prices are going up, but
              salaries often stay the same. Smart investing helps you stay ahead
              of inflation and maintain your purchasing power.
            </li>
            <li>
              <strong>Unstable Job Markets:</strong> No job is truly secure.
              Having investments provides alternative income streams and reduces
              financial dependence on just one source.
            </li>
            <li>
              <strong>Financial Freedom:</strong> The goal isn’t just to be rich
              — it’s to be free. Smart investments allow you to plan for early
              retirement, travel, pursue passion projects, or simply live
              without financial stress.
            </li>
            <li>
              <strong>Wealth Building:</strong> Most wealthy people didn’t get
              rich by working more hours — they invested wisely. Real estate, in
              particular, has produced more millionaires than any other
              industry.
            </li>
          </ul>
          <div className="image-wrapper">
            <img
              src="/images/investment3.jpg"
              alt="Why Investment is Needed Now"
            />
          </div>
        </div>

        <div className="blog-block">
          <h2>🧠 How to Invest Smartly</h2>
          <ul>
            <li>
              <strong>Educate Yourself:</strong> Knowledge is your most powerful
              asset. Don’t invest in what you don’t understand.
            </li>
            <li>
              <strong>Diversify:</strong> Don’t put all your eggs in one basket.
              Spread your investment across different sectors.
            </li>
            <li>
              <strong>Set Clear Goals:</strong> Know what you’re investing for —
              a home, your child’s education, retirement, etc.
            </li>
            <li>
              <strong>Seek Professional Advice:</strong> Sometimes a financial
              advisor or realtor can help you avoid costly mistakes.
            </li>
          </ul>
          <p className="blog-end">
            🔑 The best time to invest was yesterday. The next best time is now.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
