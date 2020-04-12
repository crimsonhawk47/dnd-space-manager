
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
DROP TABLE "character";
DROP TABLE "user";

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "character"(
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user",
	"name" varchar(1000),
	"strength" int,
	"dexterity" int,
	"constitution" int,
	"intelligence" int,
	"wisdom" int,
	"charisma" int
);

INSERT INTO "user" ("username", "password")
VALUES ('Akimbo', '$2a$10$/rfT/Xd0dkOB1z744JEeNOzbFYSiZK070v.eHf0L3u7avRfvssRWi');

INSERT INTO "character" ("user_id",
	"name",
	"strength",
	"dexterity",
	"constitution",
	"intelligence",
	"wisdom",
	"charisma"
	) VALUES (1, 'Willow', 12, 16, 10, 8, 14, 13);