-- CreateTable
CREATE TABLE `Category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `latitude` INTEGER NOT NULL,
    `longitude` INTEGER NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `counter` INTEGER NOT NULL,

    UNIQUE INDEX `Category.id_unique`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
