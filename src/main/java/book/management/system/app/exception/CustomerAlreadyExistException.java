package book.management.system.app.exception;

public class CustomerAlreadyExistException extends RuntimeException{
	
	public CustomerAlreadyExistException() {
		
		super();
	}
	
	public CustomerAlreadyExistException(String message) {
		
		super(message);
	}

}
