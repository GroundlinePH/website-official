import React from 'react';
//import config from '../../config';

export default function Footer() {
  return (
    <footer className="footer bg-dark text-light text-left">
      <div className="container">
      {/*
        <ul className="list-inline mb-5">
          {config.socialLinks.map(social => {
            const { icon, name, url } = social;
            return (
              <li key={name} className="list-inline-item">
                <a
                  href={url}
                  className="social-link rounded-circle text-white mr-3"
                >
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
        */}
        <p className="text-muted small mb-0">
          Copyright &copy; Groundline Software Solutions
        </p>
      </div>
    </footer>
  );
}
