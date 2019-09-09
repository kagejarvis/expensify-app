import {
    setStartDate,
    setEndDate,
    setTextFilter,
    sortByAmount,
    sortByDate
} from '../../actions/filters';
import moment from 'moment';

test('Should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('Should generate set end date action object', () => {
    const action = setEndDate(moment(1000));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(1000)
    });
});
test('Should generate set text filter action object', () => {
    const action = setTextFilter('testData');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'testData'
    })
});
test('Should generate set text filter anonymous action object', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
});
test('Should generate sort by amount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
});
test('Should generate sort by date action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
});