-- CreateEnum
CREATE TYPE "Sentiment" AS ENUM ('Negative', 'Positive');

-- CreateTable
CREATE TABLE "Feedback" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sentiment" "Sentiment" NOT NULL,
    "deviceId" TEXT NOT NULL,
    "ip" TEXT NOT NULL,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);
