## Project 2 Forum

I created a football forum app where people can go and discuss various football news, topics, players, etc.
It's an outlet to post a topic of what you want to see what people are saying about things that you want to find out about.
It will allow people to share their opinions and get other view points on different subjects. Users can post, like and comment on topics.


## wireframes

![Alt Text](https://github.com/jonrtroy/forum-app/blob/master/forum_wireframe.jpg)

## ERD

![Alt Text](https://github.com/jonrtroy/forum-app/blob/master/forum_ERD.png)


## Modules

1. express - used to run node.js.
2. ejs - used for generating HTML with JavaScript.
3. method-override - used to create the likes since it's a PUT method.
4. morgan - terminal logger.
5. path - used to join the public folder.
6. pg-promise - used to link the database.
7. body-parser - this allows us to parse all bodies to the HTML

## Instructions

1. You will need to git clone from Github my project.
2. Once you have that, you will need to create a database named forum_app_db" in psql.
3. Then go into the root folder of the project and type in psql -d forum_app_db -f migrations/migrations.sql
4. Now that you created the database and the tables, you can now go into your localhost/3000/topic to run the project while nodemon is runnings.
