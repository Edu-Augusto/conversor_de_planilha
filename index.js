//***Importando as classes***

//Classe de leitura
var Reader=require('./Reader');
//Classe de processamento
var Processor=require('./Processor');
//Classe de separação da tabela
var Table = require('./Tabelas');
//Classe de transformação para HTML
var HtmlParser=require('./HtmlParser');
//Classe para escrever e criar o arquivo .HTML
var Writer=require('./Writer');
//Classe para escrever e criar o arquivo .PDF
var PdfWriter=require('./PdfWriter');

var escritor=new Writer();
var leitor= new Reader();
//Função principal da aplicação, que irá chamar todos os métodos das classes e passar seus parâmetros
async function main(){
   //Modifique o parâmetro para o nome da sua planilha .csv para gerar seus arquivos .HTML e .PDF
   var dados= await leitor.Read('planilha.csv');
   var dadosProcessados=Processor.Process(dados);
   var tabela=new Table(dadosProcessados);
   var html=await HtmlParser.Parser(tabela);
   escritor.Write(Date.now()+'.html',html);
   PdfWriter.WriterPdf(Date.now()+'.PDF',html);
 
}
main();
