'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { subtotalPaise } = require('../src/invoice');

test('subtotal of two items', () => {
  assert.equal(subtotalPaise([{ qty: 2, unitPricePaise: 15000 }, { qty: 1, unitPricePaise: 9900 }]), 39900);
});

test('empty invoice is zero', () => {
  assert.equal(subtotalPaise([]), 0);
});

test('rejects negative quantity', () => {
  assert.throws(() => subtotalPaise([{ qty: -1, unitPricePaise: 100 }]), RangeError);
});
