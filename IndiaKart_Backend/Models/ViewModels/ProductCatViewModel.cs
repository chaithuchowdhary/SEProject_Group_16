using System.ComponentModel.DataAnnotations;

namespace IndiaKart.Models
{
    public class ProductCatViewModel
    {
        [Key]
        public int ProductId { get; set; }

        public int CategoryId { get; set; }

        public string Category { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public decimal Price { get; set; }

        public bool IsAvailable { get; set; }

        public string Image { get; set; }

        public string Brand { get; set; }


    }
}
