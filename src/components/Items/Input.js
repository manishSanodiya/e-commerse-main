import React from 'react';

// import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  return (
    <>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </>
  );
});

export default Input;