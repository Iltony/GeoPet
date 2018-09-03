using System;

namespace GeoPetClient.DataModels
{
    public class LostPet
    {
        public string Email { get; set; }
        public string Name { get; set; }
        public string Longitude { get; set; }
        public string Latitude { get; set; }
        public DateTime LostDate { get; set; }
    }
}
