const characters=[
   { 
       
    name:'Md Sujan',
    height:'172',
    mass:'50 kg',
    gender:'male'
},
   { 
     name:'Tamanna Sheme',
    height:'170',
    mass:'55 kg',
    gender:'female'
},
   { 
    name:'Jon Denver',
    height:'175',
    mass:'55 kg',
    gender:'male'
},
   { 
    name:'jon Smith',
    height:'180',
    mass:'58 kg',
    gender:'male'
},
   { 
    name:'jonas denver',
    height:'162',
    mass:'70 kg',
    gender:'male'
},

]
let charName=characters.map((character)=>{
    return character.name.split(' ')[0];

})
console.log(charName);