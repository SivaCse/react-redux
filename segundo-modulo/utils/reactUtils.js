import React from 'react';

function childrenWithProps(Children, props) {
    return React.Children.map(props.children, child => React.cloneElement(child, {...props}));
}

export { childrenWithProps }