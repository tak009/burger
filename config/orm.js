var connection = require("../config/connection.js");

var orm = {
  selectAll: function(tableName, cb){
    var query = "SELECT * FROM ??";
    connection.query(query, [tableName], function(err, result){
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function(tableName, colNames, insertVals, cb){
    var query = "INSERT INTO ?? (??) VALUES (?)";
    connection.query(query, [tableName, colNames, insertVals], function(err, result){
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function(tableName, colNames, updateVals, updateCond, cb){
    var query = "UPDATE ?? SET ?? = ? WHERE id = ?";
    connection.query(query, [tableName, colNames, updateVals, updateCond], function(err, result){
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;
