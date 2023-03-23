import { isAdmin, isAdminFieldLevel } from "../access/isAdmin";
import {
  isAdminOrSelf,
  isAdminOrSelfFieldLevel,
} from "../access/isAdminOrSelf";
import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  access: {
    create: isAdmin,
    read: () => true,
    update: isAdminOrSelf,
    delete: isAdminOrSelf,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "roles",
      type: "select",
      hasMany: true,
      defaultValue: ["developer"],
      required: true,
      access: {
        read: () => true,
        create: isAdminFieldLevel,
        update: isAdminFieldLevel,
      },
      options: ["admin", "developer", "research"],
    },
    {
      name: "title",
      type: "text",
      required: false,
    },
    {
      name: "photo",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "description",
      type: "text",
      required: false,
    },
    {
      name: "linkedin",
      type: "text",
      required: false,
    },
    // Email added by default
    // Add more fields as needed
  ],
};

export default Users;
