const MS_IN_DAY = 1000 * 60 * 60 * 24; // ms * sec * min * hour
const MS_IN_HOUR = 1000 * 60 * 60; // ms * sec * min
const MS_IN_MIN = 1000 * 60; // ms * sec
const MS_IN_SEC = 1000; // ms

const durationBetweenDates = (startDate = '02 Aug 1985', endDate = '03 Aug 1985', duration = 'hours') => {
  const millisecondsDiff = new Date(endDate).getTime() - new Date(startDate).getTime();
  const period = {
    'days': () => Math.abs(Math.floor(millisecondsDiff / MS_IN_DAY)),
    'hours': () => Math.abs(Math.floor(millisecondsDiff / MS_IN_HOUR)),
    'minutes': () => Math.abs(Math.floor(millisecondsDiff / MS_IN_MIN)),
    'seconds': () =>  Math.abs(Math.floor(millisecondsDiff / MS_IN_SEC)),
  };
  const result = String(`${period[duration]()} ${duration}`)

  console.log(result);
}

durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds')
durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days')
