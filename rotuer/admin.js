var express = require('express');
var router = express.Router();

var db = require('../dbConfig');

router.get('/', function (req, res) {
    res.send('Hello Hello!');
});
router.get("/to_list", function(res, res, next){
    queryString = 'select * from data_list';
    db(queryString, [1], function(err, rows){
        res.json(rows);
    })
})

module.exports = router;