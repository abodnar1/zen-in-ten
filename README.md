# Zen-In-Ten
Visit the deployed site [here](https://zen-in-ten.herokuapp.com/).

## Table of Contents
- [Summary](#summary)
- [Setup](#setup)
- [Technologies and Tools](#technologies-and-tools)
- [Learning Goals](#learning-goals)
- [Project Reflections](#project-reflections)
- [Roadmap](#roadmap)
- [Contributors](#contributors)
- [Sources](#sources)


## Summary
Zen in Ten was designed to bring inspiration to those who need to be uplifted or grounded by famous words. Use the dropdown on our homepage to select a mood and from there you can favorite any quotes that resonate with you. 

See it in Action!
![Screen Recording 2022-08-01 at 7 33 34 AM](https://user-images.githubusercontent.com/98445902/182161938-4d150f36-c4e6-47ad-bd6c-6469213f8e52.gif)
![Screen Recording 2022-08-01 at 7 36 32 AM](https://user-images.githubusercontent.com/98445902/182161956-6688acfa-9340-4a75-9ecd-1bfcee8715ca.gif)


## Setup
1. Fork this Repo
2. Clone it down to your machine
3. `cd` into the root of the project directory
4. Run `npm install`
5. Run `npm start`

For Cypress Testing:
1. Run `npm run cypress`
2. Follow the prompts in the browser and select the spec file you want to run


## Technologies and Tools
* TypeScript
* React
* React Router
* JavaScript
* REST API
* HTML
* CSS
* Cypress Testing
* Postman
* npm
* Webpack
* GitHub Issues
* GitHub Projects


## Learning Goals
- Self-teach a new technology and implement it in an application that sources at least one external API. Our group chose TypeScript.
- To expand/deepen our understanding of our learning process & dynamics within a team.


## Project Reflections
#### Wins:
* Working with a tricky api.
* Learning more about cypress testing.
* Learning Typescript and React hooks at the same time.

#### Challenges:
* We experienced an interesting issue with error handling. The api assigns it's key values to an error message but the status code never changes. We had to work around this by adding a conditional that would look for their error message rather than a status code. 
* Using an api with a link as a key value. At first, we thought this would be a benefit but we ran into some issues along the way because of this. If the api had genre or mood codes / id's we wouldn't have run into as many issues. 


## Roadmap
Future features could include:
* Give the user the ability to search for quotes by author and mood.
* Give the user the ability to create an account / login.
* Give the user the option to add in their own quotes or quotes they like that are not on our site.
* Use a Spotify api to stream calming music as a user enters a quote page. 


## Contributors
**Amber Bodnar**
* [LinkedIn](https://www.linkedin.com/in/amberbodnar/)
* [GitHub](https://github.com/abodnar1)

**Corinne Canavan**
* [LinkedIn](https://www.linkedin.com/in/corinnecanavan/)
* [GitHub](https://github.com/CorCanavan)

**Victoria Fox-Collis**
* [LinkedIn](https://www.linkedin.com/in/victoria-fox-collis/)
* [GitHub](https://github.com/VictoriaFC)

**Trish Fox-Collis**
* [LinkedIn](https://www.linkedin.com/in/trish-fox-collis/)
* [GitHub](https://github.com/tfoxcollis)


## Sources
* [React & TypeScript - Course for Beginners](https://youtu.be/FJDVKeh7RJI)
* [TypeScript - the Basics](https://youtu.be/ahCwqrYpIuM)
* [TypeScript Documentation](https://www.typescriptlang.org/docs/)
* [React TypeScript Cheat Sheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup)
* [Making REST API calls with TypeScript](https://www.sohamkamani.com/typescript/rest-http-api-call/)
* [Cypress Documentation](https://docs.cypress.io/guides/getting-started/installing-cypress)


*The [Turing School of Software and Design](https://turing.edu/) provided a project spec sheet for students to follow, which can be found [here](https://frontend.turing.edu/projects/module-3/stretch.html).*
