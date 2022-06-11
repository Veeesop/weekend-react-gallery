DROP TABLE hotdogs;

CREATE TABLE hotdogs (
id SERIAL PRIMARY KEY,
path VARCHAR(400),
description VARCHAR(400),
likes INT DEFAULT 0
);

INSERT INTO hotdogs (path, description)
VALUES ('images/amanda-lim-1vwfNErV7uc-unsplash.jpg', 'Yeah, he put her bib on and cut up her hotdog for her and asked the waiter for extra crayons.'),
('images/amanda-lim-4lyaMhTcdcU-unsplash.jpg', 'Photo of a hotdog taken at Glacier National Park.'),
('images/annie-spratt-61ffCM6IyoQ-unsplash.jpg','But plenty of times the hotdog would have been cooked with cheese all around it, and so long as no cheese was actually visible on the hotdog, I’d say there wasn’t'),
('images/jay-wennington-UgolPhUcu9g-unsplash.jpg','Why, what were you thinking the hotdog thing was all about?'),
('images/jessica-loaiza-glqTtszXfM0-unsplash.jpg','I grilled a hotdog for lunch.'),('images/viraj-bhalani-Bo5Z8wok680-unsplash.jpg','We met on the boardwalk, then he walked me to the hotdog stand.');