(function(){
    "use strict";
    const pipe = (...args)=> (...fns)=> fns.reduce((a,x,i)=> i === 1 ? a(...args) : x(a)) 
    const wrap = (f)=>(...args)=>f(...args);
    const chain = (args,...f)=>f.map(x=>wrap(x)(...args))
    const split = ()=>"nothinghere yet" // 
    const changePx = (fP,fn)=> x=> fP(x) ? fn(x) : x;
    const andPx = fP=> (...args)=> cb=> x=>{
      const res = args.map(y=>y(x)).filter(y=>fP(x, y));
      return res.length === args.length ? cb(res) : cb(false, x);
    }
 
    this.Calc = function () {
        return Object.freeze({
          pipe,
          wrap,
          chain,
          split,
          changePx,
          andPx
        });
        
    }();
}).call(this);
