import SwaggerParser from "@apidevtools/swagger-parser";
import format from "string-template";

SwaggerParser.validate("apilucas.yaml", (error, api) => {
  if (error) {
    throw `YAML syntax validator found error "${error.name}" with message "${error.message}".`;
  } else {
    addTeamCityVariable("ApiVersion", api.info.version);
    addTeamCityVariable("ApiName", api.info.name);
  }
});

function addTeamCityVariable(name, value) {
  const teamCityVariableTemplate = "##teamcity[setParameter name='{0}' value='{1}']";
  var teamCityVariable = format(teamCityVariableTemplate, name, value);
  
  // Redirect message to output to set up TeamCity variable
  console.log(teamCityVariable)
}