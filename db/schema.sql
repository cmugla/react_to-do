DROP TABLE IF EXISTS tasks;

CREATE TABLE tasks (
  task_id SERIAL UNIQUE PRIMARY KEY,
  task_name VARCHAR(64) NOT NULL,
  task_desc TEXT,
  completed BOOLEAN NOT NULL DEFAULT FALSE,
  task_time_start TIMESTAMP,
  task_time_end TIMESTAMP,
  task_created TIMESTAMP NOT NULL DEFAULT now()
);

CREATE INDEX ON tasks (
  completed
);

CREATE INDEX ON tasks (
  task_time_start
);

CREATE INDEX ON tasks (
  task_created
);
