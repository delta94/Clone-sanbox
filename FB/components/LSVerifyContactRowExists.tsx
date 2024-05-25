__d("LSVerifyContactRowExists", ["LSIssueNewTask"], (function (a, b, c, d, e, f) {
    function a() {
        var a = arguments,
            c = a[a.length - 1],
            d = [],
            e = [];
        return c.sequence([function (e) {
            return c.filter(c.db.table(7).fetch([
                [
                    [a[0]]
                ]
            ]), function (b) {
                return c.i64.eq(b.id, a[0]) && c.i64.eq(c.i64.cast([0, 1]), c.i64.cast([0, 1]))
            }).next().then(function (e) {
                var f = e.done;
                e.value;
                return f ? c.sequence([function (b) {
                    return d[0] = a[3] == null ? "" : a[3], c.forEach(c.filter(c.db.table(7).fetch([
                        [
                            [a[0]]
                        ]
                    ]), function (b) {
                        return c.i64.eq(b.id, a[0]) && c.i64.eq(c.i64.cast([0, 1]), c.i64.cast([0, 1])) && c.i64.lt(b.authorityLevel, a[14])
                    }), function (a) {
                        return a["delete"]()
                    })
                }, function (b) {
                    return c.db.table(7).add({
                        id: a[0],
                        profilePictureUrl: a[2] == null ? "" : a[2],
                        profilePictureFallbackUrl: a[5],
                        name: d[0],
                        secondaryName: a[20],
                        normalizedNameForSearch: d[0],
                        isMemorialized: a[9],
                        blockedByViewerStatus: a[11],
                        canViewerMessage: a[12],
                        profilePictureLargeUrl: "",
                        isMessengerUser: !0,
                        rank: 0,
                        contactType: a[4],
                        contactTypeExact: c.i64.cast([0, 0]),
                        requiresMultiway: !1,
                        authorityLevel: a[14],
                        workForeignEntityType: c.i64.cast([0, 0]),
                        capabilities: a[15],
                        capabilities2: a[16],
                        contactViewerRelationship: a[19],
                        gender: a[18]
                    })
                }, function (e) {
                    return d[1] = new c.Map(), d[1].set("contact_id", a[0]), d[2] = c.toJSON(d[1]), c.storedProcedure(b("LSIssueNewTask"), "cpq_v2", c.i64.cast([0, 207]), d[2], void 0, void 0, c.i64.cast([0, 0]), c.i64.cast([0, 0]), void 0, void 0, c.i64.cast([0, 0]), c.i64.cast([0, 0]))
                }]) : 0
            })
        }, function (a) {
            return c.resolve(e)
        }])
    }
    e.exports = a
}), null);


import { issueNewTask } from "./issueNewTask";

interface Contact {
  id: bigint;
  profilePictureUrl: string;
  profilePictureFallbackUrl: string;
  name: string;
  secondaryName: string;
  normalizedNameForSearch: string;
  isMemorialized: boolean;
  blockedByViewerStatus: bigint;
  canViewerMessage: boolean;
  profilePictureLargeUrl: string;
  isMessengerUser: boolean;
  rank: number;
  contactType: bigint;
  contactTypeExact: bigint;
  requiresMultiway: boolean;
  authorityLevel: bigint;
  workForeignEntityType: bigint;
  capabilities: bigint;
  capabilities2: bigint;
  contactViewerRelationship: bigint;
  gender: bigint;
  delete(): void;
}

const verifyContactRowExists = async (...args: any[]): Promise<void> => {
  const context = args[args.length - 1];
  const tempData: any[] = [];
  const result: any[] = [];

  await context.sequence([
    async (resolve: any) => {
      const fetchResult = await context.filter(
        context.db.table(7).fetch([[args[0]]]),
        (contact: Contact) =>
          context.i64.eq(contact.id, args[0]) &&
          context.i64.eq(context.i64.cast([0, 1]), context.i64.cast([0, 1]))
      ).next();

      const { done } = fetchResult;
      if (done) {
        await context.sequence([
          async (resolveDelete: any) => {
            tempData[0] = args[3] == null ? "" : args[3];
            await context.forEach(
              context.filter(
                context.db.table(7).fetch([[args[0]]]),
                (contact: Contact) =>
                  context.i64.eq(contact.id, args[0]) &&
                  context.i64.eq(context.i64.cast([0, 1]), context.i64.cast([0, 1])) &&
                  context.i64.lt(contact.authorityLevel, args[14])
              ),
              (contact: Contact) => contact.delete()
            );
          },
          async (resolveAdd: any) => {
            await context.db.table(7).add({
              id: args[0],
              profilePictureUrl: args[2] == null ? "" : args[2],
              profilePictureFallbackUrl: args[5],
              name: tempData[0],
              secondaryName: args[20],
              normalizedNameForSearch: tempData[0],
              isMemorialized: args[9],
              blockedByViewerStatus: args[11],
              canViewerMessage: args[12],
              profilePictureLargeUrl: "",
              isMessengerUser: true,
              rank: 0,
              contactType: args[4],
              contactTypeExact: context.i64.cast([0, 0]),
              requiresMultiway: false,
              authorityLevel: args[14],
              workForeignEntityType: context.i64.cast([0, 0]),
              capabilities: args[15],
              capabilities2: args[16],
              contactViewerRelationship: args[19],
              gender: args[18],
            });
          },
          async (resolveTask: any) => {
            tempData[1] = new context.Map();
            tempData[1].set("contact_id", args[0]);
            tempData[2] = context.toJSON(tempData[1]);
            await context.storedProcedure(
              issueNewTask,
              "cpq_v2",
              context.i64.cast([0, 207]),
              tempData[2],
              undefined,
              undefined,
              context.i64.cast([0, 0]),
              context.i64.cast([0, 0]),
              undefined,
              undefined,
              context.i64.cast([0, 0]),
              context.i64.cast([0, 0])
            );
          },
        ]);
      }
    },
    async (resolveResult: any) => {
      return context.resolve(result);
    },
  ]);
};

export { verifyContactRowExists };