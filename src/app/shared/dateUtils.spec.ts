import { getWeekNumber, getDateOfWeek } from './dateUtils';
import { getNumberOfWeeksInYear } from './dateUtils';

describe('getDateOfWeek', () => {
    it('should return the correct date for the given week number and year', () => {
        const date = getDateOfWeek(1, 2022);
        expect(date).toEqual(new Date('2022-01-01'));
    });
});