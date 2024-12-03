INSERT INTO users
    ( name , password_hash, role, created )
VALUES
    ( 'joe', '6119442a08276dbb22e918c3d85c1c6e', 'ROLE_ADMIN', CURRENT_TIMESTAMP ),
    ( 'jane', '827ccb0eea8a706c4c34a16891f84e7b', 'ROLE_USER', CURRENT_TIMESTAMP ),
    ( 'sam', '01cfcd4f6b8770febfb40cb906715822', 'ROLE_USER', CURRENT_TIMESTAMP )
;


INSERT INTO books
    (title, author, published_date)
VALUES
    ('A Hitchhiker''s Guide to the Galaxy', 'Douglas Adams', '1979-05-12'),
    ('The Lord of the Rings', 'J.R.R. Tolkien', '1954-07-29'),
    ('1984', 'George Orwell', '1949-06-08'),
    ('Dune', 'Frank Herbert', '1965-08-01'),
    ('Pride and Prejudice', 'Jane Austen', '1813-01-28')
;