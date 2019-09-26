const petition = require('../models/petition')
  , logger = require('winston')
  , httpService = require('../services/http.js');

const petitions = {

  getAll: (req, res) => {

    httpService.get()
      .then()
      .catch()


  },

  getOne: (req, res) => {

    const id = req.params.id;


    // const params = {_id: id};
    // const exclude = {password: 0, salt: 0, md5: 0, sha1: 0, sha256: 0};
    // petition.findOne(params, exclude)
    //   .then((petition) => {
    //     return res.json(petition);
    //   })
    //   .catch((err) => {
    //     logger.error('Error reading petition: ' + id);
    //     return res.status(500).json({error: "Error reading petition: " + id});
    //   })
  }
}

module.exports = petitions;