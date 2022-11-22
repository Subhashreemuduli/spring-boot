package com.example.EHomeCleaners.payload;

import com.example.EHomeCleaners.entity.Role;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;

@NoArgsConstructor
@Getter
@Setter
public class UserDto {

    private Integer id;
    @NotEmpty
    @Size(min=4,message ="Username must be minimum of 4 characters" )
    private String name;
    @NotEmpty
    @Email(message = "Email address is not valid")
    private String email;
    @NotEmpty
    @Size(min=3,max=10,message = "Password must be minimum of 3 characters and maximum of 10 characters")
    private String password;

    private Set<RoleDto> roles=new HashSet<>();

    @JsonIgnore
    public String getPassword(){
        return this.password;
    }

    @JsonProperty
    public void setPassword(String password)
    {
        this.password=password;
    }
}
