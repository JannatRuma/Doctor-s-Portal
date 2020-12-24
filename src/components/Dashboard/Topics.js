import React from 'react';
import { Route, Link } from 'react-router-dom';

const Topic = ({ match }) => (
  <div>
    <h2>Current Route</h2>
    <div>{`${match.params.topicId}`}</div>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h1>Topics</h1>
    <p>Choose a topic</p>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
  </div>
);

export default Topics;
