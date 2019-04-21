drop database if exists develop;
create database develop;
use develop;

drop table if exists employee;
create table employee
(
    employee_pk     integer primary key auto_increment,
    employee_name   varchar(200),
    salary_employee decimal(10, 2)
) ENGINE = INNODB,
  CHARSET = UTF8;

-- -----------------------------------------------------------------
-- Dummy data
-- -----------------------------------------------------------------
insert into employee (employee_name, salary_employee)
values ('Alice Dumphy', 5000);

insert into employee (employee_name, salary_employee)
values ('Bob Dumphy', 7000);

insert into employee (employee_name, salary_employee)
values ('Miguel Cortegana', 4500);

select * from employee;