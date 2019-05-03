package com.slavdom.config;

/**
 * Slavdom constants.
 */
public interface SlavdomConstants {

    // Regex for acceptable logins
    String LOGIN_REGEX = "^[_.@A-Za-z0-9-]*$";

    // Spring profiles for development, test and production
    String SPRING_PROFILE_DEVELOPMENT = "dev";
    String SPRING_PROFILE_TEST = "test";
    String SPRING_PROFILE_PRODUCTION = "prod";
}
