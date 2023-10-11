export const requestId = "requestId";

export const attributes = {
  requestId: {
    name: requestId,
    type: "string",
  },
  error: {
    name: "error",
    type: "boolean",
  },
  errorType: {
    name: "errorType",
    type: "string",
    enum: ["redirect", "userError", "unexpectedError"],
  },
};

export const CLIENT_ENTRY = {
  name: "CLIENT_ENTRY",
  events: {
    SHUVI_CLIENT_ENTRY_START: {
      name: "SHUVI_CLIENT_ENTRY_START",
      duration: false,
    },
    SHUVI_CLIENT_SETUP_ENV: {
      name: "SHUVI_CLIENT_SETUP_ENV",
      duration: true,
    },
    SHUVI_CLIENT_CREATE_APP: {
      name: "SHUVI_CLIENT_CREATE_APP",
      duration: true,
    },
    SHUVI_CLIENT_APP_INIT: {
      name: "SHUVI_CLIENT_APP_INIT",
      duration: true,
    },
    SHUVI_CLIENT_RUN_APP: {
      name: "SHUVI_CLIENT_RUN_APP",
      duration: true,
    },
    SHUVI_CLIENT_DO_RENDER: {
      name: "SHUVI_CLIENT_DO_RENDER",
      duration: true,
    },
  },
};

export const navigationAttributes = {
  from: {
    name: "from",
    type: "string",
  },
  to: {
    name: "to",
    type: "string",
  },
  navigationId: {
    name: "navigationId",
    type: "string",
  },
};

export const CLIENT_RENDER = {
  name: "CLIENT_RENDER",
  events: {
    SHUVI_PAGE_READY: {
      name: "SHUVI_PAGE_READY",
      duration: false,
    },
    SHUVI_NAVIGATION_TRIGGERED: {
      name: "SHUVI_NAVIGATION_TRIGGERED",
      duration: true,
      attrs: navigationAttributes,
    },
    SHUVI_NAVIGATION_DONE: {
      name: "SHUVI_NAVIGATION_DONE",
      duration: true,
      attrs: navigationAttributes,
    },
    SHUVI_CLIENT_RUN_LOADERS: {
      name: "SHUVI_CLIENT_RUN_LOADERS",
      duration: true,
      attrs: attributes,
    },
  },
};