//取2位小数
export function toDecimal(number,position) {
    var f = parseFloat(number);  
    if (isNaN(f)) {  
        return false;  
    }  
    var f = Math.round(number)/100;  
    var s = f.toString();  
    var rs = s.indexOf('.');  
    if (rs < 0) {  
        rs = s.length;  
        s += '.';  
    }  
    while (s.length <= rs + position) {  
        s += '0';  
    }  
    return s;  
}