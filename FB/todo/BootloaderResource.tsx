__d("BootloaderResource", ["ExecutionEnvironment", "suspendOrThrowIfUsedInSSR"], (function(a, b, c, d, e, f, g) {
    var h = {};
    function a(a) {
        a.load()
    }
    function b(b) {
        var a = b.getModuleIfRequireable();
        if (a == null) {
            !c("ExecutionEnvironment").isInBrowser && !b.isAvailableInSSR_DO_NOT_USE() && c("suspendOrThrowIfUsedInSSR")("Loading of bootloaded and T3 components is disabled during SSR");
            var d = b.getModuleId();
            if (!h[d]) {
                b = h[d] = b.load();
                b["finally"](function() {
                    delete h[d]
                })
            }
            throw h[d]
        }
        return a
    }
    g.preload = a;
    g.read = b
}
), 98);



import ExecutionEnvironment from 'ExecutionEnvironment';
import suspendOrThrowIfUsedInSSR from 'suspendOrThrowIfUsedInSSR';

const resourceMap: { [key: string]: Promise<any> } = {};

export function preload(resource: { load: () => void }) {
  resource.load();
}

export function read<T>(resource: {
  getModuleIfRequireable: () => T | null;
  isAvailableInSSR_DO_NOT_USE: () => boolean;
  getModuleId: () => string;
  load: () => Promise<T>;
}): T {
  const module = resource.getModuleIfRequireable();
  if (module == null) {
    if (!ExecutionEnvironment.isInBrowser && !resource.isAvailableInSSR_DO_NOT_USE()) {
      suspendOrThrowIfUsedInSSR('Loading of bootloaded and T3 components is disabled during SSR');
    }
    const moduleId = resource.getModuleId();
    if (!resourceMap[moduleId]) {
      resourceMap[moduleId] = resource.load();
      resourceMap[moduleId].finally(() => {
        delete resourceMap[moduleId];
      });
    }
    throw resourceMap[moduleId];
  }
  return module;
}
