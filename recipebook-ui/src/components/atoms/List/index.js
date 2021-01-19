import React from 'react';
import PropTypes from 'prop-types';

const RenderList = ({ data }) => {
  return (
    <ol>
      {data.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ol>
  );
};

RenderList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
};

export default RenderList;
