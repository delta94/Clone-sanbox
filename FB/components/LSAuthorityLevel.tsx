__d("LSAuthorityLevel", [], (function (a, b, c, d, e, f) {
    a = Object.freeze({
        OPTIMISTIC: 20,
        CLIENT_PARTIAL: 40,
        SERVER_PARTIAL: 60,
        AUTHORITATIVE_PENDING_REPLACEMENT: 75,
        AUTHORITATIVE: 80,
        CLIENT_AUTHORITATIVE_DELETE: 100
    });
    f["default"] = a
}), 66);

const LSAuthorityLevel = Object.freeze({
    OPTIMISTIC: 20,
    CLIENT_PARTIAL: 40,
    SERVER_PARTIAL: 60,
    AUTHORITATIVE_PENDING_REPLACEMENT: 75,
    AUTHORITATIVE: 80,
    CLIENT_AUTHORITATIVE_DELETE: 100
});

export default LSAuthorityLevel;
