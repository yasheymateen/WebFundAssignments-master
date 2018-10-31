
// 1. Return the given array, after setting any negative values to zero.  For example resetNegatives( [1,2,-1, -3]) should return [1,2,0,0].
function resetNegatives(x){
    for(var i=0; i<x.length; i++){
        if(x[i]<0){
            x[i]=0;
        }
    }
    return x;
}

resetNegatives([1,2,-1,-3]);

// 2. Given an array, move all values forward by one index, dropping the first and leaving a ‘0’ value at the end.  For example moveForward( [1,2,3]) should return [2,3,0].

function moveForward(arr){
    for(var i=1; i<arr.length; i++){
        arr[i-1]=arr[i];
    }
    arr[arr.length-1]=0;
    return arr;
}

moveForward([1,2,3]);

// 3. Given an array, return an array with values in a reversed order.  For example, returnReversed([1,2,3]) should return [3,2,1].

function returnReverse(arr){
    for(var i=0, j=arr.length-1; i<j; i++, j--){
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

returnReverse([3,1,6,4,2]);

// 4. Create a function that changes a given array to list each original element twice, retaining original order.  Have the function return the new array.  For example repeatTwice( [4,”Ulysses”, 42, false] ) should return [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].

function duplicate(arr){
    var b =[];
    for(var i=0; i<arr.length; i++){
        b.push(arr[i]);
        b.push(arr[i]);
    }
    return b;
}

duplicate([4, "Ulysses", 42, false]);