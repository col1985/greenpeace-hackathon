const request = require('request');

const httpService = () => {






  let get = function(endpoint, body) {

    return new Promise(function(resolve, reject) {

      let url = 'https://demo.controlshiftlabs.com/petitions/' + 'featured.json';

      request({
        url: url,
        method: "GET",
        json: true,
        timeout: 25000,
        body: body
      }, function (err, data) {
        if (err) {
          reject(new Error(''+err));
        }
        if(data && data.statusCode && data.statusCode !== 200 && data.statusCode !== 202) {
          resolve(false);
        }
        else {
          console.log(JSON.stringify(data));
          resolve(true);
        }
      });
      // logger.info('HTTPService.send - BYPASSED FOR LOCAL TESTING ');
      // resolve(true);
    });
  };


};

module.exports = httpService;