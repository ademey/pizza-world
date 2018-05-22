import round from 'lodash/round';

export const unitsToDollar = units => `$${round(units / 100, 2)}`;
