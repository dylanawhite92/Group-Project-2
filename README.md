### DREAM TEAM MANAGER

Have you ever imagined what it would be like to be the GM of an NBA team? Have you ever dreamed of managing the Chicago Bulls in a hands-on approach to help them realize their true potential? Well, look no further! With our interactive app you can swap and drop players, compare points per game, and work under the challenge of a salary cap to see how your team stacks up against other NBA teams! Take the leap from sitting on the sidelines, to making moves on the court!

### Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

1. Clone the github repo: https://github.com/narwhalnancy/Group-Project-2.git
2. Open the folder in Visual Studio Code.
3. Install all NPM packages with the command "npm i" in the terminal.
4. Create a database in MySQL and import the two CSV files. (two tables should be created once you refresh your schema).
5. Create a heroku app and connect your MySQL database.

### DEPLOYMENT
Steps to Deploy

1. Log in to Heroku.
   * If you are a windows user open the cmd.exe (NOT Git Bash) and type `heroku login`. Keep this command prompt open in the background. Then, open Git Bash and navigate to the folder with your code.
   * If you are a mac open terminal and type the command `heroku login`. Enter your Heroku credentials and proceed with all the below steps in terminal. Navigate to the folder with your code.
2. Run the command: `git remote –v` .
   * This is to show you that right now, you do not have heroku listed as a remote repository.
3. Run the command `heroku create`.
   * This will create an app instance on the Heroku server and will add heroku as a remote for your local git repository.
4. Run `git remote –v` again.
   * This isn't necessary, but helps to confirm that Heroku is now in your list of remotes. This time you should see the `heroku` remote.
5. Ensure that your `package.json` file is set up correctly. It must have a `start` script and all the project's dependencies defined. E.g.:
   ```json
   {
     "name": "starwars",
     "version": "1.0.0",
     "description": "Helps you find the characters you are looking for",
     "main": "server.js",
     "dependencies": {
        "express": "^4.16.3"
     },
     "scripts": {
       "start": "node server.js"
     }
   }
   ```
6. Ensure your web server is starting with a dynamic port.
   * For an express app, the code for this would look like:

   ```js
   var PORT = process.env.PORT || 3000;
   ...
   app.listen(PORT, function() {
   ```
   * This allows you to get the port from the bound environment variable (using `process.env.PORT`) if it exists, so that when your app starts on heroku's machine it will start listening on the appropriate port.

   * You app will still run on port 3000 locally if you haven't set an environment variable.
7. Ensure that you have at least one HTML page being served at the "/" route. Example:

```js
app.get("/", function(req, res) {
  res.json(path.join(__dirname, "public/index.html"));
});
```
8. Make sure that the application actually works locally. If it doesn't work locally, it won't deploy.
9. Commit any changes you've made up until this point using `git commit -am "<message>"`
10. Run the command `git push heroku master`. A series of processes will be initiated. Once the process is complete note the name of the app.
11. Log in to your Heroku account at www.heroku.com . You will see a list or a (single) app. Note the one that has the same funky name as you saw in bash. Click on it.
12. Click on settings. Then, scroll down until you see the part that says: "Domains". Note the URL listed under Heroku Domain.
13. Finally, go in your browser to the URL listed under the Heroku Domain. If all went well you should see your website!
### Troubleshooting
* If your Heroku app fails to deploy, run the following in your command-line:
  ```
  heroku logs
  ```
  * This should print all the logs produced by both Heroku and your application before the deployment failed. Look for the first indication of an error in the logs. If the error message isn't clear, Google it to learn more or ask an instructor or TA for help.

### Connecting your MySQL to Heroku
1. Navigate to heroku.com and login with your credentials.
2. Find your Heroku app’s name in the dashboard. Click on it.
3. Look for the Add-Ons section in your app’s dashboard and type JawsDB in the input field.
That should bring up the JawsDB MySQL add-on.
4. Click on JawsDB MySQL and that should should bring up a modal asking you to provision a
specific tier plan.
5. Make sure you select the free option, then click the Provision button.
6. You’ll know that Heroku set up your database when a JawsDB entry shows up in under the
Add-ons section.
7. Click JawsDB MySQL to bring up the settings to your remote database. You’ll need this
information later.
8. In your connection.js (or whichever file you created your MySQL connection), add the code
shown in the image below (additions highlighted):
9. Notice how process.env.JAWSDB_URL lets us plug in your connection details with just one
object property. When you set up the JawsDB provision, Heroku saved the connection info
in an environmental variable. Your Heroku app can reference this variable, hence the if-else
statement:
a. If the server contains the JAWSDB_URL environmental variable, it connects to the
JawsDB database.
b. If the server lacks the variable, it falls back on an explicitly defined local database.
c. You can upload this file to GitHub without worrying about a user finding your
remote connection credentials since that info is hidden in the environmental
variable.
10. After adding the code above and pushing those changes to your GitHub repository’s master
branch, deploy your app to Heroku: git push heroku master.
11. Now we have to manually create the tables in our JawsDB instance so we can properly
connect to it. JawsDB includes certain fields that we must employ in our project. Otherwise,
we won’t be able to use the remote database.
a. Open the Graphical User Interface (GUI) software of your choice: Sequel Pro, MySQL
Workbench, Valentina Studio or HeidiSQL.
i. To do this, navigate back to the browser and to your JawsDB settings page
(as shown in Step 8).
b. Create a connection to the database:
c. In the Host input field, grab the host value from your JawsDB settings page:
d. Use the page’s username and password for your connection, as well.
e. It’s easy to accidentally copy an extra space from the settings page. Make sure there
are no empty spaces at the end of your Host, User, or Password values.
f. After you enter in all the database credentials, establish the connection.
g. Once you’re connected to JawsDB, go into its sole database (should be a jumble of
characters). You’re going to store the tables you need for your project into this
database.
i. Don’t worry about naming this database the same as your local one. Just
accept JawsDB’s gibberish.
h.Use the schema below as a guide for adding your project’s MySQL tables to you’re
the database. Be sure to include the fields written on lines 2, 4 and 5 just as they’re
written.
i. When you create your tables with the prior schema, you also need to add a default
value for your createdAt field.
i. In your GUI, select the createdAt field and change the default value to
CURRENT_TIMESTAMP. Each GUI has a different process for this, so you may
need to do a Google search for those directions (or speak to a TA, who will
gladly guide you).
12. After you configure your JawsDB database, run the heroku open command in the root of
your project directory to open your app in the browser.
### Troubleshooting
If you run into any errors, try going over the steps again to ensure you haven’t missed anything.
You can avoid errors by checking the following:
A. You set up your connection.js folder as we outlined in steps 9 and 10.
B. You copied your JawsDB server details exactly as they appeared in step 8. Be sure
that you didn’t copy any empty spaces.
C. You included the default fields as outlined in Step 12, Sections g - i.

### Authors
Dean Deolitsis, Patrick Holmes, Veronica Vera, Dylan White, Hannah Willis


### Images
![Image description](/app/public/images/main.jpg)

![Image description](/app/public/images/start.jpg)

![Image description](/app/public/images/playerinfo.jpg)

![Image description](/app/public/images/byteam.jpg)

![Image description](/app/public/images/byposition.jpg)

![Image description](/app/public/images/scores.jpg)
