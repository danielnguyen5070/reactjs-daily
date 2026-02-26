import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export const RootErrorBoundary = () => {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return (
            <div style={{ padding: 40 }}>
                <h1>{error.status}</h1>
                <p>{error.statusText}</p>
            </div>
        );
    }

    return (
        <div style={{ padding: 40 }}>
            <h1>Unexpected error</h1>
        </div>
    );
};