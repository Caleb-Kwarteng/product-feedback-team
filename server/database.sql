CREATE TABLE "users" (
  "id" serial PRIMARY KEY,
  "name" text NOT NULL,
  "username" text NOT NULL,
  "image" text,
  "password" text NOT NULL
);

CREATE TABLE "comments" (
  "id" serial PRIMARY KEY,
  "content" text NOT NULL,
  "user_id" int NOT NULL
);

CREATE TABLE "product_features" (
  "id" bigserial PRIMARY KEY,
  "title" text NOT NULL,
  "category" text NOT NULL,
  "upvotes" integer,
  "status" text NOT NULL,
  "description" text NOT NULL,
  "comments_id" int
);

CREATE TABLE "replies" (
  "content" text NOT NULL,
  "replying_to" text NOT NULL,
  "user_id" int NOT NULL
);

ALTER TABLE "comments" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "product_features" ADD FOREIGN KEY ("comments_id") REFERENCES "comments" ("id");

ALTER TABLE "replies" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");
