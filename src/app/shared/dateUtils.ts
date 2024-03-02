export const getWeekNumber = () => {
    const currentDate = new Date();
    const startDate = new Date(currentDate.getFullYear(), 0, 1);
    const days = Math.floor((Number(currentDate) - Number(startDate)) /
        (24 * 60 * 60 * 1000));
    return Math.ceil(days / 7);
}

export const getDateOfWeek = (weekNumber: number, year: number) => {
    const firstDayOfYear = new Date(year, 0, 1);
    const daysOffset = (weekNumber - 1) * 7;
    const date = new Date(firstDayOfYear.getTime() + daysOffset * 24 * 60 * 60 * 1000);
    console.log(date)
    return date;
}

export const getWeekdays = (weekNumber: number, year: number) => {
    const firstDayOfYear = new Date(year, 0, 1);
    const daysOffset = (weekNumber - 1) * 7;
    const firstDayOfWeek = new Date(firstDayOfYear.getTime() + daysOffset * 24 * 60 * 60 * 1000);
    const weekdays = []; for (let i = 0; i < 7; i++) {
        const day = new Date(firstDayOfWeek.getTime() + i * 24 * 60 * 60 * 1000);
        if (day.getDay() !== 0 && day.getDay() !== 6) {
            weekdays.push(day);
        }
    }
    return weekdays;
}

export const getNumberOfWeeksInYear = (year: number) => {
    const firstDayOfYear = new Date(year, 0, 1);
    const lastDayOfYear = new Date(year, 11, 31);
    const daysInYear = Math.floor((lastDayOfYear.getTime() - firstDayOfYear.getTime()) / (24 * 60 * 60 * 1000));
    const weeksInYear = Math.ceil(daysInYear / 7);
    return weeksInYear;
}