using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IndiaKart.Models
{
    public class Card
    {
        [Key]
        public int id { get; set; }
        public int UserId { get; set; }
        public string CardNumber { get; set; }
        public string Expiry { get; set; }
        public string Type { get; set; }
    }
}
