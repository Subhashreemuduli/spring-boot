package com.example.EHomeCleaners.controller;

import com.example.EHomeCleaners.entity.User;
import com.example.EHomeCleaners.payload.JwtAuthRequest;
import com.example.EHomeCleaners.payload.JwtAuthResponse;
import com.example.EHomeCleaners.payload.UserDto;
import com.example.EHomeCleaners.security.JwtTokenHelper;
import com.example.EHomeCleaners.services.UserService;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping ("/api/v1/auth/")

public class AuthController {


    @Autowired
    private ModelMapper mapper;
    @Autowired
    private UserService userService;
    @Autowired
    private JwtTokenHelper jwtTokenHelper ;
    @Autowired
    private UserDetailsService userDetailsService ;
    @Autowired
    private AuthenticationManager authenticationManager ;






    @PostMapping("/login")
    public ResponseEntity <JwtAuthResponse> createToken(
            @RequestBody JwtAuthRequest request
            ) throws Exception {
        this.authenticate(request.getUsername(), request.getPassword());
        UserDetails userDetails =this.userDetailsService .loadUserByUsername(request.getUsername());
        String token=this.jwtTokenHelper .generateToken(userDetails ) ;





        JwtAuthResponse response =new JwtAuthResponse() ;
        response .setToken(token);
       response.setUser(this.mapper.map((User)userDetails,UserDto.class));
        return new ResponseEntity<JwtAuthResponse>(response, HttpStatus.OK);
    }
    private void authenticate (String username,String password) throws Exception {
        UsernamePasswordAuthenticationToken authenticationToken=new UsernamePasswordAuthenticationToken(username ,password);

    try{
        this.authenticationManager.authenticate(authenticationToken);
    }catch (BadCredentialsException e){
        System.out.println("Invalid details");
      throw new Exception("Invalid username and password");
    }

    }
    //register new user api
    @PostMapping("/register")
    public ResponseEntity<UserDto> registerUser(@RequestBody UserDto userDto)
    {
    UserDto registeredUser=  this.userService.registerNewUser(userDto);
     return new ResponseEntity<UserDto>(registeredUser,HttpStatus.CREATED);
    }
}
