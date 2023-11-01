export function deleleData(json: string, libName: string){
    let jsonObj = JSON.parse(json);
    delete jsonObj[libName]
    console.log(jsonObj)
    return JSON.stringify(jsonObj)
}

// Example with deleteData
//deleleData('{"LibFrameworks": {"name":"react"}}', 'LibFrameworks')