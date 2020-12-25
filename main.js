(function(){
    "use strict";
    const pipe = (...args)=> (...fns)=> fns.reduce((a,x,i)=> i === 1 ? a(...args) : x(a)) 
    const wrap = (f)=>(...args)=>f(...args);
    const chain = (args,...f)=>f.map(x=>wrap(x)(...args))
    const split = ()=>"nothinghere yet" // 
 
    this.Calc = function () {
        return Object.freeze({
          pipe,
          wrap,
          chain,
          split
        });
        
    }();
}).call(this);
