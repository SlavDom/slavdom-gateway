package com.slavdom;

import com.slavdom.config.DefaultProfileUtil;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

/**
 * This is a helper class that provides an alternative to creating a web.xml.
 * This will be invoked only when the application is deployed to a Servlet container.
 */
public class ApplicationWebXml extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        // set a default to use when no profile is configured.
        DefaultProfileUtil.addDefaultProfile(builder.application());
        return super.configure(builder);
    }

}
