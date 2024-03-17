using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IndiaKart.Models
{
    public class ProductDetailsViewModel
    {
        [Key]
        public int ProductId { get; set; }
        public int CategoryId { get; set; }
        public decimal Price { get; set; }
        public int RetailerId { get; set; }
        public string ProductName { get; set; }
        public string CategoryName { get; set; }
        public string Description { get; set; }
        public bool IsAvailable { get; set; }
        public string ThumbnailImage { get; set; }
        public string Brand { get; set; }
        public string CompanyName { get; set; }
        public string CompanyPhone { get; set; }
        public string CompanyAddress { get; set; }
        public string Email { get; set; }
    }
}
