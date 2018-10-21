package com.victoria.console.entity.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.victoria.console.entity.dao.ConsoledeDao;
import com.victoria.console.entity.models.Console;

@Service
public class ConsoleServicesImple implements ConsoleServices{

	@Autowired
	private ConsoledeDao consoleDao;
	
	
	
	@Override
	public Console get(long id) {
		return consoleDao.findById(id).get();
	}

	@Override
	public List<Console> getAll() {
		return (List<Console>) consoleDao.findAll();
	}

	@Override
	public void post(Console console) {
		consoleDao.save(console);
	}

	@Override
	public void put(Console console, long id) {
		consoleDao.findById(id).ifPresent((x)->{
			console.setId(id);
			consoleDao.save(console);
		});
	}

	@Override
	public void delete(long id) {
		consoleDao.deleteById(id);
	}

}
