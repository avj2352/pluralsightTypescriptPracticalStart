(function () {
    function Parse(object) {
        for (var index = 0; index < object.length; index++) {
            var character = object[index];
            console.log(character);
        }
        Parse("This is a String");
    }
    var myClass = (function () {
        function myClass() {
            this.name = "Pramod";
            this.age = 29;
        }
        return myClass;
    }());
}());
//# sourceMappingURL=welcome.js.map