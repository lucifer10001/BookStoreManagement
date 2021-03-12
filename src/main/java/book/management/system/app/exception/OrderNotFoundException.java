package book.management.system.app.exception;

public class OrderNotFoundException extends RuntimeException {

	public OrderNotFoundException() {
		
		super();
	}
	
	public OrderNotFoundException(String message) {
		
		super(message);
	}
}
