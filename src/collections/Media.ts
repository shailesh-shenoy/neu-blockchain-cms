import { CollectionConfig } from "payload/types";

export type MediaType = {
  filename: string;
  width: number;
  height: number;
  alt: string;
  sizes: {
    card?: {
      filename: string;
      width: number;
      height: number;
    };
    feature?: {
      filename: string;
      width: number;
      height: number;
    };
  };
};

const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: (): boolean => true, // Everyone can read Media
  },
  upload: {
    adminThumbnail: "card",
    mimeTypes: ["image/*"],
    imageSizes: [
      {
        name: "card",
        width: 640,
        height: 640,
      },
      {
        name: "feature",
        width: 1024,
        height: 1024,
      },
    ],
  },
  fields: [
    {
      name: "alt",
      label: "Alt Text",
      type: "text",
      required: true,
    },
  ],
};

export default Media;
