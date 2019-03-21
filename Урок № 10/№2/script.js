'use strict';

class Options {
    constructor(height, width, bg, fontSize, textAlign){
        this.height = height + 'px';
        this.width = width + 'px';
        this.bg = bg;
        this.fontSize = fontSize + 'pt';
        this.textAlign = textAlign;
    }
    stylNew(){
        var d = document.createElement('div');
        d.textContent = "hello";
        d.style.cssText = `height: ${this.height}; 
                           width: ${this.width};
                           background: ${this.bg};
                           fontSize: ${this.fontSize};
                           text-align: ${this.textAlign};`;
        document.body.appendChild(d);
    }
}

const squrae = new Options(100, 100, 'gold', 3, 'center');
squrae.stylNew();
console.log(squrae);