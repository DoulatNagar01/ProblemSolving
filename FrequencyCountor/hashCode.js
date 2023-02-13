const arr = [];
function hashcode(userId, password) {
    const obj  = {};
    let id = password;
    let id2 = Date.now() + new Date()
    obj[userId] = id2;
    arr.push(obj);
    return console.log(arr);
}
hashcode("Doulat", "doulat123");