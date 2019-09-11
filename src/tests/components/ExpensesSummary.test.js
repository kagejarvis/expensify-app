import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('Should correctly render expenses summary with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should correctly render expenses summary with mulitple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={3} expensesTotal={1235} />);
    expect(wrapper).toMatchSnapshot();
});