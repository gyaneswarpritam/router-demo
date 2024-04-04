// import React from 'react';
// import { Navigate } from 'react-router-dom';

// const RouteWrapper = ({ component: Component, isAuthenticated, ...rest }) => {
//     return isAuthenticated ? (
//         <Component {...rest} />
//     ) : (
//         <Navigate to="/login" replace />
//     );
// };

import React from 'react';
import { Route } from 'react-router-dom';

const RouteWrapper = ({ children }) => {
    return (
        <React.Fragment>
            {React.Children.map(children, child => (
                <Route {...child.props} />
            ))}
        </React.Fragment>
    );
};

export default RouteWrapper;