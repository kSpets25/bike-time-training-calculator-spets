USE mysql_project_db;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(200) NOT NULL
);


CREATE TABLE IF NOT EXISTS results (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  distance DECIMAL (5,1),
  speed DECIMAL (5,1),
  ride_time DECIMAL (5,1), 
  ride_date date, 
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  user_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);








