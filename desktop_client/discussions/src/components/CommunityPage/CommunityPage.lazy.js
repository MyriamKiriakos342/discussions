import React, { lazy, Suspense } from 'react';

const LazyCommunityPage = lazy(() => import('./CommunityPage'));

const CommunityPage = props => (
  <Suspense fallback={null}>
    <LazyCommunityPage {...props} />
  </Suspense>
);

export default CommunityPage;
