
import java.util.Collections;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

@Configuration
public class SwaggerConfig {

	@Bean
	public Docket api()
	{
		return new Docket(DocumentationType.SWAGGER_2)
				.select()
				.paths(PathSelectors.regex("/api/v1.*"))
				.apis(RequestHandlerSelectors.basePackage(" book.management.system.app"))
				.build()
				.apiInfo(getApiInfo());
	}
    
    private ApiInfo getApiInfo() {
	    return new ApiInfo(
		    "Book Store Management Application",
		    "Authors:Sandeep Singh, Preeti Pandey, Aniket Solanki, Poorvi Malik",
		    "1.0.0",
		    "https://cba.cg.com",
		    new Contact("Batch 2, Group 1 DCX","https://capgemini.com","group1@rao.life"),
		    "GNU V3",
		    "LICENSE URL",
		    Collections.emptyList()
	    );
	}
}
