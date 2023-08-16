package com.examly.springapp.model;

import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "insurance_plans")
public class PolicyModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long policyId;

    private String name;

    private String description;

    @Column(name = "coverage_amount")
    private float coverageAmount;

    private float premium;

    @ManyToOne
    @JoinColumn(name = "created_by")
    private UserModel createdBy;

    // Constructors, getters, and setters
}

