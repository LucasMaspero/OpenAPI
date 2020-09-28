import SwaggerParser from "@apidevtools/swagger-parser";
import appRoot from "app-root-path";
import fs from "fs";
import YAML from "json-to-pretty-yaml"
 
var specFile = "security-api-specification.yaml";
var sourceSpecDir = appRoot.path + "/Specification/";
var bundledOutputDir = appRoot.path + "/Output/Specification/";
 
SwaggerParser.dereference(
  sourceSpecDir + specFile,
  {
    dereference: { circular: true },
  },
  (error, bundledSpec) => {
    if (error) {
      throw `Specification Bundler found error when trying to bundle specification file: ${error}`;
    }
 
    exportBundledSpec(bundledSpec);
  }
);
 
function exportBundledSpec(bundledSpec) {
  let bundledSpecYaml = YAML.stringify(bundledSpec);
 
  // Create output directory if not exists
  if (!fs.existsSync(bundledOutputDir)) {
    fs.mkdirSync(bundledOutputDir, { recursive: true }, (error) => {
      if (error) {
        throw `Specification Bundler found error when trying to create output directory: ${error}`;
      }
    });
  }
 
  // Export bundled spec
  fs.writeFileSync(bundledOutputDir + specFile, bundledSpecYaml);
}