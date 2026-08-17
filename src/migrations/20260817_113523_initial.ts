import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_projects_cover_fit" AS ENUM('cover', 'contain');
  CREATE TYPE "public"."enum_case_studies_blocks_media_columns" AS ENUM('2', '3');
  CREATE TYPE "public"."enum_case_studies_cover_fit" AS ENUM('cover', 'contain');
  CREATE TYPE "public"."enum_explorations_category" AS ENUM('web', 'social');
  CREATE TYPE "public"."enum_work_page_designer_points_icon" AS ENUM('window', 'puzzle', 'spark', 'pen', 'code');
  CREATE TYPE "public"."enum_work_page_what_items_icon" AS ENUM('window', 'puzzle', 'spark', 'pen', 'code');
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_card_url" varchar,
  	"sizes_card_width" numeric,
  	"sizes_card_height" numeric,
  	"sizes_card_mime_type" varchar,
  	"sizes_card_filesize" numeric,
  	"sizes_card_filename" varchar,
  	"sizes_wide_url" varchar,
  	"sizes_wide_width" numeric,
  	"sizes_wide_height" numeric,
  	"sizes_wide_mime_type" varchar,
  	"sizes_wide_filesize" numeric,
  	"sizes_wide_filename" varchar,
  	"sizes_hero_url" varchar,
  	"sizes_hero_width" numeric,
  	"sizes_hero_height" numeric,
  	"sizes_hero_mime_type" varchar,
  	"sizes_hero_filesize" numeric,
  	"sizes_hero_filename" varchar
  );
  
  CREATE TABLE "projects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"category" varchar,
  	"url" varchar,
  	"description" varchar NOT NULL,
  	"cover_id" integer,
  	"cover_fit" "enum_projects_cover_fit" DEFAULT 'cover',
  	"order" numeric DEFAULT 100,
  	"featured" boolean,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "case_studies_blocks_prose_body" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "case_studies_blocks_prose" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies_blocks_swatches_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"value" varchar NOT NULL,
  	"note" varchar,
  	"on_light" boolean
  );
  
  CREATE TABLE "case_studies_blocks_swatches" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"note" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies_blocks_type_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"role" varchar NOT NULL,
  	"face" varchar NOT NULL,
  	"sample" varchar NOT NULL,
  	"style" jsonb
  );
  
  CREATE TABLE "case_studies_blocks_type" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"note" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies_blocks_stats_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "case_studies_blocks_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies_blocks_media_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"caption" varchar
  );
  
  CREATE TABLE "case_studies_blocks_media" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"note" varchar,
  	"columns" "enum_case_studies_blocks_media_columns" DEFAULT '2',
  	"block_name" varchar
  );
  
  CREATE TABLE "case_studies" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"client" varchar,
  	"discipline" varchar,
  	"year" varchar,
  	"summary" varchar NOT NULL,
  	"cover_id" integer,
  	"cover_fit" "enum_case_studies_cover_fit" DEFAULT 'cover',
  	"order" numeric DEFAULT 100,
  	"related_project_id" integer,
  	"related_case_study_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "explorations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"category" "enum_explorations_category" DEFAULT 'web' NOT NULL,
  	"order" numeric DEFAULT 100,
  	"image_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "submissions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"email" varchar NOT NULL,
  	"message" varchar NOT NULL,
  	"delivered" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"media_id" integer,
  	"projects_id" integer,
  	"case_studies_id" integer,
  	"explorations_id" integer,
  	"submissions_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "homepage_about_body" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "homepage_about_pillars" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"copy" varchar NOT NULL
  );
  
  CREATE TABLE "homepage_stats_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "homepage_capabilities_groups_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "homepage_capabilities_groups" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL
  );
  
  CREATE TABLE "homepage_how_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"copy" varchar NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "homepage" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_name_first" varchar NOT NULL,
  	"hero_name_last" varchar NOT NULL,
  	"hero_tagline" varchar NOT NULL,
  	"hero_watermark_left" varchar,
  	"hero_watermark_right" varchar,
  	"hero_portrait_id" integer,
  	"about_eyebrow" varchar DEFAULT 'The Designer',
  	"about_portrait_id" integer,
  	"about_lede" varchar NOT NULL,
  	"stats_statement" varchar,
  	"capabilities_eyebrow" varchar DEFAULT 'Core Skills',
  	"how_eyebrow" varchar DEFAULT 'How it works',
  	"how_lede" varchar,
  	"projects_eyebrow" varchar DEFAULT 'Selected Works',
  	"projects_title" varchar,
  	"case_studies_eyebrow" varchar DEFAULT 'The Thinking',
  	"case_studies_title" varchar,
  	"showcase_eyebrow" varchar DEFAULT 'Design Showcase',
  	"showcase_title" varchar,
  	"contact_eyebrow" varchar DEFAULT 'Connect',
  	"contact_headline_lead" varchar,
  	"contact_headline_accent" varchar,
  	"contact_cta_label" varchar DEFAULT 'Get in Touch',
  	"email" varchar,
  	"contact_linkedin" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "work_page_statement_body" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "work_page_marquee_terms" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "work_page_services_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE "work_page_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"body" varchar NOT NULL
  );
  
  CREATE TABLE "work_page_designer_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"copy" varchar NOT NULL,
  	"icon" "enum_work_page_designer_points_icon" DEFAULT 'window'
  );
  
  CREATE TABLE "work_page_what_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"copy" varchar NOT NULL,
  	"icon" "enum_work_page_what_items_icon" DEFAULT 'window'
  );
  
  CREATE TABLE "work_page_tools" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"logo_id" integer
  );
  
  CREATE TABLE "work_page_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"quote" varchar NOT NULL,
  	"name" varchar NOT NULL,
  	"role" varchar,
  	"image_id" integer
  );
  
  CREATE TABLE "work_page_faqs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" varchar NOT NULL
  );
  
  CREATE TABLE "work_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_eyebrow" varchar DEFAULT 'Graphic designer, web designer & AI developer',
  	"hero_title" varchar DEFAULT 'Design and build for brands that need to be taken seriously.',
  	"hero_cta_label" varchar DEFAULT 'Start a project together',
  	"statement_struck" varchar DEFAULT 'You need a website.',
  	"projects_eyebrow" varchar DEFAULT 'Selected projects',
  	"projects_title" varchar DEFAULT 'Recent work that makes an impact.',
  	"projects_lede" varchar DEFAULT 'A selection of websites I designed and built for businesses and organisations.',
  	"projects_cta_label" varchar DEFAULT 'View all projects',
  	"designer_eyebrow" varchar DEFAULT 'The designer',
  	"designer_heading" varchar DEFAULT 'I design and build modern, efficient websites that help businesses grow.',
  	"what_eyebrow" varchar DEFAULT 'What I do',
  	"tools_eyebrow" varchar DEFAULT 'Tools & technology',
  	"tools_heading" varchar DEFAULT 'The tools I use to design and build.',
  	"tools_lede" varchar DEFAULT 'Modern, reliable, and powerful tools that help me deliver quality results.',
  	"gallery_eyebrow" varchar DEFAULT 'Explorations',
  	"gallery_title" varchar DEFAULT 'The work that has no brief',
  	"gallery_lede" varchar DEFAULT 'Type, posters and interface studies. Where the ideas get tried before a client pays for them.',
  	"gallery_cta_label" varchar DEFAULT 'See the explorations',
  	"testimonials_eyebrow" varchar DEFAULT 'In their words',
  	"testimonials_title" varchar DEFAULT 'Your satisfaction, first',
  	"testimonials_body" varchar,
  	"cta_title" varchar DEFAULT 'Let us talk it through',
  	"cta_lede" varchar DEFAULT 'Fifteen minutes, no charge. Tell me what the project is and I will tell you what it takes.',
  	"cta_primary_label" varchar DEFAULT 'Book a call',
  	"cta_secondary_label" varchar DEFAULT 'Send a brief',
  	"cta_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects" ADD CONSTRAINT "projects_cover_id_media_id_fk" FOREIGN KEY ("cover_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_prose_body" ADD CONSTRAINT "case_studies_blocks_prose_body_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_prose"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_prose" ADD CONSTRAINT "case_studies_blocks_prose_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_swatches_items" ADD CONSTRAINT "case_studies_blocks_swatches_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_swatches"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_swatches" ADD CONSTRAINT "case_studies_blocks_swatches_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_type_items" ADD CONSTRAINT "case_studies_blocks_type_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_type"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_type" ADD CONSTRAINT "case_studies_blocks_type_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_stats_items" ADD CONSTRAINT "case_studies_blocks_stats_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_stats" ADD CONSTRAINT "case_studies_blocks_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_media_items" ADD CONSTRAINT "case_studies_blocks_media_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_media_items" ADD CONSTRAINT "case_studies_blocks_media_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_blocks_media" ADD CONSTRAINT "case_studies_blocks_media_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies" ADD CONSTRAINT "case_studies_cover_id_media_id_fk" FOREIGN KEY ("cover_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies" ADD CONSTRAINT "case_studies_related_project_id_projects_id_fk" FOREIGN KEY ("related_project_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies" ADD CONSTRAINT "case_studies_related_case_study_id_case_studies_id_fk" FOREIGN KEY ("related_case_study_id") REFERENCES "public"."case_studies"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "explorations" ADD CONSTRAINT "explorations_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_explorations_fk" FOREIGN KEY ("explorations_id") REFERENCES "public"."explorations"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_submissions_fk" FOREIGN KEY ("submissions_id") REFERENCES "public"."submissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_about_body" ADD CONSTRAINT "homepage_about_body_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_about_pillars" ADD CONSTRAINT "homepage_about_pillars_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_stats_items" ADD CONSTRAINT "homepage_stats_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_capabilities_groups_tags" ADD CONSTRAINT "homepage_capabilities_groups_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_capabilities_groups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_capabilities_groups" ADD CONSTRAINT "homepage_capabilities_groups_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_how_steps" ADD CONSTRAINT "homepage_how_steps_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage_how_steps" ADD CONSTRAINT "homepage_how_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage" ADD CONSTRAINT "homepage_hero_portrait_id_media_id_fk" FOREIGN KEY ("hero_portrait_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage" ADD CONSTRAINT "homepage_about_portrait_id_media_id_fk" FOREIGN KEY ("about_portrait_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "work_page_statement_body" ADD CONSTRAINT "work_page_statement_body_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."work_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "work_page_marquee_terms" ADD CONSTRAINT "work_page_marquee_terms_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."work_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "work_page_services_images" ADD CONSTRAINT "work_page_services_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "work_page_services_images" ADD CONSTRAINT "work_page_services_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."work_page_services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "work_page_services" ADD CONSTRAINT "work_page_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."work_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "work_page_designer_points" ADD CONSTRAINT "work_page_designer_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."work_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "work_page_what_items" ADD CONSTRAINT "work_page_what_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."work_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "work_page_tools" ADD CONSTRAINT "work_page_tools_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "work_page_tools" ADD CONSTRAINT "work_page_tools_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."work_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "work_page_testimonials" ADD CONSTRAINT "work_page_testimonials_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "work_page_testimonials" ADD CONSTRAINT "work_page_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."work_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "work_page_faqs" ADD CONSTRAINT "work_page_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."work_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "work_page" ADD CONSTRAINT "work_page_cta_image_id_media_id_fk" FOREIGN KEY ("cta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX "media_sizes_card_sizes_card_filename_idx" ON "media" USING btree ("sizes_card_filename");
  CREATE INDEX "media_sizes_wide_sizes_wide_filename_idx" ON "media" USING btree ("sizes_wide_filename");
  CREATE INDEX "media_sizes_hero_sizes_hero_filename_idx" ON "media" USING btree ("sizes_hero_filename");
  CREATE UNIQUE INDEX "projects_slug_idx" ON "projects" USING btree ("slug");
  CREATE INDEX "projects_cover_idx" ON "projects" USING btree ("cover_id");
  CREATE INDEX "projects_updated_at_idx" ON "projects" USING btree ("updated_at");
  CREATE INDEX "projects_created_at_idx" ON "projects" USING btree ("created_at");
  CREATE INDEX "case_studies_blocks_prose_body_order_idx" ON "case_studies_blocks_prose_body" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_prose_body_parent_id_idx" ON "case_studies_blocks_prose_body" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_prose_order_idx" ON "case_studies_blocks_prose" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_prose_parent_id_idx" ON "case_studies_blocks_prose" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_prose_path_idx" ON "case_studies_blocks_prose" USING btree ("_path");
  CREATE INDEX "case_studies_blocks_swatches_items_order_idx" ON "case_studies_blocks_swatches_items" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_swatches_items_parent_id_idx" ON "case_studies_blocks_swatches_items" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_swatches_order_idx" ON "case_studies_blocks_swatches" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_swatches_parent_id_idx" ON "case_studies_blocks_swatches" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_swatches_path_idx" ON "case_studies_blocks_swatches" USING btree ("_path");
  CREATE INDEX "case_studies_blocks_type_items_order_idx" ON "case_studies_blocks_type_items" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_type_items_parent_id_idx" ON "case_studies_blocks_type_items" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_type_order_idx" ON "case_studies_blocks_type" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_type_parent_id_idx" ON "case_studies_blocks_type" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_type_path_idx" ON "case_studies_blocks_type" USING btree ("_path");
  CREATE INDEX "case_studies_blocks_stats_items_order_idx" ON "case_studies_blocks_stats_items" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_stats_items_parent_id_idx" ON "case_studies_blocks_stats_items" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_stats_order_idx" ON "case_studies_blocks_stats" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_stats_parent_id_idx" ON "case_studies_blocks_stats" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_stats_path_idx" ON "case_studies_blocks_stats" USING btree ("_path");
  CREATE INDEX "case_studies_blocks_media_items_order_idx" ON "case_studies_blocks_media_items" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_media_items_parent_id_idx" ON "case_studies_blocks_media_items" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_media_items_image_idx" ON "case_studies_blocks_media_items" USING btree ("image_id");
  CREATE INDEX "case_studies_blocks_media_order_idx" ON "case_studies_blocks_media" USING btree ("_order");
  CREATE INDEX "case_studies_blocks_media_parent_id_idx" ON "case_studies_blocks_media" USING btree ("_parent_id");
  CREATE INDEX "case_studies_blocks_media_path_idx" ON "case_studies_blocks_media" USING btree ("_path");
  CREATE UNIQUE INDEX "case_studies_slug_idx" ON "case_studies" USING btree ("slug");
  CREATE INDEX "case_studies_cover_idx" ON "case_studies" USING btree ("cover_id");
  CREATE INDEX "case_studies_related_project_idx" ON "case_studies" USING btree ("related_project_id");
  CREATE INDEX "case_studies_related_case_study_idx" ON "case_studies" USING btree ("related_case_study_id");
  CREATE INDEX "case_studies_updated_at_idx" ON "case_studies" USING btree ("updated_at");
  CREATE INDEX "case_studies_created_at_idx" ON "case_studies" USING btree ("created_at");
  CREATE UNIQUE INDEX "explorations_slug_idx" ON "explorations" USING btree ("slug");
  CREATE INDEX "explorations_image_idx" ON "explorations" USING btree ("image_id");
  CREATE INDEX "explorations_updated_at_idx" ON "explorations" USING btree ("updated_at");
  CREATE INDEX "explorations_created_at_idx" ON "explorations" USING btree ("created_at");
  CREATE INDEX "submissions_updated_at_idx" ON "submissions" USING btree ("updated_at");
  CREATE INDEX "submissions_created_at_idx" ON "submissions" USING btree ("created_at");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_projects_id_idx" ON "payload_locked_documents_rels" USING btree ("projects_id");
  CREATE INDEX "payload_locked_documents_rels_case_studies_id_idx" ON "payload_locked_documents_rels" USING btree ("case_studies_id");
  CREATE INDEX "payload_locked_documents_rels_explorations_id_idx" ON "payload_locked_documents_rels" USING btree ("explorations_id");
  CREATE INDEX "payload_locked_documents_rels_submissions_id_idx" ON "payload_locked_documents_rels" USING btree ("submissions_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "homepage_about_body_order_idx" ON "homepage_about_body" USING btree ("_order");
  CREATE INDEX "homepage_about_body_parent_id_idx" ON "homepage_about_body" USING btree ("_parent_id");
  CREATE INDEX "homepage_about_pillars_order_idx" ON "homepage_about_pillars" USING btree ("_order");
  CREATE INDEX "homepage_about_pillars_parent_id_idx" ON "homepage_about_pillars" USING btree ("_parent_id");
  CREATE INDEX "homepage_stats_items_order_idx" ON "homepage_stats_items" USING btree ("_order");
  CREATE INDEX "homepage_stats_items_parent_id_idx" ON "homepage_stats_items" USING btree ("_parent_id");
  CREATE INDEX "homepage_capabilities_groups_tags_order_idx" ON "homepage_capabilities_groups_tags" USING btree ("_order");
  CREATE INDEX "homepage_capabilities_groups_tags_parent_id_idx" ON "homepage_capabilities_groups_tags" USING btree ("_parent_id");
  CREATE INDEX "homepage_capabilities_groups_order_idx" ON "homepage_capabilities_groups" USING btree ("_order");
  CREATE INDEX "homepage_capabilities_groups_parent_id_idx" ON "homepage_capabilities_groups" USING btree ("_parent_id");
  CREATE INDEX "homepage_how_steps_order_idx" ON "homepage_how_steps" USING btree ("_order");
  CREATE INDEX "homepage_how_steps_parent_id_idx" ON "homepage_how_steps" USING btree ("_parent_id");
  CREATE INDEX "homepage_how_steps_image_idx" ON "homepage_how_steps" USING btree ("image_id");
  CREATE INDEX "homepage_hero_portrait_idx" ON "homepage" USING btree ("hero_portrait_id");
  CREATE INDEX "homepage_about_portrait_idx" ON "homepage" USING btree ("about_portrait_id");
  CREATE INDEX "work_page_statement_body_order_idx" ON "work_page_statement_body" USING btree ("_order");
  CREATE INDEX "work_page_statement_body_parent_id_idx" ON "work_page_statement_body" USING btree ("_parent_id");
  CREATE INDEX "work_page_marquee_terms_order_idx" ON "work_page_marquee_terms" USING btree ("_order");
  CREATE INDEX "work_page_marquee_terms_parent_id_idx" ON "work_page_marquee_terms" USING btree ("_parent_id");
  CREATE INDEX "work_page_services_images_order_idx" ON "work_page_services_images" USING btree ("_order");
  CREATE INDEX "work_page_services_images_parent_id_idx" ON "work_page_services_images" USING btree ("_parent_id");
  CREATE INDEX "work_page_services_images_image_idx" ON "work_page_services_images" USING btree ("image_id");
  CREATE INDEX "work_page_services_order_idx" ON "work_page_services" USING btree ("_order");
  CREATE INDEX "work_page_services_parent_id_idx" ON "work_page_services" USING btree ("_parent_id");
  CREATE INDEX "work_page_designer_points_order_idx" ON "work_page_designer_points" USING btree ("_order");
  CREATE INDEX "work_page_designer_points_parent_id_idx" ON "work_page_designer_points" USING btree ("_parent_id");
  CREATE INDEX "work_page_what_items_order_idx" ON "work_page_what_items" USING btree ("_order");
  CREATE INDEX "work_page_what_items_parent_id_idx" ON "work_page_what_items" USING btree ("_parent_id");
  CREATE INDEX "work_page_tools_order_idx" ON "work_page_tools" USING btree ("_order");
  CREATE INDEX "work_page_tools_parent_id_idx" ON "work_page_tools" USING btree ("_parent_id");
  CREATE INDEX "work_page_tools_logo_idx" ON "work_page_tools" USING btree ("logo_id");
  CREATE INDEX "work_page_testimonials_order_idx" ON "work_page_testimonials" USING btree ("_order");
  CREATE INDEX "work_page_testimonials_parent_id_idx" ON "work_page_testimonials" USING btree ("_parent_id");
  CREATE INDEX "work_page_testimonials_image_idx" ON "work_page_testimonials" USING btree ("image_id");
  CREATE INDEX "work_page_faqs_order_idx" ON "work_page_faqs" USING btree ("_order");
  CREATE INDEX "work_page_faqs_parent_id_idx" ON "work_page_faqs" USING btree ("_parent_id");
  CREATE INDEX "work_page_cta_image_idx" ON "work_page" USING btree ("cta_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "projects" CASCADE;
  DROP TABLE "case_studies_blocks_prose_body" CASCADE;
  DROP TABLE "case_studies_blocks_prose" CASCADE;
  DROP TABLE "case_studies_blocks_swatches_items" CASCADE;
  DROP TABLE "case_studies_blocks_swatches" CASCADE;
  DROP TABLE "case_studies_blocks_type_items" CASCADE;
  DROP TABLE "case_studies_blocks_type" CASCADE;
  DROP TABLE "case_studies_blocks_stats_items" CASCADE;
  DROP TABLE "case_studies_blocks_stats" CASCADE;
  DROP TABLE "case_studies_blocks_media_items" CASCADE;
  DROP TABLE "case_studies_blocks_media" CASCADE;
  DROP TABLE "case_studies" CASCADE;
  DROP TABLE "explorations" CASCADE;
  DROP TABLE "submissions" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "homepage_about_body" CASCADE;
  DROP TABLE "homepage_about_pillars" CASCADE;
  DROP TABLE "homepage_stats_items" CASCADE;
  DROP TABLE "homepage_capabilities_groups_tags" CASCADE;
  DROP TABLE "homepage_capabilities_groups" CASCADE;
  DROP TABLE "homepage_how_steps" CASCADE;
  DROP TABLE "homepage" CASCADE;
  DROP TABLE "work_page_statement_body" CASCADE;
  DROP TABLE "work_page_marquee_terms" CASCADE;
  DROP TABLE "work_page_services_images" CASCADE;
  DROP TABLE "work_page_services" CASCADE;
  DROP TABLE "work_page_designer_points" CASCADE;
  DROP TABLE "work_page_what_items" CASCADE;
  DROP TABLE "work_page_tools" CASCADE;
  DROP TABLE "work_page_testimonials" CASCADE;
  DROP TABLE "work_page_faqs" CASCADE;
  DROP TABLE "work_page" CASCADE;
  DROP TYPE "public"."enum_projects_cover_fit";
  DROP TYPE "public"."enum_case_studies_blocks_media_columns";
  DROP TYPE "public"."enum_case_studies_cover_fit";
  DROP TYPE "public"."enum_explorations_category";
  DROP TYPE "public"."enum_work_page_designer_points_icon";
  DROP TYPE "public"."enum_work_page_what_items_icon";`)
}
