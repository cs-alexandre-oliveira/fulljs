import React from 'react';
import ContestPreview from './ContestPreview';

const ContestList = ({ contests, onContestClick }) => (
  <div className="ContestList">
    {Object.keys(contests).map(contestId =>
      <ContestPreview 
        key={contestId} 
        onCLick={onContestClick}
        {...contests[contestId]} />
    )}
  </div>
);

ContestList.PropTypes  = {
  contests: React.PropTypes.object,
  onContestClick: React.PropTypes.func.isRequired,
};

export default ContestList;