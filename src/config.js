const DEFAULT_ENV = 'development';
const envFromBrowser = locationMatch(/\W?env=(\w+)/);
const envFromShell = process.env.NODE_ENV;
const env = envFromBrowser || envFromShell || DEFAULT_ENV;

function locationMatch(regex) {
  var match;
  if (typeof window.location !== 'undefined' && window.location !== null) {
    match = window.location.search.match(regex);
  }
  return (match && match[1]) ? match[1] : undefined;
}

const baseConfig = {
  development: {
    root: "https://www.master.pfe-preview.zooniverse.org/",
    projectID: "1857",
    tableWorkflowID: "3251"
  },
  production: {
    root: "https://www.zooniverse.org/",
    projectID: "5733",
    tableWorkflowID: "11308"
  }
}

const config = baseConfig[env];

export { config };
