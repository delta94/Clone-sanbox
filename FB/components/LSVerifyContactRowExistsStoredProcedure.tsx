__d("LSVerifyContactRowExistsStoredProcedure", ["LSVerifyContactRowExists", "cr:8709"], (function (a, b, c, d, e, f, g) {
    function a(a, b) {
        var d = [];
        d[0] = b.id;
        d[1] = b.contactIdType;
        d[2] = b.profilePictureUrl;
        d[3] = b.name;
        d[4] = b.contactType;
        d[5] = b.profilePictureFallbackUrl;
        d[6] = b.profilePictureUrlExpirationTimestampMs;
        d[7] = b.urlExpirationTimestampMs;
        d[8] = b.normalizedNameForSearch;
        d[9] = b.isMemorialized;
        d[10] = b.isBlocked;
        d[11] = b.blockedByViewerStatus;
        d[12] = b.canViewerMessage;
        d[13] = b.isSelf;
        d[14] = b.authorityLevel;
        d[15] = b.capabilities;
        d[16] = b.capabilities2;
        d[17] = b.workForeignEntityType;
        d[18] = b.gender;
        d[19] = b.contactViewerRelationship;
        d[20] = b.secondaryName;
        return c("LSVerifyContactRowExists").apply(void 0, d.concat([a]))
    }
    g["default"] = a
}), 98);


import LSVerifyContactRowExists from 'LSVerifyContactRowExists';

interface ContactData {
    id: string;
    contactIdType: string;
    profilePictureUrl: string;
    name: string;
    contactType: string;
    profilePictureFallbackUrl: string;
    profilePictureUrlExpirationTimestampMs: number;
    urlExpirationTimestampMs: number;
    normalizedNameForSearch: string;
    isMemorialized: boolean;
    isBlocked: boolean;
    blockedByViewerStatus: boolean;
    canViewerMessage: boolean;
    isSelf: boolean;
    authorityLevel: string;
    capabilities: string;
    capabilities2: string;
    workForeignEntityType: string;
    gender: string;
    contactViewerRelationship: string;
    secondaryName: string;
}

function LSVerifyContactRowExistsStoredProcedure(a: unknown, b: ContactData): unknown {
    const dataArray = [
        b.id,
        b.contactIdType,
        b.profilePictureUrl,
        b.name,
        b.contactType,
        b.profilePictureFallbackUrl,
        b.profilePictureUrlExpirationTimestampMs,
        b.urlExpirationTimestampMs,
        b.normalizedNameForSearch,
        b.isMemorialized,
        b.isBlocked,
        b.blockedByViewerStatus,
        b.canViewerMessage,
        b.isSelf,
        b.authorityLevel,
        b.capabilities,
        b.capabilities2,
        b.workForeignEntityType,
        b.gender,
        b.contactViewerRelationship,
        b.secondaryName
    ];
    return LSVerifyContactRowExists(...dataArray, a);
}

export default LSVerifyContactRowExistsStoredProcedure;
