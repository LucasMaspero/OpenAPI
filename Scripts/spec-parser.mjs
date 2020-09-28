import SwaggerParser from "@apidevtools/swagger-parser";
import appRoot from "app-root-path";

const ERROR = 1;

// Global Options
var devMode = false;

// Command Line Arguments
handleCommandLineArguments();

// Validate Spec File
SwaggerParser.validate(appRoot.path + "/Specification/security-api-specification.yaml", (parserError, securityApiSpec) => {

  if (parserError) {
    var errorMessage = `OpenAPI Specification Parser found error "${parserError.name}" with message "${parserError.message}".`;

    console.error(errorMessage);
    
    process.exit(ERROR);
  } else {
    console.log("OpenAPI Specification Parser found no errors.");

    if (!devMode) {
      addTeamCityParameters(securityApiSpec);
    }
  }
});

function handleCommandLineArguments() {
  var args = process.argv.slice(2);

  switch (args[0]) {
    case '--dev':
      devMode = true
      break;

    default:
      console.log(`WARNING: ${args[0]} is not a valid argument.`);
  }
}

function addTeamCityParameters(securityApiSpec) {
  var apiMajorVersion = securityApiSpec.info.version.split(".")[0];                 // Take the first number of the version
  var apiMinorVersion = securityApiSpec.info.version.split(".").slice(1).join("."); // Take the other numbers of the version
  var apiName = securityApiSpec.info.title.split(" ").join("");                     // Whitespaces removed

  console.log("Adding TeamCity Parameters ...");

  addTeamCityParameter("ApiMajorVersion", apiMajorVersion);
  addTeamCityParameter("ApiMinorVersion", apiMinorVersion);
  addTeamCityParameter("ApiName", apiName);
}

function addTeamCityParameter(parameterName, parameterValue) {
  var addTeamCityParameter = `##teamcity[setParameter name='${parameterName}' value='${parameterValue}']`;

  // Redirect message to output to set up TeamCity parameter
  console.log(addTeamCityParameter);
}