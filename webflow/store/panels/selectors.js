const canViewDesignerRightSidebar = designerAbility({
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
})

const canViewCommentsRightSidebar = designerAbility({
    userTypes: {
        authorizedInDesigner: !0
    },
    workflows: {
        comment: !0
    }
})

const canUndoRedo = designerAbility({
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
})

const canDesign = designerAbility({
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
})

w = designerAbility({
    userTypes: {
        authorizedInDesigner: !0
    },
    permission: [l._o.DESIGN, "siteDesignerModes"]
}, {
    userTypes: {
        unauthorized: !0
    }
})

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
})

I = designerAbility({
    userTypes: {
        authorizedInDesigner: !0
    },
    permission: [l._o.EDIT, "siteDesignerModes"]
})

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
})

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
})

N = designerAbility({
    userTypes: {
        authorizedInDesigner: !0,
        editorApp: !0
    },
    workflows: {
        canvas: !0
    },
    permission: ["manage", "siteCollectionItem"]
})

A = designerAbility({
    workflows: {
        canvas: !0,
        logicFlows: !0
    }
})

M = designerAbility({
    workflows: {
        canvas: !0
    },
    handoverRoles: {
        leader: !0
    }
})

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
})

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
})

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
})

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
})

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
})

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
})

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
})

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
})

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
})

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
})

es = designerAbility({
    localization: {
        currentLocaleType: {
            primary: !0
        }
    }
})

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
})

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
})

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
})

K = designerAbility({
    userTypes: {
        authorizedInDesigner: !0
    },
    branches: {
        branch: !0
    },
    permission: ["publish", "siteBranch"]
})

X = designerAbility({
    permission: ["merge", "siteBranch"]
})


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
})

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
})

J = designerAbility({
    userTypes: {
        authorizedInDesigner: !0,
        editorApp: !0
    },
    workflows: {
        canvas: !0
    },
    permission: ["manage", "siteCollectionItem"]
})

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
})


const abilities = {
    canViewDesignerRightSidebar,
    canViewCommentsRightSidebar,
    canUndoRedo,
    canDesign,
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
    canShare: ee,  // Done
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
}