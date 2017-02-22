'use strict';

function Thermostat() {
    this.MINIMUM_TEMPERATURE = 10;
    this.MAXIMUM_TEMPERATURE_PSM_ON = 25;
    this.MAXIMUM_TEMPERATURE_PSM_OFF = 32;
    this.temperature = 20;
    this.powerSavingMode = true;
}

Thermostat.prototype.getCurrentTemperature = function() {
    return this.temperature;
};

Thermostat.prototype.up = function() {
    if (this.isMaximumTemp()) {
        return;
    }
    this.temperature += 1;
}

Thermostat.prototype.down = function() {
    if (this.isMinimumTemp()) {
        return;
    }
    this.temperature -= 1;
}

Thermostat.prototype.isMinimumTemp = function() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
}

Thermostat.prototype.isMaximumTemp = function() {
    if (this.isPowerSavingOn() === false) {
        return this.temperature === this.MAXIMUM_TEMPERATURE_PSM_OFF;
    }
    return this.temperature === this.MAXIMUM_TEMPERATURE_PSM_ON;
}

Thermostat.prototype.isPowerSavingOn = function() {
    return this.powerSavingMode === true;
}

Thermostat.prototype.switchPowerSavingOff = function() {
    this.powerSavingMode = false;
}

Thermostat.prototype.switchPowerSavingOn = function() {
    this.powerSavingMode = true;
}