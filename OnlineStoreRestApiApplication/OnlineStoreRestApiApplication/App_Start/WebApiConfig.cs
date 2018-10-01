using Microsoft.AspNet.OData.Builder;
using Microsoft.AspNet.OData.Extensions;
using OnlineStoreRestApiApplication.Models;
using System.Web.Http;

namespace OnlineStoreRestApiApplication
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {            
            ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
            builder.EntitySet<ItemsOfOrder>("ItemsOfOrders");
            builder.EntitySet<Order>("Orders");
            builder.EntitySet<Product>("Products");
            builder.EntitySet<User>("Users");
            config.MapODataServiceRoute(
                routeName: "ODataRoute",
                routePrefix: null,
                model: builder.GetEdmModel());
            config.Count().Filter().OrderBy().Expand().Select().MaxTop(null);
        }
    }
}
