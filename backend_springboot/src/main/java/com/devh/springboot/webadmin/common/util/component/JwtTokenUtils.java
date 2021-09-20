package com.devh.springboot.webadmin.common.util.component;

import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;

import com.devh.springboot.webadmin.common.util.ExceptionUtils;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.extern.log4j.Log4j2;

@Component
@Log4j2
public class JwtTokenUtils {
    
    @Value("${jwt.auth.app}")
    private String appName;

    @Value("${jwt.auth.secret_key}")
    private String secretKey;

    @Value("${jwt.auth.expires_in}")
    private int expiresIn;

    private final SignatureAlgorithm SIGNATURE_ALGORITHM = SignatureAlgorithm.HS256;

    public String getUserIdFromToken(String token) {
        String userId;
        try {
            final Claims claims = this.getAllClaimsFromToken(token);
            userId = claims.getSubject();
        } catch (Exception e) {
            userId = null;
            log.warn(ExceptionUtils.getInstance().getPrintStackTraceToString(e));
        }

        return userId;
    }

    public String generateToken(String userId) throws InvalidKeySpecException, NoSuchAlgorithmException {
        return Jwts.builder()
                    .setIssuer(appName)
                    .setSubject(userId)
                    .setIssuedAt(new Date())
                    .setExpiration(generateExpirationDate())
                    .signWith(SIGNATURE_ALGORITHM, secretKey)
                    .compact();
    }

    public boolean validateToken(String token, UserDetails userDetails) {
        final String userId = getUserIdFromToken(token);
        return (
            userId != null &&
            userId.equals(userDetails.getUsername()) &&
            !isTokenExpried(token)
        );
    }

    public Date getIssuedAtDateFromToken(String token) {
        Date issueAt;

        try {
            final Claims claims = this.getAllClaimsFromToken(token);
            issueAt = claims.getIssuedAt();
        } catch (Exception e) {
            issueAt = null;
            log.warn(ExceptionUtils.getInstance().getPrintStackTraceToString(e));
        }

        return issueAt;
    }

    public String getAuthHeaderFromHeader(HttpServletRequest request) {
        return request.getHeader("Authorization");
    }

    public String getToken(HttpServletRequest request) {
        String authHeader = getAuthHeaderFromHeader(request);

        if(authHeader != null && authHeader.startsWith("Bearer "))
            return authHeader.substring(7);

        return null;
    }

    
    private Claims getAllClaimsFromToken(String token) {
        Claims claims;

        try {
            claims = Jwts.parser()
                            .setSigningKey(secretKey)
                            .parseClaimsJws(token)
                            .getBody();
        } catch (Exception e) {
            claims = null;
            log.warn(ExceptionUtils.getInstance().getPrintStackTraceToString(e));
        }

        return claims;
    }

    private Date generateExpirationDate() {
        final long currentMilis = System.currentTimeMillis();
        return new Date(currentMilis + expiresIn * 1000L);
    }

    private Date getExpirationDate(String token) {
        Date expireDate;

        try {
            final Claims claims = this.getAllClaimsFromToken(token);
            expireDate = claims.getExpiration();
        } catch (Exception e) {
            expireDate = null;
            log.warn(ExceptionUtils.getInstance().getPrintStackTraceToString(e));
        }

        return expireDate;
    }

    private boolean isTokenExpried(String token) {
        Date expireDate = getExpirationDate(token);
        return expireDate.before(new Date());
    }

}
