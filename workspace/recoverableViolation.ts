import FBLogger from 'FBLogger';

const recoverableViolation = (message, namespace, error, options) => {
    options = options || {};
    error = options.error;
    const logger = FBLogger(namespace);
    let loggerWithContext = error ? logger.catching(error) : logger.blameToPreviousFrame();
    if (options.categoryKey) {
        loggerWithContext = loggerWithContext.addToCategoryKey(options.categoryKey);
    }
    const trackOnly = options.trackOnly || false;
    if (trackOnly) {
        loggerWithContext.debug(message);
    } else {
        loggerWithContext.mustfix(message);
    }
    return null;
};

export default recoverableViolation;