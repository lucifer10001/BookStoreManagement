package book.management.system.app.exception;

public class OrderAlreadyExistException extends RuntimeException {

	public OrderAlreadyExistException() {
		
		super();
	}
	
	public OrderAlreadyExistException(String message) {
		
		super(message);
	}
}
