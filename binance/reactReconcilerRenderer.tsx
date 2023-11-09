import ReactReconciler from 'react-reconciler';

const reconciler = ReactReconciler({
  now: Date.now,
  getRootHostContext: () => ({}),
  prepareForCommit: () => {},
  resetAfterCommit: () => {},
  getChildHostContext: () => ({}),
  shouldSetTextContent: () => true,
  createInstance: () => {},
  createTextInstance: () => {},
  appendInitialChild: () => {},
  appendChild: () => {},
  finalizeInitialChildren: () => {},
  supportsMutation: true,
  appendChildToContainer: () => {},
  prepareUpdate: () => true,
  commitUpdate: () => {},
  commitTextUpdate: () => {},
  removeChild: () => {},
});

export const render = (element) => {
  const container = reconciler.createContainer(null, false, false);
  reconciler.updateContainer(element, container, null, null);
};