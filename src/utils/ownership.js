"use strict";



//  E X P O R T

export default providedString => {
  const normalizedString = providedString.toLowerCase();

  switch(true) {
    case normalizedString.charAt(normalizedString.length - 1) === "s":
    case normalizedString.charAt(normalizedString.length - 1) === "z":
      return `${providedString}'`;

    default:
      return `${providedString}'s`;
  }
};
