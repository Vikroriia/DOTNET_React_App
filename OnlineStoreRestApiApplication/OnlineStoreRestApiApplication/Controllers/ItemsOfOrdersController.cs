using System.Data;
using System.Linq;
using Microsoft.AspNet.OData;
using System.Web.Http;
using OnlineStoreRestApiApplication.Models;
using OnlineStoreRestApiApplication.Models.DAL;
using System.Threading.Tasks;

namespace OnlineStoreRestApiApplication.Controllers
{
    public class ItemsOfOrdersController : ODataController
    {
        private ItemsOfOrdersDbContext db = new ItemsOfOrdersDbContext();

        // GET: odata/ItemsOfOrders
        [EnableQuery]
        public IQueryable<ItemsOfOrder> GetItemsOfOrders()
        {
            return db.ItemsOfOrders;
        }

        // GET: odata/ItemsOfOrders(5)
        [EnableQuery]
        public SingleResult<ItemsOfOrder> GetItemOfOrder([FromODataUri] int key)
        {
            return SingleResult.Create(db.ItemsOfOrders.Where(itemOfOrder => itemOfOrder.ItemID == key));
        }

        // POST: odata/ItemsOfOrders
        public async Task<IHttpActionResult> Post(ItemsOfOrder itemsOfOrder)
        {
            db.ItemsOfOrders.Add(itemsOfOrder);
            await db.SaveChangesAsync();

            return Created(itemsOfOrder);
        }
    }
}
