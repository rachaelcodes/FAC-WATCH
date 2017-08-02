BEGIN;

DROP TABLE IF EXISTS movies CASCADE;

CREATE TABLE movies (
  id SERIAL PRIMARY KEY,
  faccer VARCHAR(20) NOT NULL,
  cohort INTEGER,
  faclocation VARCHAR(20),
  moviename VARCHAR(40) NOT NULL,
  rating INTEGER DEFAULT 5,
  description TEXT NOT NULL,
  action BOOLEAN DEFAULT false,
  animation BOOLEAN DEFAULT false,
  comedy BOOLEAN DEFAULT false,
  documentary BOOLEAN DEFAULT false,
  drama BOOLEAN DEFAULT false,
  familyfriendly BOOLEAN DEFAULT false,
  horror BOOLEAN DEFAULT false,
  romance BOOLEAN DEFAULT false,
  scifi BOOLEAN DEFAULT false,
  thriller BOOLEAN DEFAULT false
);

INSERT INTO movies (faccer, cohort, faclocation, moviename, rating, description, action, animation, comedy, documentary, drama, familyfriendly, horror, romance, scifi, thriller) VALUES
  ('Aseel', 11, 'London', 'Two Can Play That Game', 5, 'A great, funny battle-of-the-sexes movie.', false, false, true, false, false, false, false, true, false, false),
  ('Rachael', 11, 'London', '10 Things I Hate About You', 5, 'My go-to sofa-day movie.', false, false, true, false, false, false, false, true, false, false),
  ('Yahia', 11, 'London', 'Batman: Dark Knight', 5, 'Good for Netflix and chill...', true, false, false, false, false, false, false, false, false, true),
  ('Alina', 11, 'London', 'Amelie', 5, 'A romantic movie for when you are in a romantic mood.', false, false, false, false, false, false, false, true, false, false);

COMMIT;
