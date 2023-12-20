
/*
select "f"."releaseYear",
       "g"."genreId" as "genre"
from "films" as "f"
join "filmGenre" using ("filmId")
where "f"."filmId" = 86;
*/

select "films"."title" as "filmTitle",
       "films"."releaseYear" as "releaseYear",
       "genres"."name" as "genreName"
from "filmGenre"
join "genre" using ("genreId")
join "films" using ("filmId")
where "title" = 'Boogie Amelie';
