import round from 'lodash/round';

export const formatPrice = units => `$${round(units / 100, 2)}`;

