//作业2 UTF8 Encoding

/**
 * 该函数只编码一个字符,
 * 参考链接：https://en.wikipedia.org/wiki/UTF-8
 * @param str string 一个字符
 * 
 */
function UTF8_encode(str) {
    const str0Arr = ["", "0", "00", "000", "0000", "00000", "000000", "0000000"]
    let codeAt = str.charCodeAt()
    let code_Bin = codeAt.toString(2);
    let strBits, strEncode;
    if (codeAt < 0o177) {
        strBits = str0Arr[8 - code_Bin.length] + code_Bin;
        strEncode = strBits;
    }
    else if (codeAt >= 0o200 && codeAt < 0o3777) {
        strBits = str0Arr[11 - code_Bin.length] + code_Bin;
        strEncode = strBits.replace(/([01]{5})([01]{6})/, "110$1 10$2");
    }
    else if (codeAt >= 0o4000 && codeAt < 0o77777) {
        strBits = str0Arr[16 - code_Bin.length] + code_Bin;
        strEncode = strBits.replace(/([01]{4})([01]{6})([01]{6})/, "1110$1 10$2 10$3");
    }
    else if (codeAt >= 0o100000 && codeAt < 0o177777) {
        strBits = str0Arr[16 - code_Bin.length] + code_Bin;
        strEncode = strBits.replace(/([01]{4})([01]{6})([01]{6})/, "1110$1 10$2 10$3");
    }
    else if (codeAt >= 0o200000 && codeAt < 0o4177777) {
        strBits = str0Arr[21 - code_Bin.length] + code_Bin;
        strEncode = strBits.replace(/([01]{3})([01]{6})([01]{6})([01]{6})/, "11110$1 10$2 10$3 10$4");
    }
    else {
        return;
    }
    const buffer2String = strEncode.split(" "); //二进制显示，数组
    const buffer = parseInt(buffer2String, 2).toString(16) //16进制显示
    return buffer;
}