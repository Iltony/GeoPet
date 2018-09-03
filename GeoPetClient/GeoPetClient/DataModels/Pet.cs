using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GeoPetClient.DataModels
{
    [Table("Pet")]
    public class Pet
    {      
        public string Email { get; set; }
        public string Name { get; set; }
        public string Race { get; set; }
        public string Type { get; set; }
        public string Color { get; set; }
        public string ImageUrl { get; set; }
        public DateTime Birthdate { get; set; }
        public bool IsLost { get; set; }
      
    }
}
