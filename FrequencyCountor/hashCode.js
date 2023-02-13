function hashcode(userId, password) {
    const obj  = {};
    let id = password;
    let id2 = Date.now() + new Date()
    obj[userId] = id2;
    return console.log(obj);
}
hashcode("Doulat", "doulat123");
