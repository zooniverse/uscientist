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
    projectID: "1857",
    tableWorkflowID: "3251"
  },
  production: {
    projectID: "5733",
    tableWorkflowID: "6527"
  }
}

const config = baseConfig[env];

export { config };
