# SQL Injection workshop

## Disclaimer
**Please note that this workshop is strictly for educational purposes. Exploiting vulnerabilities in real-world systems is illegal and can have serious consequences.**

## Table of contents
- [SQL injection](#sql-injection)
- [Hands on demonstration](#hands-on-demonstration)
    - [Preparation](#preparation)
        - [Database configuration](#database-configuration)
        - [Frontend application](#frontend-application)
        - [Backend application](#backend-application)
    - [Steps](#steps)
        - [Figure out the structure of the SQL query used by the attacker](#figure-out-the-structure-of-the-sql-query-used-by-the-attacker)
        - [Identifying the type of database used!](#identifying-the-type-of-database-used)
        - [Let's determine which tables are in the database!](#lets-determine-which-tables-are-in-the-database)
        - [Let's get to the point!](#lets-get-to-the-point)
        - [What is the schema of the users table?](#what-is-the-schema-of-the-users-table)
        - [Let's find out who the admin is!](#lets-find-out-who-the-admin-is)
        - [What is the password of our admin user?](#what-is-the-password-of-our-admin-user)
        - [What is the hash algorithm used?](#what-is-the-hash-algorithm-used)
        - [Let's crack the hash!](#lets-crack-the-hash)
    - [Implement SQL injection prevention measures!](#implement-sql-injection-prevention-measures)
        - [Use parameterized queries!](#use-parameterized-queries)
        - [Use prepared statements!](#use-prepared-statements)


## SQL injection
SQL injection is a type of cyberattack where malicious SQL statements are inserted into an application's input fields. By manipulating these inputs, attackers can:
- Execute arbitrary SQL commands: Gain unauthorized access to sensitive data, modify or delete existing data, and even take control of the underlying database system.
- Circumvent login mechanisms and gain access to restricted areas of an application.
- Cause a denial of service: Overload the database server or application, making it unavailable to legitimate users.

Prevention:
- Input validation: Always validate and sanitize user input before using it in SQL queries.
- Least privilege principle: Grant database users only the necessary permissions.
- Parameterized queries: Use prepared statements with parameterized queries to prevent SQL injection.
- Prepared statements: SQL injection is mitigated by using prepared statements to parameterize queries.

```sql
PREPARE stmt (text) AS
SELECT * FROM users WHERE name = $1;
EXECUTE stmt('joe');
```

## Hands on demonstration
### Preparation
#### Database configuration
- Create a database named `sql-injection-workshop`!
- Create the tables `books` and `users` based on the `Bookshelf/data/schema.sql` file!
- Populate the above two tables with data from the `Bookshelf/data/values.sql` file!
- Configure the `_connectionString` variable in the `Bookshelf/Controllers/BookControllers.cs` file to use your specific database credentials!

#### Frontend application
- Install the required packages for your React client application using the appropriate command!
```bash
npm install
```
- Start the development server for your application using the appropriate command!
```bash
npm run dev
```

#### Backend application
- Configure the proxy settings in `Program.cs` to point to your local React development server!
- Build and run your application!
```bash
dotnet run
```

### Steps
#### Figure out the structure of the SQL query used by the attacker!
By analyzing the data presented on the website, infer the appropriate format for an SQL injection attack!

#### Identifying the type of database used!
Attempt to determine the database system utilized by the application!

#### Let's determine which tables are in the database!
Attempt to identify the tables contained within the database!

#### Let's get to the point!
To focus on the core information, let's apply some filtering to our SQL queries. This will allow us to practice our skills while retrieving only the necessary data: the tables within the database.

#### What is the schema of the users table?
Attempt to identify the columns within the users table!

#### Let's find out who the admin is!
Attempt to identify the user who is presumed to have administrative access!

#### What is the password of our admin user?
Attempt to ascertain the password associated with the administrative account.

#### What is the hash algorithm used?
Attempt to ascertain the hash algorithm used for the retrieved hash!
- [Hint: Hash identifier](https://hashes.com/en/tools/hash_identifier)

#### Let's crack the hash!
Now that you know the hash type, let's find out our admin user's password!
- [Hint: Hash decrypt](https://www.md5online.org/md5-decrypt.html)

### Implement SQL injection prevention measures!
#### Use parameterized queries!
Rewrite the `GetAll` method of the `BookRepository` class to use parameterized queries. The `NpgsqlParameterCollection` class will be helpful for this.<br>
To achieve the desired result, you'll need to ensure correct syntax regarding the *querystring* and utilize the `.Parameters.AddWithValue` method for parameterization.

#### Use prepared statements!
Rewrite the `GetAll` method once more, this time using a prepared statement.<br>
Hint: There's no need to combine *prepared statements* and *parameterized queries*. Refer to the previous example for guidance on using prepared statements.