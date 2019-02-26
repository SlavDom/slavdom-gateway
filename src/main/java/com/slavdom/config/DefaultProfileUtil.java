package com.slavdom.config;

import org.springframework.boot.SpringApplication;

import java.util.HashMap;
import java.util.Map;

/**
 * Utility class to load a Spring profile to be used as default.
 */
public class DefaultProfileUtil {

    private static final String SPRING_PROFILE_DEFAULT = "spring.profiles.default";

    private DefaultProfileUtil() {
    }

    /**
     * Set a default to use when no profile is configured.
     */
    public static void addDefaultProfile(SpringApplication app) {
        Map<String, Object> defaultProperties =  new HashMap<>();
        defaultProperties.put(SPRING_PROFILE_DEFAULT, SlavdomConstants.SPRING_PROFILE_DEVELOPMENT);
        System.out.println(defaultProperties);
        app.setDefaultProperties(defaultProperties);
    }

}
