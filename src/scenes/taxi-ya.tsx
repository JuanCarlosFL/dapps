import * as React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'core/router';
import { TaxiYaContainer } from 'pods/taxi-ya';

export const TaxiYa: React.FC = () => {
  return (
    <>
      <TaxiYaContainer />
    </>
  );
}
