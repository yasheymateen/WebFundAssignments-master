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

function negatives(x){
    for(var i=0; i<x.length; i++){
        if(x[i]<0){
            x[i]='Dojo';
        }
    }
    return x;
}

negatives([-1,-3,2]);

