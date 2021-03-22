// 判断闰年的公式
function isLeapYear(year){
    return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
}