export const min = (entry) => {

    let tmp = entry[0];

    for(let i=0; i < entry.length; i++){
        if(entry[i] < tmp){
            tmp = entry[i];
        }
    }
    return tmp;
}

export const moyenne = (entry) => {

    let tmp = 0;

    for(let i=0; i < entry.length; i++){
        tmp += entry[i];
    }
    tmp = Math.round(tmp / entry.length);
    return tmp
}

export const noString = (entry) => {

    let tmp = [];

    for(let i=0; i < entry.length; i++){
        if(typeof entry[i] == "number"){
            tmp.push(entry[i]);
        }
    }
    return tmp;
}

export const evenOdd = (entry) => {

    let even = [];
    let odd = [];
    let tmp = [even, odd];

    for(let i=0; i <entry.length; i++){
        if(entry[i] % 2 === 0){
            even.push(entry[i]);
        }
        else {
            odd.push(entry[i]);
        }
    }
    return tmp;
}