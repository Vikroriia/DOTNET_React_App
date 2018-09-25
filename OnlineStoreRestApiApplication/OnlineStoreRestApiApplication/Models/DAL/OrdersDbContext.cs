using System.Data.Entity;

namespace OnlineStoreRestApiApplication.Models.DAL
{
    public class OrdersDbContext : DbContext
    {
        public OrdersDbContext() : base("MinOnlineStore")
        {
            Database.SetInitializer<OrdersDbContext>(null);
        }

        public DbSet<Order> Orders { get; set; }

        public System.Data.Entity.DbSet<OnlineStoreRestApiApplication.Models.User> Users { get; set; }
    }
}