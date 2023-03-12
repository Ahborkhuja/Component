import React from 'react'
import classnames from "classnames";

function MovieList({ children, className }) {
  return (
    <>
      <div className={classnames("p-2 gap-20 flex flex-wrap justify-center items-center",className)}>
        {children.map(child =>
          React.cloneElement(child, {
            className: classnames(
              child.props.className
            )
          })
        )}
      </div>
    </>
  )
}

export default MovieList