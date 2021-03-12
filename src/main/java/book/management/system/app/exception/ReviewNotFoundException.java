package book.management.system.app.exception;

public class ReviewNotFoundException extends RuntimeException{
	
	public ReviewNotFoundException() {
		
		super();
	}
	
	public ReviewNotFoundException(String message) {
		
		super(message);
	}

}
