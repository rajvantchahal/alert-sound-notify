var playAlert   = require("./"),
    content = require('./content');

it('plays the default playAlert', function(done){

  var once = true;
  playAlert.player.on('ended', function(){
    if(!once) return;
    once = false;

    expect(playAlert.player.src()).to.deep.equal(content['bottle']);
    done();
  });
  playAlert();
});

it('plays the specified alert', function(done){
  playAlert.player.on('ended', function(){
    expect(playAlert.player.src()).to.deep.equal(content['purr']);
    done();
  });

  playAlert('purr');
  playAlert.player.play();
});
