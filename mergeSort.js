function mergeSort(arr)
{ 
    //base case

    if(arr.length <= 1)
    {
         return arr;
    } 
    let mid = Math.floor(arr.length / 2);
//do the arr divide using slice
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left,right);

}

function merge(left,right)
{
    let sortedArray = [];

    while(left.length && right.length)
    {
        if(left[0]<right[0])
        {
            sortedArray.push(left.shift());    //first element shift ho jayega
        }
        else{
            sortedArray.push(right.shift());
        }
    }
    return [...sortedArray,...left,...right];
}

console.log(mergeSort([3,1,22,111,45,677]));
