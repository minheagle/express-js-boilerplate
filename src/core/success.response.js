"use strict";

import { ReasonPhrases, StatusCodes } from "../constants/httpStatusCode.js";

class SuccessResponse {
  constructor({
    statusCode = StatusCodes.OK,
    message,
    metadata,
    options = {},
  }) {
    this.statusCode = statusCode;
    this.message = !message ? ReasonPhrases.OK : message;
    this.metadata = metadata;
    this.options = options;
  }

  send(res, header = {}) {
    return res.status(this.statusCode).json(this);
  }
}

class OkResponse extends SuccessResponse {
  constructor({ message = ReasonPhrases.OK, metadata, options = {} }) {
    super({ message, metadata, options });
  }
}

class CreatedResponse extends SuccessResponse {
  constructor({
    statusCode = StatusCodes.CREATED,
    message = ReasonPhrases.CREATED,
    metadata,
    options = {},
  }) {
    super({ statusCode, message, metadata, options });
  }
}

export { OkResponse, CreatedResponse };
