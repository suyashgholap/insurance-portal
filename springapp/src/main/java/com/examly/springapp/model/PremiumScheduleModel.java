package com.examly.springapp.model;

import javax.persistence.*;
import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "premium_schedule")
public class PremiumScheduleModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "policy_id")
    private PolicyModel policy;

    @Column(name = "next_premium_date")
    private LocalDate nextPremiumDate;

    // Constructors, getters, and setters

    public PolicyModel getPolicy() {
        return policy;
    }

    public void setPolicy(PolicyModel policy) {
        this.policy = policy;
    }
}
