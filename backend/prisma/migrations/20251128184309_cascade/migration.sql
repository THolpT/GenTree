-- DropForeignKey
ALTER TABLE "public"."Person" DROP CONSTRAINT "Person_childId_fkey";

-- AddForeignKey
ALTER TABLE "Person" ADD CONSTRAINT "Person_childId_fkey" FOREIGN KEY ("childId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;
