import React from "react";
import { list } from "../../data/Data";
import "./recent.css";

const RecentCard = () => {
  return (
    <div className="recent-grid">
      {list.map((val, index) => {
        const {
          cover,
          category,
          location,
          name,
          price,
          type,
          contactLink,
          buttonText,
          description,
        } = val;

        return (
          <div className="recent-card" key={index}>
            <div className="image-wrapper">
              <img src={cover} alt={name} />
            </div>
            <div className="card-body">
              <div className="badge">
                <span
                  className={`category-label ${
                    category === "For Sale" ? "sale" : "rent"
                  }`}
                >
                  {category}
                </span>
              </div>
              <h4>{name}</h4>
              <p className="location">
                <i className="fa fa-location-dot"></i> {location}
              </p>
              {description && (
                <p
                  className="description"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              )}
            </div>
            <div className="card-footer">
              {contactLink && buttonText && (
                <a href={contactLink} target="_blank" rel="noopener noreferrer">
                  <button className="contact-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      fill="white"
                      width="20"
                      height="20"
                    >
                      <path d="M16.001 0C7.165 0 0 7.164 0 16c0 2.821.738 5.507 2.148 7.903L.062 31.935l8.217-2.162a15.9 15.9 0 007.722 1.963c8.836 0 16.001-7.164 16.001-15.999C32.001 7.164 24.837 0 16.001 0zm0 29.066a13.01 13.01 0 01-6.645-1.802l-.477-.285-4.88 1.284 1.301-4.748-.31-.49a12.969 12.969 0 01-2.007-6.822C2.983 8.986 8.987 2.982 16 2.982c7.015 0 13.018 6.003 13.018 13.017 0 7.015-6.003 13.067-13.017 13.067zm7.38-9.427c-.324-.161-1.924-.948-2.222-1.057-.298-.109-.515-.161-.732.162-.216.322-.839 1.057-1.03 1.274-.191.216-.383.243-.706.081-.324-.162-1.369-.504-2.609-1.607-.964-.864-1.615-1.929-1.803-2.253-.187-.324-.021-.5.141-.662.145-.144.324-.377.486-.566.161-.188.215-.324.324-.54.109-.215.054-.405-.027-.566-.081-.161-.729-1.764-.998-2.417-.264-.635-.53-.548-.734-.557l-.621-.011c-.215 0-.568.082-.864.405s-1.131 1.11-1.131 2.694 1.161 3.127 1.324 3.343c.162.216 2.355 3.743 5.709 5.253.797.344 1.428.548 1.914.7.806.251 1.54.215 2.118.13.646-.095 2.02-.822 2.295-1.62.283-.796.283-1.478.198-1.62-.081-.143-.298-.215-.623-.377z" />
                    </svg>
                    <span>Contact Us</span>
                  </button>
                </a>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecentCard;
