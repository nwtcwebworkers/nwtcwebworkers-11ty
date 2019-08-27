const fetch = require("node-fetch");

module.exports = async function() {
  console.log( "Fetching new github stargazers count…" );

  // GitHub API: https://developer.github.com/v3/repos/#get
  return fetch("https://nwtcwebworkers.com/wp-json/wp/v2/meetup")
    .then(res => res.json()) // node-fetch option to transform to json
    .then(json => {
      // prune the data to return only what we want
      let meetups = [];
      json.forEach(element => {
          let meetup = {
              title: element.title.rendered
          }
          meetups.push(meetup);          
      });
      return {
        meetup: meetups
      };
    });
};