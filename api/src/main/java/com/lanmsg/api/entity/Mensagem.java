package com.lanmsg.api.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "mensagens")
@Data
public class Mensagem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false)
    private String mensagem;
}
