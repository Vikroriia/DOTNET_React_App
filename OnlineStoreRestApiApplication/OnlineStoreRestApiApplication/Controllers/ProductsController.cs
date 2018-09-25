using Microsoft.AspNet.OData;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using OnlineStoreRestApiApplication.Models;
using OnlineStoreRestApiApplication.Models.DAL;

namespace OnlineStoreRestApiApplication.Controllers
{
    public class ProductsController : ODataController
    {
        private ProductsDbContext db = new ProductsDbContext();

        // GET: odata/Products
        [EnableQuery]
        public IQueryable<Product> GetProducts()
        {
            return db.Products;
        }

        // GET: odata/Products(5)
        [EnableQuery]
        public SingleResult<Product> GetProduct([FromODataUri] int key)
        {
            return SingleResult.Create(db.Products.Where(product => product.ProductID == key));
        }

        // POST: odata/ItemsOfOrders
        public async Task<IHttpActionResult> Post(Product product)
        {
            db.Products.Add(product);
            await db.SaveChangesAsync();

            return Created(product);
        }
    }
}
