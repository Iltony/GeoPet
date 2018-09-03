using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GeoPetClient.DataModels
{
    public class Pet
    {
        public string Email { get; set; }
        public string Race { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public string Color { get; set; }
        public string ImageUrl { get; set; }
        public string Birthdate { get; set; }
    }
}
