package com.victoria.console.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.victoria.console.entity.models.Console;
import com.victoria.console.entity.services.ConsoleServices;
@CrossOrigin(origins= {"*","http://localhost:8080"})
@RestController
public class ConsoleController{
	
	@Autowired
	ConsoleServices consoleServices;
	
	@GetMapping("/console")
	public List<Console> getAllConsoles(){
		return consoleServices.getAll();
	}
	
	@GetMapping("/console/{id}")
	public Console getOne(@PathVariable(value="id") long id) {
		return consoleServices.get(id);
	}
	
	@PostMapping("/console")
	public void add(Console console) {
		consoleServices.post(console);
	}
	
	@PutMapping("/console/{id}")
	public void update(Console console,@PathVariable(value="id") long id) {
		consoleServices.put(console,id);
	}
	
	@DeleteMapping("/console/{id}")
	public void delete(@PathVariable(value="id") long id) {
		consoleServices.delete(id);
	}
}
