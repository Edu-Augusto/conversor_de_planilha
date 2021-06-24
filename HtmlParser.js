//Importando o ejs para criação da estrutura .HTML com os conteúdos do arquivo .csv

const ejs=require('ejs');

class HtmlParser{
    static async Parser(table){
      return await ejs.renderFile('./tabela.ejs', {header:table.header, rows:table.rows})
    }
}
module.exports=HtmlParser;