const name={
    firstName:"Rosh",
    lastName:"Jadav",
    division:"First",
    roll:"123",
    address:"mysore"
};
const{ division,roll } = name;
console.log(` ${division} , ${roll}`);
//alias
const { address: aliasAddress } = name;
console.log(aliasAddress); 

//spread
const same = {...name}
console.log(name);

const value=[...roll,4,5,6];
console.log(value);

//rest
const{address, ...args} = name;
console.log(args);


