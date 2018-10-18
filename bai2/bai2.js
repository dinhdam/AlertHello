function tryRemoveFromArray(array,index){
    let array0 = [];
    if(index > array.length){
        return array;
    } else {
        for(i in array){
            if(array[i] !== array[index]){
                array0.push(array[i]);
            }
        }
        return array0;
    }
}