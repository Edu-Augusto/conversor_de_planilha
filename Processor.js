//Função que processa o conteúdo do arquivo .csv e transforma em arrays para manipulação

class Processor{
    static Process(dados){
        var a=dados.split('\r\n');
        var rows=[];
        a.forEach(row=>{
            var arr=row.split(',');
            rows.push(arr)
        })
        return rows;
    }
}
module.exports=Processor;