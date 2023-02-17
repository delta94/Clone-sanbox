__d("StoriesSetBucketHelper", ["StoriesGating", "WebPixelRatio"], (function (a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        return {
            bucketID: a,
            bucketIndex: -1,
            canSeeViewerSheet: !1,
            canShowStoryOverlay: !0,
            hasSelfBucket: !1,
            isEndOfTray: !1,
            isFirstBucket: !0,
            isLastBucket: !0,
            isSecondBucket: !1,
            nextBuckets: null,
            nextBucketsCount: 0
        }
    }

    function b(a, b, c, e, f) {
        c.bucketID != null && c.bucketID !== "" && c.bucketID !== e.bucketID && b(!0), f != null && c.bucketID !== e.bucketID && f({
            UFI2CommentsProvider_commentsKey: "StoriesSuspenseContentPaneRootWithEntryPointQuery",
            blur: d("WebPixelRatio").get() * 10,
            bucketID: e.bucketID,
            displayCommentsContextEnableComment: !0,
            displayCommentsContextIsAdPreview: !1,
            displayCommentsContextIsAggregatedShare: !1,
            displayCommentsContextIsStorySet: !1,
            displayCommentsFeedbackContext: null,
            feedbackSource: 65,
            feedLocation: "COMET_MEDIA_VIEWER",
            focusCommentID: null,
            initialBucketID: e.bucketID,
            initialLoad: !1,
            isStoryCommentingEnabled: d("StoriesGating").isCommentEnabled(),
            scale: d("WebPixelRatio").get(),
            shouldDeferLoad: d("StoriesGating").shouldDeferLoad(),
            shouldEnableArmadilloStoryReply: d("StoriesGating").shouldEnableArmadilloStoryReply(),
            shouldEnableLiveInStories: d("StoriesGating").shouldEnableLiveInStories()
        }), a(e)
    }

    function c(a, b, c, e, f) {
        c.bucketID != null && c.bucketID !== "" && c.bucketID !== e.bucketID && b(!0), f != null && c.bucketID !== e.bucketID && f({
            UFI2CommentsProvider_commentsKey: "StoriesSuspenseCarouselCenterPaneRootWithEntryPointQuery",
            blur: d("WebPixelRatio").get() * 10,
            bucketID: e.bucketID,
            displayCommentsContextEnableComment: !0,
            displayCommentsContextIsAdPreview: !1,
            displayCommentsContextIsAggregatedShare: !1,
            displayCommentsContextIsStorySet: !1,
            displayCommentsFeedbackContext: null,
            feedbackSource: 65,
            feedLocation: "COMET_MEDIA_VIEWER",
            focusCommentID: null,
            initialBucketID: e.bucketID,
            initialLoad: !1,
            scale: d("WebPixelRatio").get(),
            shouldDeferLoad: d("StoriesGating").shouldDeferLoad(),
            shouldEnableArmadilloStoryReply: d("StoriesGating").shouldEnableArmadilloStoryReply(),
            shouldEnableLiveInStories: d("StoriesGating").shouldEnableLiveInStories()
        }), a(e)
    }
    g.defaultBucketData = a;
    g.updateBucketData = b;
    g.updateCarouselBucketData = c
}), 98);


const StoriesSetBucketHelper = {
    defaultBucketData: (a) => {
        return {
            bucketID: a,
            bucketIndex: -1,
            canSeeViewerSheet: false,
            canShowStoryOverlay: true,
            hasSelfBucket: false,
            isEndOfTray: false,
            isFirstBucket: true,
            isLastBucket: true,
            isSecondBucket: false,
            nextBuckets: null,
            nextBucketsCount: 0
        }
    },
    updateBucketData: (a, b, c, e, f) => {
        if (c.bucketID != null && c.bucketID !== "" && c.bucketID !== e.bucketID) {
            b(true);
        }
        if (f != null && c.bucketID !== e.bucketID) {
            f({
                UFI2CommentsProvider_commentsKey: "StoriesSuspenseContentPaneRootWithEntryPointQuery",
                blur: WebPixelRatio.get() * 10,
                bucketID: e.bucketID,
                displayCommentsContextEnableComment: true,
                displayCommentsContextIsAdPreview: false,
                displayCommentsContextIsAggregatedShare: false,
                displayCommentsContextIsStorySet: false,
                displayCommentsFeedbackContext: null,
                feedbackSource: 65,
                feedLocation: "COMET_MEDIA_VIEWER",
                focusCommentID: null,
                initialBucketID: e.bucketID,
                initialLoad: false,
                isStoryCommentingEnabled: StoriesGating.isCommentEnabled(),
                scale: WebPixelRatio.get(),
                shouldDeferLoad: StoriesGating.shouldDeferLoad(),
                shouldEnableArmadilloStoryReply: StoriesGating.shouldEnableArmadilloStoryReply(),
                shouldEnableLiveInStories: StoriesGating.shouldEnableLiveInStories()
            });
        }
        a(e);
    },
    updateBucketData: (a, b, c, e, f) => {
        if (c.bucketID != null && c.bucketID !== "" && c.bucketID !== e.bucketID) {
            b(true);
        }
        if (f != null && c.bucketID !== e.bucketID) {
            f({
                UFI2CommentsProvider_commentsKey: "StoriesSuspenseContentPaneRootWithEntryPointQuery",
                blur: WebPixelRatio.get() * 10,
                bucketID: e.bucketID,
                displayCommentsContextEnableComment: true,
                displayCommentsContextIsAdPreview: false,
                displayCommentsContextIsAggregatedShare: false,
                displayCommentsContextIsStorySet: false,
                displayCommentsFeedbackContext: null,
                feedbackSource: 65,
                feedLocation: "COMET_MEDIA_VIEWER",
                focusCommentID: null,
                initialBucketID: e.bucketID,
                initialLoad: false,
                isStoryCommentingEnabled: StoriesGating.isCommentEnabled(),
                scale: WebPixelRatio.get(),
                shouldDeferLoad: StoriesGating.shouldDeferLoad(),
                shouldEnableArmadilloStoryReply: StoriesGating.shouldEnableArmadilloStoryReply(),
                shouldEnableLiveInStories: StoriesGating.shouldEnableLiveInStories()
            });
        }
        a(e);
    },
    updateCarouselBucketData: (a, b, c, e, f) => {
        if (c.bucketID != null && c.bucketID !== "" && c.bucketID !== e.bucketID) {
            b(true);
        }
        if (f != null && c.bucketID !== e.bucketID) {
            f({
                UFI2CommentsProvider_commentsKey: "StoriesSuspenseCarouselCenterPaneRootWithEntryPointQuery",
                blur: WebPixelRatio.get() * 10,
                bucketID: e.bucketID,
                displayCommentsContextEnableComment: true,
                displayCommentsContextIsAdPreview: false,
                displayCommentsContextIsAggregatedShare: false,
                displayCommentsContextIsStorySet: false,
                displayCommentsFeedbackContext: null,
                feedbackSource: 65,
                feedLocation: "COMET_MEDIA_VIEWER",
                focusCommentID: null,
                initialBucketID: e.bucketID,
                initialLoad: false,
                scale: WebPixelRatio.get(),
                shouldDeferLoad: StoriesGating.shouldDeferLoad(),
                shouldEnableArmadilloStoryReply: StoriesGating
            })
        }
}
