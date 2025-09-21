import React from 'react';
import Icon from './Icon';

const QuickLinkItem = ({ iconName, label }) => {
  return (
    <button className="flex items-center py-2 px-3 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
      <Icon name={iconName} className="w-5 h-5 text-gray-600 mr-3" />
      <span className="font-medium">{label}</span>
    </button>
  );
};

export default QuickLinkItem;