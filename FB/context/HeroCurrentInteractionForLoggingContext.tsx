import React, { createContext } from 'react';

interface HeroCurrentInteractionForLoggingContextValue {
  current: any;
}

const HeroCurrentInteractionForLoggingContext = createContext<HeroCurrentInteractionForLoggingContextValue>({ current: null });

export default HeroCurrentInteractionForLoggingContext;
