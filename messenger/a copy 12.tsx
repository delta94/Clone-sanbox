__d("MWInboxDetailNullState.react", ["CometContentArea.react", "MWInboxDetailCommunityNullState.react", "MWInboxDetailInboxNullState.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || d("react");
    function a(a) {
        var b = a.entityId;
        a = a.entityType;
        return i.jsx(c("CometContentArea.react"), {
            hasNoRole: !0,
            verticalAlign: "middle",
            children: a === "community_folder" && b != null ? i.jsx(c("MWInboxDetailCommunityNullState.react"), {
                folderId: b
            }) : i.jsx(c("MWInboxDetailInboxNullState.react"), {})
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}
), 98);