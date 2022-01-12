//const add=(x,y)=>x+y
//console.log(add);

  let people = [
    { name: 'Ahmed', age: 27 },
    { name: 'Samir', age: 22 },
    { name: 'Ali', age: 29 },
    { name: 'Ahmed', age: 28 },
    { name: 'Saja', age: 35 }
 ];
  let ageSum = people
   .filter((person) =>
   person.age > 25 && person.age < 30
  )
  .filter((person) =>
         person.name === 'Ahmed')
       .map((person)=> 
            person.age
         )
         .reduce((prev, curr)=> 
               (prev || 0) + curr
              )
           
       
console.log(ageSum);