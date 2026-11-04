'use strict';

// Synthetic invoice helper for the Orca Run 2 trial. Not HIEE code.

/**
 * Returns the subtotal of an invoice in paise (integer).
 * @param {{ qty: number, unitPricePaise: number }[]} items
 */
function subtotalPaise(items) {
  if (!Array.isArray(items)) {
    throw new TypeError('items must be an array');
  }
  return items.reduce((sum, item) => {
    if (!Number.isInteger(item.qty) || item.qty < 0) {
      throw new RangeError('qty must be a non-negative integer');
    }
    if (!Number.isInteger(item.unitPricePaise) || item.unitPricePaise < 0) {
      throw new RangeError('unitPricePaise must be a non-negative integer');
    }
    return sum + item.qty * item.unitPricePaise;
  }, 0);
}

module.exports = { subtotalPaise };
// P9
