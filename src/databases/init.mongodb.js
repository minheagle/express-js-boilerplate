"use strict";

import mongoose from "mongoose";
import profile from "../configs/profile.config.js";
const { host, port, name } = profile.db;
const connectionString = `mongodb://${host}:${port}/${name}`;

class Database {
  constructor() {
    this.connect();
  }

  connect(type = "mongodb") {
    if (true) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }

    mongoose
      .connect(connectionString)
      .then(() => console.log(`Connect to mongodb successfully !!!`))
      .catch(() => console.log(`Connect to mongodb failed !!!`));
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }
}

const instanceMongoDb = Database.getInstance();

export default instanceMongoDb;
