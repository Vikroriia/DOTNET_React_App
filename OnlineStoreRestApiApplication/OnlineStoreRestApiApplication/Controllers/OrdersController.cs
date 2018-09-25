using Microsoft.AspNet.OData;
using OnlineStoreRestApiApplication.Models;
using OnlineStoreRestApiApplication.Models.DAL;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;

namespace OrderServices.Controllers
{
    public class OrdersController : ODataController
    {
        OrdersDbContext db = new OrdersDbContext();

        [EnableQuery]
        public IQueryable<Order> Get()
        {
            return db.Orders;
        }

        [EnableQuery]
        public SingleResult<Order> Get([FromODataUri] int key)
        {
            IQueryable<Order> result = db.Orders.Where(p => p.OrderID == key);
            return SingleResult.Create(result);
        }

        // POST: odata/ItemsOfOrders
        public async Task<IHttpActionResult> Post(Order order)
        {
            db.Orders.Add(order);
            await db.SaveChangesAsync();

            return Created(order);
        }
    }
}