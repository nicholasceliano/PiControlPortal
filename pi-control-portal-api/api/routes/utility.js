var { exec } = require('child_process')

module.exports = function (app) {
    app.route('/wlan').post((req, res) => {
        
        exec('ipconfig', (err, out, err2) => {
            res.send(out);
        });
        
    });
}