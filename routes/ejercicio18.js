function numero(num,ope){
var n=10;
	for(var i=1; i<=10; i++){
		if(ope=="+"){
		console.log(num+"+"+i+"="+(num+i));
		}else if((ope=="-")){
			console.log(num+"-"+i+"="+(num-i));
		}else if (ope=="*"){
			console.log(num+"*"+i+"="+(num*i));
		} else if (ope=="/"){
			console.log(num+"/"+i+"="+(num/i));
		}
	}

}
var num=5;
var ope="+";
console.log("Tabla de multiplicar de: "+num);
numero(num,ope);