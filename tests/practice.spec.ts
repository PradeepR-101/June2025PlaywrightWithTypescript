import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  
  let s = "rajanna";

  let str = s.slice(0,4).toUpperCase()+s.slice(4).toLowerCase();

  console.log(str)

  const users = [
  {id:101,name:"Ravi"},
  {id:102,name:"Karthik"},
  {id:103,name:"Vijay"}
];

const idsList = users.map(e=>{
    return e.id;
})

for(let id of idsList){
    console.log(id)
}

  
  

});


