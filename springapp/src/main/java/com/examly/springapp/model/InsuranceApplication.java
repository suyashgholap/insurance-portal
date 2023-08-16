package com.examly.springapp.model;

import javax.persistence.*;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "insurance_applications")
public class InsuranceApplication {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "plan_id")
    private Long planId;

    private int years;

    private float premium;

    @Column(name = "application_date")
    private LocalDateTime applicationDate;

    private boolean approved;

    // Constructors, getters, and setters
}