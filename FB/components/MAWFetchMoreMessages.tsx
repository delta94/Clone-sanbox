__d("MAWFetchMoreMessages", ["Int64Hooks", "MAWFetchCutoverMessages", "MAWFetchSecureMessages", "MAWSecureLocalDBDataSource", "promiseDone", "qpl", "useMAWQPLLogger", "useReStore"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h;

    function a(a, b, e) {
        var f = (h || (h = c("useReStore")))();
        return d("Int64Hooks").useCallbackInt64(function (d) {
            c("promiseDone")(c("MAWFetchCutoverMessages")(f, d, a, b, e))
        }, [f, a, b, e])
    }

    function b() {
        return d("Int64Hooks").useMemoInt64(function () {
            return new(c("MAWSecureLocalDBDataSource"))()
        }, [])
    }

    function e(a) {
        var b = (h || (h = c("useReStore")))(),
            e = d("useMAWQPLLogger").useMAWQPLLogger(c("qpl")._(25303796, "1974"));
        return d("Int64Hooks").useCallbackInt64(function (d, f, g, h) {
            return c("MAWFetchSecureMessages")(b, d, f, a, g, h, e)
        }, [b, e, a])
    }
    g.useFetchCutoverMessages = a;
    g.useSecureDataStorage = b;
    g.useFetchSecureMessages = e
}), 98);


import { useReStore } from "./useReStore";
import { useMAWQPLLogger } from "./useMAWQPLLogger";
import { Int64Hooks, promiseDone } from "./utils";
import { MAWFetchCutoverMessages, MAWFetchSecureMessages } from "./messageFetchers";
import { MAWSecureLocalDBDataSource } from "./secureDataSources";
import { QPL } from "./qpl";


export function useFetchCutoverMessages(threadJid: string, threadId:string, numMsgs: number) {
  const db = useReStore();
  return Int64Hooks.useCallbackInt64((direction: string) => {
    promiseDone(MAWFetchCutoverMessages(db, direction, threadJid, threadId, numMsgs));
  }, [db, threadJid, threadId, numMsgs]);
}

export function useSecureDataStorage() {
  return Int64Hooks.useMemoInt64(() => {
    return new MAWSecureLocalDBDataSource();
  }, []);
}

export function useFetchSecureMessages(dataType: string) {
  const store = useReStore();
  const logger = useMAWQPLLogger(QPL._(25303796, "1974"));
  return Int64Hooks.useCallbackInt64((userId: string, since: number, filter: any, options: any) => {
    return MAWFetchSecureMessages(store, userId, since, dataType, filter, options, logger);
  }, [store, logger, dataType]);
}
