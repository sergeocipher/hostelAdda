import React from 'react';
import Icon from './Icon';

const HeaderTopBar = () => {
  return (
    <div className="bg-gray-800 text-white p-4 flex items-center justify-between shadow-md">
      <div className="flex items-center">
        <img src="/hosteladda-logo.png" alt="HostelAdda Logo" className="h-7 mr-2" /> {/* Add your logo */}
        <span className="text-xl font-bold">HostelAdda</span>
      </div>
      <div className="flex items-center space-x-4">
        <Icon name="bell" className="w-6 h-6" />
        <Icon name="info" className="w-6 h-6" />
        <Icon name="chat" className="w-6 h-6" />
        <Icon name="menu" className="w-6 h-6" />
      </div>
    </div>
  );
};

export default HeaderTopBar;