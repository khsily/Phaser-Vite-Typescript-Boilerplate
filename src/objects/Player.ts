import { Direction } from '@/types/Direction';
import { SpriteData } from '@/types/Sprite';

class Player extends Phaser.Physics.Matter.Sprite {
  readonly SPEED = 2.5;
  inputKeys?: { [key in Direction]: Phaser.Input.Keyboard.Key };

  constructor(data: SpriteData) {
    let { scene, x, y } = data;
    const { world } = scene.matter;

    super(world, x, y, undefined as any);
    this.scene.add.existing(this);
  }

  get velocity() {
    return this.body.velocity;
  }

  static preload(scene: Phaser.Scene) {}

  update() {
    const playerVelocity = new Phaser.Math.Vector2();

    if (this.inputKeys?.left.isDown) {
      playerVelocity.x = -1;
    } else if (this.inputKeys?.right.isDown) {
      playerVelocity.x = 1;
    }

    if (this.inputKeys?.up.isDown) {
      playerVelocity.y = -1;
    } else if (this.inputKeys?.down.isDown) {
      playerVelocity.y = 1;
    }

    playerVelocity.normalize();
    playerVelocity.scale(this.SPEED);
    this.setVelocity(playerVelocity.x, playerVelocity.y);
  }
}

export default Player;
