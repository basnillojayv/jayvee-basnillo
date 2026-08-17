import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
  ALTER TABLE "submissions" DROP COLUMN "message";
  CREATE TYPE "public"."enum_submissions_needs" AS ENUM('New website from scratch', 'Website redesign', 'WordPress / Elementor development', 'Landing page', 'Website updates or improvements', 'Brand / visual design', 'Something else');
  CREATE TYPE "public"."enum_submissions_goals" AS ENUM('Look more professional', 'Generate more enquiries', 'Make the business easier to find', 'Explain our services more clearly', 'Improve the user experience', 'Make the site easier to manage', 'Launch a completely new online presence', 'Other');
  CREATE TYPE "public"."enum_submissions_materials" AS ENUM('Logo / brand identity', 'Website content', 'Photos / images', 'Existing website', 'Design references', 'Nothing yet');
  CREATE TYPE "public"."enum_submissions_has_website" AS ENUM('Yes, I want to improve it', 'Yes, but it needs a complete redesign', 'No, this will be a new website', 'Not sure yet');
  CREATE TYPE "public"."enum_submissions_platform" AS ENUM('WordPress / Elementor', 'WordPress / Other', 'Wix', 'Squarespace', 'Webflow', 'Custom / Other', 'No existing website');
  CREATE TYPE "public"."enum_submissions_timeline" AS ENUM('As soon as possible', 'Within 1 month', '1–3 months', '3+ months', 'No fixed deadline');
  CREATE TYPE "public"."enum_submissions_budget" AS ENUM('Under $1,000', '$1,000–$2,500', '$2,500–$5,000', '$5,000+', 'I’d like to discuss the scope first');
  CREATE TABLE "submissions_needs" (
	"order" integer NOT NULL,
	"parent_id" integer NOT NULL,
	"value" "enum_submissions_needs",
	"id" serial PRIMARY KEY NOT NULL
);

  CREATE TABLE "submissions_goals" (
	"order" integer NOT NULL,
	"parent_id" integer NOT NULL,
	"value" "enum_submissions_goals",
	"id" serial PRIMARY KEY NOT NULL
);

  CREATE TABLE "submissions_materials" (
	"order" integer NOT NULL,
	"parent_id" integer NOT NULL,
	"value" "enum_submissions_materials",
	"id" serial PRIMARY KEY NOT NULL
);

  ALTER TABLE "submissions" ADD COLUMN "organisation" varchar;
  ALTER TABLE "submissions" ADD COLUMN "project_detail" varchar NOT NULL;
  ALTER TABLE "submissions" ADD COLUMN "has_website" "enum_submissions_has_website";
  ALTER TABLE "submissions" ADD COLUMN "platform" "enum_submissions_platform";
  ALTER TABLE "submissions" ADD COLUMN "timeline" "enum_submissions_timeline";
  ALTER TABLE "submissions" ADD COLUMN "budget" "enum_submissions_budget";
  ALTER TABLE "submissions" ADD COLUMN "reference" varchar;
  ALTER TABLE "submissions" ADD COLUMN "notes" varchar;
  ALTER TABLE "homepage" ADD COLUMN "hero_intro" varchar DEFAULT 'Designing brands, websites, and digital experiences.';
  ALTER TABLE "work_page_what_items" ADD COLUMN "stack" varchar;
  ALTER TABLE "submissions_needs" ADD CONSTRAINT "submissions_needs_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."submissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "submissions_goals" ADD CONSTRAINT "submissions_goals_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."submissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "submissions_materials" ADD CONSTRAINT "submissions_materials_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."submissions"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "submissions_needs_order_idx" ON "submissions_needs" USING btree ("order");
  CREATE INDEX "submissions_needs_parent_idx" ON "submissions_needs" USING btree ("parent_id");
  CREATE INDEX "submissions_goals_order_idx" ON "submissions_goals" USING btree ("order");
  CREATE INDEX "submissions_goals_parent_idx" ON "submissions_goals" USING btree ("parent_id");
  CREATE INDEX "submissions_materials_order_idx" ON "submissions_materials" USING btree ("order");
  CREATE INDEX "submissions_materials_parent_idx" ON "submissions_materials" USING btree ("parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
  DROP TABLE "submissions_needs" CASCADE;
  DROP TABLE "submissions_goals" CASCADE;
  DROP TABLE "submissions_materials" CASCADE;
  ALTER TABLE "submissions" DROP COLUMN "organisation";
  ALTER TABLE "submissions" DROP COLUMN "project_detail";
  ALTER TABLE "submissions" DROP COLUMN "has_website";
  ALTER TABLE "submissions" DROP COLUMN "platform";
  ALTER TABLE "submissions" DROP COLUMN "timeline";
  ALTER TABLE "submissions" DROP COLUMN "budget";
  ALTER TABLE "submissions" DROP COLUMN "reference";
  ALTER TABLE "submissions" DROP COLUMN "notes";
  ALTER TABLE "homepage" DROP COLUMN "hero_intro";
  ALTER TABLE "work_page_what_items" DROP COLUMN "stack";
  DROP TYPE "public"."enum_submissions_needs";
  DROP TYPE "public"."enum_submissions_goals";
  DROP TYPE "public"."enum_submissions_materials";
  DROP TYPE "public"."enum_submissions_has_website";
  DROP TYPE "public"."enum_submissions_platform";
  DROP TYPE "public"."enum_submissions_timeline";
  DROP TYPE "public"."enum_submissions_budget";
  ALTER TABLE "submissions" ADD COLUMN "message" varchar NOT NULL;`)
}
