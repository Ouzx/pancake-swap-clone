import React from "react";
import "./Links.scss";

const data = [
  {
    title: "ABOUT",
    links: ["Contact", "Brand", "Blog", "Community", "Litepaper"],
  },
  {
    title: "HELP",
    links: ["Customer Support", "Troubleshooting", "Guides"],
  },
  {
    title: "DEVELOPERS",
    links: ["Github", "Documentation", "Bug Bounty", "Audits", "Careers"],
  },
];

const Links = ({ children }) => {
  return (
    <div className="links-container">
      {data.map((item, index) => {
        return (
          <div
            key={index + "links-container"}
            className="links-container__column"
          >
            <h3 className="links-container__column__title">{item.title}</h3>
            <ul className="links-container__column__list">
              {item.links.map((link, index) => {
                const key = index + "links-container__column__list";
                if (link === "Contact")
                  return (
                    <li
                      className="links-container__column__list__contact"
                      key={key}
                    >
                      {link}
                    </li>
                  );
                return <li key={key}>{link}</li>;
              })}
            </ul>
          </div>
        );
      })}
      {children}
    </div>
  );
};

export default Links;
