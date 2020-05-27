import React, { Fragment } from 'react';

export const Hotels = ({ match }) => {
  // var location=match.params.l
  return (
    <Fragment>
      <h1>You choose {match.params.location} BITCHHH!!!!</h1>
    </Fragment>
  );
};
export default Hotels;
