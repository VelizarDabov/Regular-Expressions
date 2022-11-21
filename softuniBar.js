function solve(input){

const pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>[0-9]+)\|[^0-9|$%.]*(?<price>[\d]+[\.]*[\d]+)\$/g;

let totalIncome = 0;
let command = input.shift();

while(command !== 'end of shift'){
let currData = pattern.exec(command);

if(currData){
    let currentCustomer = currData.groups['customer'];
    let currentProduct = currData.groups['product'];
    let currentCount = Number(currData.groups['count']);
    let currentPrice = Number(currData.groups['price']);

    let totalProductPrice = currentCount * currentPrice;
    console.log(`${currentCustomer}: ${currentProduct} - ${totalProductPrice.toFixed(2)}`);

    totalIncome += totalProductPrice;
    command = input.shift();
    currData = pattern.exec(command);
}else{
    command = input.shift();
}   
}

console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
solve(['%InvalidName%<Croissant>|2|10.3$',

'%Peter%<Gum>1.3$',

'%Maria%<Cola>|1|2.4',

'%Valid%<Valid>valid|10|valid20$',

'end of shift'])