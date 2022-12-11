import Player from '@/objects/Player';

class MainScene extends Phaser.Scene {
  player?: Player;

  constructor() {
    super({ key: 'MainScene' });
  }

  preload() {
    Player.preload(this);
  }

  create() {
    this.player = new Player({ scene: this, x: 100, y: 100 });
    this.player.inputKeys = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
    }) as typeof this.player.inputKeys;
  }

  update() {
    this.player?.update();
  }
}

export default MainScene;
