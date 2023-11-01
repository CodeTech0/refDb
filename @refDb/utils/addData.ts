export function addData(json: string, libName: string, data: Object){
    let jsonObj = JSON.parse(json);
    jsonObj[libName] = data
    
    return jsonObj
}


// addData example
/*
let id = 1
addData('{"libBook" : {}}', 'libBook', {
    "book": {
        _id: id,
        hello: 'hello'
    }
})*/