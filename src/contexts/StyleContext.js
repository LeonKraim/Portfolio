import React from "react";

const StyleContext = React.createContext();
StyleContext.isDark = false;



export const StyleProvider = StyleContext.Provider;
export const StyleConsumer = StyleContext.Consumer;

export default StyleContext;
