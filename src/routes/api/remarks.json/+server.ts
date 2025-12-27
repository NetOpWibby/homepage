


/*** IMPORT ------------------------------------------- ***/

import { error, json } from "@sveltejs/kit";

/*** EXPORT ------------------------------------------- ***/

export const POST = async({ fetch, request }) => {
  try {
    const { filename } = await request.json();

    const response = await fetch("https://blog.webb.page/remarks/" + String(filename), {
      headers: { "Content-Type": "text/plain" },
      method: "GET"
    });

    // const content = await response.text();
    // return json({ content: parseRemark(content) });

    const remark = parseRemark(await response.text());
    remark.push(`   <span class="special-char">[</span><a href="https://blog.webb.page/remarks/${String(filename).split(".txt")[0]}">READ</a><span class="special-char">]</span>`, "\n");

    return json({ content: remark.join("\n") });
  } catch(welp) {
    console.error(`Error fetching remark: ${String(welp)}`);
    return error(500);
  }
};

/*** HELPER ------------------------------------------- ***/

function parseRemark(text: string): string {
  const intro = text.split(/^Body$/m)[0];
  const lines = intro.split("\n").filter(Boolean);
  const format = [""];
  let firstLine = "";

  lines.map((line, index) => {
    if (index === 1)
      firstLine = "   " + line.split(/\s+\B/)[1].trim();

    if (index === 2) {
      firstLine += ` • ${line.trim()}`;
      format.push(firstLine);
    }

    if (index === 4)
      format.push("   " + line.trim());
  });

  return format;
}
