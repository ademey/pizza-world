import { createSelector } from 'reselect';

export const getChecked = state => state;

export const getCheckedCount = createSelector(
  getChecked,
  checked => Object.values(checked)
                   .filter(item => item).length
)