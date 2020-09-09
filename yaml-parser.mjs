import SwaggerParser from "@apidevtools/swagger-parser";

SwaggerParser.validate("apilucas.yaml", (err, api) => {
  if (err) {
    console.error(err);
  } else {
    console.log("API name: %s, Version: %s", api.info.title, api.info.version);
  }
});