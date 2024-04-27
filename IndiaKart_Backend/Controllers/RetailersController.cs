using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using IndiaKart.Models;

namespace IndiaKart.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RetailersController : ControllerBase
    {
        private readonly ShoppingContext _context;

        public RetailersController(ShoppingContext context)
        {
            _context = context;
        }

        // GET: api/Retailers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Retailer>>> GetRetailers()
        {
            return await _context.Retailer.ToListAsync();
        }

        // GET: api/Retailers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Retailer>> GetRetailer(int id)
        {
            var retailer = await _context.Retailer.FindAsync(id);

            if (retailer == null)
            {
                return NotFound();
            }

            return retailer;
        }

        // PUT: api/Retailers/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRetailer(int id, Retailer retailer)
        {
            if (id != retailer.id)
            {
                return BadRequest();
            }

            _context.Entry(retailer).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RetailerExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Retailers
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Retailer>> PostRetailer(Retailer retailer)
        {
            _context.Retailer.Add(retailer);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRetailer", new { id = retailer.id }, retailer);
        }

        // DELETE: api/Retailers/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Retailer>> DeleteRetailer(int id)
        {
            var retailer = await _context.Retailer.FindAsync(id);
            if (retailer == null)
            {
                return NotFound();
            }

            _context.Retailer.Remove(retailer);
            await _context.SaveChangesAsync();

            return retailer;
        }

        [Route("login")]
        [HttpPost]
        public ActionResult Login([FromBody] LoginModel model)
        {
            var user = _context.Retailer.ToList();
            foreach (var u in user)
            {
                if (u.Username == model.Username && u.Password == model.Password)
                {
                    return Ok(new
                    {
                        id = u.id,
                        Username = u.Username,
                        Firstname = u.FirstName,
                        Lastname = u.LastName
                    });
                }
                if (u.Username == model.Username && u.Password != model.Password)
                {
                    return NotFound("Password not matching");
                }
            }
            return NotFound("User not found");
        }

        //[HttpPost]
        //[Route("batch")]
        //public async Task<ActionResult<Retailer>> PostRetailer(Retailer[] retailer)
        //{
        //    foreach (Retailer r in retailer)
        //    {
        //        _context.Retailer.Add(r);
        //    }
        //    await _context.SaveChangesAsync();

        //    return Ok(retailer);
        //}

        private bool RetailerExists(int id)
        {
            return _context.Retailer.Any(e => e.id == id);
        }
    }
}