using Microsoft.AspNet.OData;
using OnlineStoreRestApiApplication.Models;
using OnlineStoreRestApiApplication.Models.DAL;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;

namespace UserServices.Controllers
{
    public class UsersController : ODataController
    {
        OnlineStoreDbContext db = new OnlineStoreDbContext();

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

        // POST: odata/ItemsOfOrders
        [HttpPost]
        public async Task<IHttpActionResult> Post(User user)
        {
            db.Users.Add(user);
            await db.SaveChangesAsync();

            return Created(user);
        }
    }
}