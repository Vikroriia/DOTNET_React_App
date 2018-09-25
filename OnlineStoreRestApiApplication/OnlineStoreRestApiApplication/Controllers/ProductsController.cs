using Microsoft.AspNet.OData;
using System.Data;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
//using System.Web.Http.OData;
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
    }
}
