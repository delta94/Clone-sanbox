__d("MWChatInteraction.bs", ["InteractionTracing", "InteractionTracingMetrics"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {};
    e = "mw_auto_chat_tab_open";
    f = "mw_chatheads_load";
    function a(a, b) {
        h[a] = b
    }
    function b(a) {
        return h[a]
    }
    function d(a) {
        if (a == null)
            return null;
        var b = h[a];
        if (b == null)
            return null;
        a = Array.from(c("InteractionTracing").getPendingInteractions().values());
        return a.find(function(a) {
            return a.getTraceId() === b
        })
    }
    var i = function(a) {
        return a + "-s2s"
    }
      , j = function(a, b) {
        a != null && c("InteractionTracingMetrics").addMarkerPoint(a, b, "AppTiming")
    };
    g.interactions = h;
    g.MW_AUTO_CHAT_TAB_OPEN = e;
    g.MW_CHATHEADS_LOAD = f;
    g.set = a;
    g.get = b;
    g.getInteractionTraceForThreadKey = d;
    g.s2sKey = i;
    g.addMarkerPoint = j
}
), 98);


import InteractionTracing from "InteractionTracing"
import InteractionTracingMetrics from "InteractionTracingMetrics"


const interactions = {};

const MW_AUTO_CHAT_TAB_OPEN = "mw_auto_chat_tab_open";
const MW_CHATHEADS_LOAD = "mw_chatheads_load";

function setInteraction(key, value) {
  interactions[key] = value;
}

function getInteraction(key) {
  return interactions[key];
}

function getInteractionTraceForThreadKey(threadKey) {
  if (threadKey == null) {
    return null;
  }
  const traceId = interactions[threadKey];
  if (traceId == null) {
    return null;
  }
  const pendingInteractions = Array.from(InteractionTracing.getPendingInteractions().values());
  return pendingInteractions.find(interaction => interaction.getTraceId() === traceId);
}

const s2sKey = key => `${key}-s2s`;

const addMarkerPoint = (interactionKey, value) => {
  if (interactionKey != null) {
    InteractionTracingMetrics.addMarkerPoint(interactionKey, value, "AppTiming");
  }
};

export {
  interactions,
  MW_AUTO_CHAT_TAB_OPEN,
  MW_CHATHEADS_LOAD,
  setInteraction,
  getInteraction,
  getInteractionTraceForThreadKey,
  s2sKey,
  addMarkerPoint
};
