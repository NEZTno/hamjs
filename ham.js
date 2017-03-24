(function(window){
    "use strict";

    var ham = function ham(parameter){
        var elements = document.querySelectorAll(parameter);
        console.log("Garry found " + elements.length + " pig(s)");
        return {
            pigs: elements.length,
            cookedHam: 0,
            cook: function(){
                if(this.pigs > 0){
                    this.pigs = this.pigs - 1;
                    this.cookedHam = this.cookedHam + 1;
                    console.log("Garry makes cooked ham");
                }else{
                    console.log("Garry dont have any pigs");
                }
                return this;
            },
            eat: function(){
                if(this.cookedHam > 0){
                    this.cookedHam = this.cookedHam - 1;
                    console.log("Garry eats the cooked ham");
                }else{
                    console.log("Garry can't seem to find his cooked ham");
                }
                return this;
            },
            hunt: function(parameter){
                var hunting = document.querySelectorAll(parameter);
                this.pigs = this.pigs + hunting.length;
                console.log("Garry slaugthered " + hunting.length + " pig(s)");
                return this;
            }
        };
    }

    if(!window.ham){
        window.ham = ham;
    }
})(window)
