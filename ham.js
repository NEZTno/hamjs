"use strict";

(function(){
    var cookedham = function(parameter){
        return new Library(parameter);
    }

    var Library = function(parameter){
        var elements = document.querySelectorAll(parameter);
        console.log("Garry found: " + elements.length + " elements");
        return this;
    }

    if(!window.ham){
        window.ham = cookedham;
    }
})();
