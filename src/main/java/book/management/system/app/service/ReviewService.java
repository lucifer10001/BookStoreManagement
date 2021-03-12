package book.management.system.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import book.management.system.app.entities.Book;
import book.management.system.app.entities.Customer;
import book.management.system.app.entities.Review;
import book.management.system.app.exception.ReviewAlreadyExistException;
import book.management.system.app.exception.ReviewNotFoundException;
import book.management.system.app.repos.IReviewRepository;
import book.management.system.app.serviceInterface.IReviewService;

@Service
public class ReviewService implements IReviewService{

	@Autowired
	IReviewRepository reviewRepository;
	
	@Autowired
	BookService bookService;
	
	@Autowired
	CustomerService customerService;
	
	@Override
	public List<Review> listAllReviews() {
		
		List<Review> myList = reviewRepository.findAll();
		
		if(myList == null)
			throw new ReviewNotFoundException("There is no review in the repository");
		else
			return myList;
	}

	@Override
	public Review addReview(Review review) {
		
		Review rev = reviewRepository.findById(review.getReviewId());
		if(rev==null)
			reviewRepository.save(review);
		
		else
			throw new ReviewAlreadyExistException("This review is already exist in the repository");
		
		return review;
	}

	@Override
	@Transactional
	public Review updateReview(Review review) {
		
		Review rev = reviewRepository.findById(review.getReviewId());
		
		if(rev==null)
			throw new ReviewNotFoundException("There is no review in the repository");
		
		else {
			
			rev.setComment(review.getComment());
		}
		
		return rev;
	}

	@Override
	public Review deleteReview(Review review) {
		
		Review rev = reviewRepository.findById(review.getReviewId());
		
		if(rev==null)
			throw new ReviewNotFoundException("There is no review in the repository");
		
		else
			reviewRepository.delete(rev);
		
		return rev;
	}

	@Override
	public Review viewReview(Review review) {
	
		Review rev = reviewRepository.findById(review.getReviewId());
		
		if(rev==null)
			throw new ReviewNotFoundException("There is no review in the repository");
		
		else
			return rev;
	}

	@Override
	public List<Review> listAllReviewsByBook(Book book) {
		
		Book b = bookService.viewBook(book);
		
		List<Review> myList = reviewRepository.findByBook(b);
		if(myList == null)
			throw new ReviewNotFoundException("There is no review in the repository");
		
		return myList;
	}

	@Override
	public List<Review> listAllReviewByCustomer(Customer customer) {
		
		Customer cs = customerService.viewCustomer(customer);
		
		List<Review> myList = reviewRepository.findByCustomer(cs);
		if(myList == null)
			throw new ReviewNotFoundException("There is no review in the repository");
		
		return myList;
	}

	@Override
	public List<Book> listMostFavoredBooks() {
		// TODO Auto-generated method stub
		return null;
	}

}
