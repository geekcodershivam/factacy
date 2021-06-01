import React from 'react';

export default function Header(props) {
  function roundof(val) {
    return Math.round(val * 100) / 100;
  }
  return (
    <div className="item header">
      <span className="details">{props.details['productName']}</span>
      <nav>
        <span>
          GST : <span className="value">{roundof(props.details['gst'])}</span>
        </span>
        <span>
          CYAV:{' '}
          <span className="value">
            {roundof(props.details['currentYearAggregatedValue'])}
          </span>
        </span>
        <span>
          PYAV:{' '}
          <span className="value">
            {roundof(props.details['previoudYearAggregatedValue'])}
          </span>
        </span>
        <span>
          Start Year :{' '}
          <span className="value">{props.details['startYear']}</span>
        </span>
        <span>
          End Year : <span className="value">{props.details['endYear']}</span>
        </span>
      </nav>
    </div>
  );
}
