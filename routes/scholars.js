var express = require('express');
var router = express.Router();
var Scholar = require('../models/scholar');

router.get('/', function (req,res,next) {
  Scholar.find()
    .exec(function (err,scholars) {
      if(err) {
        return res.status(500).json({
          title: 'Error',
          error: err
        });
      }
      res.status(200).json({
        message: 'Success',
        obj: scholars
      })
    })
});

router.post('/', function (req,res,next) {
  var scholar = new Scholar({
    name: req.body.name,
    position: req.body.position,
    place: req.body.place,
    contact: req.body.contact,
    detail: req.body.detail,
    misc: req.body.misc,
    country: req.body.country
  });
  scholar.save(function (err, result) {
    if(err) {
      return res.status(500).json({
        title: 'Error',
        error: err
      })
    }
    res.status(200).json({
      message: 'Saved',
      obj: result
    })
  })

});

router.patch('/:id', function (req,res,next) {
  Scholar.findById(req.params.id, function (err, scholar) {
    if(err) {
      return res.status(500).json({
        title: 'Error',
        error: err
      })
    }
    if(!scholar) {
      return res.status(500).json({
        title: 'Not found',
        error: {message: 'Scholar not found'}
      })
    }
    scholar.name = req.body.name;
    scholar.position = req.body.position;
    scholar.place = req.body.place;
    scholar.contact = req.body.contact;
    scholar.detail = req.body.detail;
    scholar.misc = req.body.misc;
    scholar.country = req.body.country;
    scholar.save(function (err, result) {
      if(err) {
        return res.status(500).json({
          title: 'Error',
          error: {message: 'Error occurred'}
        })
      }
      res.status(200).json({
        message: 'Record is updated',
        obj: result
      })
    })
  })
});

router.delete('/:id', function (req,res,next) {
  Scholar.findById(req.params.id, function (err, scholar) {
    if(err) {
      return res.status(500).json({
        title: "error",
        error: err
      })
    }
    if(!scholar) {
      return res.status(500).json({
        title: "error",
        error: {message: 'not found'}
      })
    }
    scholar.remove(function (err, result) {
      if(err) {
        return res.status(500).json({
          title: "error",
          error: err
        })
      }
      res.status(200).json({
        message: 'Deleted',
        obj: result
      })
    })
  })
});

module.exports = router;