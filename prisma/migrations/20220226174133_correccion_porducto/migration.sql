-- AlterEnum
ALTER TYPE "Genero" ADD VALUE 'UNISEX';

-- AlterTable
ALTER TABLE "productos" ALTER COLUMN "genero" SET DEFAULT E'UNISEX';
