const coincheck = (str) => {
    var output = 0
    var total = str
    for (var i = 0;i<total;i++){
        if((str/25)>=1){
            output += Math.floor(str/25)
            str = str%25
        }else if((str/10)>=1){
            output += Math.floor(str/10)
            str = str%10
        }else if((str/5)>=1){
            output += Math.floor(str/5)
            str = str%5
        }else{
            if (str == 0){
                return output
            }else{
                return output += str
            }
        }
    }
}

console.log(coincheck(49))
console.log(coincheck(31))
console.log(coincheck(50))