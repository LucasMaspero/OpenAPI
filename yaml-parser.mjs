import SwaggerParser from "@apidevtools/swagger-parser";

SwaggerParser.validate("apilucas.yaml", (err, api) => {
  if (err) {
    console.error(err);
  } else {
    var lala = "##teamcity[setParameter name='ddd' value='" + api.info.title + "']";
    console.log(lala);
  }
});