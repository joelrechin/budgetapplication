var dbmgr = require("./dbmgr");
var db = dbmgr.db;

exports.getExpense = () => {
    const query = "SELECT * FROM expenses";
    let stmt = db.prepare(query);
    let res = stmt.all();
    return res;
}
