ALTER TABLE "mitarbeiter" ALTER COLUMN "kuerzel" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "mitarbeiter" ALTER COLUMN "kuerzel" SET NOT NULL;