const list = [4, 8, 2, 6];

const sortedList = list.slice().sort((n, m) => n < m ? -1 : 1);
console.log(sortedList, list);  //[2, 4, 6, 8]

const reversList = [...list].reverse();
console.log(reversList, list);  //[6, 2, 8, 5] [4, 8, 2, 4]