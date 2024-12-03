using Bookshelf.Models;
using Bookshelf.Models.Repositories;
using Microsoft.AspNetCore.Mvc;
using Npgsql;


namespace Bookshelf.Controllers
{
    [ApiController]
    [Route("api/books")]
    public class BookController : ControllerBase
    {
        private readonly string _connectionString = "Server=localhost;Port=5432;User Id=postgres;Password=admin;Database=sql-injection-workshop";

        [HttpGet]
        public IActionResult GetAll([FromQuery] string search="")
        {
            try
            {
                var repository = new BookRepository(new NpgsqlConnection(_connectionString));
                return Ok(repository.GetAll(search));
            }
            catch (Exception)
            {
                return StatusCode(500, "An error occurred while retrieving books.");
            }
            
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            try
            {
                var repository = new BookRepository(new NpgsqlConnection(_connectionString));
                return Ok(repository.GetById(id));
            }
            catch (Exception)
            {
                return StatusCode(500, "An error occurred while retrieving a book.");
            }
        }

        [HttpPost()]
        public IActionResult Create(Book book)
        {
            try
            {
                var repository = new BookRepository(new NpgsqlConnection(_connectionString));
                return Ok(repository.Create(book));
            }
            catch (Exception)
            {
                return StatusCode(500, "An error occurred while creating a book.");
            }   
        }

        [HttpPut()]
        public IActionResult Update(Book book)
        {
            try
            {
                var repository = new BookRepository(new NpgsqlConnection(_connectionString));
                repository.Update(book);
                return Ok();
            }
            catch (Exception)
            {
                return StatusCode(500, "An error occurred while updating a book.");
            }
            
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                var repository = new BookRepository(new NpgsqlConnection(_connectionString));
                repository.Delete(id);
                return Ok();
            }
            catch (Exception)
            {
                return StatusCode(500, "An error occurred while deleting a book.");
            }
        }
    }
}
