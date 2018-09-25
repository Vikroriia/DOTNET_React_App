using System.Data.Entity;

namespace OnlineStoreRestApiApplication.Models.DAL
{
    public class ProductsDbContext : DbContext
    {
        public ProductsDbContext() : base("MinOnlineStore")
        {
            Database.SetInitializer<ProductsDbContext>(null);
        }

        public DbSet<Product> Products { get; set; }
    }
}