import Phaser from 'phaser';
import MainScene from './scenes/MainScene';

export const GameConfig: Phaser.Types.Core.GameConfig = {
  backgroundColor: '#333333',
  type: Phaser.AUTO,
  scene: [MainScene],
  scale: {
    mode: Phaser.Scale.FIT,
    parent: 'game',
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 800,
    height: 600,
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: import.meta.env.DEV,
      gravity: { y: 300 },
    },
  },
};
