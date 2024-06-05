import React, { useState } from 'react';
import NotificationPanel from './components/NotificationPanel';

const App = () => {
  const [notificationMessage, setNotificationMessage] = useState('');

  const triggerNotification = () => {
    setNotificationMessage('this is a sample notifiation message');
  };

  const handleClose = () => {
    setNotificationMessage('');
  };

  return (
    <div>
      <button onClick={triggerNotification}>Trigger Notification</button>
      {notificationMessage && (
        <NotificationPanel
          message={notificationMessage}
          onClose={handleClose}
          animationDuration={5000}
        />
      )}
    </div>
  );
};

export default App;
