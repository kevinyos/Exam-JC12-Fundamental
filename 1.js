const lelang = (str) => {
    let arr = ['baju','celana','kacamata']
    let arr2 = [10000, 20000, 30000]
    var output = []
    for (var i = 0;i<=str;i++){
        if(i==str){
            output += "Di menit ke " + i + " product info\n"
            for (var j = 0;j<arr.length;j++){
                output += 'Nama barang = ' + arr[j]+', harganya = '+arr2[j]+'\n'
            }return output
        }else{
            arr2[0] = Math.ceil(arr2[0]*1.1)
            arr2[1] = Math.ceil(arr2[1]*1.2)
            arr2[2] = Math.ceil(arr2[2]*1.3)
        }
    }
}  

console.log(lelang(1))
console.log(lelang(5))
console.log(lelang(10))