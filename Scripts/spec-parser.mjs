import SwaggerParser from "@apidevtools/swagger-parser";
import appRoot from "app-root-path";
import fs from "fs";

const ERROR = 1;

var buildParametersOutputDir = appRoot.path + "/Output/BuildParameters/";

// Parse Spec File
SwaggerParser.validate(appRoot.path + "/Specification/security-api-specification.yaml", (parserError, securityApiSpec) => {
  if (parserError) {
    var errorMessage = `OpenAPI Specification Parser found error "${parserError.name}" with message "${parserError.message}".`;
    console.error(errorMessage);
    process.exit(ERROR);
  } else {
    pushBuildParameters(securityApiSpec);
  }
});

function pushBuildParameters(securityApiSpec) {
  var apiMajorVersion = securityApiSpec.info.version.split(".")[0];                 // Take the first number of the version
  var apiMinorVersion = securityApiSpec.info.version.split(".").slice(1).join("."); // Take the other numbers of the version
  var apiName = securityApiSpec.info.title.split(" ").join("");                     // Whitespaces removed

  // Push Build Parameters to Output
  pushBuildParameter("ApiMajorVersion", apiMajorVersion);
  pushBuildParameter("ApiMinorVersion", apiMinorVersion);
  pushBuildParameter("ApiName", apiName);
}

function pushBuildParameter(parameterName, parameterValue) {
  // Create output directory if not exists
  if (!fs.existsSync(buildParametersOutputDir)) {
    fs.mkdirSync(buildParametersOutputDir, { recursive: true }, (error) => {
      if (error) {
        throw `Specification Parser found error when trying to create output directory: ${error}`;
      }
    });
  }
 
  // Push Each Parameter as a file (fileName = parameterName, fileValue = parameterValue)
  fs.writeFileSync(buildParametersOutputDir + parameterName, parameterValue);
}