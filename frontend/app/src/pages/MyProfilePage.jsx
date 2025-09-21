import React from 'react';
import HeaderTopBar from '../components/HeaderTopBar';
import ProfileInfoCard from '../components/ProfileInfoCard';
import ContactInfoBlock from '../components/ContactInfoBlock';
import QuickLinkItem from '../components/QuickLinkItem';
import NotificationToggle from '../components/NotificationToggle';
import Card from '../components/Card';

const MyProfilePage = () => {
  const ananyaProfile = {
    name: 'Ananya Sharma',
    hall: 'Maharja Hall',
    room: 'Room 312',
    course: '2nd Year - Computer Science',
    profilePic: 'frontend/app/src/assets/profilepic.jpeg', // Replace with actual path
    backgroundImage: "/home/somyajit-saha/Desktop/hostelAdda/frontend/app/src/assets/profilepic.jpeg"
  }

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <HeaderTopBar />

      <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Profile Summary and Quick Links */}
        <div className="lg:col-span-1 space-y-6">
          <ProfileInfoCard {...ananyaProfile} />

         
        </div>

        {/* Right Columns - Contact Info, Campus Connect, Notifications */}
        <div className="lg:col-span-2 space-y-6">
          {/* Top Row - Contact Info and Campus Connect */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h3>
              <ContactInfoBlock iconName="phone" value="+91 98765 43010" />
              <ContactInfoBlock iconName="mail" value="ananya.sharma@university.edu" title="Email Address" />
              <ContactInfoBlock iconName="location" value="Jaipur, Rajasthan" title="Current Address" />
            </Card>

          </div>

          {/* Bottom Row - Notification Preferences and Action Buttons */}
          <Card>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Notification Preferences</h3>
            <div className="space-y-2">
              <NotificationToggle iconName="shopping-cart" label="Order Updates" description="Get notified about your orders" initialChecked={true} />
              <NotificationToggle iconName="calender-list" label="Mess Schedule" description="Receive updates for daily mess plan" initialChecked={false} />
              <NotificationToggle iconName="calender-list" label="Mess Schedule" description="Reminders for special mess events" initialChecked={true} />
              <NotificationToggle iconName="bell" label="Library Alerts" description="Get notifications for book returns, new arrivals" initialChecked={false} />
            </div>
            <div className="mt-6 flex justify-end space-x-4">
              <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition-colors">
                Edit Profile
              </button>
              <button className="px-6 py-2 text-red-600 border border-red-600 rounded-md shadow-sm hover:bg-red-50 transition-colors">
                Logout
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;