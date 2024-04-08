using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using IndiaKart.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IndiaKart.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UserAddressController : ControllerBase
    {
        public UserAddressController(ShoppingContext context)
        {
            _context = context;
        }


        public ShoppingContext _context { get; }

        [HttpGet("{id}")]
        public IEnumerable Get(int id)
        {
            var addresses = _context.UserAddresses.FromSqlInterpolated($"dbo.UserAddress {id}").ToList();
            return addresses;
        }

        [HttpPost]
        public ActionResult Post(Address1 userAddress)
        {
            Address1 address = new Address1
            {
                UserId = userAddress.UserId,
                Address = userAddress.Address,
            };
            _context.Address.Add(address);
            _context.SaveChanges();
            return Ok(address);
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var add = _context.Address.FirstOrDefault(a => a.id == id);
            if (add == null)
                return NotFound();
            _context.Address.Remove(add);
            _context.SaveChanges();
            return Ok(add);
        }
    }
}
