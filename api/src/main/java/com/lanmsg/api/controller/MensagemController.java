package com.lanmsg.api.controller;

import com.lanmsg.api.entity.Mensagem;
import com.lanmsg.api.repository.MensagemRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/mensagens")
public class MensagemController {

    private final MensagemRepository repository;

    public MensagemController(MensagemRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    public ResponseEntity<Mensagem> salvar(@RequestBody Mensagem mensagem) {
        return ResponseEntity.ok(repository.save(mensagem));
    }

    @GetMapping
    public ResponseEntity<List<Mensagem>> listar() {
        return ResponseEntity.ok(repository.findAll());
    }
}
