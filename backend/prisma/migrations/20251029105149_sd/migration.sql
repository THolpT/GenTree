-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'UNKNOWN');

-- CreateTable
CREATE TABLE "Person" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "givenName" TEXT,
    "surname" TEXT,
    "gender" "Gender",
    "birthDate" TIMESTAMP(3),
    "birthPlace" TEXT,
    "deathDate" TIMESTAMP(3),
    "deathPlace" TEXT,
    "img" TEXT,
    "spouseId" TEXT,
    "childId" TEXT,
    "treeId" TEXT NOT NULL,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tree" (
    "id" TEXT NOT NULL,
    "authorId" TEXT,

    CONSTRAINT "Tree_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Person_spouseId_key" ON "Person"("spouseId");

-- AddForeignKey
ALTER TABLE "Person" ADD CONSTRAINT "Person_spouseId_fkey" FOREIGN KEY ("spouseId") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Person" ADD CONSTRAINT "Person_childId_fkey" FOREIGN KEY ("childId") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Person" ADD CONSTRAINT "Person_treeId_fkey" FOREIGN KEY ("treeId") REFERENCES "Tree"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tree" ADD CONSTRAINT "Tree_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
