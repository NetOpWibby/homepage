"use strict";



//  E X P O R T

export default markdown => {
  const _match = /---\n([\s\S]+?)\n---/.exec(markdown);
  const content = markdown.slice(_match[0].length);
  const frontMatter = _match[1];
  const metadata = {};

  frontMatter.split("\n").forEach(pair => {
    const colonIndex = pair.indexOf(":");
    const thisIsAnArray = /(?!\[).*(?=\])/.exec(pair.slice(colonIndex + 1).trim());

    if (thisIsAnArray) {
      metadata[pair.slice(0, colonIndex).trim()] = [];

      thisIsAnArray[0].split(",").map(arrayItem => {
        metadata[pair.slice(0, colonIndex).trim()].push(arrayItem.trim());
      });
    } else {
      let trimmedValue = pair.slice(colonIndex + 1).trim();

      // Check for boolean values
      if (trimmedValue === "true" || trimmedValue === "false")
        trimmedValue = Boolean(trimmedValue);

      metadata[pair.slice(0, colonIndex).trim()] = trimmedValue;
    }
  });

  return {
    content,
    metadata,
    raw: stripMarkdown(content)
  };
};



//  H E L P E R

function stripMarkdown(markdown) {
  return markdown
    .replace(/\n/g, " ")
    .replace("  ", " ")
    .replace("**", "*")
    .replace(/_/g, "")
    .trim();
}
