package com.example.EHomeCleaners.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class User  implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @NotEmpty
    @Size(min=4,message = "Username must be min of 4 characters")
    private String name;
    @Column(unique = true)
    @NotEmpty
    private String email;
    @NotEmpty
    private String password;
    @ManyToMany( fetch = FetchType.EAGER)
    private Set<Role> roles=new HashSet<>();


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
       List<SimpleGrantedAuthority> authorities= this.roles.stream().map((role)->new SimpleGrantedAuthority(role.getName())).collect(Collectors.toList());
        return authorities;
    }

    @Override
    public String getUsername() {
        return this.email;
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
}
