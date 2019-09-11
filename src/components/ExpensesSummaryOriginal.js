import React from 'react';
import { connect } from 'react-redux';
import expenseCount from '../selectors/expenseCountOriginal';
import expensesTotal from '../selectors/expenses-totalOriginal';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export class ExpensesSummary extends React.Component {

    render() {
        return (
            <div>
                <h2>
                    Viewing {expenseCount(this.props.expenses)}
                    {
                        expenseCount(this.props.expenses) === 1 ? ` expense` : ` expenses`
                    } totalling {numeral((expensesTotal(this.props.expenses)) / 100).format('$0,0.00')}
                </h2>
            </div>

        );
    }
}


const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
};

export default connect(mapStateToProps)(ExpensesSummary);
