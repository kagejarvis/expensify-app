import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test("Should set default state", () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('Should remove expense by ID', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('Should not remove expense if ID not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

//should add expense
test('Should add expense', () => {
    const expense = {
        id: '5',
        description: 'Car Payment',
        note: '',
        amount: 59500,
        createdAt: 6000
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});
//should edit expense
test('Should edit expense', () => {
    const amount = 185000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates: {
            amount
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state[2].amount).toBe(amount);
});
//should not edit expense if expense not found
test('Should not edit expense with invalid id', () => {
    const amount = 185000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});