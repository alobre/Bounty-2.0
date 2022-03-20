import moment from "moment"

const sortByDate = (array, order) =>{
    // switch (order) {
    //     case 'asc':
            
    //         break;
    //     case 'desc':

    //         break;
    // }
}
function mergeSort(array, callback = null) {
    const half = array.length / 2
    
    // Base case or terminating case
    if(array.length < 2){
      return array 
    }
    
    const left = array.splice(0, half)
    if(callback) callback(merge(mergeSort(left),mergeSort(array)))
    else return merge(mergeSort(left),mergeSort(array))
  }

function merge(left, right) {
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (moment(left[0].dateTime).isAfter(right[0].dateTime)) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [ ...arr, ...left, ...right ]
}
export default mergeSort;