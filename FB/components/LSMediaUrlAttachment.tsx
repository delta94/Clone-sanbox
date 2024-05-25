__d(
  "LSMediaUrlAttachment",
  ["I64", "LSMediaUrlUtils", "rewriteFallbackUrl"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a) {
      var b = a.previewUrlExpirationTimestampMs;
      return b != null && d("LSMediaUrlUtils").isTimestampExpired(b)
        ? c("rewriteFallbackUrl")(a.previewUrlFallback)
        : a.previewUrl;
    }
    function b(a) {
      var b = a.previewUrlExpirationTimestampMs;
      return b != null && d("LSMediaUrlUtils").isTimestampExpired(b)
        ? c("rewriteFallbackUrl")(a.previewUrlFallback)
        : a.previewUrlLarge;
    }
    function e(a) {
      var b = a.playableUrlExpirationTimestampMs;
      return b != null && d("LSMediaUrlUtils").isTimestampExpired(b)
        ? c("rewriteFallbackUrl")(a.playableUrlFallback)
        : a.playableUrl;
    }
    function f(a) {
      var b = a.imageUrlExpirationTimestampMs;
      return b != null && d("LSMediaUrlUtils").isTimestampExpired(b)
        ? c("rewriteFallbackUrl")(a.imageUrlFallback)
        : a.imageUrl;
    }
    function i(a) {
      var b = a.faviconUrlExpirationTimestampMs;
      return b != null && d("LSMediaUrlUtils").isTimestampExpired(b)
        ? c("rewriteFallbackUrl")(a.faviconUrlFallback)
        : a.faviconUrl;
    }
    function j(a) {
      try {
        var b = a.listItemContactUrlExpirationTimestampList1;
        return b != null &&
          d("LSMediaUrlUtils").isTimestampExpired(
            (h || (h = d("I64"))).of_string(b)
          )
          ? c("rewriteFallbackUrl")(a.listItemContactUrlFallbackList1)
          : a.listItemContactUrlList1;
      } catch (b) {
        return a.listItemContactUrlList1;
      }
    }
    function k(a) {
      try {
        var b = a.listItemContactUrlExpirationTimestampList2;
        return b != null &&
          d("LSMediaUrlUtils").isTimestampExpired(
            (h || (h = d("I64"))).of_string(b)
          )
          ? c("rewriteFallbackUrl")(a.listItemContactUrlFallbackList2)
          : a.listItemContactUrlList2;
      } catch (b) {
        return a.listItemContactUrlList2;
      }
    }
    function l(a) {
      try {
        var b = a.listItemContactUrlExpirationTimestampList3;
        return b != null &&
          d("LSMediaUrlUtils").isTimestampExpired(
            (h || (h = d("I64"))).of_string(b)
          )
          ? c("rewriteFallbackUrl")(a.listItemContactUrlFallbackList3)
          : a.listItemContactUrlList3;
      } catch (b) {
        return a.listItemContactUrlList3;
      }
    }
    function m(a) {
      var b = a.headerImageUrlExpirationTimestampMs;
      return b != null && d("LSMediaUrlUtils").isTimestampExpired(b)
        ? c("rewriteFallbackUrl")(a.headerImageUrlFallback)
        : a.headerImageUrl;
    }
    function n(a) {
      try {
        var b = a.listItemProfilePictureUrlExpirationTimestamp1;
        if (
          b != null &&
          d("LSMediaUrlUtils").isTimestampExpired(
            (h || (h = d("I64"))).of_string(b)
          )
        )
          return c("rewriteFallbackUrl")(a.listItemProfilePictureUrlFallback1);
        else return a.listItemProfilePictureUrl1;
      } catch (b) {
        return a.listItemProfilePictureUrl1;
      }
    }
    function o(a) {
      try {
        var b = a.listItemProfilePictureUrlExpirationTimestamp2;
        return b != null &&
          d("LSMediaUrlUtils").isTimestampExpired(
            (h || (h = d("I64"))).of_string(b)
          )
          ? c("rewriteFallbackUrl")(a.listItemProfilePictureUrlFallback2)
          : a.listItemProfilePictureUrl2;
      } catch (b) {
        return a.listItemProfilePictureUrl2;
      }
    }
    function p(a) {
      try {
        var b = a.listItemProfilePictureUrlExpirationTimestamp3;
        return b != null &&
          d("LSMediaUrlUtils").isTimestampExpired(
            (h || (h = d("I64"))).of_string(b)
          )
          ? c("rewriteFallbackUrl")(a.listItemProfilePictureUrlFallback3)
          : a.listItemProfilePictureUrl3;
      } catch (b) {
        return a.listItemProfilePictureUrl3;
      }
    }
    g.previewUrl = a;
    g.previewUrlLarge = b;
    g.playableUrl = e;
    g.imageUrl = f;
    g.faviconUrl = i;
    g.listItemContactUrlList1 = j;
    g.listItemContactUrlList2 = k;
    g.listItemContactUrlList3 = l;
    g.headerImageUrl = m;
    g.listItemProfilePictureUrl1 = n;
    g.listItemProfilePictureUrl2 = o;
    g.listItemProfilePictureUrl3 = p;
  },
  98
);

import { I64 } from "I64";
import { LSMediaUrlUtils } from "LSMediaUrlUtils";
import { rewriteFallbackUrl } from "rewriteFallbackUrl";

// Define the type for the input object
interface MediaAttachment {
  previewUrl?: string;
  previewUrlExpirationTimestampMs?: number;
  previewUrlFallback?: string;
  previewUrlLarge?: string;
  playableUrl?: string;
  playableUrlExpirationTimestampMs?: number;
  playableUrlFallback?: string;
  imageUrl?: string;
  imageUrlExpirationTimestampMs?: number;
  imageUrlFallback?: string;
  faviconUrl?: string;
  faviconUrlExpirationTimestampMs?: number;
  faviconUrlFallback?: string;
  listItemContactUrlExpirationTimestampList1?: string;
  listItemContactUrlFallbackList1?: string;
  listItemContactUrlList1?: string;
  listItemContactUrlExpirationTimestampList2?: string;
  listItemContactUrlFallbackList2?: string;
  listItemContactUrlList2?: string;
  listItemContactUrlExpirationTimestampList3?: string;
  listItemContactUrlFallbackList3?: string;
  listItemContactUrlList3?: string;
  headerImageUrl?: string;
  headerImageUrlExpirationTimestampMs?: number;
  headerImageUrlFallback?: string;
  listItemProfilePictureUrlExpirationTimestamp1?: string;
  listItemProfilePictureUrlFallback1?: string;
  listItemProfilePictureUrl1?: string;
  listItemProfilePictureUrlExpirationTimestamp2?: string;
  listItemProfilePictureUrlFallback2?: string;
  listItemProfilePictureUrl2?: string;
  listItemProfilePictureUrlExpirationTimestamp3?: string;
  listItemProfilePictureUrlFallback3?: string;
  listItemProfilePictureUrl3?: string;
}

function previewUrl(attachment: MediaAttachment): string | undefined {
  const { previewUrlExpirationTimestampMs, previewUrl, previewUrlFallback } =
    attachment;
  return previewUrlExpirationTimestampMs != null &&
    LSMediaUrlUtils.isTimestampExpired(previewUrlExpirationTimestampMs)
    ? rewriteFallbackUrl(previewUrlFallback)
    : previewUrl;
}

function previewUrlLarge(attachment: MediaAttachment): string | undefined {
  const {
    previewUrlExpirationTimestampMs,
    previewUrlLarge,
    previewUrlFallback,
  } = attachment;
  return previewUrlExpirationTimestampMs != null &&
    LSMediaUrlUtils.isTimestampExpired(previewUrlExpirationTimestampMs)
    ? rewriteFallbackUrl(previewUrlFallback)
    : previewUrlLarge;
}

function playableUrl(attachment: MediaAttachment): string | undefined {
  const { playableUrlExpirationTimestampMs, playableUrl, playableUrlFallback } =
    attachment;
  return playableUrlExpirationTimestampMs != null &&
    LSMediaUrlUtils.isTimestampExpired(playableUrlExpirationTimestampMs)
    ? rewriteFallbackUrl(playableUrlFallback)
    : playableUrl;
}

function imageUrl(attachment: MediaAttachment): string | undefined {
  const { imageUrlExpirationTimestampMs, imageUrl, imageUrlFallback } =
    attachment;
  return imageUrlExpirationTimestampMs != null &&
    LSMediaUrlUtils.isTimestampExpired(imageUrlExpirationTimestampMs)
    ? rewriteFallbackUrl(imageUrlFallback)
    : imageUrl;
}

function faviconUrl(attachment: MediaAttachment): string | undefined {
  const { faviconUrlExpirationTimestampMs, faviconUrl, faviconUrlFallback } =
    attachment;
  return faviconUrlExpirationTimestampMs != null &&
    LSMediaUrlUtils.isTimestampExpired(faviconUrlExpirationTimestampMs)
    ? rewriteFallbackUrl(faviconUrlFallback)
    : faviconUrl;
}

function listItemContactUrlList1(
  attachment: MediaAttachment
): string | undefined {
  try {
    const {
      listItemContactUrlExpirationTimestampList1,
      listItemContactUrlFallbackList1,
      listItemContactUrlList1,
    } = attachment;
    return listItemContactUrlExpirationTimestampList1 != null &&
      LSMediaUrlUtils.isTimestampExpired(
        I64.of_string(listItemContactUrlExpirationTimestampList1)
      )
      ? rewriteFallbackUrl(listItemContactUrlFallbackList1)
      : listItemContactUrlList1;
  } catch (error) {
    return attachment.listItemContactUrlList1;
  }
}

function listItemContactUrlList2(
  attachment: MediaAttachment
): string | undefined {
  try {
    const {
      listItemContactUrlExpirationTimestampList2,
      listItemContactUrlFallbackList2,
      listItemContactUrlList2,
    } = attachment;
    return listItemContactUrlExpirationTimestampList2 != null &&
      LSMediaUrlUtils.isTimestampExpired(
        I64.of_string(listItemContactUrlExpirationTimestampList2)
      )
      ? rewriteFallbackUrl(listItemContactUrlFallbackList2)
      : listItemContactUrlList2;
  } catch (error) {
    return attachment.listItemContactUrlList2;
  }
}

function listItemContactUrlList3(
  attachment: MediaAttachment
): string | undefined {
  try {
    const {
      listItemContactUrlExpirationTimestampList3,
      listItemContactUrlFallbackList3,
      listItemContactUrlList3,
    } = attachment;
    return listItemContactUrlExpirationTimestampList3 != null &&
      LSMediaUrlUtils.isTimestampExpired(
        I64.of_string(listItemContactUrlExpirationTimestampList3)
      )
      ? rewriteFallbackUrl(listItemContactUrlFallbackList3)
      : listItemContactUrlList3;
  } catch (error) {
    return attachment.listItemContactUrlList3;
  }
}

function headerImageUrl(attachment: MediaAttachment): string | undefined {
  const {
    headerImageUrlExpirationTimestampMs,
    headerImageUrl,
    headerImageUrlFallback,
  } = attachment;
  return headerImageUrlExpirationTimestampMs != null &&
    LSMediaUrlUtils.isTimestampExpired(headerImageUrlExpirationTimestampMs)
    ? rewriteFallbackUrl(headerImageUrlFallback)
    : headerImageUrl;
}

function listItemProfilePictureUrl1(
  attachment: MediaAttachment
): string | undefined {
  try {
    const {
      listItemProfilePictureUrlExpirationTimestamp1,
      listItemProfilePictureUrlFallback1,
      listItemProfilePictureUrl1,
    } = attachment;
    return listItemProfilePictureUrlExpirationTimestamp1 != null &&
      LSMediaUrlUtils.isTimestampExpired(
        I64.of_string(listItemProfilePictureUrlExpirationTimestamp1)
      )
      ? rewriteFallbackUrl(listItemProfilePictureUrlFallback1)
      : listItemProfilePictureUrl1;
  } catch (error) {
    return attachment.listItemProfilePictureUrl1;
  }
}

function listItemProfilePictureUrl2(
  attachment: MediaAttachment
): string | undefined {
  try {
    const {
      listItemProfilePictureUrlExpirationTimestamp2,
      listItemProfilePictureUrlFallback2,
      listItemProfilePictureUrl2,
    } = attachment;
    return listItemProfilePictureUrlExpirationTimestamp2 != null &&
      LSMediaUrlUtils.isTimestampExpired(
        I64.of_string(listItemProfilePictureUrlExpirationTimestamp2)
      )
      ? rewriteFallbackUrl(listItemProfilePictureUrlFallback2)
      : listItemProfilePictureUrl2;
  } catch (error) {
    return attachment.listItemProfilePictureUrl2;
  }
}

function listItemProfilePictureUrl3(
  attachment: MediaAttachment
): string | undefined {
  try {
    const {
      listItemProfilePictureUrlExpirationTimestamp3,
      listItemProfilePictureUrlFallback3,
      listItemProfilePictureUrl3,
    } = attachment;
    return listItemProfilePictureUrlExpirationTimestamp3 != null &&
      LSMediaUrlUtils.isTimestampExpired(
        I64.of_string(listItemProfilePictureUrlExpirationTimestamp3)
      )
      ? rewriteFallbackUrl(listItemProfilePictureUrlFallback3)
      : listItemProfilePictureUrl3;
  } catch (error) {
    return attachment.listItemProfilePictureUrl3;
  }
}

export {
  previewUrl,
  previewUrlLarge,
  playableUrl,
  imageUrl,
  faviconUrl,
  listItemContactUrlList1,
  listItemContactUrlList2,
  listItemContactUrlList3,
  headerImageUrl,
  listItemProfilePictureUrl1,
  listItemProfilePictureUrl2,
  listItemProfilePictureUrl3,
};
