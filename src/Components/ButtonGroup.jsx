import React from 'react'
import classnames from "classnames";

const ButtonGroup = ({ children,className }) => {
  return (
    <span className={classnames("relative z-0 inline-flex shadow-sm",className)}>
      {children.map(child =>
        React.cloneElement(child, {
          className: classnames(
            "-ml-px first:ml-auto rounded-r-none rounded-l-none first:rounded-l-md last:rounded-r-2xl",
            child.props.className
          )
        })
      )}
    </span>
  );
};
export default ButtonGroup;