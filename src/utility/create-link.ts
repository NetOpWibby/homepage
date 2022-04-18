


///  I M P O R T

import dedent from "dedent";



///  E X P O R T

export default suppliedData => {
  const { destination, title, wrappedText } = suppliedData;

  return dedent`
    <a
      href="${destination}"
      rel="noopener noreferrer"
      target="_blank"
      title="${title}"
    >${wrappedText}</a>
  `;
};
