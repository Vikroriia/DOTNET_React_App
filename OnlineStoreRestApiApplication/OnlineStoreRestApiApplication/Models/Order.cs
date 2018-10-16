using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OnlineStoreRestApiApplication.Models
{
    public class Order
    {
        [Key]
        public int OrderID { get; set; }

        [ForeignKey("User")]
        public int UserID { get; set; }
        public User User { get; set; }

        public bool StatusO { get; set; }
        public decimal Cost { get; set; }

        //public int[] ProductsID { get; set; }
        //public int[] ProductsAmount { get; set; }
        public ICollection<ItemsOfOrder> ItemsOfOrders { get; set; }
    }
}