import React from 'react';
import { useSelector } from 'react-redux';

const Box = () => {
  const count = useSelector(state => state.count);
  return <div>thist is box</div>;
};

export default Box;
