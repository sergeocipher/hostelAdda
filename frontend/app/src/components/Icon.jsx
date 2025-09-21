import React from 'react';

const Icon = ({ name, className = 'w-5 h-5', strokeWidth = 1.5, fill = 'none', stroke = 'currentColor' }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'bell':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={stroke} className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75V9.567m-1.993 4.908a3.75 3.75 0 01-6.107 1.103L12 16.5M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75V9.567m-1.993 4.908a3.75 3.75 0 01-6.107 1.103L12 16.5m-1.993 4.908a3.75 3.75 0 01-6.107 1.103L12 16.5m-2.25 1.5l2.25-2.25" />
          </svg>
        );
      case 'info':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={stroke} className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02A9.728 9.728 0 0012 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12c0 1.257.26 2.473.749 3.593l-.271.728a.75.75 0 001.071 1.071l.728-.271c1.12.489 2.336.749 3.593.749" />
          </svg>
        );
      case 'chat':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={stroke} className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9 2.25h12M9 16.5h6" />
          </svg>
        );
      case 'menu':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={stroke} className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        );
      case 'phone':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={stroke} className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75L4.5 9m0 0l-2.25 2.25M4.5 9l2.25-2.25M6.75 6.75l-2.25 2.25M9 6.75l-2.25 2.25M9 12.75l-2.25-2.25M11.25 12.75l-2.25-2.25M11.25 18.75l-2.25-2.25M13.5 18.75l-2.25 2.25M15.75 18.75l-2.25-2.25M18 18.75l-2.25 2.25M18 12.75l-2.25-2.25M20.25 12.75l-2.25-2.25M20.25 6.75l-2.25 2.25M15 15h3.75a3 3 0 003-3V9a3 3 0 00-3-3H15v12z" />
          </svg>
        );
      case 'mail':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={stroke} className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75l-9-3.75L3 6.75m18 0v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m18 0V5.25a2.25 2.25 0 00-2.25-2.25H4.5A2.25 2.25 0 002.25 5.25v1.5m18 0v7.5m-9-3.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15.75m0-4.5h.008v.008h-.008V11.25z" />
          </svg>
        );
      case 'location':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={stroke} className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
        );
      case 'edit':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={stroke} className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.862 4.487zm0 0L19.5 7.125" />
          </svg>
        );
      case 'check-circle':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.23a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
          </svg>
        );
      case 'arrow-left':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={stroke} className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h17.25" />
          </svg>
        );
      case 'calender-list':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={stroke} className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5h3v-3h-3v3z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 19.5h3v-3h-3v3z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5h3v-3h-3v3z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 13.5h3v-3h-3v3z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 13.5h3v-3h-3v3z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 13.5h3v-3h-3v3z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 7.5h3v-3h-3v3z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 7.5h3v-3h-3v3z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 7.5h3v-3h-3v3z" />
          </svg>
        );
      case 'washing-machine': // Placeholder for laundry
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={stroke} className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18V6" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 15V9" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15V9" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 12h9" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12c0 2.21-1.79 4-4 4H7c-2.21 0-4-1.79-4-4V7c0-2.21 1.79-4 4-4h10c2.21 0 4 1.79 4 4v5z" />
          </svg>
        );
      case 'users': // Placeholder for roommate finder / study groups
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={stroke} className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 10a4 4 0 11-8 0 4 4 0 018 0zm-8 12a8 8 0 100-16 8 8 0 000 16zm-4-8a4 4 0 118 0 4 4 0 01-8 0zm13.78 4.22a8.003 8.003 0 00-11.23-11.23l-.707.707a6.002 6.002 0 018.49 8.49l.707-.707zm-2.12-2.12a2.002 2.002 0 00-2.83 0l-.707.707a.001.001 0 01-.001 0c-1.34-1.34-1.34-3.52 0-4.86l.707-.707a2.002 2.002 0 000-2.83 2.002 2.002 0 00-2.83 0l-.707.707c-1.34-1.34-1.34-3.52 0-4.86l.707-.707a2.002 2.002 0 000-2.83 2.002 2.002 0 00-2.83 0l-.707.707a.001.001 0 01-.001 0c-1.34-1.34-1.34-3.52 0-4.86l.707-.707a2.002 2.002 0 000-2.83 2.002 2.002 0 00-2.83 0l-.707.707z" />
          </svg>
        );
      case 'search':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={stroke} className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        );
      case 'shopping-cart':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={stroke} className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.515 0 .95.352 1.07.857l.67 3.016a2.25 2.25 0 002.227 1.776h11.231c.961 0 1.776-.796 1.776-1.776v-.667c0-.961-.796-1.776-1.776-1.776H10.151a1.5 1.5 0 01-.796-2.83l.288-.384M19.5 7.5h-15M6.34 7.5l.67 3.016a2.25 2.25 0 002.227 1.776h11.231c.961 0 1.776-.796 1.776-1.776v-.667c0-.961-.796-1.776-1.776-1.776H10.151a1.5 1.5 0 01-.796-2.83l.288-.384" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.515 0 .95.352 1.07.857l.67 3.016a2.25 2.25 0 002.227 1.776h11.231c.961 0 1.776-.796 1.776-1.776v-.667c0-.961-.796-1.776-1.776-1.776H10.151a1.5 1.5 0 01-.796-2.83l.288-.384M19.5 7.5h-15M6.34 7.5l.67 3.016a2.25 2.25 0 002.227 1.776h11.231c.961 0 1.776-.796 1.776-1.776v-.667c0-.961-.796-1.776-1.776-1.776H10.151a1.5 1.5 0 01-.796-2.83l.288-.384" />
          </svg>
        );
      default:
        return null;
    }
  };

  return <>{getIcon(name)}</>;
};

export default Icon;