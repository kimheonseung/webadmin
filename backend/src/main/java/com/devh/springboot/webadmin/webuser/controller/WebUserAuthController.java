package com.devh.springboot.webadmin.webuser.controller;

import java.security.NoSuchAlgorithmException;
import java.security.Principal;
import java.security.spec.InvalidKeySpecException;

import com.devh.springboot.webadmin.common.util.component.JwtTokenUtils;
import com.devh.springboot.webadmin.request.AuthRequest;
import com.devh.springboot.webadmin.response.LoginResponse;
import com.devh.springboot.webadmin.webuser.model.WebUser;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@RestController
@Log4j2
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin
public class WebUserAuthController {
    private final AuthenticationManager authenticationManager;
    private final JwtTokenUtils jwtTokenUtils;
    private final UserDetailsService userDetailsService;

    @PostMapping("login")
    public ResponseEntity<Object> login(@RequestBody AuthRequest authRequest) throws InvalidKeySpecException, NoSuchAlgorithmException {
        log.info("[POST] /api/auth/login... " + authRequest);
        final Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getUserId(), authRequest.getPassword()));
        log.info("AUTHENTICATED " + authentication);

        SecurityContextHolder.getContext().setAuthentication(authentication);

        WebUser webUser = (WebUser) authentication.getPrincipal();

        String jwtToken = jwtTokenUtils.generateToken(webUser.getUserId());
        
        LoginResponse response = new LoginResponse();
        response.setToken(jwtToken);
        log.info("JWT TOKEN GENERATED " + response);

        return ResponseEntity.ok(response);
    }

    @GetMapping("userinfo")
    public ResponseEntity<?> getUserInfo(Principal user) {
        WebUser webUser = (WebUser) userDetailsService.loadUserByUsername(user.getName());
 
        return ResponseEntity.ok(webUser);
    }
}
