'use strict';

function Thermostat() {
    this.MINIMUM_TEMPERATURE = 10;
    this.temperature = 20;
}

Thermostat.prototype.getCurrentTemperature = function() {
    return this.temperature;
};

Thermostat.prototype.up = function() {
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