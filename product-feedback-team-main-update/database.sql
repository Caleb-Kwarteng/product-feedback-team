CREATE TABLE "users" (
  "id" serial PRIMARY KEY,
  "name" text NOT NULL,
  "username" text NOT NULL,
  "image" text,
  "password" text NOT NULL,
  "email" text NOT NULL
);

CREATE TABLE "comments" (
  "id" serial PRIMARY KEY,
  "content" text NOT NULL,
  "user_id" int NOT NULL,
  "product_id" int NOT NULL
);

CREATE TABLE "product_features" (
  "id" bigserial PRIMARY KEY,
  "title" text NOT NULL,
  "category" text NOT NULL,
  "upvotes" integer,
  "status" text NOT NULL,
  "description" text NOT NULL,
);

CREATE TABLE "replies" (
  "id" int NOT NULL,
  "content" text NOT NULL,
  "replying_to" text NOT NULL,
  "user_id" int NOT NULL
);

ALTER TABLE "comments" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "product_features" ADD FOREIGN KEY ("comments_id") REFERENCES "comments" ("id");

ALTER TABLE "replies" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE product_features
ALTER COLUMN status
SET DEFAULT 'suggestion'

ALTER TABLE product_features
ALTER COLUMN upvotes
SET DEFAULT 0

//When a feedback is edited, we can update the status column with the new status - along with other columns 
UPDATE product_features
SET status = 'planned'
WHERE id = 3