import $ from "../core";

$.prototype.setAttr = function(attrName, value){
    for(let i=0; i<this.length; i++){
        this[i].setAttribute(attrName, value);
    }
    return this;

};

$.prototype.getAttr = function(attrName){
    for(let i=0; i<this.length; i++){
        if(!this[i].getAttribute(attrName)){
            continue;
        }
        return console.log(this[i].getAttribute(attrName));
    }
    return this;

};