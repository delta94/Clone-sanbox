import React, { useCallback, useState } from 'react';
import { createErrorMetadata } from 'PolarisMonitorErrors';
import { ErrorBoundary } from 'ErrorBoundary.react';

const PolarisErrorBoundary = ({ children, errorRenderer, isPartOfNewErrorBoundaryQE, onError }) => {
const [error, setError] = useState(null);
const handleError = useCallback((error) => {
if (isPartOfNewErrorBoundaryQE === true && shouldRedirect()) {
setError(error);
}
if (onError) {
onError(error);
}
}, [isPartOfNewErrorBoundaryQE, onError]);


if (error) {
    throw error;
}

const augmentError = (error) => {
    error.metadata = createErrorMetadata(error);
}

return (
    <ErrorBoundary.react
        augmentError={augmentError}
        fallback={errorRenderer}
        onError={handleError}
    >
        {children}
    </ErrorBoundary.react>
);
}

PolarisErrorBoundary.displayName = PolarisErrorBoundary [from ${__filename}];

const shouldRedirect = () => {
return false;
}

export default PolarisErrorBoundary;