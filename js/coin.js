var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Quarter = (function (_super) {
    __extends(Quarter, _super);
    function Quarter() {
        _super.apply(this, arguments);
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
}(VendingMachine));
var coin = new Quarter();
coin.Value = 0.75;
var anotherValue = coin.Value;
//# sourceMappingURL=coin.js.map