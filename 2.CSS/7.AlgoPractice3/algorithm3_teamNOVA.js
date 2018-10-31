// this is part 2 of the assignment. Copy/paste the starter code from the platform like seen below 
//and edit the code to make it work.
function printAverage(x){
   sum = 0;
   for(var i=0; i<x.length; i++) {
   		sum+=x[i];
   }

   return (sum/x.length);
}
y = printAverage([1,2,3]);
console.log(y); // should log 2
  
y = printAverage([2,5,8]);
console.log(y); // should log 5




function returnOddArray(){
  		var arr=[];
  		for(var i=1; i<=255; i+=2){
  			arr.push(i);
  		}

  		return arr;
}
y = returnOddArray();
console.log(y); // should log [1,3,5,...,253,255]



function squareValue(x){
   for(var i=0; i<x.length; i++){
   		x[i]*=x[i];
   }
   return x;
}
y = squareValue([1,2,3]);
console.log(y); // should log [1,4,9]
  
y = squareValue([2,5,8]);
console.log(y); // should log [4,25,64]