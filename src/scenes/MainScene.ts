import Phaser from 'phaser';

import Player from '../objects/Player';

import asst_sky from '/images/sky.png';
import asst_platform from '/images/platform.png';

class MainScene extends Phaser.Scene {
  platforms?: Phaser.Physics.Arcade.StaticGroup;
  player?: Player;

  constructor() {
    super({ key: 'MainScene' });
  }

  preload() {
    this.load.image('sky', asst_sky);
    this.load.image('ground', asst_platform);
    Player.preload(this);
  }

  create() {
    this.add.image(400, 300, 'sky');

    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();
    this.platforms.create(600, 400, 'ground');
    this.platforms.create(50, 250, 'ground');
    this.platforms.create(750, 220, 'ground');

    this.player = new Player({ scene: this, x: 100, y: 450 });
    this.physics.add.collider(this.player, this.platforms);
  }

  update() {
    this.player?.update();
  }
}

export default MainScene;
