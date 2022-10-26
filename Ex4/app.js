const mesclaObj = (obj_1, obj_2) => {
    return {...obj_1, ...obj_2}
}

const objUm = { a: 1, b: 2 };
const objDois = { c: 3, d: 4 };

console.log(mesclaObj(objUm,objDois))
