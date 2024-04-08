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
    [Route("[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        public CartController(ShoppingContext context)
        {
            _context = context;
        }

        public ShoppingContext _context { get; }

        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            var cartItems = _context.CartItems.FromSqlInterpolated($"dbo.CartItems {id}").ToList().FindAll(u => u.UserId == id && u.OrderId == null);
            if (cartItems != null)
                return Ok(cartItems);
            else
                return NotFound();
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var cartItem = _context.OrderItems.FirstOrDefault(c => c.id == id);
            _context.OrderItems.Remove(cartItem);
            _context.SaveChanges();
        }

        [HttpPost()]
        public ActionResult Post(OrderItem orderItem)
        {
            _context.OrderItems.Add(orderItem);
            _context.SaveChanges();
            return Ok(orderItem);
        }

        [HttpPatch()]
        public ActionResult Patch(OrderItem orderItem)
        {
            _context.Entry(orderItem).State = EntityState.Modified;
            _context.SaveChanges();
            return Ok(orderItem);
        }
    }
}
