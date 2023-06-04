import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

interface Props {
  children: React.ReactNode;
}

const Error = () => {
  return (
    <div className="flex flex-row items-center justify-center h-screen">
      <h1>Sorry, we encountered an error.</h1>
    </div>
  );
}

const AppProvider = ( { children } : Props) => {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <BrowserRouter>
        { children }
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default AppProvider;
