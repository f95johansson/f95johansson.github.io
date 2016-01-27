Crafty.init(512, 512, document.getElementById('game'));
Crafty.background("#e4e4e4");

Crafty.load({'images' : ['./assets/images/Seemless_Night_512.png'],
             'audio' : {
                  'chorus' : './assets/audio/PowerChorus2.ogg',
                  'bounce' : './assets/audio/bounce.wav',
                  'lost' : './assets/audio/boing.wav',
              }
            },
  function() { // when loaded
    //Crafty.audio.play('chorus'); 
  });

var lost = false;

var bg1 = Crafty.e('2d, DOM, Image, Motion')
  .attr({w: 724, h: 512})
  .image('assets/images/Seemless_Night_512.png', 'repeat-x')
  .bind('EnterFrame',
    function(data) {
      if (this.x + this.w < 0) {
        this.x = 724;
      }
    });
var bg2 = Crafty.e('2d, DOM, Image, Motion')
  .attr({x: 724, w: 724, h: 512})
  .image('assets/images/Seemless_Night_512.png', 'repeat-x')
  .bind('EnterFrame',
    function(data) {
      if (this.x + this.w < 0) {
        this.x = 724;
      }
    });
bg1.vx = bg2.vx = -60;

Crafty.e('2d, DOM, Text')
  .attr({x: 20, y: 480, w: 200})
  .text("Space to jump")
  .textColor('#ffffff')
  .textFont({size: '1em'})
  .unselectable();

var pipes = {'upper': [], 'lower': []};
for (i = 0; i < 3; i++) {
  var pipe_upper = Crafty.e('Pipe, 2d, DOM, Color, Motion')
    .attr({x: 540+i*190, y: 0, w: 60, h: Crafty.math.randomInt(60, 250)})
    .color('#E7EAED')
    .bind('EnterFrame', 
      function(data) {
        if (this.x + this.w < 0) {
          this.x = Crafty.viewport.width;
          this.h = Crafty.math.randomInt(60, 250);
        }
      });
  var pipe_lower = Crafty.e('Pipe, 2d, DOM, Color, Motion')
    .attr({x: 540+i*190, y: 0, w: 60, h: Crafty.math.randomInt(60, 250)})
    .color('#E7EAED')
    .bind('EnterFrame', 
      function(data) {
        if (this.x + this.w < 0) {
          this.x = Crafty.viewport.width;
          this.h = Crafty.viewport.height - pipes['upper'][pipes['lower'].indexOf(this)].h - 170;
          this.y = Crafty.viewport.height - this.h;
        }
      });
  pipe_lower.h = Crafty.viewport.height - pipe_upper.h - 170;
  pipe_lower.y = Crafty.viewport.height - pipe_lower.h;

  pipe_upper.vx = pipe_lower.vx = -100;
  pipes['upper'].push(pipe_upper);
  pipes['lower'].push(pipe_lower);
}

lose = function() {
  if (!lost) {
    Crafty.e('2d, DOM, Text')
      .attr({x: 200, y: 150})
      .text("You lost!")
      .textColor('#DB2128')
      .textFont({size: '4em', weight: 'bold'})
      .unselectable();
    Crafty.audio.play('lost');
    lost = true;
  }
}

var player = Crafty.e('2D, DOM, Color, Gravity, Motion, Collision')
 .attr({x: 130, y: 0, w: 40, h: 40 })
 .color('#E7EAED')
 .gravity('Floor')
 .checkHits('Pipe')
 .bind('KeyDown', 
  function(e) {
    if (e.key == Crafty.keys.SPACE && !lost) {
      this.vy = -350;
      Crafty.audio.play('bounce');
    }
  })
  .bind('HitOn', 
    function(e) {
      lose();
    }
  )
  .bind('EnterFrame', 
    function(data) {
      if (this.y < 0 || this.y > Crafty.viewport.height) {
        lose();
      }
    }
  );
  