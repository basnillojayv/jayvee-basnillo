import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "design_systems" ADD COLUMN "logo" varchar;
  ALTER TABLE "design_systems" ADD COLUMN "logo_dark" boolean;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "design_systems" DROP COLUMN "logo";
  ALTER TABLE "design_systems" DROP COLUMN "logo_dark";`)
}
