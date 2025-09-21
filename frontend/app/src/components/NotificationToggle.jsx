import { useState } from 'react';
import Icon from './Icon';

const NotificationToggle = ({ iconName, label, description, initialChecked = false }) => {
  const [isChecked, setIsChecked] = useState(initialChecked);

  return (
    <div className="flex items-center justify-between py-3 border-b last:border-b-0 border-gray-100">
      <div className="flex items-center">
        <Icon name={iconName} className="w-5 h-5 text-gray-600 mr-3" />
        <div>
          <p className="font-medium text-gray-800">{label}</p>
          {description && <p className="text-xs text-gray-500">{description}</p>}
        </div>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
      </label>
    </div>
  );
};

export default NotificationToggle;