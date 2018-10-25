using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace OnlineStoreRestApiApplication.Models
{
    public class NewOrder
    {
        [Key]
        public int Id { get; set; }
        public int UserID { get; set; }
        public bool StatusO { get; set; }
        public decimal Cost { get; set; }
        public int[] ProductsID { get; set; }
        public decimal[] ProductsAmount { get; set; }
    }
}