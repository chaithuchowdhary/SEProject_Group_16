using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IndiaKart.Models
{
    public class Order
    {
        [Key]
        public int id { get; set; }
        public int UserId { get; set; }
        public decimal Total { get; set; }
        public string ShippingAddress { get; set; }
        public DateTime Date { get; set; }
        public string Status { get; set; }
        public string TransactionId { get; set; }
    }
}
