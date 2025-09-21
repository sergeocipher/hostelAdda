import Icon from './Icon';
import Card from './Card';

const ProfileInfoCard = ({ name, hall, room, course, profilePic, backgroundImage }) => {
  return (
    <Card className="relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      {/* Back Arrow */}
      <button className="absolute top-4 left-4 text-black hover:text-gray-200">
        <Icon name="arrow-left" className="w-6 h-6" stroke="white" />
      </button>
      {/* More Options */}
      <button className="absolute top-4 right-4 text-black hover:text-gray-200">
         <Icon name="menu" className="w-6 h-6" stroke="white" />
      </button>

      <div className="relative z-10 flex flex-col items-center pt-8 pb-4">
        {/* Profile Picture */}
        <div className="relative mb-4">
          <img
            src={profilePic}
            alt={name}
            className="w-28 h-28 rounded-full border-4 border-white object-cover"
          />
          <div className="absolute bottom-0 right-0 bg-green-500 rounded-full p-1 border-2 border-white">
            <Icon name="check-circle" className="w-4 h-4 text-black" />
          </div>
        </div>

        {/* User Details */}
        <h2 className="text-2xl font-bold text-black mb-1">{name}</h2>
        <p className="text-black text-sm">
          {hall} • {room}
        </p>
        <p className="text-black text-sm">{course}</p>
      </div>
    </Card>
  );
};

export default ProfileInfoCard;