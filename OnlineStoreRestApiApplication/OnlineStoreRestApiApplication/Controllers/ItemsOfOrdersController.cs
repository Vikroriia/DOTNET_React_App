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
        private OnlineStoreDbContext db = new OnlineStoreDbContext();

        // GET: odata/ItemsOfOrders
        [EnableQuery]
        public IQueryable<ItemsOfOrder> GetItemsOfOrders()
        {
            return db.ItemsOfOrders;
        }

        // GET: odata/ItemsOfOrdersByOrder(5)
        //[EnableQuery]
        //public IQueryable<ItemsOfOrder> GetItemOfOrders(int key)
        //{
        //    return db.ItemsOfOrders.Where(itemOfOrder => itemOfOrder.OrderID == key);
        //}

        // POST: odata/ItemsOfOrder
        public async Task<IHttpActionResult> Post(ItemsOfOrder itemsOfOrder)
        {
            db.ItemsOfOrders.Add(itemsOfOrder);
            await db.SaveChangesAsync();

            return Created(itemsOfOrder);
        }
    }
        
}
