import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "design_systems_scope" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "design_systems_swatches" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "design_systems_typefaces" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"role" varchar NOT NULL,
  	"name" varchar NOT NULL
  );
  
  CREATE TABLE "design_systems" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"client" varchar,
  	"year" varchar,
  	"order" numeric DEFAULT 100,
  	"summary" varchar NOT NULL,
  	"href" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "design_systems_id" integer;
  ALTER TABLE "design_systems_scope" ADD CONSTRAINT "design_systems_scope_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."design_systems"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "design_systems_swatches" ADD CONSTRAINT "design_systems_swatches_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."design_systems"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "design_systems_typefaces" ADD CONSTRAINT "design_systems_typefaces_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."design_systems"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "design_systems_scope_order_idx" ON "design_systems_scope" USING btree ("_order");
  CREATE INDEX "design_systems_scope_parent_id_idx" ON "design_systems_scope" USING btree ("_parent_id");
  CREATE INDEX "design_systems_swatches_order_idx" ON "design_systems_swatches" USING btree ("_order");
  CREATE INDEX "design_systems_swatches_parent_id_idx" ON "design_systems_swatches" USING btree ("_parent_id");
  CREATE INDEX "design_systems_typefaces_order_idx" ON "design_systems_typefaces" USING btree ("_order");
  CREATE INDEX "design_systems_typefaces_parent_id_idx" ON "design_systems_typefaces" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "design_systems_slug_idx" ON "design_systems" USING btree ("slug");
  CREATE INDEX "design_systems_updated_at_idx" ON "design_systems" USING btree ("updated_at");
  CREATE INDEX "design_systems_created_at_idx" ON "design_systems" USING btree ("created_at");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_design_systems_fk" FOREIGN KEY ("design_systems_id") REFERENCES "public"."design_systems"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_design_systems_id_idx" ON "payload_locked_documents_rels" USING btree ("design_systems_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "design_systems_scope" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "design_systems_swatches" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "design_systems_typefaces" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "design_systems" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "design_systems_scope" CASCADE;
  DROP TABLE "design_systems_swatches" CASCADE;
  DROP TABLE "design_systems_typefaces" CASCADE;
  DROP TABLE "design_systems" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_design_systems_fk";
  
  DROP INDEX "payload_locked_documents_rels_design_systems_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "design_systems_id";`)
}
