import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => {
    return (
        <div className="p-5">
            <h1 className="text-danger">Path Not Found!</h1>
            <Link to="/" className="text-success">
                <p>Back to home</p>
            </Link>
        </div>
    );
};

export default NoMatch;