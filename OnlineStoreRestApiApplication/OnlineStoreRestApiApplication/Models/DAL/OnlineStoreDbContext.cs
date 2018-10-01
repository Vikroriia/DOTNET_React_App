using System.Data.Entity;

namespace OnlineStoreRestApiApplication.Models.DAL
{
    public class OnlineStoreDbContext : DbContext
    {
        public OnlineStoreDbContext() : base("MinOnlineStore")
        {
            Database.SetInitializer<OnlineStoreDbContext>(null);
        }

        public DbSet<ItemsOfOrder> ItemsOfOrders { get; set; }

        public DbSet<Order> Orders { get; set; }

        public DbSet<Product> Products { get; set; }

        public DbSet<User> Users { get; set; }
    }
}