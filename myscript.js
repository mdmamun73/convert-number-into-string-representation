
console.log("Fifth answer ----");

let diamondSize = 7;

console.log("Diamond for size " + diamondSize + " --------");
let result2 = createDiamond(diamondSize);

console.log(result2);

function createDiamond(size){

	let result = "";
	let printingSize = 2*(size-1) + 1;
	for (let i=0 ;i<printingSize ;i++){
		let spaceCount = Math.floor(printingSize/2) - i;

		if(spaceCount<0){
			spaceCount = -spaceCount;
		}
		
		for(let j=0 ; j<spaceCount ;j++){
			result += " ";
		}

		let starCount = 2*(Math.floor(printingSize/2) - spaceCount)+1;
		for(let j=0 ; j<starCount ;j++){
			result += "*";
		}
		result += "\n";
	}

	return result;
}
 







window.onload = function () {
    document.getElementById('convertNumber').addEventListener('click', convertNumber);
}


function convertNumber() {
   var inputNumber =  document.getElementById('inputNumber').value 

    const moneyFormatter = new Intl.NumberFormat('en-Us',{
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits :2
    })

    let fullMoney = moneyFormatter.format(inputNumber).replace("$","");
    let moneyWithDecimalParts = fullMoney.split(".");
    let money = moneyWithDecimalParts[0]

    let num = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
    let tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");
    let scales = ['','thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quatttuor-decillion', 'quindecillion', 'sexdecillion', 'septen-decillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'centillion' ];

    let moneyParts = money.split(',');
    let moneyInWords ="";

    for (let index = moneyParts.length -1; index >=0; index--) {
        moneyInWords +=  number2words(moneyParts[moneyParts.length-1-index]);
        moneyInWords += " "+ scales[index]+" ";
    }

    document.getElementById('result').innerHTML = moneyInWords;

    function number2words(numberstring) {
        let n = parseInt(numberstring)
        if (numberstring.length == 3 && numberstring[0] !='0')
        {
            let hundred ="";
            hundred = num[parseInt(numberstring[0])] + " hundred " ;

            let tensCheck =0;
            tensCheck =  parseInt(numberstring[1]+ numberstring[2]);

            if (tensCheck < 20) {
                return hundred + num[tensCheck]
            }else{
                return hundred + tens[parseInt(numberstring[1]-2)] +" "+num[parseInt(numberstring[2])]; 
            }

        } 

        if (numberstring.length == 2) {
            let tensCheck =0;
            tensCheck =  parseInt(numberstring[0]+ numberstring[1]);

            if (tensCheck < 20) {
                return  num[tensCheck]
            }else{
                return  tens[parseInt(numberstring[0]-2)] +" "+num[parseInt(numberstring[1])]; 
            }

        }


    }


    
}









