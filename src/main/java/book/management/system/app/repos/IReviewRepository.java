package book.management.system.app.repos;

import java.util.List;

//import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import book.management.system.app.entities.Book;
import book.management.system.app.entities.Customer;
//import book.management.system.app.entities.Book;
//import book.management.system.app.entities.Customer;
import book.management.system.app.entities.Review;


@Repository
public interface IReviewRepository extends JpaRepository<Review,Integer>{

	public Review findById (int id);
	public List<Review> findByBook(Book book);
	public List<Review> findByCustomer(Customer customer);
}