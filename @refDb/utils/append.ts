export function append(json: string, appendJson: string) {
    let obj = JSON.parse(json);
    let newObj = JSON.parse(appendJson);
    let keys = Object.keys(newObj);
    for (let key of keys) {
      obj[key] = newObj[key];
    }
    return JSON.stringify(obj);
    
}

// example with append
//append('{"libUser": {"name": "libUser","version": "1.0.0"}}', '{"linBook" : {}}')