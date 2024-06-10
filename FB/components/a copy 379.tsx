__d(
  "LSPlatformClientInstances",
  [
    "FBLogger",
    "LSPlatformClientSingleton",
    "LSPlatformLsInitLog",
    "LSSuspense",
    "MAWMICSafe",
    "MessengerLogHistory",
    "PromiseAnnotate",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "maybeSetupMAWMainThreadLogger",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = d("MessengerLogHistory").getInstance("client_init"),
      k = (i || (i = c("LSSuspense"))).makeCollection(),
      l = !1;
    function a(a, e, f) {
      l ||
        ((l = !0),
        d("maybeSetupMAWMainThreadLogger").maybeSetupMAWMainThreadLogger());
      return (i || (i = c("LSSuspense"))).getFromCollection(k, a, function () {
        return (h || (h = d("PromiseAnnotate"))).setDisplayName(
          b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            d("LSPlatformLsInitLog").addAnnotations({
              bool: { fromReact: f == null ? void 0 : f.fromReact },
            });
            j.debug("Messenger loading UI suspending");
            try {
              j.debug("Loading LSPlatformClient factory...");
              var b = yield e();
              j.debug("Loading LSPlatformClient factory success.");
              j.debug("Initializing LSPlatformClient...");
              b = yield b.make(a);
              yield b.start();
              j.debug("Initializing LSPlatformClient success");
              d("LSPlatformClientSingleton").saveInstance(b);
              return b;
            } catch (a) {
              b = c("getErrorSafe")(a);
              j.debug("Initializing LSPlatformClient failed");
              d("LSPlatformLsInitLog").fail("client_setup_failure", b);
              d("MAWMICSafe").fail("client_setup_failure", b);
              c("FBLogger")("mpf_web_foundations")
                .catching(b)
                .warn("LSPlatformClient initialization failure");
              throw b;
            } finally {
              j.debug("Messenger loading UI unsuspending");
            }
          })(),
          "InitLSPlatformClient"
        );
      });
    }
    e = { getOrInit: a };
    g["default"] = e;
  },
  98
);

import { FBLogger } from "FBLogger";
import { LSPlatformClientSingleton } from "LSPlatformClientSingleton";
import { LSPlatformLsInitLog } from "LSPlatformLsInitLog";
import { LSSuspense } from "LSSuspense";
import { MAWMICSafe } from "MAWMICSafe";
import { MessengerLogHistory } from "MessengerLogHistory";
import { PromiseAnnotate } from "PromiseAnnotate";
import { asyncToGeneratorRuntime } from "asyncToGeneratorRuntime";
import { getErrorSafe } from "getErrorSafe";
import { maybeSetupMAWMainThreadLogger } from "maybeSetupMAWMainThreadLogger";

const loggerInstance = MessengerLogHistory.getInstance("client_init");
const suspenseCollection = LSSuspense.makeCollection();
let isInitialized = false;

type FromReactOption = {
  fromReact?: boolean;
};

const getOrInit = async (
  clientName: string,
  loadClient: () => Promise<any>,
  options?: FromReactOption
) => {
  if (!isInitialized) {
    isInitialized = true;
    maybeSetupMAWMainThreadLogger();
  }

  return LSSuspense.getFromCollection(suspenseCollection, clientName, () => {
    return PromiseAnnotate.setDisplayName(
      asyncToGeneratorRuntime(async function* () {
        LSPlatformLsInitLog.addAnnotations({
          bool: { fromReact: options?.fromReact },
        });
        loggerInstance.debug("Messenger loading UI suspending");
        try {
          loggerInstance.debug("Loading LSPlatformClient factory...");
          const clientFactory = await loadClient();
          loggerInstance.debug("Loading LSPlatformClient factory success.");
          loggerInstance.debug("Initializing LSPlatformClient...");
          const clientInstance = await clientFactory.make(clientName);
          await clientInstance.start();
          loggerInstance.debug("Initializing LSPlatformClient success");
          LSPlatformClientSingleton.saveInstance(clientInstance);
          return clientInstance;
        } catch (error) {
          const safeError = getErrorSafe(error);
          loggerInstance.debug("Initializing LSPlatformClient failed");
          LSPlatformLsInitLog.fail("client_setup_failure", safeError);
          MAWMICSafe.fail("client_setup_failure", safeError);
          FBLogger("mpf_web_foundations")
            .catching(safeError)
            .warn("LSPlatformClient initialization failure");
          throw safeError;
        } finally {
          loggerInstance.debug("Messenger loading UI unsuspending");
        }
      })(),
      "InitLSPlatformClient"
    );
  });
};

export default { getOrInit };
