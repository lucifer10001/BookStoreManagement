package book.management.system.app.exception;

public class ReviewAlreadyExistException extends RuntimeException {

	public ReviewAlreadyExistException() {
		
		super();
	}
	
	public ReviewAlreadyExistException(String message) {
		
		super(message);
	}
}
