class ProdutosDAO {
    constructor(connection) {
        this._connection = connection;
    }
    listar(callback) {
        this._connection.query('select * from produtos', callback);
    } 
    salvar(produto, callback){
        this._connection.query('insert into produtos set ?', produto, callback);
    }
}

module.exports = function () {
    return ProdutosDAO;
}