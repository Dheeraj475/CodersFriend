"use client"
import React, { useEffect, useState } from 'react';

const OnThisPage = ({ htmlContent }) => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    // Parse the HTML content and extract h2, h3, h4, h5, and h6 headings
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;

    const allHeadings = [];
    const h2Elements = tempDiv.querySelectorAll('h2, h3, h4, h5, h6');

    h2Elements.forEach((el) => {
      const tagName = el.tagName.toLowerCase();
      if (tagName === 'h2') {
        // Push an h2 heading as a new object
        allHeadings.push({ text: el.textContent, id: el.id, type: 'h2', subHeadings: [] });
      } else if (tagName === 'h3' && allHeadings.length > 0) {
        // Add an h3 under the last h2
        allHeadings[allHeadings.length - 1].subHeadings.push({ text: el.textContent, id: el.id, type: 'h3', subHeadings: [] });
      } else if (tagName === 'h4' && allHeadings.length > 0) {
        const lastH2 = allHeadings[allHeadings.length - 1];
        const lastH3 = lastH2.subHeadings[lastH2.subHeadings.length - 1];
        if (lastH3) {
          // Add an h4 under the last h3
          lastH3.subHeadings.push({ text: el.textContent, id: el.id, type: 'h4', subHeadings: [] });
        }
      } else if (tagName === 'h5' && allHeadings.length > 0) {
        const lastH2 = allHeadings[allHeadings.length - 1];
        const lastH3 = lastH2.subHeadings[lastH2.subHeadings.length - 1];
        const lastH4 = lastH3?.subHeadings[lastH3.subHeadings.length - 1];
        if (lastH4) {
          // Add an h5 under the last h4
          lastH4.subHeadings.push({ text: el.textContent, id: el.id, type: 'h5', subHeadings: [] });
        }
      } else if (tagName === 'h6' && allHeadings.length > 0) {
        const lastH2 = allHeadings[allHeadings.length - 1];
        const lastH3 = lastH2.subHeadings[lastH2.subHeadings.length - 1];
        const lastH4 = lastH3?.subHeadings[lastH3.subHeadings.length - 1];
        const lastH5 = lastH4?.subHeadings[lastH4.subHeadings.length - 1];
        if (lastH5) {
          // Add an h6 under the last h5
          lastH5.subHeadings.push({ text: el.textContent, id: el.id, type: 'h6' });
        }
      }
    });

    setHeadings(allHeadings);
  }, [htmlContent]);

  return (
    <div className="on-this-page fixed top-24 md:right-48 lg:right-1/6 hidden lg:block max-h-[80vh] overflow-y-auto pr-8">
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
                    {subHeading.subHeadings.length > 0 && (
                      <ul className='ml-4 space-y-1'>
                        {subHeading.subHeadings.map((subSubHeading, subSubIndex) => (
                          <li key={subSubIndex}>
                            <a href={`#${subSubHeading.id}`} className="text-gray-500">{subSubHeading.text}</a>
                            {subSubHeading.subHeadings?.length > 0 && (
                              <ul className='ml-4 space-y-1'>
                                {subSubHeading.subHeadings.map((subSubSubHeading, subSubSubIndex) => (
                                  <li key={subSubSubIndex}>
                                    <a href={`#${subSubSubHeading.id}`} className="text-gray-500">{subSubSubHeading.text}</a>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
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
