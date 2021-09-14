package com.devh.springboot.webadmin.configuration;

import com.devh.springboot.webadmin.webuser.service.WebUserService;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import lombok.RequiredArgsConstructor;
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
@Configuration
// @EnableWebSecurity
@RequiredArgsConstructor
@Log4j2
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    
    private final WebUserService webUserService;

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // http.authorizeRequests().anyRequest().permitAll(); /* permit any request */
        // http.authorizeRequests().anyRequest().authenticated(); /* any request need authentication */

        http.authorizeRequests()
            .antMatchers("/api/auth/**").permitAll()
            .antMatchers("/api/**").hasRole("USER");
        /* http basic auth */
        http.httpBasic();
        http.formLogin();
        http.csrf().disable();
    }
    
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        /* AuthenticationManagerBuilder : 코드를 통해 인증 매니저를 설정 */
        /* test를 위해 inmemory에 유저를 저장 */
        auth.inMemoryAuthentication()
            .withUser("user1")
            // .password("$2a$10$HPsXOkWUd52wnMx37JseMOxcmZezEJDS9uwSH01WVBzOw3CfPK9ry")
            .password(passwordEncoder().encode("1234"))
            // .authorities("USER", "ADMIN")
            .roles("USER");

        /* Database Authentication */
        auth.userDetailsService(webUserService)
            .passwordEncoder(passwordEncoder());
    }

    // @Override
    // protected AuthenticationManager authenticationManager() throws Exception {
    //     // TODO Auto-generated method stub
    //     return super.authenticationManager();
    // }
    
    
}
