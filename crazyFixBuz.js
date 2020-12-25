const pipe = (...args)=> (...fns)=> fns.reduce((a,x,i)=> i === 1 ? x(a(...args)) : x(a)) 
const changePx = (fP,fn)=> x=> fP(x) ? fn(x) : x;
const andPx = fP=> (...args)=> cb=> x=>{
  const res = args.map(y=>y(x)).filter(y=>fP(x, y));
  return res.length === args.length ? cb(res) : cb(false, x);
}

const m3Pc = changePx(x=>x%3===0,()=> "Cracle");
const m5Pp = changePx(x=>x%5===0,()=> "Pop");
const m3_5Pcp = andPx((x,y)=> x===y ? false : true)(m3Pc,m5Pp)((t,f)=> t? t.join(""):f);
const m100Any = changePx(x=>x%100===0, (x)=>`You gave me: ${x}, and I can give you Anything you can imagine!`);

const srcRA = Array.from({length:100}).map((_,i)=>++i);

const mapDigits = x=> pipe(x)(m100Any, m3_5Pcp, m3Pc, m5Pp);
const resRA = srcRA.map(mapDigits) ;

console.log(resRA);
