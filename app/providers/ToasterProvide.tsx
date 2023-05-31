"use client";

import { Toaster } from "react-hot-toast";

// We use providers when using external libraries in order to have at least a client parent component for external components
const ToasterProvider = () => {
  return <Toaster />;
};

export default ToasterProvider;
