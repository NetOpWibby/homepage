


//// import

import { error, json } from "@sveltejs/kit";



//// export

export const POST = async({ fetch }) => {
  try {
    const response = await fetch("https://social.coop/users/netopwibby/outbox?page=true", {
      headers: { "Content-Type": "application/json" },
      method: "GET"
    });

    const { orderedItems } = await response.json();
    const { object } = findCreateType(orderedItems);

    return json({
      created: object.published,
      content: object.content,
      link: object.url,
      media: processAttachments(object.attachment)
    });
  } catch(welp) {
    console.error("Error fetching latest Mastodon post:", welp);
    return error(welp);
  }
};



//// helper

function findCreateType(arr: Array<{ [key: string]: any }>): { [key: string]: any } | undefined {
  return arr.find(obj => obj.type === "Create");
}

function processAttachments(attachments: Array<any>) {
  const media = [];

  for (const attachment of attachments) {
    // TODO
    // : use blurhash given to us by mastodon
    // : https://github.com/woltapp/blurhash/tree/master/TypeScript#example
    // : `attachment` comes with blurhash, height, mediaType, width
    media.push(attachment.url);
  }

  return media;
}
