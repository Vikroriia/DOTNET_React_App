using Microsoft.AspNet.OData;
using OnlineStoreRestApiApplication.Models;
using OnlineStoreRestApiApplication.Models.DAL;
using System.Linq;
using System.Web.Http;

namespace UserServices.Controllers
{
    public class UsersController : ODataController
    {
        UsersDbContext db = new UsersDbContext();

        [EnableQuery]
        public IQueryable<User> Get()
        {
            return db.Users;
        }

        [EnableQuery]
        public SingleResult<User> Get([FromODataUri] int key)
        {
            IQueryable<User> result = db.Users.Where(p => p.UserID == key);
            return SingleResult.Create(result);
        }
    }
}