import Phaser from 'phaser';
import {Scene} from 'phaser'

let cow

class PreloadScene extends Scene {
    constructor(){
        super()
    }

    preload (){
        this.load.image('mire', './src/assets/Mire01.png');
        this.load.image('start','./src/assets/Start.png');
        this.load.image('back','./src/assets/Background2.png');
        this.load.image('sky', './src/assets/Background.jpg');
        this.load.spritesheet('bomb', './src/assets/bomb.png', {frameWidth:61 , frameHeight: 117});
        this.load.spritesheet('cow', './src/assets/cow.png', {frameWidth:160 , frameHeight: 106});
        this.load.spritesheet('cow2', './src/assets/cow2.png', {frameWidth:160 , frameHeight: 106});
        this.load.spritesheet('cow3', './src/assets/cow3.png', {frameWidth:160 , frameHeight: 106});
        this.load.spritesheet('dog', './src/assets/dog.png', {frameWidth:160 , frameHeight: 106});
        this.load.spritesheet('donkey', './src/assets/donkey.png', {frameWidth:160 , frameHeight: 106});
       
         /* Chargement de la musique*/
        this.load.audio('gameover','./src/assets/audio/gameover.mp3')
        this.load.audio('youwin','./src/assets/audio/youwin.mp3')

        this.load.audio('generique', './src/assets/audio/generique.mp3');
        this.load.audio('die','./src/assets/audio/die.mp3')
        this.load.audio('laser','./src/assets/audio/laser.mp3');
        this.load.audio('cri','./src/assets/audio/cri.mp3');
        this.load.audio('cri2','./src/assets/audio/cri2.mp3');
        this.load.audio('cri3','./src/assets/audio/cri3.mp3');
        this.load.audio('chien','./src/assets/audio/chien.mp3');
        this.load.audio('special','./src/assets/audio/special.mp3');
        this.load.audio('diable','./src/assets/audio/diable.mp3');

    }

    create (){

       
         /*start game */
        this.add.image(512, 380,'back')
        this.input.on('pointerdown', () => this.scene.start('game') )
    

          /*Envoi de la musique */
          let sound=this.sound.add('generique',{volume: 0.2})
          sound.play(); 

           /*animation bouton start */
          let sprite = this.add.sprite(650, 650, 'start').setInteractive();
          this.input.setPollOnMove();

          this.input.on('gameobjectover', function (pointer, gameObject) {
              gameObject.setTint(0xf36907);
      
          });
      
          this.input.on('gameobjectout', function (pointer, gameObject) {
      
              gameObject.clearTint();
      
          });
      
          this.tweens.add({
      
              targets: sprite,
              x: 500,
              yoyo: true,
              repeat: -1,
              duration: 2000
      
          });
     let mire = this.physics.add.sprite(0, 0, 'mire').setInteractive();
        
          mire.setBounce(1);
          mire.setCollideWorldBounds(true);
          mire.setVelocity(Phaser.Math.Between(0, 500), 100);
    

    let text1 = this.add.text(20, 20, 'First player to 1000pts wins');
    //text1.setTint(0xffffff, 0xffff00, 0x0000ff, 0xff0000);
    
    this.tweens.add({
        targets: text1,
        duration: 2000,
        scaleX: 3.5,
        scaleY: 4,
        ease: 'Sine.easeInOut',
        repeat: -1,
        yoyo: true
    })
    }

    update(){

    }

    
}

export default PreloadScene

