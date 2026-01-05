export const generateICS = (event) => {
  const { name, title, description, location, date, time, startTime, endTime } = event;
  
  const eventName = name || title || "Wedding Event";
  let startStr = "";
  let endStr = "";

  if (date && time) {
    // Robust parsing for "Month Day, Year" and "Hour:Min AM/PM"
    const months = {
      January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
      July: 6, August: 7, September: 8, October: 9, November: 10, December: 11
    };

    const dateParts = date.replace(',', '').split(' ');
    const month = months[dateParts[0]];
    const day = parseInt(dateParts[1]);
    const year = parseInt(dateParts[2]);

    const timeParts = time.split(' ');
    const [hoursStr, minutesStr] = timeParts[0].split(':');
    let hours = parseInt(hoursStr);
    const minutes = parseInt(minutesStr);
    const ampm = timeParts[1];

    if (ampm === 'PM' && hours < 12) hours += 12;
    if (ampm === 'AM' && hours === 12) hours = 0;

    const startDateTime = new Date(year, month, day, hours, minutes);
    const endDateTime = new Date(startDateTime.getTime() + 3 * 60 * 60 * 1000); // Default 3 hours

    const formatDate = (d) => {
      const pad = (n) => n.toString().padStart(2, '0');
      return [
        d.getUTCFullYear(),
        pad(d.getUTCMonth() + 1),
        pad(d.getUTCDate()),
        'T',
        pad(d.getUTCHours()),
        pad(d.getUTCMinutes()),
        pad(d.getUTCSeconds()),
        'Z'
      ].join('');
    };

    startStr = formatDate(startDateTime);
    endStr = formatDate(endDateTime);
  } else if (startTime && endTime) {
    startStr = startTime;
    endStr = endTime;
  }

  // Google Calendar Link
  const googleUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventName)}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}&dates=${startStr}/${endStr}`;

  // Open Google Calendar in new tab
  window.open(googleUrl, '_blank');
};
