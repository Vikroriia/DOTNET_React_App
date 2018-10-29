using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace OnlineStoreRestApiApplication.Models
{
    public class Product
    {
        [Key]
        public int ProductID { get; set; }
        public string PName { get; set; }
        public decimal Amount { get; set; }
        public decimal Cost { get; set; }
        public string PImageName { get; set; }

        public ICollection<ItemsOfOrder> ItemsOfOrders { get; set; }
    }
}