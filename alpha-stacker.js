var alpha= ['a','b','c','d','e','f','g','h','i','j','k',
'l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function stackLetter (theAlphabetArray){
	var x= " ";
	for (i=0; i<alpha.length; i++){
		x= x + alpha[i];
		console.log(x);
	}
}

stackLetter(alpha);