import { write } from "fs";
import { readFile, appendFile, writeFile } from "fs/promises";
import { append } from "../utils/append";
import { addData } from "../utils/addData";
import { deleleData } from "../utils/deleteData";

export class Database {
    fileUrl:String

    constructor(fileUrl:string){
        this.fileUrl= fileUrl
    }

    async read(){
        let url = this.fileUrl.toString()
        let data = await readFile(url, 'utf8');
        let json = JSON.parse(data)
        return json

    }

    async addLib(libName: string){
        let url = this.fileUrl.toString()

        let name:string = `Lib${libName}`
        let values:string = `{"${name}": {}}`

        let data = await readFile(url, 'utf8');
        let jsonData = append(data, values)
        await writeFile(url, jsonData)
        return true
    }

    async addData(libName: string, values: Object){
        let fileUrl = this.fileUrl.toString()
        const fileData = await this.read()

        let prepareFileData = JSON.stringify(fileData)
        

        let data = addData(prepareFileData, libName, values)
        let result = JSON.stringify(data)
        await writeFile(fileUrl, result)
        return 'OK'
    }

    async deleteData(libName: string){
        let fileUrl = this.fileUrl.toString()
        const fileData = await this.read()

        let prepareFileData = JSON.stringify(fileData)
        let json = deleleData(prepareFileData, libName)
        await writeFile(fileUrl, json)

        return 'OK'
    }
}




export const RefClient = new Database(__dirname+'/database/data.module.json')