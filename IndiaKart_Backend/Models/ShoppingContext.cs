using Microsoft.EntityFrameworkCore;
using IndiaKart.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IndiaKart.Models
{
    public class ShoppingContext : DbContext
    {
        public ShoppingContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Product> Products { get; set; }
        public DbSet<Image1> Images { get; set; }
        public DbSet<CartItem> CartItems { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        public DbSet<UserAddress> UserAddresses { get; set; }
        public DbSet<Address1> Address { get; set; }
        public DbSet<Card> Cards { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<ProductDetailsViewModel> ProductDetails { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Retailer> Retailer { get; set; }
        public DbSet<ProductCatViewModel> ProductCatViewModel { get; set; }
        public DbSet<Category> Category { get; set; }
        public DbSet<OrderItemsViewModel> OrderItemsView { get; set; }
    }
}
