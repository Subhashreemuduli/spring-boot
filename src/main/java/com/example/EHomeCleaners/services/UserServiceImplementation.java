package com.example.EHomeCleaners.services;

import com.example.EHomeCleaners.config.AppConstants;
import com.example.EHomeCleaners.entity.Role;
import com.example.EHomeCleaners.entity.User;
import com.example.EHomeCleaners.exception.ResourceNotFoundException;
import com.example.EHomeCleaners.payload.UserDto;
import com.example.EHomeCleaners.repository.RoleRepo;
import com.example.EHomeCleaners.repository.UserRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
@Service
public class UserServiceImplementation implements UserService{


    @Autowired
    private RoleRepo roleRepo ;

    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepo userRepo;

    @Override
    public UserDto registerNewUser(UserDto userDto) {
        User user=this.dtoToUser(userDto);

        //encoded the password
      user.setPassword(this.passwordEncoder.encode(user.getPassword()));


      //roles
        Role role=this.roleRepo.findById(AppConstants.NORMAL_USER).get();
        user.getRoles().add(role);
        User newUser= this.userRepo .save(user) ;

        return this.userToDto(newUser);
    }

    @Override
    public UserDto createUser(UserDto userDto) {
        User user=this.dtoToUser(userDto);
        User savedUser= this.userRepo .save(user);

        return this.userToDto(savedUser);
    }

    @Override
    public UserDto updateUser(UserDto userDto, Integer userId) {
        User user=this.userRepo.findById(userId)
                .orElseThrow(()-> new ResourceNotFoundException("User","Id",userId));
        user.setName(userDto.getName());
        user.setEmail(userDto.getEmail());
        user.setPassword(userDto.getPassword());
        User updatedUser=this.userRepo.save(user);
        UserDto userDto1 =this.userToDto(updatedUser);

        return userDto1;
    }

    @Override
    public UserDto getUserById(Integer userId) {
        User user=this.userRepo.findById(userId)
                .orElseThrow(()-> new ResourceNotFoundException("User","Id",userId));


        return this.userToDto(user);
    }

    @Override
    public List<UserDto> getAllUsers() {
        List <User> users=this.userRepo.findAll();
       List<UserDto> userDtos = users.stream().map(user->this.userToDto(user)).collect(Collectors.toList());

        return userDtos;
    }

    @Override
    public void deleteUser(Integer userId) {
        User user=this.userRepo.findById(userId)
                .orElseThrow(()-> new ResourceNotFoundException("User","Id",userId));
       this.userRepo.delete(user);
    }
    public User dtoToUser(UserDto userDto)
    {

        User user=this.modelMapper .map(userDto,User.class);

        return user;
    }
    public UserDto userToDto(User user)
    {
        UserDto userDto =this.modelMapper.map(user,UserDto.class);
        return userDto;
    }
}
