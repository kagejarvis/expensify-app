import authReducer from '../../reducers/auth';

test('Should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: '12345'
    };
    const state = authReducer({}, action);
    expect(state.uid).toEqual('12345');
});

test('Should clear uid for logout', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({ uid: '12345' }, action);
    expect(state).toEqual({});
});
