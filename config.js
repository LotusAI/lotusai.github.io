/**
 * Global Lotus AI configuration.
 * This object can injected into the page via ASP.NET.
 * It can be extended from withing .js though.
 */
var config = {

    api: {
        baseUrl: {
            development: "https://localhost:44393/api",
			test: "https://lotusaitest.azurewebsites.net/api",
			staging: "",
            production: "https://lotusai-production-portal.azurewebsites.net/api"
		}
	},





    /**
     * Return the base URL to the Connect back-end API for the current envrionment.
     */
    GetApiBaseUrl()
    {
        const environment = this.GetEnvironmentCode();

		const url = this.api.baseUrl[environment];
		
		if (environment == "unknown" || url == undefined)
		{
			console.error("Config::GetApiBaseUrl(" + environment + "): Something went wrong. Unknown environment. url=", url);
		}
		else
		{
			console.log("Config::GetApiBaseUrl(" + environment + "): url=", url);
			console.log("Config::GetApiBaseUrl()->getCurrentDomain()=", this.getCurrentDomain());
		}

        return url;
    },



    

    /**
     * Check if the current environment is "Production".
     * 
     * @returns bool
     */
    IsProduction()
    {
        if (this.getCurrentDomain() == "portal.lotusai.co")
        {
            return true;
        }

        return false;
    },





    /**
     * Check if the current environment is "Staging".
     * 
     * @returns bool
     */
    IsStaging()
    {
        if (this.getCurrentDomain() == "staging-portal.lotusai.co")
        {
            return true;
        }

        return false;
    },





    /**
     * Check if the current environment is "Test".
     * 
     * @returns bool
     */
    IsTest()
    {
		if (
			this.getCurrentDomain() == "test-portal.lotusai.co" || 
			this.getCurrentDomain() == "lotus-portal-test.netlify.app" ||
			this.getCurrentDomain() == "lotus-portal-develop.netlify.app"
		)
        {
            return true;
        }

        return false;
    },




    /**
     * Check if the current environment is "Development".
     * 
     * @returns bool
     */
    IsDevelopment()
    {
        if (this.getCurrentDomain() == "localhost" || this.getCurrentDomain() == "127.0.0.1")
        {
            return true;
        }

        return false;
    },





    /**
     * Return the code for the current environment.
     * 
     * @returns string Code of the current environment, otherwise "unknown".
     */
    GetEnvironmentCode()
    {
        if (this.IsProduction()) return "production";
		if (this.IsTest()) return "test";
		if (this.IsStaging()) return "staging";
        if (this.IsDevelopment()) return "development";

        return "unknown";
	},
	

    GetEnvironmentName()
    {
        if (this.IsProduction()) return "Production";
		if (this.IsTest()) return "Test";
		if (this.IsStaging()) return "Staging";
        if (this.IsDevelopment()) return "Development";

        return "unknown";
    },




	
    /**
     * Return the "domain" component of the URL this site is running on.
     * 
     * @returns string
     */
    getCurrentDomain()
    {
        return window.location.hostname;
    }
};