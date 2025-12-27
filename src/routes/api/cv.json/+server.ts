


/*** IMPORT ------------------------------------------- ***/

import { error, json } from "@sveltejs/kit";

/*** EXPORT ------------------------------------------- ***/

export const POST = async({ fetch, request }) => {
  try {
    const response = await fetch("https://cv.webb.page", {
      headers: { "Content-Type": "text/plain" },
      method: "GET"
    });

    const content = await response.text();
    return json({ content: processCV(content) });
  } catch(welp) {
    console.error(`Error fetching CV: ${String(welp)}`);
    return error(500);
  }
};

/*** HELPER ------------------------------------------- ***/

function processCV(text) {
  const sections = text.split(/(^░▒▓[\s\S]*?^---$)/m);
  const intro = sections[1];
  const body = sections[2];
  const lines = body.split(/\n{2,}/);
  const table = processTable(body);

  const processedLines = lines.map(line => {
    if (line.includes("Proficiency") && line.includes("Notes"))
      return table.join("").trim();

    return line.replace(/\s+/g, " ");
  });

  return intro + processedLines.join("\n\n") + "\n\n\n";
}

function processTable(text) {
  const lines = text.split(/\r?\n/);
  const tableStartIndex = lines.findIndex(line => line.includes("|"));

  if (tableStartIndex === -1)
    return null;

  const separatorLineIndex = lines.findIndex((line, index) => index > tableStartIndex && line.includes("|-") || line.includes("| -"));

  if (separatorLineIndex === -1)
    return null;

  let tableEndIndex = separatorLineIndex + 1;

  while (tableEndIndex < lines.length && lines[tableEndIndex].includes("|")) {
    tableEndIndex++;
  }

  const contentRows = lines.slice(separatorLineIndex + 1, tableEndIndex);

  return contentRows.map(row => {
    let cells = row.split("|").map(cell => cell.trim());

    if (cells[0] === "")
      cells.shift();

    if (cells[cells.length - 1] === "")
      cells.pop();

    return cells.join(" / ") + "\n";
  });
}
