package com.examly.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import com.examly.springapp.repo.PolicyModelRepository;
import com.examly.springapp.model.DocumentModel;
import com.examly.springapp.model.InsuranceApplication;
import com.examly.springapp.model.NotFoundException;
import com.examly.springapp.model.Policy;
import com.examly.springapp.model.PolicyModel;
import com.examly.springapp.model.PremiumScheduleModel;
import com.examly.springapp.model.UnauthorizedException;
import com.examly.springapp.model.UserModel;
import com.examly.springapp.repo.DocumentRepository;
import com.examly.springapp.repo.PremiumScheduleRepository;
import com.examly.springapp.repo.UserRepository;
import com.examly.springapp.repo.InsuranceApplicationRepository;
import com.examly.springapp.repo.PolicyDataRepository;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;


@RestController
@RequestMapping("/admin")
@EntityScan("com.examly.springapp.entity")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

    @Autowired
    private PolicyModelRepository policyModelRepository;

    @Autowired
    private DocumentRepository documentModelRepository;

    @Autowired
    private PremiumScheduleRepository premiumScheduleRepository;

    @Autowired
    private InsuranceApplicationRepository insuranceApplicationRepository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/policy")
    public PolicyModel createPolicy(@RequestBody PolicyModel policyModel) {
        PolicyModel policy = new PolicyModel();

        // Set data from the request
        policy.setPolicyId(policyModel.getPolicyId());
        policy.setCoverageAmount(policyModel.getCoverageAmount());
        policy.setDescription(policyModel.getDescription());
        policy.setName(policyModel.getName());
        policy.setPremium(policyModel.getPremium());

        // Set created by (assuming the admin is logged in and you have the admin's email)
        String adminEmail = "admin@example.com"; // Replace this with the admin's email
        UserModel admin = userRepository.findByEmail(adminEmail);
        policy.setCreatedBy(admin);

        // Save the policy
        return policyModelRepository.save(policy);
    }
/*
    @PostMapping("/addPolicy")
    @ResponseStatus(HttpStatus.CREATED)
    public PolicyData addPolicy(@RequestBody PolicyData data) {
        return policyDataRepository.save(data);
    }
    */
    @PostMapping("/approvePolicy/{applicationId}")
    public InsuranceApplication approvePolicy(@PathVariable Long applicationId) {
        InsuranceApplication application = insuranceApplicationRepository.findById(applicationId)
                .orElseThrow(() -> new NotFoundException("Insurance application not found with ID: " + applicationId));

        application.setApproved(true);
        return insuranceApplicationRepository.save(application);
    }

    @PostMapping("/verifyDocuments/{documentId}")
    public DocumentModel verifyDocuments(@PathVariable Long documentId) {
        DocumentModel document = documentModelRepository.findById(documentId)
                .orElseThrow(() -> new NotFoundException("Document not found with ID: " + documentId));

        document.setVerified(true);
        return documentModelRepository.save(document);
    }

    @DeleteMapping("/deletePolicy/{policyId}")
    public void deletePolicy(@PathVariable Long policyId) {
        PolicyModel policy = policyModelRepository.findById(policyId)
                .orElseThrow(() -> new NotFoundException("Policy not found with ID: " + policyId));

        policyModelRepository.delete(policy);
    }

    @PostMapping("/generate-premium-schedule/{policyId}")
    public void generatePremiumSchedule(@PathVariable Long policyId, @RequestBody PremiumScheduleModel data) {
        PolicyModel insurancePlan = policyModelRepository.findById(policyId)
                .orElseThrow(() -> new NotFoundException("Policy not found with ID: " + policyId));

        PremiumScheduleModel premiumSchedule = new PremiumScheduleModel();
        premiumSchedule.setPolicy(insurancePlan);
        premiumSchedule.setNextPremiumDate(data.getNextPremiumDate());

        premiumScheduleRepository.save(premiumSchedule);
    }

    @PutMapping("/edit-premium-schedule/{scheduleId}")
    public void editPremiumSchedule(@PathVariable int scheduleId, @RequestBody PremiumScheduleModel data) {
        PremiumScheduleModel premiumSchedule = premiumScheduleRepository.findById(scheduleId)
                .orElseThrow(() -> new NotFoundException("Premium schedule not found with ID: " + scheduleId));

        premiumSchedule.setNextPremiumDate(data.getNextPremiumDate());

        premiumScheduleRepository.save(premiumSchedule);
    }

    @DeleteMapping("/delete-premium-schedule/{scheduleId}")
    public void deletePremiumSchedule(@PathVariable int scheduleId) {
        PremiumScheduleModel premiumSchedule = premiumScheduleRepository.findById(scheduleId)
                .orElseThrow(() -> new NotFoundException("Premium schedule not found with ID: " + scheduleId));

        premiumScheduleRepository.delete(premiumSchedule);
    }

    @Autowired
    private PolicyDataRepository policyDataRepository;

    @GetMapping("/policy")
    public List<Policy> getAllPolicies() {
        return policyDataRepository.findAll();
    }

    @PutMapping("/editPolicy/{policyId}")
    @ResponseStatus(HttpStatus.OK)
    public Policy editPolicy(@RequestParam String policyId, @RequestBody Policy data) {
        Policy policyData = policyDataRepository.findById(policyId)
                .orElseThrow(() -> new NotFoundException("Policy not found with ID: " + policyId));

        policyData.setPolicytype(data.getPolicytype());
        policyData.setApplicantName(data.getApplicantName());
        policyData.setApplicantAddress(data.getApplicantAddress());
        policyData.setApplicantMobile(data.getApplicantMobile());
        policyData.setApplicantEmail(data.getApplicantEmail());
        policyData.setVehicleModel(data.getVehicleModel());

        return policyDataRepository.save(policyData);
    }
}
