__d(
  "MWInboxInfoSharedContentQPLLogger",
  ["QPLUserFlow", "qpl"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = { contents: !1 };
    function a(a) {
      (h.contents = !0),
        c("QPLUserFlow").start(c("qpl")._(778117242, "206"), {
          annotations: { string: { entrypoint: "side_panel_" + a } },
          cancelOnUnload: !0,
        });
    }
    function b(a) {
      if (h.contents === !1) {
        var b;
        switch (a) {
          case "media":
            b = "media";
            break;
          case "files":
            b = "file";
            break;
          case "links":
            b = "link";
            break;
        }
        h.contents = !0;
        c("QPLUserFlow").start(c("qpl")._(778117242, "206"), {
          annotations: {
            string: {
              content_location: "thread",
              content_type: b,
              entrypoint: "thread",
            },
          },
          cancelOnUnload: !0,
        });
      }
      c("QPLUserFlow").addPoint(
        c("qpl")._(778117242, "206"),
        "shared_content_click",
        {}
      );
    }
    function d(a) {
      var b;
      switch (a) {
        case "media":
          b = "open_tab_media";
          break;
        case "files":
          b = "open_tab_files";
          break;
        case "links":
          b = "open_tab_links";
          break;
      }
      c("QPLUserFlow").addPoint(c("qpl")._(778117242, "206"), b, {});
    }
    function e(a, b) {
      switch (a) {
        case "media":
          c("QPLUserFlow").addPoint(
            c("qpl")._(778117242, "206"),
            "load_tab_media",
            {}
          );
          c("QPLUserFlow").addAnnotations(c("qpl")._(778117242, "206"), {
            int: { media_count: b },
          });
          return;
        case "files":
          c("QPLUserFlow").addPoint(
            c("qpl")._(778117242, "206"),
            "load_tab_files",
            {}
          );
          c("QPLUserFlow").addAnnotations(c("qpl")._(778117242, "206"), {
            int: { files_count: b },
          });
          return;
        case "links":
          c("QPLUserFlow").addPoint(
            c("qpl")._(778117242, "206"),
            "load_tab_links",
            {}
          );
          c("QPLUserFlow").addAnnotations(c("qpl")._(778117242, "206"), {
            int: { links_count: b },
          });
          return;
      }
    }
    function f(a) {
      var b;
      switch (a) {
        case "media":
          b = "media";
          break;
        case "files":
          b = "file";
          break;
        case "links":
          b = "link";
          break;
      }
      c("QPLUserFlow").addPoint(
        c("qpl")._(778117242, "206"),
        "shared_content_click",
        {}
      );
      c("QPLUserFlow").addAnnotations(c("qpl")._(778117242, "206"), {
        string: { content_location: "side_panel", content_type: b },
      });
      if (a === "links") {
        c("QPLUserFlow").endSuccess(c("qpl")._(778117242, "206"));
        h.contents = !1;
        return;
      }
    }
    function i() {
      c("QPLUserFlow").endCancel(c("qpl")._(778117242, "206"), {
        annotations: { string: { cancel_reason: "side_panel_navigated_back" } },
      }),
        (h.contents = !1);
    }
    function j() {
      c("QPLUserFlow").endCancel(c("qpl")._(778117242, "206"), {
        annotations: { string: { cancel_reason: "close_info_panel" } },
      }),
        (h.contents = !1);
    }
    function k() {
      c("QPLUserFlow").endCancel(c("qpl")._(778117242, "206"), {
        annotations: { string: { cancel_reason: "navigated_away" } },
      }),
        (h.contents = !1);
    }
    function l() {
      c("QPLUserFlow").endSuccess(c("qpl")._(778117242, "206")),
        (h.contents = !1);
    }
    g.logOpenSidePanel = a;
    g.logOpenSharedContentFromThread = b;
    g.logOpenTab = d;
    g.logLoadTab = e;
    g.logOpenSharedContentFromSidePanel = f;
    g.logNavigateBackFromSidePanel = i;
    g.logCloseInfoPanel = j;
    g.logNavigateAwaySidePanel = k;
    g.logOpenContentViewer = l;
  },
  98
);

import { QPLUserFlow } from "QPLUserFlow";
import { qpl } from "qpl";

const state = { contents: false };

function logOpenSidePanel(entryPoint: string): void {
  state.contents = true;
  QPLUserFlow.start(qpl._(778117242, "206"), {
    annotations: { string: { entrypoint: "side_panel_" + entryPoint } },
    cancelOnUnload: true,
  });
}

function logOpenSharedContentFromThread(
  contentType: "media" | "files" | "links"
): void {
  if (!state.contents) {
    let type: string;
    switch (contentType) {
      case "media":
        type = "media";
        break;
      case "files":
        type = "file";
        break;
      case "links":
        type = "link";
        break;
    }
    state.contents = true;
    QPLUserFlow.start(qpl._(778117242, "206"), {
      annotations: {
        string: {
          content_location: "thread",
          content_type: type,
          entrypoint: "thread",
        },
      },
      cancelOnUnload: true,
    });
  }
  QPLUserFlow.addPoint(qpl._(778117242, "206"), "shared_content_click", {});
}

function logOpenTab(tab: "media" | "files" | "links"): void {
  let point: string;
  switch (tab) {
    case "media":
      point = "open_tab_media";
      break;
    case "files":
      point = "open_tab_files";
      break;
    case "links":
      point = "open_tab_links";
      break;
  }
  QPLUserFlow.addPoint(qpl._(778117242, "206"), point, {});
}

function logLoadTab(tab: "media" | "files" | "links", count: number): void {
  switch (tab) {
    case "media":
      QPLUserFlow.addPoint(qpl._(778117242, "206"), "load_tab_media", {});
      QPLUserFlow.addAnnotations(qpl._(778117242, "206"), {
        int: { media_count: count },
      });
      break;
    case "files":
      QPLUserFlow.addPoint(qpl._(778117242, "206"), "load_tab_files", {});
      QPLUserFlow.addAnnotations(qpl._(778117242, "206"), {
        int: { files_count: count },
      });
      break;
    case "links":
      QPLUserFlow.addPoint(qpl._(778117242, "206"), "load_tab_links", {});
      QPLUserFlow.addAnnotations(qpl._(778117242, "206"), {
        int: { links_count: count },
      });
      break;
  }
}

function logOpenSharedContentFromSidePanel(
  contentType: "media" | "files" | "links"
): void {
  let type: string;
  switch (contentType) {
    case "media":
      type = "media";
      break;
    case "files":
      type = "file";
      break;
    case "links":
      type = "link";
      break;
  }
  QPLUserFlow.addPoint(qpl._(778117242, "206"), "shared_content_click", {});
  QPLUserFlow.addAnnotations(qpl._(778117242, "206"), {
    string: { content_location: "side_panel", content_type: type },
  });
  if (contentType === "links") {
    QPLUserFlow.endSuccess(qpl._(778117242, "206"));
    state.contents = false;
  }
}

function logNavigateBackFromSidePanel(): void {
  QPLUserFlow.endCancel(qpl._(778117242, "206"), {
    annotations: { string: { cancel_reason: "side_panel_navigated_back" } },
  });
  state.contents = false;
}

function logCloseInfoPanel(): void {
  QPLUserFlow.endCancel(qpl._(778117242, "206"), {
    annotations: { string: { cancel_reason: "close_info_panel" } },
  });
  state.contents = false;
}

function logNavigateAwaySidePanel(): void {
  QPLUserFlow.endCancel(qpl._(778117242, "206"), {
    annotations: { string: { cancel_reason: "navigated_away" } },
  });
  state.contents = false;
}

function logOpenContentViewer(): void {
  QPLUserFlow.endSuccess(qpl._(778117242, "206"));
  state.contents = false;
}

export {
  logOpenSidePanel,
  logOpenSharedContentFromThread,
  logOpenTab,
  logLoadTab,
  logOpenSharedContentFromSidePanel,
  logNavigateBackFromSidePanel,
  logCloseInfoPanel,
  logNavigateAwaySidePanel,
  logOpenContentViewer,
};
