function getResult(a, b, c) {
    let roots;
    
    let d = Math.pow(b, 2) - 4*a*c; ;
    let person = {
        d ,
        roots: []
        };
   
   d = Math.pow(b, 2) - 4*a*c;
    for (i=0; i<=1; i++)
  {     
     if (d < 0){
         return person ;
          }
       if (d === 0) {
       person.roots[i] = (-b + Math.sqrt(d)) / 2 * a
        return person ;
  }
     if (d > 1) {
         person.roots[i] = (-b + Math.sqrt(d)) / 2 * a;
          person.roots[i+1] = (-b - Math.sqrt(d)) / 2 * a;
    return person ;
   
     }
}
}