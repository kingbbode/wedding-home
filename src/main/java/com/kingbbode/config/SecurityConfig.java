package com.kingbbode.config;

/**
 * Created by YG-MAC on 2017. 3. 20..
 */

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.Collection;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter{

        private final UserDetails ADMIN = new UserDetails() {

            private final String userName = "yyy";
            private final String password = "kkk";

            @Override
            public Collection<? extends GrantedAuthority> getAuthorities() {
                return null;
            }

            @Override
            public String getPassword() {
                return password;
            }

            @Override
            public String getUsername() {
                return userName;
            }

            @Override
            public boolean isAccountNonExpired() {
                return true;
            }

            @Override
            public boolean isAccountNonLocked() {
                return true;
            }

            @Override
            public boolean isCredentialsNonExpired() {
                return true;
            }

            @Override
            public boolean isEnabled() {
                return true;
            }
        };

        @Override
        protected void configure(HttpSecurity httpSecurity) throws Exception {
            httpSecurity.csrf().disable();
            httpSecurity.headers().frameOptions().disable();
            httpSecurity.authorizeRequests()
                    .antMatchers("/cms", "/cms/**").authenticated()
                    .and()
                    .formLogin()
                    .loginPage("/login")
                    .loginProcessingUrl("/login")
                    .failureUrl("/")
                    .usernameParameter("username")
                    .passwordParameter("password")
                    .defaultSuccessUrl("/cms", true)
                    .and()
                    .logout()
                    .logoutSuccessUrl("/");
            httpSecurity.exceptionHandling().accessDeniedPage("/");
            httpSecurity.sessionManagement().invalidSessionUrl("/");
        }

        @Override
        protected void configure(AuthenticationManagerBuilder auth) throws Exception {
            auth.userDetailsService(username -> {
                if(!ADMIN.getUsername().equals(username)){
                    throw new UsernameNotFoundException("NONONO");
                }
                return ADMIN;
            });
        }
}
