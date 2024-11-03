import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorBoundary() {
  const error = useRouteError();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">There was a fatal error:</h1>
      <p>
        {isRouteErrorResponse(error)
          ? error.data?.message || error.statusText
          : "Unknown error message"}
      </p>
    </div>
  );
}
