import React from 'react';
import ContestPreview from './ContestPreview';

const ContestList = ({ contests, onContestCLick }) => (
  <div className="ContestList">
    {Object.keys(contests).map(contestId =>
      <ContestPreview 
        key={contestId} 
        onCLick={onContestCLick}
        {...contests[contestId]} />
    )}
  </div>
);

ContestList.PropTypes  = {
  contests: React.PropTypes.array,
  onContestCLick: React.PropTypes.func.isRequired,
};

export default ContestList;