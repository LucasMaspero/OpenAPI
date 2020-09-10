import SwaggerParser from "@apidevtools/swagger-parser";
import format from "string-template";

SwaggerParser.validate("apilucas.yaml", (err, api) => {
  if (err) {
    console.error(err);
  } else {
    addTeamCityVariable("ApiVersion", api.info.version);
  }
});

function addTeamCityVariable(name, value) {
  const teamCityVariableTemplate = "##teamcity[setParameter name='{0}' value='{1}']";
  var teamCityVariable = format(teamCityVariableTemplate, name, value);
  
  // Redirect message to output to set up TeamCity variable
  console.log(teamCityVariable)
}