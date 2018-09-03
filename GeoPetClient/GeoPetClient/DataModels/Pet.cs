using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace GeoPetClient.DataModels
{
    [Table("Pet")]
    public class Pet
    {
        [Key]
        public string Email { get; set; }
        public string Race { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public string Color { get; set; }
        public string ImageUrl { get; set; }
        public string Birthdate { get; set; }
    }
}
