using Microsoft.AspNet.OData;
using Newtonsoft.Json;
using OnlineStoreRestApiApplication.Models;
using OnlineStoreRestApiApplication.Models.DAL;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;

namespace OrderServices.Controllers
{
    public partial class OrdersController : ODataController
    {
        OnlineStoreDbContext db = new OnlineStoreDbContext();

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
        
        [HttpPost]
        // POST: odata/Orders
        public async Task<int> Post() 
        {
            var bodyString = Request.Content.ReadAsStringAsync().Result;
            var neworder = JsonConvert.DeserializeObject<NewOrder>(bodyString);
            for (int i = 0; i < neworder.ProductsID.Count(); i++)
            {
                neworder.Cost += db.Products.Find(neworder.ProductsID.ElementAt(i)).Cost * neworder.ProductsAmount.ElementAt(i);
            }
            Order order = new Order
            {
                UserID = neworder.UserID,
                StatusO = neworder.StatusO,
                Cost = neworder.Cost
            };

            db.Orders.Add(order);
            await db.SaveChangesAsync();
            Created(order);

            int orderID = db.Orders.ToList().Last().OrderID;

            for (int i = 0; i < neworder.ProductsID.Count(); i++)
            {
                decimal newAmount = db.Products.Find(neworder.ProductsID.ElementAt(i)).Amount - neworder.ProductsAmount.ElementAt(i);
                if (newAmount < 0)
                {
                    neworder.ProductsAmount[i] = neworder.ProductsAmount[i] + newAmount;
                    newAmount = 0;
                }
                db.Products.Find(neworder.ProductsID.ElementAt(i)).Amount = newAmount;
                Updated(db.Products.Find(neworder.ProductsID.ElementAt(i)));

                ItemsOfOrder itemsOfOrder = new ItemsOfOrder
                {
                    ProductID = neworder.ProductsID[i],
                    OrderID = orderID,
                    Amount = neworder.ProductsAmount[i],
                    Cost = db.Products.Find(neworder.ProductsID.ElementAt(i)).Cost * neworder.ProductsAmount.ElementAt(i)
                };

                db.ItemsOfOrders.Add(itemsOfOrder);
                await db.SaveChangesAsync();
                Created(itemsOfOrder);
            }

            return orderID;
        }
    }
}