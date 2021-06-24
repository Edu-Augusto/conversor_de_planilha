//Separando as colunas do arquivo em header e rows para estruturar os novos arquivos

class Table{
    constructor(arr){
        this.header=arr[0];
        arr.shift();
        this.rows=arr;
    }
    get RowsCount(){
        return this.rows.length;
    }
    get ColunCount(){
        return this.header.length;
    }
}


module.exports=Table;