import Phaser from 'phaser';
import Preload from '../../src/scenes/preload';
import Game from '../../src/scenes/game';

const config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 760,
    physics: {
      default: 'arcade',
      arcade: {
       
        debug: false
      }
    },
    scene: [Preload, Game]
  };

  const game = new Phaser.Game(config);