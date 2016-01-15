'use strict';

describe('Filter: battery', function () {

  // load the filter's module
  beforeEach(module('demoApp'));

  // initialize a new instance of the filter before each test
  var battery;
  beforeEach(inject(function ($filter) {
    battery = $filter('battery');
  }));

  it('should return the input prefixed with "battery filter:"', function () {
    var text = 'angularjs';
    expect(battery(text)).toBe('battery filter: ' + text);
  });

});
