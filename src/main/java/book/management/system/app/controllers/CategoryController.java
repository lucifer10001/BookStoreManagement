
	package book.management.system.app.controllers;

	import java.util.List;

	import javax.transaction.Transactional;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.http.HttpStatus;
	import org.springframework.web.bind.annotation.DeleteMapping;
	import org.springframework.web.bind.annotation.GetMapping;
	import org.springframework.web.bind.annotation.PostMapping;
	import org.springframework.web.bind.annotation.PutMapping;
	import org.springframework.web.bind.annotation.ResponseStatus;
	import org.springframework.web.bind.annotation.RestController;

	import book.management.system.app.entities.Category;
	import book.management.system.app.exception.CategoryAlreadyExistException;
	import book.management.system.app.exception.CategoryNotFoundException;
	import book.management.system.app.repos.ICategoryRepository;

	@RestController
	public class CategoryController {

		//Initialising the Logger
		private static final Logger log = LogManager.getLogger(CategoryController.class);

		@Autowired
		ICategoryRepository categoryRepository;

		@PostMapping("/categories")
		@ResponseStatus(code = HttpStatus.CREATED)
		public Category addCategory(String categoryName) {
			log.info("Controller Triggered");
			Category category = categoryRepository.findByCategoryName(categoryName);
			
			if(category == null) {
			
				categoryRepository.save(new Category(categoryName));
				
			}
			
			else
				throw new CategoryAlreadyExistException("Category already exist");
			
			return category;
		}

		@PutMapping("/categories/edit")
		@ResponseStatus(code = HttpStatus.NO_CONTENT)
		@Transactional
		public Category editCategory(Category category) {
			log.info("Controller Triggered");
//			Category cat = categoryRepository.findByCategoryName(category.getCategoryName());
//			
//			if(cat == null) 
//				throw new CategoryNotFoundException("There is no category in the repository with the name " + category.getCategoryName());
//				
//			else
//				cat.setCategoryName(category.getCategoryName());

			return categoryRepository.save(category);
		}

		@GetMapping("/categories/list")
		@ResponseStatus(code = HttpStatus.FOUND)
		public List<Category> viewAllCategories() {
			log.info("Controller Triggered");
			List<Category> list = categoryRepository.findAll();
			
			if(list.isEmpty())
				throw new CategoryNotFoundException("There is no category in the repository");
			
			return list;
		}

		@DeleteMapping("/categories/del")
		@ResponseStatus(code = HttpStatus.NO_CONTENT)
		public Category removeCategory(Category category) {
			log.info("Controller Triggered");
			Category cat  = categoryRepository.findByCategoryName(category.getCategoryName());
			
			if(cat==null)
				throw new CategoryNotFoundException("There is no category in the repository to delete with the name " + category.getCategoryName());
			else
				categoryRepository.delete(cat);
			
			return cat;
		}

	}
