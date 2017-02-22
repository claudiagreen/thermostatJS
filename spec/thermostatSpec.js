'use strict';

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
  })

  it('can switch power saving on', function() {
    thermostat.switchPowerSavingOff();
    expect(thermostat.isPowerSavingOn()).toBe(false);
    thermostat.switchPowerSavingOn();
    expect(thermostat.isPowerSavingOn()).toBe(true);
  })

});
