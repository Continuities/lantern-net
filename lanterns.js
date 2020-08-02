import Artnet from 'artnet';

const ARM_KEY = 19;
const ARTNET_IP = '172.16.23.15';
const LANTERN_ARM_START = 257;
const LANTERN_POOF_START = 275
const POOF_TIME = 500; // ms

const artnet = Artnet({ host: ARTNET_IP });

// 18 REB
// 18 lanterns (255 on, anything else off

// 1 - 54 for lights, 3 channels per
// 257 - 293 for lanterns

// Lantern arming channels are 257-274
// lanternIndex is 0-17
export const arm = (lanternIndex, arm = true) => {
  if (lanternIndex < 0 || lanternIndex >= 18) {
    // Nope
    return;
  }
  console.log(`${arm ? 'Arming' : 'Disarming'} lantern ${lanternIndex}`);
  artnet.set(LANTERN_ARM_START + lanternIndex, arm ? ARM_KEY : 0);
};

// Lantern poof channels are 275 
export const fire = (lanternIndex, fire = true) => {
  if (lanternIndex < 0 || lanternIndex >= 18) {
    // Nope
    return;
  }
  console.log(`${fire ? 'Igniting' : 'Extinguishing'} lantern ${lanternIndex}`);
  artnet.set(LANTERN_POOF_START + lanternIndex, fire ? 255 : 0);
};

export const poof = (lanternIndex) => {
  fire(lanternIndex);
  setTimeout(() => fire(lanternIndex, false), POOF_TIME);
};
