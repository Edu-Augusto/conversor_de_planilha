//Importando as ferramentas necessárias para a função de escrever e o arquivo
const fs=require('fs');
const util=require('util')

class Writer{
    constructor(){
        //Trasnforma a função writeFile em uma função promisse
        this.writer=util.promisify(fs.writeFile)
    }
   async Write(filename, dado){
           try{
            await this.writer(filename, dado);
            return true;
           }catch(err){
                return false;
           }    
    }
}
module.exports=Writer;