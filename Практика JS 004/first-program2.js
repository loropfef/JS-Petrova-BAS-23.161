let expectedUsers = 1000;
let usersByDay = [817, 581, 1370, 752, 1247, 681, 1120, 915, 875, 1341, 757, 610, 812, 741, 1139, 812, 638, 877, 1242, 1159, 1372, 1170, 845, 1289, 515, 1247, 769, 1261, 2805, 1201];
let totalUsers = 0;
let minUsers = expectedUsers - 300;
let badDays = [];
let suspiciousDrop = false;
for (let i = 0; i < usersByDay.length; i++) {
    totalUsers += usersByDay[i];
    if (usersByDay[i] < minUsers) {
        badDays[i] = expectedUsers - usersByDay[i];
        suspiciousDrop = true;
    } else {
        badDays[i] = 0;
    }
}
let averageUsers = totalUsers / usersByDay.length;
console.log('Средняя посещаемость: ' + averageUsers);
if (averageUsers > expectedUsers) {
    console.log('Посещаемость великолепна. Продолжайте в том же духе!');
} else {
    console.log('Посещаемость так себе. Нужно поднапрячься!');
}
if (suspiciousDrop) {
    console.log('Есть подозрительные провалы посещаемости. Необходимо провести дополнительный анализ.');
} else {
    console.log('Подозрительных провалов посещаемости не обнаружено.');
}