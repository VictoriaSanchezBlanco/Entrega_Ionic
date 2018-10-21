package com.victoria.console.entity.services;

import java.util.List;
import com.victoria.console.entity.models.Console;



public interface ConsoleServices {

	public Console get(long id);
	public List<Console>getAll();
	public void post(Console console);
	public void put(Console console, long id);
	public void delete(long id);
}
