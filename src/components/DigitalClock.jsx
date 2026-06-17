import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeZones = [
    { name: 'New York', zone: 'America/New_York' },
    { name: 'London', zone: 'Europe/London' },
    { name: 'Tokyo', zone: 'Asia/Tokyo' },
    { name: 'Sydney', zone: 'Australia/Sydney' },
    { name: 'Dubai', zone: 'Asia/Dubai' },
    { name: 'Singapore', zone: 'Asia/Singapore' },
    { name: 'India', zone: 'Asia/Kolkata' },
    { name: 'Los Angeles', zone: 'America/Los_Angeles' },
  ];

  const getTimeInZone = (zone) => {
    return new Date(time.toLocaleString('en-US', { timeZone: zone }));
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="digital-clock-container">
      <h1>🕐 World Clock</h1>
      <div className="clocks-grid">
        {timeZones.map((tz) => {
          const zoneTime = getTimeInZone(tz.zone);
          return (
            <div key={tz.zone} className="clock-card">
              <h2>{tz.name}</h2>
              <div className="time-display">{formatTime(zoneTime)}</div>
              <div className="date-display">{formatDate(zoneTime)}</div>
              <div className="timezone-label">{tz.zone}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DigitalClock;