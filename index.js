import readline from 'readline';
import { arm, poof } from './lanterns.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', input => {
  const args = input.split(' ');
  switch (args[0]) {
  case 'arm':
    return arm(parseInt(args[1]));
  case 'disarm':
    return arm(parseInt(args[1]), false);
  case 'poof':
    return poof(parseInt(args[1]));
  }
});
