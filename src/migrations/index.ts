import * as migration_20260817_113523_initial from './20260817_113523_initial';
import * as migration_20260817_235500_sky_palette_and_enquiry from './20260817_235500_sky_palette_and_enquiry';
import * as migration_20260818_042404_design_systems from './20260818_042404_design_systems';
import * as migration_20260818_044419_design_system_logo from './20260818_044419_design_system_logo';

export const migrations = [
  {
    up: migration_20260817_113523_initial.up,
    down: migration_20260817_113523_initial.down,
    name: '20260817_113523_initial',
  },
  {
    up: migration_20260817_235500_sky_palette_and_enquiry.up,
    down: migration_20260817_235500_sky_palette_and_enquiry.down,
    name: '20260817_235500_sky_palette_and_enquiry',
  },
  {
    up: migration_20260818_042404_design_systems.up,
    down: migration_20260818_042404_design_systems.down,
    name: '20260818_042404_design_systems',
  },
  {
    up: migration_20260818_044419_design_system_logo.up,
    down: migration_20260818_044419_design_system_logo.down,
    name: '20260818_044419_design_system_logo'
  },
];
