const db = require("./database");
const fs = require("fs");

// Populates event table with eventName and date
let eventPromise = () => {
    return new Promise((resolve, reject) => {
        let con = db.getDb();
        let sql = "SELECT * FROM events ORDER BY eventDate";
        
        con.query(sql, (err, result) => {
            if (err) reject (err);
            resolve(result);
        });
        
    });
};

let getEvent = param_id => {
    return new Promise((resolve, reject) => {
        let con = db.getDb();
        let sql = "SELECT * FROM events WHERE event_uuid = ?";
        
        con.query(sql, param_id, (err, result) => {
            if (err) reject (err);
            resolve(result[0]);
        });
    });
};

let getRSVPS = account_id => {
    return new Promise((resolve, reject) => {
        let con = db.getDb();
        let sql = "SELECT UserEventStatus.event_uuid, events.eventName, events.eventDescription, events.eventDate FROM UserEventStatus LEFT JOIN events ON UserEventStatus.event_uuid = events.event_uuid WHERE UserEventStatus.account_uuid = ? ORDER BY eventDate";

        con.query(sql, account_id, (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

let getFiles = folder => {
    return new Promise((resolve, reject) => {
        let imgs = [];

        fs.readdir(folder, (err, files) => {
            files.forEach(file => {
                imgs.push(file);
            });
            resolve(imgs);
        });  
    });
};

module.exports = {
    eventPromise: eventPromise,
    getEvent: getEvent,
    getRSVPS: getRSVPS,
    getFiles: getFiles
};