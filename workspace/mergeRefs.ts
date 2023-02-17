import recoverableViolation from 'recoverableViolation';

const mergeRefs = (...args) => {
    return (ref) => {
        args.forEach((arg) => {
            if (arg == null) return;
            if (typeof arg === 'function') {
                arg(ref);
                return;
            }
            if (typeof arg === 'object') {
                arg.current = ref;
                return;
            }
            recoverableViolation(`mergeRefs cannot handle Refs of type boolean, number or string, received ref ${String(arg)
            }`, 'comet_ui');
        });
    };
};

export default mergeRefs;