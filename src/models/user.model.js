"use strict";

import mongoose from "mongoose"; // Erase if already required

const DOCUMENT_NAME = "User";
const COLLECTION_NAME = "Users";

// Declare the Schema of the Mongo model
const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
      index: true,
    },
    last_name: {
      type: String,
      required: true,
      index: true,
    },
    gender: {
      type: String,
    },
    avatar: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    password: {
      type: String,
      // required: true,
    },
    type: {
      type: String,
      default: "local",
    },
    is_active: {
      type: Boolean,
      default: false,
    },
    is_blocked: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

//Export the model
export default mongoose.model(DOCUMENT_NAME, userSchema);
