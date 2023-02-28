DROP DATABASE IF EXISTS airneis;

CREATE DATABASE airneis;

-- tables
CREATE TABLE airneis.roles(
    role_id TINYINT(1) UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
    name VARCHAR(20) NOT NULL,
    description TEXT NOT NULL
);

CREATE TABLE airneis.customer(
    customer_id MEDIUMINT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email  VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL, 
    address VARCHAR(255) NOT NULL,
    role_id TINYINT(1) UNSIGNED NOT NULL,
    FOREIGN KEY(role_id) REFERENCES airneis.roles(role_id)
);


-- insertion
INSERT INTO airneis.roles VALUES
    (NULL, 'user', 'utilisateur'),
    (NULL, 'admin', 'administrateur')
;

-- mot de passe : password
INSERT INTO airneis.customer VALUES
    (NULL, 'antoine', 'merpillat', 'antoine@merpillat.fr', '$2y$10$li0PVRvbAqr/7neIq//7I.WdGEYi5vEzD.l4Q.7GH6qhXUr2wvgWS', '1 rue du pont 75000 Paris', 1),
    (NULL, 'victor', 'millet', 'victor@millet.fr', '$2y$10$li0PVRvbAqr/7neIq//7I.WdGEYi5vEzD.l4Q.7GH6qhXUr2wvgWS', '1 rue du champ 75000 Paris', 2)
;