integerReplacement = (integer) => {
    let array = []
    for(let i = 1; i <= integer; i ++){
        let replacement = undefined
        if((i % 3 === 0) && (i % 5 ===0) && (i % 2 === 0)){
            replacement = "yu-gi-oh"
        }else if((i % 2 === 0) && (i % 3 ===0)){
            replacement = "yu-gi"
        }else if((i % 2 === 0) && (i % 5 ===0)){
            replacement = "yu-oh"
        }else if((i % 3 === 0) && (i % 5 ===0)){
            replacement = "gi-oh"
        }else if(i % 2 === 0){
            replacement = "yu"
        }else if(i % 3 === 0){
            replacement = "gi"
        }else if(i % 5 === 0){
            replacement = "oh"
        }else{
            replacement = i
        }
        array.push(replacement)
    }
    console.log(array)
}
integerReplacement(100)
integerReplacement(60)