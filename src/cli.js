import minimist from 'minimist';
import help from './help';
import lookup from './lookup';
import version from './version';

export async function cli(argsArray) {
  const args = minimist(argsArray.slice(2));
  let cmd = args._[0] || 'help';

  if (args.version || args.v) {
    cmd = 'version';
  }

  if (typeof args._[0] === 'number') {
    cmd = 'lookup';
  }

  switch (cmd) {
    case 'lookup':
      lookup(args._[0]);
      break;

    case 'version':
      version(args);
      break;

    default:
      help(args);

      break;
  }
}
