//Importando ferramentas necessárias para ler o arquivo .csv
const fs=require('fs');
const util=require('util')

class Reader{
    constructor(){
        //Trasnfomando a função readFile em uma Promisse
        this.reader=util.promisify(fs.readFile)
    }
   async Read(file){
           try{
            return await this.reader(file, 'utf-8');
           }catch(err){
                return undefined;
           }    
    }
}
module.exports=Reader;