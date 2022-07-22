-- INSERT - C - CREATE
INSERT INTO customers (name,entrydate) 
values ('Damian',now())

-- SELECT - R - READ
SELECT * FROM CUSTOMERS
WHERE entrydate > '2022-07-20'

-- UPDATE - U - UPDATE
update customers set entrydate = '2022-07-20 15:30:00.0000'
where customerid=1

-- DELETE - D - DELETE
delete from customers where customerid=1

