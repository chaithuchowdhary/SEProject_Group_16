using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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
    public class CardController : ControllerBase
    {
        public CardController(ShoppingContext context)
        {
            _context = context;
        }

        public ShoppingContext _context { get; }


        [HttpGet("{id}")]
        public IEnumerable Get(int id)
        {
            var cards = _context.Cards.ToList().FindAll(c => c.UserId == id);
            return cards;
        }

        [HttpPost]
        public ActionResult Post(Card card)
        {
            _context.Cards.Add(card);
            _context.SaveChanges();
            return Ok(card);
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var card = _context.Cards.FirstOrDefault(c => c.id == id);
            if (card == null)
                return NotFound();
            _context.Cards.Remove(card);
            _context.SaveChanges();
            return Ok(card);
        }

    }
}
