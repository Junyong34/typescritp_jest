export default {
  definitions: {},
  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "http://example.com/root.json",
  type: "object",
  title: "The Root Schema",
  required: ["args", "headers", "origin", "url"],
  properties: {
    args: {
      $id: "#/properties/args",
      type: "object",
      title: "The Args Schema"
    },
    headers: {
      $id: "#/properties/headers",
      type: "object",
      title: "The Headers Schema",
      required: ["Accept", "Host", "User-Agent"],
      properties: {
        Accept: {
          $id: "#/properties/headers/properties/Accept",
          type: "string",
          title: "The Accept Schema",
          default: "",
          examples: [
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3"
          ],
          pattern: "^(.*)$"
        },
        Host: {
          $id: "#/properties/headers/properties/Host",
          type: "string",
          title: "The Host Schema",
          default: "",
          examples: ["httpbin.org"],
          pattern: "^(.*)$"
        },
        "User-Agent": {
          $id: "#/properties/headers/properties/User-Agent",
          type: "string",
          title: "The User-agent Schema",
          default: "",
          examples: [
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36"
          ],
          pattern: "^(.*)$"
        }
      }
    },
    origin: {
      $id: "#/properties/origin",
      type: "string",
      title: "The Origin Schema",
      default: "",
      examples: ["211.54.64.175, 211.54.64.175"],
      pattern: "^(.*)$"
    },
    url: {
      $id: "#/properties/url",
      type: "string",
      title: "The Url Schema",
      default: "",
      examples: ["https://httpbin.org/get"],
      pattern: "^(.*)$"
    }
  }
};