package book.management.system.app.exception;

public class CategoryAlreadyExistException extends RuntimeException {

	public CategoryAlreadyExistException() {
		
		super();
	}
	
	public CategoryAlreadyExistException(String message) {
		
		super(message);
	}
}
