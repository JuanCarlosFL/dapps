import * as React from 'react';
import { DappsContainer } from 'pods/dapps';
import { CenteredLayout } from 'layout';


export const DappsScene: React.FC = () => {
  return (
    <>
      <CenteredLayout>
        <DappsContainer />
      </CenteredLayout>
    </>
  );
}
