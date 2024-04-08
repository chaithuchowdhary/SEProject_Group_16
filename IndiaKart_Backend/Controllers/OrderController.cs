using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using IndiaKart.Models;
using IndiaKart.Models.ViewModels;
using System.Collections.Generic;
using System.Linq;

namespace IndiaKart.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        public OrderController(ShoppingContext context)
        {
            _context = context;
        }
        public ShoppingContext _context { get; set; }

        [HttpPost]
        public ActionResult Post(Order order)
        {
            _context.Orders.Add(order);
            _context.SaveChanges();
            return Ok(order);
        }

        [HttpGet("{id}")]
        public IEnumerable<Order> Get(int id)
        {
            var orders = _context.Orders.ToList().FindAll(o => o.UserId == id);
            return orders;
        }

        [HttpGet("items/{id}")]
        public IEnumerable<OrderItemsViewModel> GetItems(int id)
        {
            var items = _context.OrderItemsView.FromSqlInterpolated($"dbo.SP_OrderItems {id}").ToList();
            return items;
        }

    }
}
