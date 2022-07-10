import React from 'react';

const Layout = (props) => {
  return (
      <div className="popup">
        <div className="row justify-content-center">
            {props.children}
        </div>
    </div>
  );
}

export default Layout;