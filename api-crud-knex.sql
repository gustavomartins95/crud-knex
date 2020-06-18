--
-- Banco de dados: `api-crud-knex`
--

CREATE TABLE `people` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `birth_date` date DEFAULT NULL,
  `office` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `people` ADD PRIMARY KEY (`id`);
ALTER TABLE `people` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
