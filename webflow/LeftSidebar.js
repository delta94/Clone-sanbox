
"use strict";
n.d(t, {
    Bn: () => getCurrentDesignerConfig,
    WN: () => tr,
    Jo: () => selectDesignerAbility,
    q4: () => tl,
    sG: () => selectIsPanelEnabled
});
var a = n(12463),
    r = n(74514),
    l = n(54310),
    i = n(26887),
    o = n(97777),
    s = n(95700),
    d = n(52274),
    c = n(78451),
    u = n(9601),
    m = n(29532),
    p = n(82914),
    g = n(13066),
    h = n(15251),
    f = n(56727),
    E = n(17664);
Object.freeze({
    ACCEPT_CREDIT_CARDS: "acceptsCreditCard",
    ACCEPTS_INVOICE: "acceptsInvoice",
    ALLOW_ADVANCED_PERMISSIONS: "advancedPermissions",
    ALLOW_BRANDING: "allowBranding",
    ALLOW_CUSTOM_CODE: "allowCustomCode",
    ALLOW_EXPORT: "allowExport",
    ALLOW_HIDE_BRANDING: "allowHideBranding",
    ALLOW_MULTIPLE_WORKSPACE_USERS: "allowMultipleWorkspaceUsers",
    ALLOW_PAGE_BRANCHING: "pageBranching",
    ALLOW_PERMISSION_OVERRIDES: "allowPermissionOverrides",
    ALLOW_SITE_ACTIVITY_LOG: "siteActivityLog",
    ALLOW_SITE_PASSWORDS: "allowSitePasswords",
    ALLOW_SITE_ROLES: "allowSiteRoles",
    ALLOW_SITE_SHOWCASING: "allowSiteShowcasing",
    ALLOW_TRANSFERS: "allowTransfers",
    ALLOW_WORKSPACE_ROLES: "allowWorkspaceRoles",
    BILLING_PERMISSIONS: "billingPermissions",
    CAN_BE_GUEST: "canBeGuest",
    CAN_BE_HIRED: "canBeHired",
    CAN_EXCEED_MAX_SEATS: "canExceedMaxSeats",
    CAN_INVITE_GUESTS: "canInviteGuests",
    EMAIL_SUPPORT: "emailSupport",
    MAX_COMMENTER_SEATS: "maxCommenterSeats",
    MAX_DEVLINK_COMPONENTS: "maxDevlinkComponents",
    MAX_GUESTS: "maxGuests",
    MAX_HOSTED_SITES: "maxHostedSites",
    MAX_TEMPLATES: "maxTemplates",
    MAX_UNHOSTED_SITES: "maxUnhostedSites",
    PUBLISHING_PERMISSIONS: "publishingPermissions",
    SEATS: "maxSeats",
    SITE_SPECIFIC_ACCESS: "siteSpecificAccess"
});
let y = Object.freeze({
    ALLOW_301: "allow301",
    ALLOW_ADVANCED_PUBLISH: "allowAdvancedPublish",
    ALLOW_COLLABS: "allowCollabs",
    ALLOW_CUSTOM_404: "allowCustom404",
    ALLOW_CUSTOM_CODE: "allowCustomCode",
    ALLOW_CUSTOM_FORMS: "allowCustomForms",
    ALLOW_DOCUMENT_UPLOADS: "allowDocumentUploads",
    ALLOW_ECOMMERCE: "allowEcommerce",
    ALLOW_EXTRA_COLLABS: "allowExtraCollabs",
    ALLOW_FORM_FILE_UPLOAD: "allowFormFileUpload",
    ALLOW_GLOBAL_CDN: "allowGlobalCDN",
    ALLOW_HIDE_BRANDING: "allowHideBranding",
    ALLOW_HIDE_ECOMM_EMAIL_BRANDING: "allowHideEcommEmailBranding",
    ALLOW_HIDE_USYS_EMAIL_BRANDING: "allowHideUsysEmailBranding",
    ALLOW_PAGE_PASSWORDS: "allowPagePasswords",
    ALLOW_PUBLISH_DOMAIN: "allowPublishDomain",
    ALLOW_SCHEDULED_SIP: "allowScheduledSIP",
    ALLOW_SEO: "allowSEO",
    ALLOW_SINGLE_SIGN_ON: "allowSingleSignOn",
    ALLOW_SITE_PASSWORDS: "allowSitePasswords",
    ALLOW_SITE_SEARCH: "allowSiteSearch",
    ALLOW_SITE_SHOWCASING: "allowSiteShowcasing",
    ALLOW_TYPEKIT: "allowTypekit",
    API_RATE_LIMIT: "rateLimit",
    CAN_USE_LOCALIZATION_BROWSER_DETECTION: "canUseLocalizationBrowserDetection",
    CAN_USE_LOCALIZATION_GEOLOCATION_DETECTION: "canUseLocalizationGeolocationDetection",
    CAN_LOCALIZE_CMS: "canLocalizeCMS",
    CAN_LOCALIZE_STATIC_CONTENT: "canLocalizeStaticContent",
    CAN_LOCALIZE_SEO: "canLocalizeSEO",
    CAN_LOCALIZE_URLS: "canLocalizeURLs",
    CAN_LOCALIZE_ASSETS: "canLocalizeAssets",
    CAN_LOCALIZE_ELEMENT_STYLES: "canLocalizeElementStyles",
    CAN_LOCALIZE_ELEMENT_VISIBILITY: "canLocalizeElementVisibility",
    CAN_LOCALIZE_IMAGE_ELEMENTS: "canLocalizeImageElements",
    CAN_PUBLISH_LOCALES: "canPublishLocales",
    CDN_MONTHLY_GB_LIMIT: "cdnMonthlyGBLimit",
    FORM_SUBMISSIONS: "warnLimitForms",
    FREE_CMS_ITEMS: "freeCMSItems",
    FREE_COLLABS: "freeCollabs",
    FREE_ECOM_ITEMS: "freeEcomItems",
    GIVES_LEGACY_BRANDING: "givesLegacyBranding",
    HAS_CUSTOMER_SUCCESS_MANAGER: "hasCustomerSuccessManager",
    LOCALES: "maxLocales",
    LOCALIZATION_WORDS_TRANSLATED: "localizationWordsTranslated",
    MAX_COLLECTIONS: "maxCollections",
    MAX_COLLECTION_FIELDS: "maxCollectionFields",
    COLLECTION_ITEM_REFS: "maxCollectionItemRefs",
    MAX_FLOWS: "maxFlows",
    MAX_FLOW_EXECUTIONS: "maxFlowExecutions",
    MAX_PAGES: "maxPages",
    MONTHLY_VISITS: "warnMonthlyViews",
    SEARCH_INDEX_PERIOD_AUTO: "searchIndexPeriodAuto",
    SEARCH_INDEX_PERIOD_MANUAL: "searchIndexPeriodManual",
    TRANSACTION_FEE: "transactionFee",
    UNCAPPED_API: "uncappedAPI",
    USYS_MAX_USERS: "usysMaxUsers",
    VISIBLE_BACKUPS: "visibleBackups"
});
var b = n(88767);
let betaStateMatchesRequirements = (e, t) => Object.entries(t).every(t => {
        let [n, a] = t;
        return !!e[n] === a
    }),
    featureFlagMatchesRequirements = e => Object.entries(e).every(e => {
        let [t, n] = e;
        return (0, p.OC)(t) === n
    }),
    getCurrentLocaleType = e => (0, m.oi)(e.LocalizationStore) ? u.Z_.PRIMARY : u.Z_.SECONDARY,
    getCurrentBranchMode = e => {
        let t = e.DesignerStore.currentPageId,
            n = (0, E.fx)(t, e.PageStore);
        return (0, f.cz)(n) ? h.fg.BRANCH : h.fg.MAIN
    },
    getCurrentDesignerConfig = e => {
        let t = o.Ec ? "editorApp" : (0, s.wQ)(e.DesignerStore),
            n = !o.Ec && (0, s.Qy)(e.DesignerStore),
            a = !o.Ec && (0, s.Tq)(e.DesignerStore),
            r = !o.Ec && getCurrentBranchMode(e),
            l = !o.Ec && getCurrentLocaleType(e),
            i = !!e.HandoverStore && (e.HandoverStore.isViewer ? "viewer" : "leader");
        return {
            currentUserType: t,
            currentWorkflow: n,
            currentSiteMode: a,
            currentBranchMode: r,
            currentLocaleType: l,
            currentHandoverUserType: i
        }
    },
    designerAbility = function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return e => {
            let {
                currentUserType: n,
                currentWorkflow: a,
                currentSiteMode: r,
                currentBranchMode: l,
                currentLocaleType: o,
                currentHandoverUserType: s
            } = getCurrentDesignerConfig(e);
            return t.some(t => {
                let {
                    abilities: d,
                    userTypes: c,
                    siteModes: u,
                    localization: m,
                    workflows: p,
                    handoverRoles: g,
                    betaFlags: h,
                    featureFlags: f,
                    permission: E,
                    branches: y,
                    entitlements: b,
                    additionalRequirements: v
                } = t;
                if (d && !d.every(t => selectDesignerAbility(t)(e)) || c && !c[n] || u && r && !u[r] || m && o && m.currentLocaleType && !m.currentLocaleType[o] || p && a && !p[a]) return !1;
                if (b && e.EntitlementsStore) {
                    let t = b.every(t => {
                        let n = e.EntitlementsStore.siteEntitlements;
                        if (!n) return !1;
                        let a = n[t];
                        if (a) return a.hasAccess;
                        let r = e.EntitlementsStore.workspaceEntitlements;
                        if (!r) return !1;
                        let l = r[t];
                        return !!l && l.hasAccess
                    });
                    if (!t) return !1
                }
                return (!g || !s || !!g[s]) && (!h || !e.BetaFeatureStore || !!betaStateMatchesRequirements(e.BetaFeatureStore, h)) && (!f || !!featureFlagMatchesRequirements(f)) && (!E || !e.PermissionsStore || !!(0, i.aM)(...E)(e.PermissionsStore)) && (!y || !l || !!y[l]) && (!v || !!v(e))
            })
        }
    },
    v = designerAbility({
        userTypes: {
            authorizedInDesigner: !0,
            editorApp: !0,
            unauthorized: !0
        },
        branches: {
            main: !0
        },
        workflows: {
            canvas: !0
        },
        handoverRoles: {
            leader: !0
        }
    }, {
        branches: {
            branch: !0
        },
        siteModes: {
            design: !0
        },
        workflows: {
            canvas: !0
        }
    }),
    C = designerAbility({
        userTypes: {
            authorizedInDesigner: !0
        },
        workflows: {
            comment: !0
        }
    }),
    S = designerAbility({
        workflows: {
            canvas: !0
        },
        handoverRoles: {
            leader: !0
        }
    }, {
        branches: {
            branch: !0
        },
        siteModes: {
            design: !0
        },
        workflows: {
            canvas: !0
        },
        handoverRoles: {
            viewer: !0
        }
    }, {
        workflows: {
            canvas: !0
        },
        siteModes: {
            edit: !0
        }
    }),
    x = designerAbility({
        siteModes: {
            design: !0
        },
        handoverRoles: {
            leader: !0
        }
    }, {
        siteModes: {
            design: !0
        },
        branches: {
            branch: !0
        },
        handoverRoles: {
            viewer: !0
        }
    }),
    T = designerAbility({
        userTypes: {
            authorizedInDesigner: !0,
            unauthorized: !0
        },
        localization: {
            currentLocaleType: {
                primary: !0
            }
        },
        branches: {
            main: !0
        },
        workflows: {
            canvas: !0
        },
        handoverRoles: {
            leader: !0
        }
    }, {
        branches: {
            branch: !0
        },
        localization: {
            currentLocaleType: {
                primary: !0
            }
        },
        siteModes: {
            design: !0
        },
        workflows: {
            canvas: !0
        }
    }),
    w = designerAbility({
        userTypes: {
            authorizedInDesigner: !0
        },
        permission: [l._o.DESIGN, "siteDesignerModes"]
    }, {
        userTypes: {
            unauthorized: !0
        }
    }),
    I = designerAbility({
        userTypes: {
            authorizedInDesigner: !0
        },
        permission: [l._o.EDIT, "siteDesignerModes"]
    }),
    R = designerAbility({
        betaFlags: {
            editModeSafetyMiniRelease: !0
        }
    }, {
        additionalRequirements: e => {
            let {
                SiteDataStore: t
            } = e;
            return !!t.canWorkspaceUseEditModeSafetyMiniRelease
        }
    }),
    L = designerAbility({
        userTypes: {
            authorizedInDesigner: !0
        },
        branches: {
            branch: !0
        },
        handoverRoles: {
            viewer: !0
        },
        permission: [l._o.DESIGN, "siteDesignerModes"]
    }),
    k = designerAbility({
        userTypes: {
            authorizedInDesigner: !0
        },
        workflows: {
            canvas: !0
        },
        handoverRoles: {
            leader: !0
        }
    }),
    _ = designerAbility({
        userTypes: {
            authorizedInDesigner: !0
        },
        workflows: {
            canvas: !0
        },
        handoverRoles: {
            viewer: !0
        }
    }),
    P = designerAbility({
        localization: {
            currentLocaleType: {
                primary: !0
            }
        }
    }),
    A = designerAbility({
        workflows: {
            canvas: !0,
            logicFlows: !0
        }
    }),
    N = designerAbility({
        userTypes: {
            authorizedInDesigner: !0,
            editorApp: !0
        },
        workflows: {
            canvas: !0
        },
        permission: ["manage", "siteCollectionItem"]
    }),
    M = designerAbility({
        workflows: {
            canvas: !0
        },
        handoverRoles: {
            leader: !0
        }
    }),
    D = designerAbility({
        userTypes: {
            authorizedInDesigner: !0,
            editorApp: !0
        },
        workflows: {
            canvas: !0
        },
        handoverRoles: {
            leader: !0
        },
        permission: ["manage", "siteCollection"]
    }),
    B = designerAbility({
        permission: ["manage", "siteCommerce"],
        handoverRoles: {
            leader: !0
        },
        additionalRequirements: e => {
            let {
                CommerceStore: t
            } = e;
            return (0, c.q)(t)
        }
    }, {
        permission: ["manage", "siteCommerce"],
        siteModes: {
            edit: !0
        },
        additionalRequirements: e => {
            let {
                CommerceStore: t
            } = e;
            return (0, c.q)(t)
        }
    }),
    O = designerAbility({
        userTypes: {
            authorizedInDesigner: !0,
            unauthorized: !0
        },
        permission: ["manage", "siteCommerce"],
        handoverRoles: {
            leader: !0
        },
        siteModes: {
            design: !0
        },
        workflows: {
            canvas: !0
        }
    }),
    V = designerAbility({
        userTypes: {
            authorizedInDesigner: !0
        },
        permission: ["manage", "siteCommerce"]
    }),
    F = designerAbility({
        abilities: ["canAccessDesignSiteMode"]
    }, {
        abilities: ["canAccessEditSiteMode"]
    }),
    H = designerAbility({
        abilities: ["canAccessDesignSiteMode"],
        workflows: {
            canvas: !0
        }
    }, {
        abilities: ["canAccessEditSiteMode"],
        workflows: {
            canvas: !0
        }
    }),
    z = designerAbility({
        abilities: ["canAccessDesignSiteMode"]
    }, {
        abilities: ["canAccessEditSiteMode"]
    }),
    U = designerAbility({
        permission: ["update", "site"]
    }),
    Z = designerAbility({
        abilities: ["canSetupEcomm"]
    }, {
        workflows: {
            canvas: !0,
            preview: !0,
            logicFlows: !0
        },
        permission: ["manage", "siteCommerce"],
        additionalRequirements: e => {
            let {
                CommerceStore: t
            } = e;
            return (0, c.q)(t)
        }
    }, {
        userTypes: {
            unauthorized: !0
        },
        additionalRequirements: e => {
            let {
                CommerceStore: t
            } = e;
            return (0, c.q)(t)
        }
    }),
    G = designerAbility({
        siteModes: {
            design: !0
        },
        permission: ["manage", "siteCommerce"],
        additionalRequirements: e => {
            let {
                CommerceStore: t
            } = e;
            return (0, c.q)(t)
        }
    }, {
        siteModes: {
            edit: !0
        },
        permission: ["manage", "siteCommerce"],
        additionalRequirements: e => {
            let {
                CommerceStore: t
            } = e;
            return (0, c.q)(t)
        }
    }, {
        siteModes: {
            design: !0
        },
        additionalRequirements: e => {
            let {
                SiteUsersStore: t
            } = e;
            return (0, d.tOQ)(t)
        }
    }),
    q = designerAbility({
        userTypes: {
            authorizedInDesigner: !0,
            unauthorized: !0
        },
        workflows: {
            canvas: !0
        },
        handoverRoles: {
            leader: !0
        }
    }),
    W = designerAbility({
        abilities: ["canViewExportButton"],
        userTypes: {
            authorizedInDesigner: !0
        },
        permission: ["export", "site"]
    }),
    j = designerAbility({
        userTypes: {
            authorizedInDesigner: !0,
            editorApp: !0
        },
        permission: ["publish", "site"]
    }),
    Y = designerAbility({
        userTypes: {
            authorizedInDesigner: !0,
            editorApp: !0
        },
        workflows: {
            canvas: !0,
            preview: !0,
            logicFlows: !0
        },
        permission: ["publish", "site"]
    }),
    K = designerAbility({
        userTypes: {
            authorizedInDesigner: !0
        },
        branches: {
            branch: !0
        },
        permission: ["publish", "siteBranch"]
    }),
    X = designerAbility({
        permission: ["merge", "siteBranch"]
    }),
    Q = designerAbility({
        userTypes: {
            authorizedInDesigner: !0
        },
        handoverRoles: {
            leader: !0
        },
        workflows: {
            canvas: !0
        },
        abilities: ["canAccessEditModeSafetyMiniRelease", "hasPermissionToMergeBranch"]
    }, {
        userTypes: {
            authorizedInDesigner: !0
        },
        handoverRoles: {
            leader: !0
        },
        workflows: {
            canvas: !0
        }
    }),
    J = designerAbility({
        userTypes: {
            authorizedInDesigner: !0,
            editorApp: !0
        },
        workflows: {
            canvas: !0
        },
        permission: ["manage", "siteCollectionItem"]
    }),
    ee = designerAbility({
        userTypes: {
            authorizedInDesigner: !0
        },
        branches: {
            main: !0
        },
        handoverRoles: {
            leader: !0
        },
        permission: ["share", "site"]
    }, {
        userTypes: {
            authorizedInDesigner: !0
        },
        siteModes: {
            edit: !0
        },
        permission: ["share", "site"]
    }, {
        workflows: {
            comment: !0
        },
        permission: ["share", "site"]
    }, {
        branches: {
            branch: !0
        },
        permission: ["share", "site"]
    }),
    et = designerAbility({
        userTypes: {
            authorizedInDesigner: !0,
            unauthorized: !0
        },
        siteModes: {
            design: !0
        },
        workflows: {
            canvas: !0
        },
        permission: ["create", "siteStyleBlock"],
        localization: {
            currentLocaleType: {
                primary: !0
            }
        }
    }),
    en = designerAbility({
        userTypes: {
            authorizedInDesigner: !0,
            unauthorized: !0
        },
        siteModes: {
            design: !0
        },
        workflows: {
            canvas: !0
        },
        permission: ["modify", "siteStyleBlock"]
    }),
    ea = designerAbility({
        userTypes: {
            authorizedInDesigner: !0,
            unauthorized: !0
        },
        siteModes: {
            design: !0
        },
        workflows: {
            canvas: !0
        },
        branches: {
            main: !0
        },
        permission: ["modify", "siteStyleBlock"]
    }),
    er = designerAbility({
        userTypes: {
            authorizedInDesigner: !0,
            unauthorized: !0
        },
        siteModes: {
            design: !0
        },
        workflows: {
            canvas: !0
        },
        permission: ["modifyOwn", "siteStyleBlock"],
        localization: {
            currentLocaleType: {
                primary: !0
            }
        }
    }),
    el = designerAbility({
        userTypes: {
            authorizedInDesigner: !0,
            unauthorized: !0
        },
        branches: {
            main: !0
        },
        localization: {
            currentLocaleType: {
                primary: !0
            }
        },
        workflows: {
            canvas: !0
        },
        permission: ["create", "siteSymbol"]
    }),
    ei = designerAbility({
        userTypes: {
            authorizedInDesigner: !0,
            unauthorized: !0
        },
        branches: {
            main: !0
        },
        workflows: {
            canvas: !0
        },
        permission: ["modify", "siteSymbol"]
    }),
    eo = designerAbility({
        userTypes: {
            authorizedInDesigner: !0,
            unauthorized: !0
        },
        branches: {
            main: !0
        },
        workflows: {
            canvas: !0
        },
        permission: ["modify", "siteSymbol"],
        localization: {
            currentLocaleType: {
                primary: !0
            }
        }
    }),
    es = designerAbility({
        localization: {
            currentLocaleType: {
                primary: !0
            }
        }
    }),
    ed = designerAbility({
        userTypes: {
            authorizedInDesigner: !0,
            unauthorized: !0
        },
        workflows: {
            canvas: !0,
            preview: !0
        }
    }),
    ec = designerAbility({
        userTypes: {
            authorizedInDesigner: !0,
            unauthorized: !0
        },
        workflows: {
            canvas: !0
        },
        permission: ["manage", "siteFile"]
    }),
    eu = designerAbility({
        userTypes: {
            authorizedInDesigner: !0
        },
        siteModes: {
            design: !0
        },
        workflows: {
            canvas: !0
        }
    }, {
        userTypes: {
            unauthorized: !0
        },
        workflows: {
            canvas: !0
        },
        additionalRequirements: e => {
            let {
                DesignerStore: t,
                SiteDataStore: n
            } = e;
            return n.isCloneable && !t.isPreviewLink
        }
    }),
    ep = designerAbility({
        abilities: ["canDesign"]
    }, {
        abilities: ["canCrossSiteCopy"]
    }),
    eg = designerAbility({
        abilities: ["canDesignOrCrossSiteCopy"],
        userTypes: {
            authorizedInDesigner: !0,
            unauthorized: !0
        },
        branches: {
            main: !0
        },
        handoverRoles: {
            leader: !0
        },
        workflows: {
            canvas: !0
        }
    }, {
        abilities: ["canDesignOrCrossSiteCopy"],
        branches: {
            branch: !0
        },
        workflows: {
            canvas: !0
        }
    }),
    eh = designerAbility({
        userTypes: {
            authorizedInDesigner: !0,
            unauthorized: !0
        },
        branches: {
            main: !0
        },
        workflows: {
            canvas: !0,
            logicFlows: !0
        },
        handoverRoles: {
            leader: !0
        }
    }),
    ef = designerAbility({
        userTypes: {
            authorizedInDesigner: !0,
            unauthorized: !0
        },
        branches: {
            main: !0
        },
        workflows: {
            canvas: !0,
            logicFlows: !0
        },
        handoverRoles: {
            leader: !0
        },
        betaFlags: {
            pluginValues: !0
        }
    }),
    eE = designerAbility({
        userTypes: {
            authorizedInDesigner: !0,
            unauthorized: !0
        },
        branches: {
            main: !0
        },
        workflows: {
            canvas: !0
        },
        handoverRoles: {
            leader: !0
        },
        localization: {
            currentLocaleType: {
                primary: !0
            }
        }
    }),
    ey = designerAbility({
        userTypes: {
            authorizedInDesigner: !0,
            unauthorized: !0
        },
        branches: {
            main: !0
        },
        workflows: {
            canvas: !0
        },
        handoverRoles: {
            leader: !0
        }
    }),
    eb = designerAbility({
        userTypes: {
            authorizedInDesigner: !0,
            unauthorized: !0
        }
    }),
    ev = designerAbility({
        userTypes: {
            authorizedInDesigner: !0
        },
        handoverRoles: {
            leader: !0
        },
        permission: ["manage", "sitePageSettings"]
    }, {
        userTypes: {
            authorizedInDesigner: !0
        },
        siteModes: {
            edit: !0
        },
        permission: ["manage", "sitePageSettings"]
    }),
    eC = designerAbility({
        userTypes: {
            unauthorized: !0
        }
    }, {
        userTypes: {
            authorizedInDesigner: !0
        },
        permission: ["read", "sitePageSettings"]
    }),
    eS = designerAbility({
        userTypes: {
            authorizedInDesigner: !0
        },
        siteModes: {
            design: !0
        },
        permission: ["manage", "siteSnapshot"]
    }),
    ex = designerAbility({
        userTypes: {
            authorizedInDesigner: !0,
            editorApp: !0
        },
        additionalRequirements: e => {
            let {
                SiteDataStore: t
            } = e;
            return t.isOrg || !!t.workspaceSlug
        }
    }),
    eT = designerAbility({
        userTypes: {
            authorizedInDesigner: !0,
            unauthorized: !0
        },
        workflows: {
            canvas: !0
        },
        betaFlags: {
            isEnterpriseSite: !0
        }
    }, {
        userTypes: {
            authorizedInDesigner: !0,
            unauthorized: !0
        },
        workflows: {
            canvas: !0
        },
        betaFlags: {
            isEnterprisePartner: !0
        }
    }),
    ew = designerAbility({
        userTypes: {
            authorizedInDesigner: !0,
            unauthorized: !0
        },
        branches: {
            main: !0
        },
        workflows: {
            canvas: !0
        },
        handoverRoles: {
            leader: !0
        }
    }, {
        branches: {
            branch: !0
        },
        siteModes: {
            design: !0
        },
        workflows: {
            canvas: !0
        }
    }),
    eI = designerAbility({
        userTypes: {
            authorizedInDesigner: !0,
            unauthorized: !0
        },
        workflows: {
            canvas: !0
        },
        handoverRoles: {
            leader: !0
        }
    }),
    eR = designerAbility({
        userTypes: {
            authorizedInDesigner: !0,
            unauthorized: !0
        },
        workflows: {
            canvas: !0
        },
        handoverRoles: {
            leader: !0
        }
    }, {
        userTypes: {
            authorizedInDesigner: !0,
            unauthorized: !0
        },
        workflows: {
            canvas: !0
        },
        siteModes: {
            edit: !0
        }
    }),
    eL = designerAbility({
        userTypes: {
            authorizedInDesigner: !0,
            unauthorized: !0
        },
        workflows: {
            canvas: !0
        },
        siteModes: {
            design: !0
        },
        additionalRequirements: e => {
            let {
                ContextualOnboardingStore: t
            } = e;
            return !!t.persistentState
        }
    }),
    ek = designerAbility({
        workflows: {
            canvas: !0
        },
        siteModes: {
            design: !0
        },
        betaFlags: {
            localization: !0
        }
    }),
    e_ = designerAbility({
        userTypes: {
            authorizedInDesigner: !0,
            unauthorized: !0
        },
        branches: {
            main: !0
        },
        workflows: {
            canvas: !0
        },
        handoverRoles: {
            leader: !0
        }
    }, {
        branches: {
            branch: !0
        },
        siteModes: {
            design: !0
        },
        workflows: {
            canvas: !0
        }
    }),
    eP = designerAbility({
        localization: {
            currentLocaleType: {
                primary: !0
            }
        }
    }),
    eA = designerAbility({
        betaFlags: {
            assistant: !0
        },
        userTypes: {
            authorizedInDesigner: !0,
            unauthorized: !0
        },
        workflows: {
            canvas: !0
        },
        handoverRoles: {
            leader: !0
        },
        localization: {
            currentLocaleType: {
                primary: !0
            }
        }
    }, {
        betaFlags: {
            assistant: !0
        },
        siteModes: {
            design: !0
        },
        workflows: {
            canvas: !0
        },
        localization: {
            currentLocaleType: {
                primary: !0
            }
        }
    }),
    eN = designerAbility({
        abilities: ["canDesign"],
        userTypes: {
            authorizedInDesigner: !0,
            unauthorized: !0
        },
        siteModes: {
            design: !0
        },
        workflows: {
            canvas: !0
        },
        handoverRoles: {
            leader: !0
        }
    }),
    eM = designerAbility({
        abilities: ["canDesign"],
        userTypes: {
            authorizedInDesigner: !0,
            unauthorized: !0
        },
        siteModes: {
            design: !0
        },
        workflows: {
            canvas: !0
        },
        handoverRoles: {
            leader: !0
        }
    }),
    eD = designerAbility({
        abilities: ["canDesign"],
        userTypes: {
            authorizedInDesigner: !0,
            unauthorized: !0
        },
        siteModes: {
            design: !0
        },
        workflows: {
            canvas: !0
        },
        featureFlags: {
            "fpa-8-explo-integration": !0
        },
        handoverRoles: {
            leader: !0
        }
    }),
    eB = designerAbility({
        abilities: ["canDesign"],
        featureFlags: {
            [b.y8.CUSTOM_PROPERTIES_VALUES]: !0
        },
        userTypes: {
            authorizedInDesigner: !0,
            unauthorized: !0
        },
        siteModes: {
            design: !0
        },
        workflows: {
            canvas: !0
        },
        handoverRoles: {
            leader: !0
        }
    }),
    eO = designerAbility({
        userTypes: {
            authorizedInDesigner: !0,
            unauthorized: !0
        },
        branches: {
            main: !0
        },
        workflows: {
            canvas: !0
        },
        handoverRoles: {
            leader: !0
        }
    }, {
        branches: {
            branch: !0
        },
        siteModes: {
            design: !0
        },
        workflows: {
            canvas: !0
        }
    }),
    eV = designerAbility({
        localization: {
            currentLocaleType: {
                primary: !0
            }
        }
    }),
    eF = designerAbility({
        userTypes: {
            authorizedInDesigner: !0,
            unauthorized: !0
        },
        workflows: {
            canvas: !0,
            comment: !0
        }
    }),
    eH = designerAbility({
        userTypes: {
            authorizedInDesigner: !0,
            unauthorized: !0
        },
        branches: {
            main: !0
        },
        workflows: {
            canvas: !0
        },
        handoverRoles: {
            leader: !0
        }
    }, {
        branches: {
            branch: !0
        },
        siteModes: {
            design: !0
        },
        workflows: {
            canvas: !0
        }
    }),
    ez = designerAbility({
        userTypes: {
            authorizedInDesigner: !0,
            editorApp: !0
        }
    }),
    eU = designerAbility({
        userTypes: {
            authorizedInDesigner: !0
        },
        workflows: {
            canvas: !0
        },
        handoverRoles: {
            leader: !0
        },
        permission: ["manage", "siteCollection"]
    }),
    eZ = designerAbility({
        workflows: {
            canvas: !0,
            preview: !0
        },
        handoverRoles: {
            leader: !0
        }
    }),
    eG = designerAbility({
        userTypes: {
            authorizedInDesigner: !0,
            unauthorized: !0
        },
        workflows: {
            canvas: !0,
            comment: !0,
            preview: !0
        },
        handoverRoles: {
            leader: !0
        }
    }),
    eq = designerAbility({
        siteModes: {
            design: !0
        }
    }, {
        workflows: {
            comment: !0
        }
    }),
    eW = designerAbility({
        userTypes: {
            authorizedInDesigner: !0
        },
        workflows: {
            canvas: !0
        },
        siteModes: {
            edit: !0
        }
    }),
    e$ = designerAbility({
        siteModes: {
            design: !0
        },
        permission: [l._o.DESIGN, "siteDesignerModes"]
    }),
    ej = designerAbility({
        siteModes: {
            design: !0
        }
    }),
    eY = designerAbility({
        handoverRoles: {
            leader: !0
        }
    }, {
        branches: {
            branch: !0
        },
        siteModes: {
            design: !0
        }
    }),
    eK = designerAbility({
        siteModes: {
            design: !0
        }
    }),
    eX = designerAbility({
        siteModes: {
            design: !0
        }
    }),
    eQ = designerAbility({
        userTypes: {
            authorizedInDesigner: !0
        },
        siteModes: {
            design: !0
        }
    }),
    eJ = designerAbility({
        userTypes: {
            authorizedInDesigner: !0
        }
    }),
    getSecondaryLocaleEntitlementConfigs = e => [{
        localization: {
            currentLocaleType: {
                primary: !0
            }
        }
    }, {
        localization: {
            currentLocaleType: {
                secondary: !0
            }
        },
        entitlements: e
    }],
    e0 = [{
        betaFlags: {
            isEnterpriseSite: !0
        }
    }, {
        betaFlags: {
            isEnterpriseLiteSite: !0
        }
    }],
    e1 = designerAbility(...e0, ...getSecondaryLocaleEntitlementConfigs([y.CAN_LOCALIZE_URLS])),
    e2 = designerAbility(...e0, ...getSecondaryLocaleEntitlementConfigs([y.CAN_LOCALIZE_ELEMENT_VISIBILITY])),
    e3 = designerAbility(...e0, ...getSecondaryLocaleEntitlementConfigs([y.CAN_LOCALIZE_IMAGE_ELEMENTS])),
    e5 = designerAbility(...e0, ...getSecondaryLocaleEntitlementConfigs([y.CAN_LOCALIZE_ELEMENT_STYLES])),
    e4 = designerAbility(...e0, {
        entitlements: [y.CAN_USE_LOCALIZATION_BROWSER_DETECTION]
    }),
    e6 = designerAbility({
        entitlements: [y.CAN_PUBLISH_LOCALES],
        betaFlags: {
            isEnterpriseSite: !1,
            isEnterpriseLiteSite: !1
        }
    }, {
        betaFlags: {
            localizationCanPublishLocales: !0
        }
    }),
    e9 = designerAbility({
        userTypes: {
            authorizedInDesigner: !0
        },
        siteModes: {
            design: !0
        },
        localization: {
            currentLocaleType: {
                primary: !0
            }
        }
    }, {
        userTypes: {
            unauthorized: !0
        }
    }),
    e7 = designerAbility({
        userTypes: {
            authorizedInDesigner: !0
        },
        siteModes: {
            design: !0
        },
        localization: {
            currentLocaleType: {
                primary: !0
            }
        }
    }),
    e8 = designerAbility({
        userTypes: {
            authorizedInDesigner: !0
        },
        siteModes: {
            edit: !0
        }
    }),
    te = designerAbility({
        userTypes: {
            authorizedInDesigner: !0
        },
        siteModes: {
            edit: !0
        }
    }),
    tt = designerAbility({
        siteModes: {
            design: !0
        }
    }),
    tn = designerAbility({
        siteModes: {
            design: !0
        }
    }),
    ta = {
        canViewDesignerRightSidebar: v,
        canViewCommentsRightSidebar: C,
        canUndoRedo: S,
        canDesign: T,
        canAccessDesignSiteMode: w,
        canAccessDesigningBranchMode: L,
        canAccessEditSiteMode: I,
        canAccessEditModeSafetyMiniRelease: R,
        canCanvasSync: k,
        canAccessCMS: A,
        canSaveCMSContent: N,
        canAccessCMSSettings: M,
        canManageCMSSettings: D,
        canAccessEmailSettings: G,
        canManageEcomm: B,
        canCreateStyleBlocks: et,
        canModifyStyleBlocks: en,
        canModifyVariables: ea,
        canModifyOwnStyleBlocks: er,
        canCreateSymbols: el,
        canModifyComponentsOnCanvas: ei,
        canModifyHorizontalSettingsInsideComponent: eo,
        canModifyComponentPropertyDataType: es,
        canViewExportButton: q,
        canExport: W,
        canPublishDesign: j,
        canPublishSubdomainDesign: Y,
        canPublishBranch: K,
        hasPermissionToMergeBranch: X,
        canMergeBranch: Q,
        canNodeSync: _,
        canPublishCMSItems: J,
        canShare: ee,
        canAccessAssets: ed,
        canManageAssets: ec,
        canCrossSiteCopy: eu,
        canAccessCanvasContextMenu: eg,
        canAccessLogicFlows: eh,
        canAccessLogicPluginValues: ef,
        canAccessApps: eE,
        canAccessUserSystems: ey,
        canAccessPageSettings: eb,
        canManagePageSettings: ev,
        canAccessBackups: eS,
        canAccessActivityLog: ex,
        canSeeActivityLogIcon: eT,
        canAccessNavigator: ew,
        canAccessBasicPanels: eI,
        canAccessProjectSettings: eR,
        canAccessGeneralSettings: eL,
        canAccessLocalizationSettings: ek,
        canAccessHelpPanels: eF,
        canAccessAuditorPanel: eH,
        canAccessAddPanel: e_,
        canUseAddPanelShortcut: eP,
        canAccessComponentsPanel: eO,
        canUseComponentsPanelShortcut: eV,
        canUseMultiuser: ez,
        canDesignOrCrossSiteCopy: ep,
        canCreateCMSCollection: eU,
        canSetupEcomm: O,
        canViewSetupEcomm: V,
        canAddNewBreakpoint: eZ,
        canAccessEcomm: Z,
        canAccessCanvasSettings: eG,
        canAccessAllNodes: eq,
        canHaveDesignControl: e$,
        canAccessOutlineBreadcrumbs: ej,
        canAccessMiniToolbar: eW,
        canSaveAsSnapshot: eK,
        canAccessPageCustomCode: eX,
        canEditLocalizedCanvasItem: P,
        canNavigateFromCMSToTemplatePage: e8,
        canNavigateFromPageToCMS: te,
        canViewGridStructure: tt,
        canAccessBottomBreadcrumbs: eY,
        canAccessAssistant: eA,
        canAccessAdvancedPublishSettings: eQ,
        canAccessStylesManagerPanel: eN,
        canAccessVariablesPanel: eM,
        canAccessAnalyticsPanel: eD,
        canAccessCustomCssPropertiesValues: eB,
        canViewCssPreview: tn,
        canConnectDynamicBindings: e9,
        canConnectProperties: e7,
        canAccessComments: eJ,
        canModifyElementVisibility: e2,
        canModifyImageElements: e3,
        canModifyURLs: e1,
        canUseLocalizationBrowserDetection: e4,
        canEnableLocalePublishing: e6,
        canAccessStylePanel: e5,
        canAccessCanvasWorkflow: F,
        canAccessHandoverControls: H,
        canInviteCollaborators: U,
        canSeePublishButton: z,
        canReadPageSettings: eC,
        canViewMiniSettingFooter: x
    },
    tr = (0, a.zB)(ta),
    selectDesignerAbility = e => ta[e],
    selectIsPanelEnabled = (e, t) => {
        let n = (0, g.Sd)(e.PanelsStore, t);
        if (!n) return !1;
        let {
            abilityName: a
        } = n.metadata;
        return !a || ta[a](e)
    },
    tl = (0, a.P1)(e => (0, g.cB)(e.PanelsStore), tr, (e, t) => (0, r.VO)(e.all).reduce((e, n) => {
        let {
            abilityName: a
        } = n.metadata, r = !a || t[a];
        return r && (e[n.name] = n), e
    }, {}))
},
6872: (e, t, n) => {
    "use strict";
    n.d(t, {
        d$: () => u,
        aU: () => VariableResolutionError,
        Ch: () => m,
        Wz: () => p,
        br: () => colorVariableFromSwatch,
        Vd: () => E,
        PY: () => convertStylePrimitiveToCSSValue,
        oN: () => createVariableWithoutRepeatedName,
        O2: () => cssVariablesToSwatches,
        EA: () => b,
        HK: () => deleteVariable,
        VZ: () => g,
        tp: () => generateVariableId,
        wT: () => getCssVariableNames,
        FS: () => getGroupKeys,
        KP: () => getGroupedVariables,
        cs: () => getNonDeletedVariablesOnly,
        lX: () => getValidUnit,
        Uw: () => getVariableDisplayName,
        HL: () => getVariableGroupDisplayName,
        vX: () => getVariableIdFromPlaceholder,
        C: () => hasVariablePlaceholder,
        Go: () => isVariablePlaceholder,
        U8: () => renderCssValue,
        XL: () => renderCssVariableName,
        kl: () => renderPreviewCssVariableName,
        w0: () => replaceVariablePlaceholdersForCSSOM,
        cU: () => replaceVariablePlaceholdersForPublish,
        yh: () => replaceVariablePlaceholdersForXSCP,
        Fr: () => resolvePreviewLabel,
        Gv: () => resolvePreviewValue,
        YC: () => sanitizeForVariableName,
        eb: () => setVariableName,
        PX: () => upsertVariable,
        nk: () => validateVariableName,
        Uf: () => validateVariableUpdate,
        gY: () => variableMapFromArray,
        BB: () => variablePlaceholder
    });
    var a = n(47169),
        r = n(88601),
        l = n(7640),
        i = n(65204),
        o = n(74514),
        s = n(61441),
        d = n(57327),
        c = n(50451);
    ({
        ...["	", "\n", "\v", "\f", "\r", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "`", "{", "|", "}", "~"].reduce((e, t) => (e[t] = "", e[t + "foo"] = "foo", e["foo" + t] = "foo", e[t + "foo" + t] = "foo", e[t + "foo/bar"] = "foo--bar", e["foo/bar" + t] = "foo--bar", e[t + "foo/bar" + t] = "foo--bar", e[t + "foo" + t + "/" + t + "bar"] = "foo--bar", e["foo" + t + "/" + t + "bar" + t] = "foo--bar", e[t + "foo" + t + "/" + t + "bar" + t] = "foo--bar", e), {})
    });
    let u = "variables",
        generateVariableId = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.pW;
            return "variable-" + e()
        },
        m = {
            COLOR: "color",
            FONT_FAMILY: "font-family",
            LENGTH: "length"
        },
        p = {
            ...m,
            REF: "ref"
        },
        resolvePreviewLabel = (e, t) => {
            var n, a;
            let r = null === (n = e.get(t)) || void 0 === n ? void 0 : n.value;
            if (!r) throw Error(`Could not resolve variable; variableId: ${t}`);
            switch (r.type) {
                case "length":
                    return `${r.value.value}${r.value.unit}`;
                case "font-family":
                    return r.value;
                case "color": {
                    let e = (0, s.lu)(r.value);
                    if (!e) return (0, c.reportBugOnce)("InvalidColorVariableValue", `Could not parse color value "${r.value}" of variable with id ${t}`, {
                        team: "dse",
                        ticket: "https://webflow.atlassian.net/browse/DSE-7320"
                    }), r.value;
                    return e
                }
                case "ref": {
                    let n = r.value,
                        l = null === (a = e.get(n.variableId)) || void 0 === a ? void 0 : a.name;
                    if (null == l) throw Error(`Could not resolve variable reference; variableId: ${t}, ref: ${JSON.stringify(n)}`);
                    return l
                }
                default:
                    throw Error(`Unexpected VariableValue shape: ${JSON.stringify(r)}`)
            }
        };
    let VariableRenderError = class VariableRenderError extends Error {};
    let renderCssValue = (e, t, n, a) => {
        var r;
        let l = null === (r = e.get(t)) || void 0 === r ? void 0 : r.value;
        if (!l) return new VariableRenderError(`Could not resolve variable; variableId: ${t}`);
        switch (l.type) {
            case "length":
                return `${l.value.value}${l.value.unit}`;
            case "color":
                return l.value;
            case "font-family":
                return (0, d.bk)(l.value, n);
            case "ref":
                return null == a || a.add(l.value.variableId), `var(--${renderCssVariableName(e,l.value.variableId)})`;
            default:
                return new VariableRenderError(`Unexpected VariableValue shape: ${JSON.stringify(l)}`)
        }
    };
    let VariableResolutionError = class VariableResolutionError extends Error {
        constructor(e, t) {
            super(t), (0, a.Z)(this, "type", void 0), this.type = e
        }
    };
    let resolvePreviewValue = (e, t) => {
            let n = e.get(t);
            if (null == n) return new VariableResolutionError("unknown", `Could not resolve variable; variableId: ${t}`);
            let a = n.value,
                r = new Set;
            for (r.add(n.id); null != a && "ref" === a.type;) {
                var l;
                let n = a.value;
                if (r.has(a.value.variableId)) return new VariableResolutionError("circular", `Circular reference encountered: variableId: ${t}`);
                r.add(n.variableId), a = null === (l = e.get(n.variableId)) || void 0 === l ? void 0 : l.value
            }
            return null == a ? new VariableResolutionError("unknown", `Could not resolve variable; variableId: ${t}`) : a.type !== n.type ? new VariableResolutionError("mismatched-type", `Unmatched token type: Expected: ${n.type}; Actual: ${a.type}`) : a
        },
        upsertVariable = (e, t) => e.set(t.id, t),
        validateVariableUpdate = (e, t) => {
            let n = upsertVariable(e, t),
                a = resolvePreviewValue(n, t.id);
            return a instanceof VariableResolutionError ? a : null
        },
        markVariableAsDeleted = e => ({
            ...e,
            deleted: !0
        }),
        setVariableName = (e, t) => ({
            ...e,
            name: t
        }),
        deleteVariable = (e, t) => {
            let n = e.get(t);
            return n ? e.set(t, markVariableAsDeleted(n)) : e
        },
        variableMapFromArray = e => (0, r.OrderedMap)(e.map(e => [e.id, e])),
        g = (0, r.OrderedMap)(Object.entries({})),
        createVariableWithoutRepeatedName = (e, t) => {
            let n = e.reduce((e, t) => (t.deleted || e.push(t.name), e), []),
                a = (0, i.XX)(n, t.name, "-", sanitizeForVariableName);
            return a !== t.name ? {
                ...t,
                name: a
            } : t
        },
        h = /@var_([\w\d-_]+)/g;

    function variablePlaceholder(e) {
        return `@var_${e}`
    }

    function isVariablePlaceholder(e) {
        return /^@var_.*$/.test(e)
    }

    function hasVariablePlaceholder(e) {
        return !!e && e.split(/[ ,;()]/).some(isVariablePlaceholder)
    }

    function getVariableIdFromPlaceholder(e) {
        let t = e.match(h);
        if (null != t) return t[0].split("_")[1]
    }
    let f = /\s/;

    function isNonCollapsablePermittedCharacter(e) {
        let t = e.charCodeAt(0);
        return (t >= 128 || t >= 97 && t <= 122 || t >= 65 && t <= 90 || t >= 48 && t <= 57 || "_" === e) && !f.test(e)
    }

    function sanitizeForVariableName(e) {
        let t = e.length,
            n = "",
            a = 0,
            r = t;
        for (; a < t; a += 1) {
            let t = e[a];
            if (isNonCollapsablePermittedCharacter(t)) break
        }
        for (; r >= 1; r -= 1) {
            let t = e[r - 1];
            if (isNonCollapsablePermittedCharacter(t)) break
        }
        for (; a < r; a += 1) {
            let t = e[a];
            if ("/" === t) {
                for ("-" === n[n.length - 1] && (n = n.substring(0, n.length - 1)); a < r; a += 1)
                    if (isNonCollapsablePermittedCharacter(t = e[a])) {
                        n += "--" + t;
                        break
                    }
            } else isNonCollapsablePermittedCharacter(t) ? n += t : "-" !== n[n.length - 1] && (n += "-")
        }
        return n.toLowerCase()
    }

    function renderCssVariableName(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            a = e.get(t);
        if (!a) return n ? `\\<unknown\\|${sanitizeForVariableName(t)}\\>` : `<unknown|${sanitizeForVariableName(t)}>`;
        let r = sanitizeForVariableName(a.name);
        return a.deleted ? r + (n ? `\\<deleted\\|${sanitizeForVariableName(a.id)}\\>` : `<deleted|${sanitizeForVariableName(a.id)}>`) : r
    }

    function renderPreviewCssVariableName(e) {
        return `var(--${sanitizeForVariableName(e)})`
    }

    function replaceVariablePlaceholdersForCSSOM(e, t) {
        return t.replace(h, (t, n) => `var(--${renderCssVariableName(e,n)})`)
    }

    function replaceVariablePlaceholdersForPublish(e, t, n) {
        return t.replace(h, (t, a) => (n && n.add(a), `var(--${renderCssVariableName(e,a)})`))
    }

    function replaceVariablePlaceholdersForXSCP(e, t) {
        return t.replace(h, (t, n) => {
            var a;
            let r = resolvePreviewValue(e, n);
            return r instanceof Error ? "" : null !== (a = convertStylePrimitiveToCSSValue(r)) && void 0 !== a ? a : ""
        })
    }
    let E = o.yR,
        convertStylePrimitiveToCSSValue = e => {
            switch (e.type) {
                case "color":
                case "font-family":
                    return e.value;
                case "length":
                    return e.value.value + e.value.unit;
                default:
                    return
            }
        },
        getNonDeletedVariablesOnly = e => e.filter(e => !e.deleted),
        getVariableGroupAndNamePair = e => {
            let t = e.name.replace(/([\/\s]*)\/+([\/\s]*)/g, "/").replace(/^[\/\s]/g, "").replace(/[\/\s]+$/g, ""),
                n = t.lastIndexOf("/");
            if (n < 0) return ["", t];
            let a = t.slice(0, n).trim(),
                r = t.slice(n + 1).trim();
            return [a, r]
        },
        getVariableGroupKey = e => {
            let [t] = getVariableGroupAndNamePair(e);
            return t.toLowerCase()
        },
        getGroupedVariables = e => e.reduce((e, t) => {
            var n;
            let a = getVariableGroupKey(t),
                r = null !== (n = e.get(a)) && void 0 !== n ? n : [];
            return r.push(t), e.set(a, r), e
        }, new Map),
        colorVariableFromSwatch = e => {
            let t = (0, s.lu)(e.color);
            if (t) return {
                id: E(`variable-${e.id}`),
                name: e.name,
                type: "color",
                value: {
                    type: "color",
                    value: t
                },
                deleted: !1
            }
        },
        getGroupKeys = e => [...e.keys()],
        getVariableDisplayName = e => {
            let [, t] = getVariableGroupAndNamePair(e);
            return t
        },
        getVariableGroupDisplayName = (e, t) => {
            var n;
            let a = null !== (n = t.get(e)) && void 0 !== n ? n : [];
            if (!a.length) return "";
            let r = new Map,
                l = 0,
                i = "";
            return a.forEach(e => {
                var t;
                let [n] = getVariableGroupAndNamePair(e), a = null !== (t = r.get(n)) && void 0 !== t ? t : 0, o = a + 1;
                o > l && (l = o, i = n), r.set(n, o)
            }), i
        },
        getCssVariableNames = e => {
            let t = new Set;
            return e.forEach(n => {
                let a = renderCssVariableName(e, n.id);
                t.add(a)
            }), t
        },
        y = [{
            isValidFn: e => !!e,
            errorLabel: "Variable name cannot be empty"
        }, {
            isValidFn: e => !!sanitizeForVariableName(e),
            errorLabel: "Variable name must contain some non-special characters"
        }, {
            isValidFn: (e, t, n) => {
                let a = sanitizeForVariableName(e);
                if (null != n && n.currentName) {
                    let e = sanitizeForVariableName(n.currentName);
                    if (a === e) return !0
                }
                return !t.has(a)
            },
            errorLabel: "This variable name already exists"
        }],
        validateVariableName = (e, t, n) => {
            let a = y.find(a => !1 === a.isValidFn(e, t, n));
            return {
                isValid: !a,
                errorLabel: a ? a.errorLabel : ""
            }
        },
        getValidUnit = e => {
            switch (e) {
                case "px":
                case "em":
                case "rem":
                case "vh":
                case "vw":
                case "dvh":
                case "dvw":
                case "lvh":
                case "lvw":
                case "svh":
                case "svw":
                case "vmax":
                case "vmin":
                case "ch":
                    return e;
                default:
                    return null
            }
        },
        cssVariablesToSwatches = e => e.toArray().reduce((e, t) => {
            let {
                type: n,
                name: a,
                id: r,
                value: l,
                deleted: i
            } = t;
            return "color" !== n || "color" !== l.type || i || e.push({
                name: a,
                id: r,
                color: l.value,
                previewColor: ""
            }), e
        }, []),
        b = {
            color: "color",
            "font-family": "font-family",
            length: "width"
        }
},
30398: (e, t, n) => {
    "use strict";
    n.d(t, {
        $: () => S,
        Dd: () => x,
        GC: () => o,
        Gw: () => N,
        HZ: () => i,
        Hx: () => s,
        J: () => K,
        JK: () => G,
        MG: () => l,
        My: () => y,
        NR: () => A,
        Nt: () => p,
        Nu: () => u,
        P_: () => z,
        QA: () => b,
        SQ: () => P,
        St: () => W,
        W0: () => v,
        WQ: () => Z,
        XN: () => m,
        Xc: () => C,
        ZA: () => Y,
        Zz: () => I,
        _M: () => h,
        aT: () => U,
        bd: () => _,
        bg: () => w,
        cN: () => R,
        dc: () => k,
        e5: () => j,
        f8: () => g,
        gZ: () => d,
        gm: () => T,
        hX: () => q,
        hf: () => D,
        iL: () => B,
        kA: () => X,
        me: () => L,
        nw: () => F,
        p3: () => f,
        pT: () => c,
        pc: () => V,
        qI: () => Q,
        qd: () => M,
        tS: () => H,
        xJ: () => O,
        x_: () => E
    });
    var a = n(54484),
        r = n(13066);
    let l = "cms",
        i = "activityLog",
        o = "add",
        s = "assets",
        d = (0, r.Oe)("cms", l),
        c = "cms/items",
        u = "cms/item/edit",
        m = "cms/collection/edit/preview",
        p = "cms/collection/edit",
        g = "cms/csv",
        h = (0, r.Oe)("commerce", l),
        f = (0, r.Oe)("commerce", "gettingStarted"),
        E = (0, r.Oe)("commerce", "discounts"),
        y = (0, r.Oe)("commerce", "discounts/edit"),
        b = (0, r.Oe)("commerce", "orders"),
        v = (0, r.Oe)("commerce", "subscriptions"),
        C = "settings/commerce",
        S = "settings/email",
        x = "flows",
        T = "flows/flows",
        w = "flows/flows/authoring",
        I = "flows/values",
        R = "navigator",
        L = "pages",
        k = "pageSettings",
        _ = "apps",
        P = "apps/app",
        A = "siteSettings",
        N = "generalSettings",
        M = "interfaceSettings",
        D = "symbols",
        B = "tutorials",
        O = "users",
        V = "users/setup",
        F = "users/data",
        H = "users/data/edit",
        z = "users/schema",
        U = "users/schema/preview",
        Z = "users/groups",
        G = "users/groups/edit",
        q = a.vz,
        W = a.Gm,
        j = "versions",
        Y = "auditor",
        K = "addLayout",
        X = "help",
        Q = "styles"
},
O7 = "analytics",
SX = "finderIcon",
Vn = {
    top: [G.GC, G.hf, G.cN, G.qI, BY.d$, G.me, G.gZ, G.Dd, G.xJ, G._M, G.Hx, G.bd, G.NR, G.HZ, O7],
    bottom: [G.kA, G.ZA, SX, G.iL]
},
Va = {
    top: [G.GC, G.me, G.cN, G.hf, BY.d$, G.qI, G.Hx, G.gZ, G.Dd, G.xJ, G._M, G.bd, G.HZ, O7],
    bottom: [G.NR, G.kA, G.ZA, SX, G.iL]
},

// IO: useDispatch
// j.EW: useIsD2
// Va = {
//     top: [G.GC, G.me, G.cN, G.hf, BY.d$, G.qI, G.Hx, G.gZ, G.Dd, G.xJ, G._M, G.bd, G.HZ, O7],
//     bottom: [G.NR, G.kA, G.ZA, SX, G.iL]
// } 

// Vn = {
//     top: [G.GC, G.hf, G.cN, G.qI, BY.d$, G.me, G.gZ, G.Dd, G.xJ, G._M, G.Hx, G.bd, G.NR, G.HZ, O7],
//     bottom: [G.kA, G.ZA, SX, G.iL]
// },

// O7 = "analytics",
// SX = "finderIcon",
// o = "add",
// D = "symbols",

function LeftSidebar() {
    hooks_useDockNavigatorOnFirstMount();
    let e = (0, H.I0)(), 
        t = (0, j.EW)(),
        n = t ? Va : Vn,
        a = (0, H.Yx)(getLeftPath),
        r = (0, H.Yx)(getCanDock),
        l = (0, H.Yx)(getDockedRoot),
        i = (0, H.Yx)(getLeftSidebarVisibility),
        o = (0, H.Yx)(ed.q4),
        s = (0, H.Yx)(getParams),
        d = !(0, H.Yx)(getModeIsEdit),
        c = (0, H.Yx)(e => (0, Y.zR)(me.dx.ID, e.FTUStore)),
        u = (0, H.Yx)(e => (0, e4.n)({
            UserStore: e.UserStore,
            DesignerStore: e.DesignerStore
        })),
        m = (0, fu.T)("localization");
    (0, H.Yx)(getBulkItemEditing);
    let p = a && a[0],
        g = o[l],
        h = null,
        f = a.reduce((t, n, r) => {
            var l;
            let i = o[n];
            if (!i || (0, z.aj)(i) && !i.metadata.forwardToChild) return t;
            let closePanel = () => e((0, z.Gs)(i.name)),
                d = a[r + 1],
                c = !d;
            i.metadata.chromeless ? t.push(D.createElement(i.Panel, {
                key: i.name,
                activeChild: d,
                closePanel: closePanel,
                enabledPanels: o,
                dispatch: e,
                sharedProps: void 0,
                parameters: s
            })) : t.push(D.createElement(LeftPanelWrapper, (0, en.Z)({
                key: i.name,
                activeChild: d,
                name: i.name,
                enabledPanels: o,
                Panel: i.Panel,
                childPanels: i.children,
                dispatch: e,
                closePanel: closePanel,
                useSharedProps: i.useSharedProps,
                isLastPanel: c,
                parameters: s
            }, i.metadata, i.containerProps)));
            let u = null === (l = i.containerProps) || void 0 === l ? void 0 : l.size;
            return c && ("fullscreen" === u || "auto" === u) && (m && (a.includes((0, z.Oe)("cms", G.pT)) || a.includes((0, z.Oe)("cms", G.Nt))) ? t.push(D.createElement(x1.Z.Head, {
                key: `${n}-close`
            }, D.createElement(x1.Z.Head.Section, {
                grow: 1,
                style: {
                    paddingLeft: 0
                }
            }, D.createElement(TopBarLocalizationSection, {
                "data-automation-id": "cms-locale-switcher"
            })), D.createElement(x1.Z.Head.Section, null, D.createElement(x1.Z.Close, {
                "data-automation-id": `${n}-close`,
                onClick: closePanel
            })))) : t.push(D.createElement(x1.Z.Head, {
                key: `${n}-close`
            }, D.createElement(x1.Z.Head.Section, {
                grow: 1
            }), D.createElement(x1.Z.Head.Section, null, D.createElement(x1.Z.Close, {
                "data-automation-id": `${n}-close`,
                onClick: closePanel
            }))))), t
        }, []);
    r && null != g && g.Panel && (h = g.metadata.chromeless ? D.createElement(g.Panel, {
        key: g.name,
        closePanel: te(),
        dispatch: e,
        enabledPanels: o,
        sharedProps: void 0,
        parameters: s
    }) : D.createElement(DockedPanelWrapper, (0, en.Z)({
        key: g.name,
        name: g.name,
        Panel: g.Panel,
        useSharedProps: g.useSharedProps,
        childPanels: g.children,
        dispatch: e,
        parameters: s
    }, g.metadata, g.containerProps)));
    let renderPanelIcon = t => {
            let {
                Icon: n
            } = o[t] || {};
            return c && t !== G.GC || !n ? null : D.createElement(n, {
                key: t,
                active: t === p && (t !== l || !r),
                className: d || "pages" !== t ? "button top" : "button top first-button",
                location: "left-sidebar",
                onClick: () => e((0, z.XM)(t)),
                tooltipPlacement: "right"
            })
        },
        E = [i ? D.createElement("div", {
            className: "left-sidebar",
            key: "left-sidebar"
        }, D.createElement("div", {
            className: r7()("left-sidebar-links", {
                "left-sidebar-links--isBelowPreviewLinkSignupBanner": u
            })
        }, n.top.map(renderPanelIcon), D.createElement("div", {
            className: "bottom"
        }, n.bottom.map(renderPanelIcon)))) : null, D.createElement(tL.Z, {
            _name: "LeftSidebarPanels",
            states: {
                visible: i
            },
            key: "left-sidebar-panels"
        }, f.length > 0 && D.createElement(xr.Z, null, f)), h];
    return a.reduceRight((t, n) => {
        var a;
        let r = null === (a = o[n]) || void 0 === a ? void 0 : a.Wrapper;
        return r ? D.createElement(r, {
            parameters: s,
            dispatch: e
        }, t) : t
    }, E)
}


const LeftSidebar = () => {
    hooks_useDockNavigatorOnFirstMount();
  
    const dispatch = useDispatch();
    const store = useIsD2();
    const panels = store ? Va : Vn;
  
    const leftPath = useDesignerSelector(getLeftPath);
    const canDock = useDesignerSelector(getCanDock);
    const dockedRoot = useDesignerSelector(getDockedRoot);
    const leftSidebarVisibility = useDesignerSelector(getLeftSidebarVisibility);
    const enabledPanels = useDesignerSelector(ed.q4);
    const params = useDesignerSelector(getParams);
  
    const modeIsEdit = !(useDesignerSelector(getModeIsEdit));
  
    const ftustore = useCallback(store => connect(me.dx.ID, store.FTUStore), []);
    const mapStoresToProps = useCallback(
      store => ({
        UserStore: store.UserStore, 
        DesignerStore: store.DesignerStore
      }),
      []
    );
    
    const { getBulkItemEditing } = useSelector(getBulkItemEditing);
  
    const localization = useFeature("localization");
  
    let firstPanel = leftPath && leftPath[0];
    let dockedPanel = enabledPanels[dockedRoot];
  
    let dockedPanelComponent = null;
  
    let panelsList = leftPath.reduce((acc, name, index) => {
      const panel = enabledPanels[name];
  
      if (!panel || isEmpty(panel) && !panel.metadata.forwardToChild) {
        return acc;
      }
  
      const closePanel = () => dispatch(closePanelAction(panel.name));
  
      const nextPanel = leftPath[index + 1];
      const isLastPanel = !nextPanel;
  
      if (panel.metadata.chromeless) {
        acc.push(
          <panel.Panel
            key={panel.name}
            activeChild={nextPanel}
            closePanel={closePanel}
            enabledPanels={enabledPanels}
            dispatch={dispatch}
            sharedProps={undefined} 
            parameters={params}
          />
        );
      } else {
        acc.push(
          <LeftPanelWrapper
            key={panel.name}
            activeChild={nextPanel}
            name={panel.name}
            enabledPanels={enabledPanels}
            Panel={panel.Panel}
            childPanels={panel.children}
            dispatch={dispatch}
            closePanel={closePanel}
            useSharedProps={panel.useSharedProps}
            isLastPanel={isLastPanel}
            parameters={params}
            {...panel.metadata}
            {...panel.containerProps} 
          />
        );
      }
  
      const size = panel.containerProps?.size;
  
      if (isLastPanel && (size === 'fullscreen' || size === 'auto')) {
        if (localization && (leftPath.includes(getPanelId('cms', DashboardPanels.CONTENT)) || leftPath.includes(getPanelId('cms', DashboardPanels.SETTINGS)))) {
          acc.push(
            <Head key={`${name}-close`}>
              <Head.Section grow={1} style={{ paddingLeft: 0 }}>
                <TopBarLocalizationSection data-automation-id="cms-locale-switcher" />
              </Head.Section>
              <Head.Section>
                <Close 
                  data-automation-id={`${name}-close`}
                  onClick={closePanel} 
                />
              </Head.Section>
            </Head>
          );
        } else {
          acc.push(
            <Head key={`${name}-close`}>
              <Head.Section grow={1} />
              <Head.Section>
                <Close
                  data-automation-id={`${name}-close`}
                  onClick={closePanel}
                />
              </Head.Section>  
            </Head>
          );
        }
      }
  
      return acc;
    }, []);
  
    if (canDock && dockedPanel && dockedPanel.Panel) {
      if (dockedPanel.metadata.chromeless) {
        dockedPanelComponent = (
          <dockedPanel.Panel
            key={dockedPanel.name}
            closePanel={closeRootPanel()}
            dispatch={dispatch}
            enabledPanels={enabledPanels}
            sharedProps={undefined}
            parameters={params}
          />
        );
      } else {
        dockedPanelComponent = (
          <DockedPanelWrapper
            key={dockedPanel.name}
            name={dockedPanel.name}
            Panel={dockedPanel.Panel}  
            useSharedProps={dockedPanel.useSharedProps}
            childPanels={dockedPanel.children}
            dispatch={dispatch}
            parameters={params}
            {...dockedPanel.metadata}
            {...dockedPanel.containerProps}
          />
        );
      }
    }
  
    const renderPanelIcon = (name) => {
      const { Icon } = enabledPanels[name] || {};
  
      if (modeIsEdit && name !== DashboardPanels.WORKSPACE || !Icon) {
        return null;
      }
  
      return (
        <Icon
          key={name}
          active={name === firstPanel && (name !== dockedRoot || !canDock)}
          className={modeIsEdit || name !== 'pages' ? 'button top' : 'button top first-button'}
          location="left-sidebar"
          onClick={() => dispatch(openPanelAction(name))}
          tooltipPlacement="right"
        />
      );
    };
  
    const leftSidebar = [
      leftSidebarVisibility && (
        <div className="left-sidebar" key="left-sidebar">
          <div 
            className={classNames('left-sidebar-links', {
              'left-sidebar-links--isBelowPreviewLinkSignupBanner': params
            })}>
            {panels.top.map(renderPanelIcon)}
            <div className="bottom">
              {panels.bottom.map(renderPanelIcon)}  
            </div>
          </div>
        </div>
      ),
      <PanelStates 
        _name="LeftSidebarPanels"
        states={{
          visible: leftSidebarVisibility
        }}
        key="left-sidebar-panels"
      >
        {panelsList.length > 0 && (
          <TransitionGroup>
            {panelsList}  
          </TransitionGroup>
        )}
      </PanelStates>,
      dockedPanelComponent
    ];
  
    return leftPath.reduceRight((children, name) => {
      const { Wrapper } = enabledPanels[name] || {};
    
      if (Wrapper) {
        return (
          <Wrapper
            parameters={params}
            dispatch={dispatch}
          >
            {children}
          </Wrapper>
        );
      }
    
      return children;
    }, leftSidebar);
  }
  
  export default LeftSidebar;

  