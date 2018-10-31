function loop(){
    var arr = [];
    for(var i=1; i<=255; i++){
        arr.push(i);
    }

    return arr;
}

loop();

function even(){
    sum=0;
    for(var i=0; i<=1000; i+=2){
        sum+=i;
    }
    return sum;
} 

even();

function odd(){
    sum=0;
    for(var i=1; i<=5000; i+=2){
        sum+=i;
    }
    return sum;
}

odd();

var x=[];
function values(x){
    var arr=[];
    sum=0;
    for (var i=0; i<x.length; i++){
        sum+=x[i];
    }

    return sum;
}

values([1,2,5]);

function max(arr){
    var max=arr[0];
    for(var i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;

}

max([-3,3,5,7]);

function average(x){
    sum=0;
    for(var i=0; i<x.length; i++){
        sum+=x[i];
    }

    return (sum/x.length);
}

average([1,3,5,7,20]);



function oddArray(){
    var arr=[];
    for(var i=1; i<=50;i=+2){
        arr.push(i);
    }

    return arr;
}

oddArray();

function numGreater(arr,y){
    var greater=0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]>y){
            greater+=1;
        }
    }

    return greater;
}

numGreater([1,3,5,7], 3);


function square(x){
    for(var i=0; i<x.length; i++){
        x[i]*=x[i];
    }

    return x;
}

square([1,5,10,-2]);

function negative(x){
    for(var i=0; i<x.length; i++){
        if(x[i]<0){
            x[i]=0;
        }
    }
    return x;
}

negative([1,5,10,-2]);

function maxminAvg(arr){

    if(arr.length===0){
        console.log("none");
        return;
    }

    var sum= arr[0];
    var max=arr[0];
    var min=arr[0];

    for(var i=1; i<arr.length; i++){
        if(arr[i]<min){
            min=arr[i];
        }
        if(arr[i]>max){
            max=arr[i];
        }
        sum+=arr[i];
    }
    console.log(max,min,(sum/arr.length));
}
maxminAvg([1,5,10,-2]);


function swap(arr){
    [arr[0], arr[arr.length-1]] = [arr[arr.length-1],arr[0]];
    return arr;
}

swap([1,5,10,-2]);


// their way of doing it 

function swap(arr){

    var temp= arr[0];
    arr[0]= arr[arr.length-1];
    arr[arr.length-1]=temp;
}

function string(x){
    for(var i=0; i<x.length; i++){
        if(x[i]<0){
            x[i]='Dojo';
        }
    }
    return x;
}

string([-1,-3,2]);