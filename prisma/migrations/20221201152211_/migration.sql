-- DropForeignKey
ALTER TABLE `HealthCheck` DROP FOREIGN KEY `HealthCheck_checkedTeacherId_fkey`;

-- DropForeignKey
ALTER TABLE `HealthCheck` DROP FOREIGN KEY `HealthCheck_studentId_fkey`;

-- DropForeignKey
ALTER TABLE `Student` DROP FOREIGN KEY `Student_classroomId_fkey`;

-- DropForeignKey
ALTER TABLE `Student` DROP FOREIGN KEY `Student_clubId_fkey`;

-- DropForeignKey
ALTER TABLE `Student` DROP FOREIGN KEY `Student_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Teacher` DROP FOREIGN KEY `Teacher_classroomId_fkey`;

-- DropForeignKey
ALTER TABLE `Teacher` DROP FOREIGN KEY `Teacher_clubId_fkey`;

-- DropForeignKey
ALTER TABLE `Teacher` DROP FOREIGN KEY `Teacher_userId_fkey`;
