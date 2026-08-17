import * as migration_20260817_113523_initial from './20260817_113523_initial';
import * as migration_20260817_235500_sky_palette_and_enquiry from './20260817_235500_sky_palette_and_enquiry';

export const migrations = [
  {
    up: migration_20260817_113523_initial.up,
    down: migration_20260817_113523_initial.down,
    name: '20260817_113523_initial'
  },
  {
    up: migration_20260817_235500_sky_palette_and_enquiry.up,
    down: migration_20260817_235500_sky_palette_and_enquiry.down,
    name: '20260817_235500_sky_palette_and_enquiry'
  },
];
