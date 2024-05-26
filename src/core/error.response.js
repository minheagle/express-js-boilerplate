"use strict";

import { StatusCodes, ReasonPhrases } from "../constants/httpStatusCode.js";

class ErrorResponse extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

class BadRequestResponse extends ErrorResponse {
  constructor(
    message = ReasonPhrases.BAD_REQUEST,
    status = StatusCodes.BAD_REQUEST
  ) {
    super(message, status);
  }
}

class UnauthorizedResponse extends ErrorResponse {
  constructor(
    message = ReasonPhrases.UNAUTHORIZED,
    status = StatusCodes.UNAUTHORIZED
  ) {
    super(message, status);
  }
}

class FobbidenResponse extends ErrorResponse {
  constructor(
    message = ReasonPhrases.FORBIDDEN,
    status = StatusCodes.FORBIDDEN
  ) {
    super(message, status);
  }
}

class NotFoundResponse extends ErrorResponse {
  constructor(
    message = ReasonPhrases.NOT_FOUND,
    status = StatusCodes.NOT_FOUND
  ) {
    super(message, status);
  }
}

class UnprocessableEntityResponse extends ErrorResponse {
  constructor(
    message = ReasonPhrases.UNPROCESSABLE_ENTITY,
    status = StatusCodes.UNPROCESSABLE_ENTITY
  ) {
    super(message, status);
  }
}

class InternalErrorServerResponse extends ErrorResponse {
  constructor(
    message = ReasonPhrases.INTERNAL_SERVER_ERROR,
    status = StatusCodes.INTERNAL_SERVER_ERROR
  ) {
    super(message, status);
  }
}

class BadGatewayResponse extends ErrorResponse {
  constructor(
    message = ReasonPhrases.BAD_GATEWAY,
    status = StatusCodes.BAD_GATEWAY
  ) {
    super(message, status);
  }
}

export {
  BadRequestResponse,
  UnauthorizedResponse,
  FobbidenResponse,
  NotFoundResponse,
  UnprocessableEntityResponse,
  InternalErrorServerResponse,
  BadGatewayResponse,
};
