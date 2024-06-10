__d(
  "LSCustomUpdateMuteManagementStoredProcedure",
  ["LSCustomUpdateMuteManagement", "cr:8709"],
  function (a, b, c, d, e, f, g) {
    function a(a, b) {
      var d = [];
      d[0] = b.mutedUserId;
      d[1] = b.gameId;
      d[2] = b.userActionType;
      return c("LSCustomUpdateMuteManagement").apply(void 0, d.concat([a]));
    }
    g["default"] = a;
  },
  98
);

import LSCustomUpdateMuteManagement from "LSCustomUpdateMuteManagement";

interface MuteManagementParams {
  mutedUserId: string;
  gameId: string;
  userActionType: string;
}

function LSCustomUpdateMuteManagementStoredProcedure(
  storedProcedureName: string,
  params: MuteManagementParams
): ReturnType<typeof LSCustomUpdateMuteManagement> {
  const args: [string, string, string] = [
    params.mutedUserId,
    params.gameId,
    params.userActionType,
  ];
  return LSCustomUpdateMuteManagement(...args, storedProcedureName);
}

export default LSCustomUpdateMuteManagementStoredProcedure;
