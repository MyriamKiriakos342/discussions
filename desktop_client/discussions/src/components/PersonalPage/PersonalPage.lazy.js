import React, { lazy, Suspense } from 'react';

const LazyPersonalPage = lazy(() => import('./PersonalPage'));

const PersonalPage = props => (
  <Suspense fallback={null}>
    <LazyPersonalPage {...props} />
  </Suspense>
);

export default PersonalPage;
