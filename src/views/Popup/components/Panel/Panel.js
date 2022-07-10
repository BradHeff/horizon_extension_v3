import React from 'react';

import logo from '../../assets/images/logo2.png';

const Panel = (props) => {
  return (
        <div className="col-6 pr-0 position-relative p-3 text-center" style={{fontWeight: 300, fontSize: '12px'}}>
            <b style={{fontSize: '16px'}}>HCS Extension</b>
            <p className="mb-0">A transforming christian education for all</p>
            <div className="p-3">
              <img src={logo} alt="logo" style={{height: '120px'}} />
            </div>
            <div>
              
              <p>This extension is designed for Horizon Christian School Students and teachers to make navigating to school sites easy and in 1 place.</p>
            </div>
            <div className="text-center">
              <a className="btn btn-outline-secondary mr-2" style={{borderRadius: '20px'}} href="mailto:support@horizon.sa.edu.au?subject=Application | Need Support&body=Hi Brad, can i get some help in room ?? please.">Request Support</a>
              {/* <a className="btn btn-outline-secondary" style={{borderRadius: '20px'}} href="chrome-extension://bekflalofhgamamdhpcoicgcphalobcp/options.html">Open options</a> */}
            </div>
           
        </div>
  );
}

export default Panel;