using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IndiaKart.Models
{
    public class CartItem
    {
        [Key]
        public int id { get; set; }
        public int UserId { get; set; }
        public int? OrderId { get; set; }
        public int Quantity { get; set; }
        public int ProductId { get; set; }
        public int RetailerId { get; set; }
        public int Stock { get; set; }
        public decimal Price { get; set; }
        public string image { get; set; }
        public string Brand { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Cost { get; set; }
        public DateTime DateAdded { get; set; }


    }
}
