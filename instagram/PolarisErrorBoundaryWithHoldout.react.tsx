import React from 'react';
import { PolarisErrorBoundary } from 'PolarisErrorBoundary.react';

const PolarisErrorBoundaryWithHoldout = ({ children }) => {
return (
<PolarisErrorBoundary
errorRenderer={() => null}
isPartOfNewErrorBoundaryQE={true}
children={children}
/>
)
}
PolarisErrorBoundaryWithHoldout.displayName = PolarisErrorBoundaryWithHoldout [from ${__filename}];

export default PolarisErrorBoundaryWithHoldout;