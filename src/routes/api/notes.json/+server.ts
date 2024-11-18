


//// import

import { error, json } from "@sveltejs/kit";



//// export

export const POST = async({ fetch, request }) => {
  try {
    const { filename } = await request.json();

    const response = await fetch("https://blog.webb.page/notes/" + String(filename), {
      headers: { "Content-Type": "text/plain" },
      method: "GET"
    });

    const content = await response.text();
    return json({ content: replaceLineBreaks(content) });
  } catch(welp) {
    console.error("Error fetching note:", welp);
    return error(welp);
  }
};



//// helper

function replaceLineBreaks(text: string): string {
  const sections = text.split(/(^---[\s\S]*?^---$|^---[\s\S]*$)/m);

  const processedSections = sections.map((section, index) => {
    if (section.startsWith("---"))
      return section;

    const paragraphs = section.split(/\n{2,}/);

    const processedParagraphs = paragraphs.map(paragraph => {
      if (paragraph.startsWith("```") && index !== 0)
        return paragraph;

      if (paragraph.startsWith("##") && index !== 0) {
        const headline = paragraph.match(/\#.*/g);
        const content = paragraph.split(/\#.*/g);

        return headline[0] + "\n\n" + content[1].trim().replace(/\n/g, " ");
      }

      if (paragraph.startsWith("- ") && index !== 0) {
        const lines = paragraph.split("- ").map(line => {
          if (line.length > 0)
            return line = "- " + line.replace(/\n/g, "").replace(/\s\s/g, " ");
        }).join("\n");

        return "\n" + lines;
      }

      return paragraph.trim().replace(/\n/g, " ").replace(/\s\s/g, " ").replace(/\s\s/g, " ");
    });

    return processedParagraphs.join("\n\n");
  });

  return processedSections.join("").replace(/\n\n\n/g, "\n");
}
