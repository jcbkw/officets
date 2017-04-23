System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Address;
    return {
        setters: [],
        execute: function () {
            Address = (function () {
                /**
                 * <p>Creates an Address instance.</p>
                 * <p>An Address is a value object that represent's
                 * an enity's physical address.</p>
                 *
                 * @param streetNumber
                 * @param streetName
                 * @param city
                 * @param state
                 * @param zip
                 */
                function Address(streetNumber, streetName, city, state, zip) {
                    this.streetNumber = streetNumber;
                    this.streetName = streetName;
                    this.city = city;
                    this.state = state;
                    this.zip = zip;
                }
                ;
                /**
                 * Returns the string representation of this address.
                 */
                Address.prototype.getAddress = function () {
                    return this.streetNumber
                        + " " + this.streetName
                        + ", " + this.city
                        + " " + this.state
                        + " " + this.zip;
                };
                /**
                 * Returns the string representation of this address.
                 */
                Address.prototype.toString = function () {
                    return this.getAddress();
                };
                return Address;
            }());
            exports_1("Address", Address);
        }
    };
});
//# sourceMappingURL=Address.js.map