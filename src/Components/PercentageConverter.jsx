import React from 'react';

function PercentageConverter(props) {
  const { percentage, onChangePercentage } = props;
  return (
    <div className="percentage-converter">
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <div class="input-group-text">CGPA To %</div>
        </div>
        <input
          type="tel"
          maxLength="10"
          onChange={onChangePercentage}
          value={percentage}
          className="form-control"
        />
      </div>
    </div>
  );
}

export default PercentageConverter;
