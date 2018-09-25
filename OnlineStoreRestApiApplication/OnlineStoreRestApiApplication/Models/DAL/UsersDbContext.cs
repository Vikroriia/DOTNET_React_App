using System.Data.Entity;

namespace OnlineStoreRestApiApplication.Models.DAL
{
    public class UsersDbContext : DbContext
    {
        public UsersDbContext() : base("MinOnlineStore")
        {
            Database.SetInitializer<UsersDbContext>(null);
        }

        public DbSet<User> Users { get; set; }
    }
}