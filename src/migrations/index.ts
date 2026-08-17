import * as migration_20260817_113523_initial from './20260817_113523_initial';

export const migrations = [
  {
    up: migration_20260817_113523_initial.up,
    down: migration_20260817_113523_initial.down,
    name: '20260817_113523_initial'
  },
];
