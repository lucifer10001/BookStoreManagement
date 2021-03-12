package book.management.system.app.controllers;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import book.management.system.app.entities.Book;
import book.management.system.app.entities.Customer;
import book.management.system.app.entities.Review;
import book.management.system.app.exception.BookNotFoundException;
import book.management.system.app.exception.ReviewAlreadyExistException;
import book.management.system.app.exception.ReviewNotFoundException;
import book.management.system.app.repos.IBookRepository;
import book.management.system.app.repos.IReviewRepository;
import book.management.system.app.service.BookService;
import book.management.system.app.service.CustomerService;

@RestController
public class ReviewController {
	
	//Initialising the Logger
		private static final Logger log = LogManager.getLogger(ReviewController.class);

	@Autowired
	IReviewRepository reviewRepository;
	
	@Autowired
	BookService bookService;
	
	@Autowired
	CustomerService customerService;
	
	@Autowired
	IBookRepository bookRepository;
	
	@GetMapping("/reviews/list")
	@ResponseStatus(code = HttpStatus.FOUND)
	public List<Review> listAllReviews() {
		log.info("Controller Triggered");
		List<Review> myList = reviewRepository.findAll();
		
		if(myList == null)
			throw new ReviewNotFoundException("There is no review in the repository");
		else
			return myList;
	}

	@PostMapping("/reviews")
	@ResponseStatus(code = HttpStatus.CREATED)
	public Review addReview(Review review) {
		log.info("Controller Triggered");
		Review rev = reviewRepository.findById(review.getReviewId());
		if(rev==null)
			reviewRepository.save(review);
		
		else
			throw new ReviewAlreadyExistException("This review is already exist in the repository");
		
		return review;
	}

	@PutMapping("/reviews/update")
	@ResponseStatus(code = HttpStatus.NO_CONTENT)
	@Transactional
	public Review updateReview(Review review) {
		log.info("Controller Triggered");
//		Review rev = reviewRepository.findById(review.getReviewId());
//		
//		if(rev==null)
//			throw new ReviewNotFoundException("There is no review in the repository");
//		
//		else {
//			
//			rev.setComment(review.getComment());
//		}
		
		return reviewRepository.save(review);
	}

	@DeleteMapping("/reviews/del")
	@ResponseStatus(code = HttpStatus.NO_CONTENT)
	public Review deleteReview(Review review) {
		log.info("Controller Triggered");
		Review rev = reviewRepository.findById(review.getReviewId());
		
		if(rev==null)
			throw new ReviewNotFoundException("There is no review in the repository");
		
		else
			reviewRepository.delete(rev);
		
		return rev;
	}

	@GetMapping("/reviews/view")
	@ResponseStatus(code = HttpStatus.FOUND)
	public Review viewReview(Review review) {
		log.info("Controller Triggered");
		Review rev = reviewRepository.findById(review.getReviewId());
		
		if(rev==null)
			throw new ReviewNotFoundException("There is no review in the repository");
		
		else
			return rev;
	}

	@GetMapping("/reviews/book")
	@ResponseStatus(code = HttpStatus.FOUND)
	public List<Review> listAllReviewsByBook(Book book) {
		log.info("Controller Triggered");
		Book b = bookService.viewBook(book);
		
		List<Review> myList = reviewRepository.findByBook(b);
		if(myList == null)
			throw new ReviewNotFoundException("There is no review in the repository");
		
		return myList;
	}

	@GetMapping("/reviews/customer")
	@ResponseStatus(code = HttpStatus.FOUND)
	public List<Review> listAllReviewByCustomer(Customer customer) {
		log.info("Controller Triggered");
		Customer cs = customerService.viewCustomer(customer);
		
		List<Review> myList = reviewRepository.findByCustomer(cs);
		if(myList == null)
			throw new ReviewNotFoundException("There is no review in the repository");
		
		return myList;
	}

	@GetMapping("/reviews/fav")
	@ResponseStatus(code = HttpStatus.FOUND)
	public List<Book> listMostFavoredBooks() {
		log.info("Controller Triggered");
		List<Book> books = bookRepository.listMostFavoredBooks();
		
		if(books == null) {
			
			throw new BookNotFoundException("There is no book in the repository");
		}
		return books;
	}
}

