


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
    // @ts-ignore | Property "object" does not exist on type "{ [key: string]: any; } | undefined".
    const { object } = findCreateType(orderedItems);

    return json({
      created: object.published,
      content: object.content,
      link: object.url,
      media: processAttachments(object.attachment)
    });
  } catch(welp) {
    console.error("Error fetching latest Mastodon post:", welp);
    return error(500);
  }
};



//// helper

function findCreateType(arr: Array<{ [key: string]: any }>): { [key: string]: any } | undefined {
  return arr.find(obj => obj.type === "Create");
}

function processAttachments(attachments: Array<{ [key: string]: any }>): Array<string> {
  const media = [];

  if (attachments) {
    for (const attachment of attachments) {
      // TODO
      // : use blurhash given to us by mastodon
      // : https://github.com/woltapp/blurhash/tree/master/TypeScript#example
      // : `attachment` comes with blurhash, height, mediaType, width
      // if (attachment && attachment.url)

      // @ts-ignore | Argument of type "any" is not assignable to parameter of type "never".
      media.push(attachment.url);
    }
  }

  return media;
}
