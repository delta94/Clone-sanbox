export const Executor = (componentProps) => {
    const componentResult = componentProps.hook();
    componentProps.onUpdate(componentResult);
    return null;
};