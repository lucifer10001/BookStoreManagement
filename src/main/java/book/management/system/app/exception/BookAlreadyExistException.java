package book.management.system.app.exception;

public class BookAlreadyExistException  extends RuntimeException {

	public BookAlreadyExistException() {
		super();
	}

	public BookAlreadyExistException(String message) {
		super(message);
	}

}
