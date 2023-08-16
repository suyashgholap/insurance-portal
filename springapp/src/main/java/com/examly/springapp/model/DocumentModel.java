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
@Table(name = "documents")
public class DocumentModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "document_type")
    private String documentType;

    @Column(name = "document_path")
    private String documentPath;

    @Column(name = "verified")
    private boolean verified;

    // Constructors, getters, and setters
}