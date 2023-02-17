const StoriesBehaviorHelpers = {
    canAddToStory(a, b) {
        return isSelfStory(a, b);
    },
    canSeeViewerSheet(a, b, d, e) {
        return whichViewerSheet(a, b, d, e) !== StoriesViewerSheetTypes.NO_VIEWERSHEET;
    },
    isSelfStory(a, b) {
        return b === a;
    },
    isPublicStory(a) {
        return a === StoriesEnums.AUDIENCE_TYPES.PUBLIC;
    },
    whichViewerSheet(a, b, e, f) {
        if (a === StoriesEnums.STORY_CARD_TYPES.PAGE_STORY) {
            if (e === true) {
                return StoriesViewerSheetTypes.PAGE_STORY_VIEWERSHEET;
            } else {
                return StoriesViewerSheetTypes.NO_VIEWERSHEET;
            }
        }
        return isSelfStory(b, f) ?
            a === StoriesEnums.STORY_CARD_TYPES.PROFILE_PLUS_STORY ||
            a === StoriesEnums.STORY_CARD_TYPES.ADMINED_ADDITIONAL_PROFILE_STORY ?
            StoriesViewerSheetTypes.PAGE_STORY_VIEWERSHEET :
            StoriesViewerSheetTypes.SELF_STORY_VIEWERSHEET :
            StoriesViewerSheetTypes.NO_VIEWERSHEET;
    },
    isPageOrProfilePlusStory(a) {
        return (
            a === StoriesEnums.STORY_CARD_TYPES.PAGE_STORY ||
            a === StoriesEnums.STORY_CARD_TYPES.ADMINED_ADDITIONAL_PROFILE_STORY ||
            a === StoriesEnums.STORY_CARD_TYPES.PROFILE_PLUS_STORY ||
            a === StoriesEnums.STORY_CARD_TYPES.SHARED_PAGE_STORY
        );
    }
};

export default StoriesBehaviorHelpers;