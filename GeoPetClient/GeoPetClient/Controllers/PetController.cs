using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GeoPetClient.DataModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GeoPetClient.Controllers
{
    [Route("api/PetController")]
    [ApiController]
    public class PetController : ControllerBase
    {
        private static List<Pet> pets = new List<Pet>();

        ////api/PetController/byEmail?email=fedelima@endava.com
        [HttpGet("byEmail")]
        public List<Pet> GetPets(string email)
        {
            if (pets.Count == 0)
            {
                pets.Add(new Pet
                {
                    Birthdate = "01/01/2018",
                    Color = "Black",
                    Email = "fedelima@endava.com",
                    ImageUrl = "http://www.google.com/img.jpg",
                    Name = "Jei ci",
                    Race = "German",
                    Type = "Dog"
                });
            }
            return pets.Where(x => x.Email.Equals(email)).ToList();
        }

        [HttpPost]
        public void CreatePet([FromBody] Pet pet)
        {
            pets.Add(pet);
        }
    }
}