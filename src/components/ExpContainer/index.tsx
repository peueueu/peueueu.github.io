import React from 'react';
import { ExpWrapper } from './styled';

const ExpContainer: React.FC = (props) => {
  return <ExpWrapper>{props.children}</ExpWrapper>
}

export default ExpContainer;