package com.devh.springboot.webadmin.configuration;

import org.springframework.context.annotation.Configuration;
// import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
// import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import lombok.extern.log4j.Log4j2;

/**
 * <pre>
 * Description :
 *     스프링 시큐리티 설정
 * ===============================================
 * Member fields :
 *
 * ===============================================
 *
 * Author : HeonSeung Kim
 * Date   : 2021/03/25
 * </pre>
 */
// @Configuration
@Log4j2
public class SecurityConfig /*extends WebSecurityConfigurerAdapter */{
    
    
    // @Override
    // protected void configure(HttpSecurity http) throws Exception {
    //     http
    //         .authorizeRequests()
    //         .antMatchers("/api/**").hasRole("USER");
    //     http.csrf().disable();
    // }
    
    // @Override
    // protected void configure(AuthenticationManagerBuilder auth) throws Exception {
    //     /* AuthenticationManagerBuilder : 코드를 통해 인증 매니저를 설정 */
    //     /* test를 위해 inmemory에 유저를 저장 */
    //     auth
    //             .inMemoryAuthentication()
    //             .withUser("user1")
    //             .password("$2a$10$HPsXOkWUd52wnMx37JseMOxcmZezEJDS9uwSH01WVBzOw3CfPK9ry")
    //             .roles("USER");
    // }
    
}
