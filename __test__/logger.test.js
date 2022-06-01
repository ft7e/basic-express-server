'use strict';
const logger = require('../src/middleware/logger');

describe('Logger Middleware', () => {
  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn();
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log');
  });

  test('If it is logging?', () => {
    logger(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });
  test('If it is calling next?', () => {
    expect(next).toHaveBeenCalled();
  });
});
