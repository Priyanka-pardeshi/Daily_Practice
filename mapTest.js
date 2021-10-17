const myArray=[4,6,8,23]
const result=[]
console.log(myArray)

for(let i=0;i<myArray.length;i++)
{
    result.push(myArray[i]*2)
}
console.log(result)

/*callback */
const useMap=myArray.map((digit)=>
{
    return digit**2;
});
console.log(useMap);

/*filter-if conditions we use filter */
const arr=[4,5,2,8,99,7]
const resultFilter=arr.filter((digit)=>{
    return digit>5;
});
console.log(resultFilter);

/*reduce- */
arr2=[4,6,8,77]
const constresultreduce=arr2.reduce((total,digit)=>{
    return total + digit;
},0);

const books=[
    {id:1,name:"harry",cost:234},

]

const updateCost=(id,newCost)=>{
    const newresult=books.map((book)=>{
        if (book.id=id){
            return{id:book.id,name:book.name,cost:newCost}
        }
        else{
            return book;
        }
    });
    return newresult;
}
console.log(updateCost(1,223));
const removeUser=(id)=>
{
    const updateduser=books.filter((book)=>{
        return book.id!=1;
    });
    return updateduser
};
console.log(removeUser(1));

