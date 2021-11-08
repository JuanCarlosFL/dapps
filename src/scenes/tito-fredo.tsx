import * as React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'core/router';
import { TitoFredoContainer } from 'pods/tito-fredo';

export const TitoFredoScene: React.FC = () => {
  return (
    <>
      <TitoFredoContainer />
      <Link to={routes.dapps}>Back to Dapps</Link>
    </>
  );
}
