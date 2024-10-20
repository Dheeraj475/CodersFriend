"use client"
import React, { useEffect, useState } from 'react';

const OnThisPage = ({ htmlContent }) => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    // Parse the HTML content and extract h2 and h3 headings
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;

    const allHeadings = [];
    const h2Elements = tempDiv.querySelectorAll('h2, h3');

    h2Elements.forEach((el) => {
      const tagName = el.tagName.toLowerCase();
      if (tagName === 'h2') {
        // Push an h2 heading as a new object
        allHeadings.push({ text: el.textContent, id: el.id, type: 'h2', subHeadings: [] });
      } else if (tagName === 'h3' && allHeadings.length > 0) {
        // Add an h3 under the last h2
        allHeadings[allHeadings.length - 1].subHeadings.push({ text: el.textContent, id: el.id, type: 'h3' });
      }
    });

    setHeadings(allHeadings);
  }, [htmlContent]);

  return (
    <div className="on-this-page fixed top-24 md:right-48 lg:right-1/4 hidden lg:block">
      <h2 className='text-md font-bold my-2'>On This Page</h2>
      <ul className='text-sm space-y-1'>
        {headings.map((heading, index) => (
          <li key={index}>
            <a href={`#${heading.id}`} className="font-semibold">{heading.text}</a>
            {heading.subHeadings.length > 0 && (
              <ul className='ml-4 space-y-1'>
                {heading.subHeadings.map((subHeading, subIndex) => (
                  <li key={subIndex}>
                    <a href={`#${subHeading.id}`} className="text-gray-500">{subHeading.text}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OnThisPage;
