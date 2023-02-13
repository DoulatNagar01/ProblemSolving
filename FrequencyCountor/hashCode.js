// console.log(Date.now() + new Date());

function hashcode(userId, password) {
    const obj  = {};
    let id = password;
    let id2 = Date.now() + new Date()
    obj[userId] = id2;
    return console.log(obj);
}
hashcode("Doulat", "doulat123");

// In the terminal : node hashcode.js >> hashcode
// which means the append the output into the file
