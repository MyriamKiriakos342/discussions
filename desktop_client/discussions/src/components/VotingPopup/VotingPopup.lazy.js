import React, { lazy, Suspense } from 'react';

const LazyVotingPopup = lazy(() => import('./VotingPopup'));

const VotingPopup = props => (
  <Suspense fallback={null}>
    <LazyVotingPopup {...props} />
  </Suspense>
);

export default VotingPopup;
