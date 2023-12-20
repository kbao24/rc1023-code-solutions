/*
select *
  from "payments"
  join "customers" using ("customerId")
  order by "amount" DESC
  limit 10;
*/


select "p"."amount",
       "c"."firstName",
       "c"."lastName"
    from "payments" as "p"
    join "customers" as "c" using ("customerId")
    order by "amount" desc
    limit 10
