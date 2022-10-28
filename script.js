const letToNum = {
    'm': 1000,
    'd': 500,
    'c': 100,
    'l': 50,
    'x': 10,
    'v': 5,
    'i': 1,
    '': 0
}
function romanToInt() {
    var s = document.getElementById("romanNum").value;

    var values = [];
    s.split('').forEach(obj => {
        values.push(letToNum[obj.toLowerCase()]);
    });
    
    for(var I = 0; I < values.length; I++){
        if(values[I] < values[I + 1]){
            values[I] = values[I + 1] - values[I]
            values.splice(I + 1, 1)
        }
    }

    let updateNumber = 0
    for(var I = 0; I < values.length; I++){
        updateNumber += values[I]
    }

    if(isNaN(updateNumber)){
        document.getElementById("IndoNum").value = 'Nada';
    }else{
        document.getElementById("IndoNum").value = updateNumber;
    }
}; romanToInt();