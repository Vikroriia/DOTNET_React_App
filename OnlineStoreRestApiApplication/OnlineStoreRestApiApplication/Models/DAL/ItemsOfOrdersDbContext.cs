using System.Data.Entity;

namespace OnlineStoreRestApiApplication.Models.DAL
{
    public class ItemsOfOrdersDbContext : DbContext
    {
        public ItemsOfOrdersDbContext() : base("MinOnlineStore")
        {
            Database.SetInitializer<ItemsOfOrdersDbContext>(null);
        }

        public DbSet<ItemsOfOrder> ItemsOfOrders { get; set; }

        public System.Data.Entity.DbSet<OnlineStoreRestApiApplication.Models.Order> Orders { get; set; }

        public System.Data.Entity.DbSet<OnlineStoreRestApiApplication.Models.Product> Products { get; set; }
    }
}