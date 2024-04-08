using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using IndiaKart.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IndiaKart.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductCategoryController : ControllerBase
    {
        public ProductCategoryController(ShoppingContext context)
        {
            _context = context;
        }

        public ShoppingContext _context { get; }
        [HttpGet("{id}")]
        public ActionResult<IEnumerable<ProductCatViewModel>> Get(int id)
        {
            var data = _context.ProductCatViewModel.FromSqlInterpolated($"dbo.Products_Category {id}");
            return Ok(data);

        }

        [HttpGet()]
        public ActionResult<IEnumerable<ProductCatViewModel>> GetAll()
        {
            var data = _context.ProductCatViewModel.FromSqlInterpolated($"dbo.proc1 ");
            return Ok(data);

        }


        [HttpGet("getcategory")]
        public IEnumerable<Category> Get()
        {
            List<Category> data = _context.Category.ToList();
            return data;

        }

    }
}