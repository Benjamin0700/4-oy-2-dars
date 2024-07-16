const userName = prompt('String tipida malumot:' )
const userAge = +prompt('Number tipidiga malumot:' )
const userBuling = prompt('Boolin tipidiga malumot:' )
 


alert(`
   Siz kiritgan ${userName} sozi ${typeof userName } tipiga tegishli
   Siz kiritgan ${userAge} sozi ${typeof Number(userAge) } tipiga tegishli
   Siz kiritgan ${userBuling} sozi ${typeof Boolean(userBuling) } tipiga tegishli
`);
console.log(` 
    Siz kiritgan ${userName} sozi ${typeof userName } tipiga tegishli
    Siz kiritgan ${userAge} sozi ${typeof Number(userAge) } tipiga tegishli
    Siz kiritgan ${userBuling} sozi ${typeof Boolean(userBuling) } tipiga tegishli
`);