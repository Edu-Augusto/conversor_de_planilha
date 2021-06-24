//Importando a ferramenta html-pfd para a criação do arquivo .PDF
var pdf=require('html-pdf')

class PdfWriter{
    static WriterPdf(filename, dado){
        pdf.create(dado,{}).toFile(filename, (err)=>{});
    }
}
module.exports=PdfWriter;