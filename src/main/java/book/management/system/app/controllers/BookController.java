package book.management.system.app.controllers;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import book.management.system.app.entities.Book;
import book.management.system.app.entities.Category;
import book.management.system.app.exception.BookAlreadyExistException;
import book.management.system.app.exception.BookNotFoundException;
import book.management.system.app.exception.CategoryNotFoundException;
import book.management.system.app.repos.IBookRepository;
import book.management.system.app.repos.ICategoryRepository;

@RestController
public class BookController {

	private static final Logger log = LogManager.getLogger(BookController.class);
	@Autowired
	IBookRepository  bookRepository;
	
	@Autowired
	ICategoryRepository categoryRepository;
	
	
	@PostMapping("/books")
	@ResponseStatus(code = HttpStatus.CREATED)
	public Book createBook(@RequestBody Book b)
	{
		log.info("Controller Triggered");
		Book book = bookRepository.findByTitleAndAuthor(b.getTitle(),b.getAuthor());
		
		if(book == null) {
		
			bookRepository.save(b);
			
		}
		
		else
			throw new BookAlreadyExistException("Book with title " + b.getTitle() + " by the author " + b.getAuthor() + " already exist");
	
		return b;
		
	}
	
	@GetMapping("/books/list")
	@ResponseStatus(code = HttpStatus.FOUND)
	public List<Book> listAllBook(){
		log.info("Controller Triggered");
		List<Book> list = bookRepository.findAll();
		
		if(list.isEmpty())
			throw new BookNotFoundException("There is no book in the repository");
		
		return list;
		
	}
	
	@DeleteMapping("/books/del")
	@ResponseStatus(code = HttpStatus.NO_CONTENT)
	public Book deleteBook(Book b) {
		log.info("Controller Triggered");
		Book book  = bookRepository.findById(b.getBookId());
			
		if(book ==null)
			throw new BookNotFoundException("There is no book in the repository to delete with the id " + b.getBookId());
		
		else
			bookRepository.delete(book);
		
		return book;
	}
	
	@PutMapping("/books/edit")
	@ResponseStatus(code = HttpStatus.NO_CONTENT)
	@Transactional
	public Book editBook(Book b) {
		log.info("Controller Triggered");
//		Book book = bookRepository.findById(b.getBookId());
//		
//		if(book == null) 
//			throw new BookNotFoundException("There is no book in the repository with the id " + b.getBookId());
//		else {
//			book.setAuthor(b.getAuthor());
//		}
				
		return bookRepository.save(b);
	}
	
	@GetMapping("/books/view")
	@ResponseStatus(code = HttpStatus.FOUND)
	public Book viewBook(Book b) {
		log.info("Controller Triggered");
		Book book = bookRepository.findById(b.getBookId());
		
		if(book ==null) 
			throw new BookNotFoundException("There is no book in the repository with the id " + b.getBookId());
		
		return b;
	}
	
//	public Optional<Book> viewBook(int b) {
//		
//		Optional<Book> book = bookRepository.findById(b);
//		
//		if(!book.isPresent()) 
//			throw new BookNotFoundException("There is no book in the repository with the id " + b);
//		
//		return book;
//	}
	
	@GetMapping("/books/category")
	@ResponseStatus(code = HttpStatus.FOUND)
	public List<Book> listBooksByCategory(String category){
		log.info("Controller Triggered");
		Category cat = categoryRepository.findByCategoryName(category);
		
		if(cat==null)
			throw new CategoryNotFoundException("There is no such category with the name " + category);
		
		List<Book> book  = bookRepository.findByCategory(cat);
		
		if(book.isEmpty())
			throw new BookNotFoundException("There is no book in the category " + category);
		
		return book;
		
	}
	@GetMapping("/books/best")
	@ResponseStatus(code = HttpStatus.FOUND)
	public List<Book> listBestSellingBook() {
		log.info("Controller Triggered");
		return bookRepository.listBestSellingBooks();
	}
	
}

