using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IndiaKart.Models
{
    public class Image1
    {

        public int ProductId { get; set; }
        [Key]
        public int id { get; set; }
        public string Title { get; set; }
        public string Image { get; set; } 
    }
}
