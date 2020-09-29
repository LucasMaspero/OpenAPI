# PPA.FIP.Security.Documentation
This is the specification of the schemas and endpoints for the Fixed Income Solution's Security Service

## Requirements
    * **Node** 12 at a minimum.
    * **npm** 6 at a minimum.
    * **Java** 8 runtime at a minimum.
    * **Docker** 19 at a minimum.

## Installation
    * Run **npm install** and you will be ready to start running scripts (defined in below sections).

## Custom Scripts
To run custom scripts do npm run scriptName in your command line.
 
### Scripts avaialable:
 
* #### Specification:
    * **'bundle-spec'**: generates a single bundled specification file in path '/Output/Specification/'.
    * **'validate-spec'**: validates specification file syntax and structure.
    * **'parse-spec'**: parses specification file and generates files in path '/Output/BuildParameters/' with useful information for build process.
 
* #### Documentation:
    * **'documentation'**: runs swagger ui documentation web page locally at 'http://localhost:8080/'.

* #### Code Generation:
    * #### Server Code Generation:
        * **'generate-service-dotnetcore'**: generates service stubs for .Net Core in path '/Output/SecurityService/NetCore'.
        * **'generate-service-javaspring'**: generates service stubs for Java Spring in path '/Output/SecurityService/JavaSpring'.
        * **'generate-service-pythonaiohttp'**: generates service stubs for Python (using aiohttp) in path '/Output/SecurityService/PythonAioHttp'.
    * #### Client Code Generation:
        * **'generate-client-angular'**: generates client stubs for Angular in path '/Output/SecurityClient/Angular'.
        * **'generate-client-java'**: generates client stubs for Java in path '/Output/SecurityClient/Java'.
        * **'generate-client-python'**: generates client stubs for Python in path '/Output/SecurityClient/Python'.

* #### Docker:
To access swagger ui documentation web page within docker go to 'http://localhost:80/'
    * **'docker-build'**: builds docker image ("security-api-documentation-image") for swagger ui documentation web page.
    * **'docker-run**: runs docker container ("security-api-documentation-container") based on the built docker image. **Fails** if a previous container created by this command is running.
    * **'docker-start'**: builds docker image and runs docker container based on the built docker image.
