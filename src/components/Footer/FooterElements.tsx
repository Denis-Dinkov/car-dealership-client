import React from 'react';

interface Link {
  text: string;
  url: string;
}

interface FooterElementsProps {
  title: string;
  links: Link[];
}

const FooterElements: React.FC<FooterElementsProps> = ({ title, links }) => {
  return (
    <div>
      <h5 className="text-lg font-semibold mb-4">{title}</h5>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} className="text-xs hover:none">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterElements;
