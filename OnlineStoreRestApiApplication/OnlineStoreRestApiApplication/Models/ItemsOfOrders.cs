using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OnlineStoreRestApiApplication.Models
{
    public class ItemsOfOrder
    {
        [Key]
        public int ItemID { get; set; }

        [ForeignKey("Product")]
        public int ProductID { get; set; }
        public Product Product { get; set; }

        [ForeignKey("Order")]
        public int OrderID { get; set; }
        public Order Order { get; set; }

        public decimal Amount { get; set; }
        public decimal Cost { get; set; }

    }
}