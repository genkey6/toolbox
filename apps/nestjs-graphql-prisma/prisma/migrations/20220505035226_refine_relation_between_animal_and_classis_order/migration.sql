/*
  Warnings:

  - You are about to drop the column `classis_id` on the `Animal` table. All the data in the column will be lost.
  - You are about to drop the column `order_id` on the `Animal` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Animal" DROP CONSTRAINT "Animal_classis_id_fkey";

-- DropForeignKey
ALTER TABLE "Animal" DROP CONSTRAINT "Animal_order_id_fkey";

-- AlterTable
ALTER TABLE "Animal" DROP COLUMN "classis_id",
DROP COLUMN "order_id";
