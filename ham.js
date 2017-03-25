(function(window){
    "use strict";

    var ham = function(parameter){
        return new Library(parameter);
    }

    var Library = function(parameter){
        const elements = document.querySelectorAll(parameter);
        console.log("Garry found " + elements.length + " pig(s)");
        for(var i=0;i<elements.length;i++)
            console.log(elements[i]);
        this.pigs = elements.length;
        this.cookedHam = 0;
        return this;
    }

    Library.prototype = {
        cook: function(){
            if(this.pigs > 0){
                this.cookedHam += 1;
                this.pigs -= 1;
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
            const hunting = document.querySelectorAll(parameter);
            console.log("Garry slaugthered " + hunting.length + " pig(s)");
            for(var i=0;i<hunting.length;i++)
                console.log(hunting[i]);
            this.pigs += hunting.length;
            return this;
        },
        hidePigs: function(parameter){
            const pigs = document.querySelectorAll(parameter);
            console.log("Garry hides his pigs");
            for (var i = 0; i < pigs.length; i++) {
                pigs[i].style.display = 'none';
            }
            return this;
        },
        showPigs: function(parameter){
            const pigs = document.querySelectorAll(parameter);
            console.log("Garry shows his pigs");
            for (var i = 0; i < pigs.length; i++) {
                pigs[i].style.display = 'block';
            }
        },
        piggyBath: function(parameter){
            const pigs = document.querySelectorAll(parameter);
            console.log("Garry gives his pigs a nice bath");
            for (var i = 0; i < pigs.length; i++) {
                pigs[i].innerHTML = "";
            }
        },
        throwDirt: function(parameter, text){
            if(text){
                const pigs = document.querySelectorAll(parameter);
                console.log("Garry plays around with his pigs in the dirt");
                for (var i = 0; i < pigs.length; i++) {
                    pigs[i].innerHTML = text;
                }
            }else{
                console.log("It is a shiny day, Garry cant seem to find any dirt to throw at his pigs");
            }
            return this;
        }
    }

    if(!window.ham){
        window.ham = ham;
    }
})(window)
