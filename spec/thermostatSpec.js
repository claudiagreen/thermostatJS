3'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('increases the tempterature with up()', function() {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('decreases the tempterature with up()', function() {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('has a minimum tempterature of 10', function() {
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('has power saving mode on by default', function() {
    expect(thermostat.isPowerSavingOn()).toBe(true);
  });

  it('can switch power saving off', function() {
    thermostat.switchPowerSavingOff();
    expect(thermostat.isPowerSavingOn()).toBe(false);
  });

  it('can switch power saving on', function() {
    thermostat.switchPowerSavingOff();
    expect(thermostat.isPowerSavingOn()).toBe(false);
    thermostat.switchPowerSavingOn();
    expect(thermostat.isPowerSavingOn()).toBe(true);
  });

  describe('when power saving is on', function() {

    it('has a maximum temp of 25', function() {
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });

  });

    describe('when power saving is off', function() {

    it('has a maximum temp of 32', function() {
      thermostat.switchPowerSavingOff();
      for (var i = 0; i < 13; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });

  });

});
