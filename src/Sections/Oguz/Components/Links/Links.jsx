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

const Links = () => {
  return (
    <div className="links-container">
      {data.map((item, index) => {
        return (
          <div key={index} className="links-container__column">
            <h3 className="links-container__column__title">{item.title}</h3>
            <ul className="links-container__column__list">
              {item.links.map((link, index) => {
                if (link === "Contact")
                  return (
                    <li
                      className="links-container__column__list__contact"
                      key={index}
                    >
                      {link}
                    </li>
                  );
                return <li key={index}>{link}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Links;
