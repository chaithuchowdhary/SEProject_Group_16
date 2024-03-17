using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IndiaKart.Models
{
    public class OrderItem
    {
        public int id { get; set; }
        public int UserId { get; set; }
        public int? OrderId { get; set; }
        public int Quantity { get; set; }
        public int ProductId { get; set; }
        public decimal Cost { get; set; }
        public DateTime DateAdded { get; set; }
    }
}
