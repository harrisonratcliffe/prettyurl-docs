import React from 'react';

const HttpMethodBadge = ({ method }) => {
    const methodStyles = {
        DELETE: {
            color: '#e64a46',
        },
        PATCH: {
            color: '#f4bc41',
        },
        GET: {
            color: '#3b88df',
        },
        POST: {
            color: '#48a12d',
        },
        PUT: {
            color: '#c002fa',
        },
    };

    const style = methodStyles[method] || {
        backgroundColor: '#cccccc',
        color: '#000000',
    };

    return (
        <span style={{
            display: 'inline-block',
            padding: '6px',
            borderRadius: '8px',
            fontSize: '18px',
            fontWeight: 'bold',
            backgroundColor: '#292929',
            ...style,
        }}>
      {method}
    </span>
    );
};


export default HttpMethodBadge;
