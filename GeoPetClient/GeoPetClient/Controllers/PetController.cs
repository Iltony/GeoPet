using System.Collections.Generic;
using System.Linq;
using GeoPetClient.Database;
using GeoPetClient.DataModels;
using GeoPetClient.Utils;
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
            var context = GeoPetContext.GetInstance();

            return context.Pets.Where(x => x.Email.Equals(email)).ToList();
        }

        [HttpPost]
        public void CreatePet([FromBody] Pet pet)
        {
            var context = GeoPetContext.GetInstance();
            context.Pets.Add(pet);
            context.SaveChanges();
            TwitterHandler.GetInstance().TweetSomething("Se registró una mascota");
        }
    }
}