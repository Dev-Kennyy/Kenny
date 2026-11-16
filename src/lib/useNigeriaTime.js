import { useEffect, useState } from 'react';

export function useNigeriaTime() {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    function update() {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Africa/Lagos',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        });
        setTimeString(formatter.format(now));
      } catch {
        const now = new Date();
        setTimeString(now.toLocaleTimeString());
      }
    }

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return timeString;
}

