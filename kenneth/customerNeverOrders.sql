# Write your MySQL query statement below
SELECT C.name AS 'Customers'
FROM Customers C
WHERE C.id NOT IN (SELECT DISTINCT O.customerId FROM Orders O)