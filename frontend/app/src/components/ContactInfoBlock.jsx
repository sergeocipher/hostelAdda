import Icon from './Icon';

const ContactInfoBlock = ({ title, iconName, value, editable = true }) => {
  return (
    <div className="flex items-center justify-between py-2 border-b last:border-b-0 border-gray-100">
      <div className="flex items-center">
        <Icon name={iconName} className="w-5 h-5 text-gray-500 mr-3" />
        <div>
          <p className="text-gray-800 font-medium">{value}</p>
          {title && <p className="text-xs text-gray-500">{title}</p>}
        </div>
      </div>
      {editable && (
        <button className="text-blue-500 hover:text-blue-700">
          <Icon name="edit" className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default ContactInfoBlock;