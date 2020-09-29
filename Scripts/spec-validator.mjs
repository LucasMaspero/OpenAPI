import SwaggerParser from "@apidevtools/swagger-parser";
import appRoot from "app-root-path";

const ERROR = 1;

SwaggerParser.validate(appRoot.path + "/Specification/security-api-specification.yaml", (parserError) => {
  if (parserError) {
    var errorMessage = `OpenAPI Specification Parser found error "${parserError.name}" with message "${parserError.message}".`;
    console.error(errorMessage);
    process.exit(ERROR);
  } else {
    console.info("OpenAPI Specification Parser found no errors.");
  }
});
