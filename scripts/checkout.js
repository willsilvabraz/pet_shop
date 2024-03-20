const total = document.getElementById('total');

let produtor = "Arroz";
let quant = 2;
let precoUnitario = 4.99;
let precoTotal = quant * precoUnitario;

document.write(`Preço total R$ ${ precoTotal} <br>`);
console.log(new Intl.NumberFormat('pt-BR').format(precoTotal));

document.write(`Preco Total ${precoTotal.toLocaleString('pr-BR', 
{style: 'currency', currency: 'BRL' }) } `);

console.log(precoTotal);

total.innerHTML +=  " " + precoTotal;



const produto = {
    descricao: "",
    preco: 0,
    quantidade: 0
};