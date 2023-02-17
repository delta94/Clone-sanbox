import React from "react"

const pushMultiStepContainerWithProps = (Component, pushPage, props) => (onReturn) => {
    return <Component {...{ onReturn, pushPage, ...props }} />;
};
    
export default pushMultiStepContainerWithProps;