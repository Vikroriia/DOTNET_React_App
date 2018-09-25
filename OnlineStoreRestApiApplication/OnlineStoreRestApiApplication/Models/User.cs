using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace OnlineStoreRestApiApplication.Models
{
    public class User
    {
        [Key]
        public int UserID { get; set; }
        public string LoginProvider { get; set; }
        public string PasswordProvider { get; set; }
        public string FirstName { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string AddressResidence { get; set; }
        public bool isAdmin { get; set; }

        public ICollection<Order> Orders { get; set; }

    }
}