const user = {
    id: 3,
    name: 'Nobuhiko Yuasa',
    username: 'nob',
    email: 'nob@maple.town',
};

console.log(Object.keys(user));
// ['id', 'name', 'username', 'email']

console.log(Object.values(user));
// [3, 'Nobuhiko Yuasa', 'nob', 'nob@maple.town']

console.log(Object.entries(user));
// [
//     [ 'id',3],
//     [ 'name', 'Nobuhiko Yuasa'],
//     [ 'username', 'nob'],
//     [ 'emaiil', 'nob@maple.town']
// ]

// キーと値のペアを反復処理の中で扱う
Object.keys(user).map((k)=> { console.log(k, user[k]); });
Object.entries(user).map((k, v) => { console.log(k, v) });
