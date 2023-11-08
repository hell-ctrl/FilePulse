import { createAvatar } from '@dicebear/core';
import { adventurer } from '@dicebear/collection';

function generateRandomAvatar() {
  const avatar = createAvatar(adventurer, {
    seed: Math.random(),
    backgroundColor: ["b6e3f4"]
  });

  const svg = avatar.toString();
  return svg;
};

export default generateRandomAvatar;
