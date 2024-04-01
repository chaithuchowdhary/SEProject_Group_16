using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using IndiaKart.Models;
using System.Collections;
using System.Linq;

namespace IndiaKart.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        public ProductController(ShoppingContext context)
        {
            _context = context;
        }


        public ShoppingContext _context { get; }

        [HttpGet]
        public IEnumerable Get()
        {
            var products = _context.Products.ToList();
            return products;
        }

        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            //Product prod = _context.Products.FirstOrDefault(p => p.id == id);
            var prod = _context.ProductDetails.FromSqlInterpolated($"dbo.ProductDetails {id}");
            if (prod != null)
            {

                return Ok(prod);
            }
            else
                return NotFound();
        }

        [HttpGet("/images/{id}")]
        public ActionResult Images(int id)
        {
            var imgs = _context.Images.ToList().FindAll(u => u.ProductId == id);

            if (imgs != null)
            {

                return Ok(imgs);
            }
            else
                return NotFound();
        }
    }
}
