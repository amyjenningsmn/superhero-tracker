var router = require('express').Router();
var Hero = require('../../models/heroModel');

router.post('/addHero', function(request, response){

    Hero.create(request.body, function(err){
      if(err){
        console.log('Error saving Hero', err);
        response.sendStatus(500);
      } else {
        console.log('Successfully saved Hero');
        response.sendStatus(200);
      }
    })
})

router.get('/allHeroes', function(request, response){
    Hero.find({}, function(err, heroes){
      if (err){
        console.log(err);
        response.sendStatus(500);
      } else {
        response.send(heroes);
      }
    })
  })

  router.delete('/delete/:id', function(request, response){
    console.log('Delete request received');
    Hero.findOneAndRemove({_id: request.params.id}, function(err, hero){
      if(err){
        console.log(err);
        response.sendStatus(500);
      } else {
        console.log('Hero deleted: ', hero);
        response.sendStatus(200);
      }
    })
  })

module.exports = router;
