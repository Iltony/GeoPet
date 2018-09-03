using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace GeoPetClient.DataModels
{
    [Table("LostPet")]
    public class LostPet
    {
        public string Email { get; set; }
        public string Name { get; set; }
        public string Longitude { get; set; }
        public string Latitude { get; set; }
        public DateTime LostDate { get; set; }
    }
}
