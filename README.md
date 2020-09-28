# PPA.FIP.Security.Documentation
This is the specification of the schemas and endpoints for the Fixed Income Solution's Security Service
 
## Custom Scripts
To run custom scripts do npm run scriptName in your command line.
 
### Scripts avaialable:
 
* #### Specification:
    * **'bundle-spec'**: generates a single bundled specification file in path '/Output/Specification/'.
    * **'validate-spec'**: validates specification file syntax and structure.
 
* #### Documentation:
    * **'documentation'**: runs swagger ui documentation web page locally at 'http://localhost:8000/'.
 
* #### Code Generation:
    * #### Server Code Generation:
        * **'generate-service-dotnetcore'**: generates service stubs for .Net Core in path '/Output/SecurityService/NetCore'.
        * **'generate-service-javaspring'**: generates service stubs for Java Spring in path '/Output/SecurityService/JavaSpring'.
        * **'generate-service-pythonaiohttp'**: generates service stubs for Python (using aiohttp) in path '/Output/SecurityService/PythonAioHttp'.
    * #### Client Code Generation:
        * **'generate-client-angular'**: generates client stubs for Angular in path '/Output/SecurityClient/Angular'.
        * **'generate-client-java'**: generates client stubs for Java in path '/Output/SecurityClient/Java'.
        * **'generate-client-python'**: generates client stubs for Python in path '/Output/SecurityClient/Python'.