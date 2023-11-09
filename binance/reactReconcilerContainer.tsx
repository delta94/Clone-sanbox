import React from 'react';
import * as reactReconcilerRenderer from 'reactReconcilerRenderer';
import { Container } from './SubcriberContainer';

function createContainerExecutor(Executor, updater) {
  const container = new Container(updater);
  reactReconcilerRenderer.render(
    <Executor
      onUpdate={(data) => {
        container.data = data;
        container.notify();
      }}
      hook={() => updater(container.data)}
    />
  );

  const useContainerData = (selector = (data) => data) => {
    const [state, setState] = React.useState(() => (container ? container.data : undefined));
    const selectorRef = React.useRef(selector);
    const selectedDataRef = React.useRef(selectorRef.current(container.data));

    selectorRef.current = selector;

    React.useEffect(() => {
      if (container) {
        container.subscribers.add(handleUpdate);
        return () => {
          container.subscribers.delete(handleUpdate);
        };
      }

      function handleUpdate(data) {
        if (selectorRef.current) {
          const previousSelectedData = selectedDataRef.current;
          const nextSelectedData = selectorRef.current(data);

          if (isArrayDifferent(previousSelectedData, nextSelectedData)) {
            setState(data);
          }
          
          selectedDataRef.current = nextSelectedData;
        } else {
          setState(data);
        }
      }
    }, [container]);

    return state;
  };

  Object.defineProperty(useContainerData, 'data', {
    get: () => container.data,
  });

  return useContainerData;
}

function isArrayDifferent(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return true;
  }

  for (let key in arr2) {
    if (arr1[key] !== arr2[key]) {
      return true;
    }
  }

  return false;
}

export default createContainerExecutor;
