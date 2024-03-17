using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IndiaKart.Models.ViewModels
{
    public class OrderItemsViewModel
    {
        [Key]
        public int id { get; set; }
        public int OrderItemsId { get; set; }
        public int OrderId { get; set; }
        public int Quantity { get; set; }
        public int ProductId { get; set; }
        public DateTime DateAdded { get; set; }
        public decimal Cost { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public string Brand { get; set; }
    }
}
