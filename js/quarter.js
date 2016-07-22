var Quarter = (function () {
    function Quarter() {
        this.value = 0.25;
    }
    Quarter.prototype.getImage = function () {
        this.value = 0.5;
        return "img/Quarter.png";
    };
    Quarter.prototype.getValue = function () {
        return this.value;
    };
    ;
    Quarter.prototype.setValue = function (input) {
        this.value = input;
    };
    ;
    Object.defineProperty(Quarter.prototype, "Value", {
        get: function () {
            return this.value;
        },
        set: function (input) {
            this.value = input;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    return Quarter;
}());
var coin = new Quarter();
coin.Value = 0.75;
var anotherValue = coin.Value;
//# sourceMappingURL=quarter.js.map