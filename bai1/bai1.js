function findMinScore(array){
    let min = array[0];
    for(i in array){
        if(min > array[i]){
            min = array[i];
        }
    }
    return min;
}
