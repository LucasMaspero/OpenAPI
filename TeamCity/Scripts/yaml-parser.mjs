import SwaggerParser from "@apidevtools/swagger-parser";

SwaggerParser.validate("API/api.yaml", (error, api) => {
  if (error) {
    // Throw an error to force TeamCity build step to fail
    throw `YAML syntax validator found error "${error.name}" with message "${error.message}".`;
  }

  var apiMajorVersion = api.info.version.split(".")[0]; // Take the first number of the version
  var apiMinorVersion = api.info.version.split(".").slice(1).join("."); // Take the other numbers of the version
  var apiName = api.info.title.split(" ").join(""); // Whitespaces removed

  addTeamCityParameter("ApiMajorVersion", apiMajorVersion);
  addTeamCityParameter("ApiMinorVersion", apiMinorVersion);
  addTeamCityParameter("ApiName", apiName);
});

function addTeamCityParameter(parameterName, parameterValue) {
  var addTeamCityParameter = `##teamcity[setParameter name='${parameterName}' value='${parameterValue}']`;
  
  // Redirect message to output to set up TeamCity parameter
  console.log(addTeamCityParameter);
}