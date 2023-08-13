const  Mysqli  =  require ( 'mysqli' );

let conn = new Mysqli({
    host:'localhost',
    post: 3306,
    user: 'root',
    db: 'anatabz_fabrics'
});

let db = conn.emit(false,'');

module.exports = {
    database : db
};