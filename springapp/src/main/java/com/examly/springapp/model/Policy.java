package com.examly.springapp.model;

import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "policy")
public class Policy {
    @Id
    @Column(name = "policy_id")
    private Long policyId;

    @Column(name = "policy_type")
    private String policytype;

    @Column(name = "applicant_name")
    private String applicantName;

    @Column(name = "applicant_address")
    private String applicantAddress;

    @Column(name = "applicant_mobile")
    private String applicantMobile;

    @Column(name = "applicant_email")
    private String applicantEmail;

    @Column(name = "vehicle_model")
    private String vehicleModel;

    @Column(name = "a8")
    private String arg8;

    @Column(name = "a7")
    private String arg7;

    public Policy(
        Long policyId,
        String policytype,
        String applicantName,
        String applicantAddress,
        String applicantMobile,
        String applicantEmail,
        String vehicleModel
    ) {
        this.policyId = policyId;
        this.policytype = policytype;
        this.applicantName = applicantName;
        this.applicantAddress = applicantAddress;
        this.applicantMobile = applicantMobile;
        this.applicantEmail = applicantEmail;
        this.vehicleModel = vehicleModel;
    }
}
