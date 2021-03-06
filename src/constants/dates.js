import moment from 'moment';
import { find } from 'lodash';

export const DATES = [
  { name: 'Last week', value: 'last_week', data: { amount: 1, unit: 'week' } },
  {
    name: 'Last 2 weeks',
    value: 'last_two_weeks',
    data: { amount: 2, unit: 'weeks' },
  },
  {
    name: 'Last month',
    value: 'last_month',
    data: { amount: 1, unit: 'month' },
  },
  {
    name: 'Last 6 months',
    value: 'last_six_months',
    data: { amount: 6, unit: 'months' },
  },
  { name: 'Last year', value: 'last_year', data: { amount: 1, unit: 'year' } },
  { name: 'Anytime', value: 'anytime', data: { amount: 10, unit: 'years' } },
];

/**
 * Returns a formatted date as used in a Github filter from
 * the value of the date object
 */
export const getDateFromValue = value => {
  const {
    data: { amount, unit },
  } = find(DATES, { value });

  return moment()
    .subtract(amount, unit)
    .format('YYYY-MM-DD');
};
