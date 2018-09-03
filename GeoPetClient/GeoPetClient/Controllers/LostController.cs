using GeoPetClient.Database;
using GeoPetClient.DataModels;
using GeoPetClient.Utils;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace GeoPetClient.Controllers
{
    [Route("api/Lost")]
    [ApiController]
    public class LostController : ControllerBase
    {
        [HttpPost()]
        public void Create([FromBody] LostPet request)
        {
            var context = GeoPetContext.GetInstance();
            context.LostPets.Add(request);
            var pet = context.Pets.FirstOrDefault(p =>
                p.Name.Equals(request.Name) &&
                p.Email.Equals(request.Email));

            if (pet != null)
            {
                pet.IsLost = true;
            }

            context.SaveChanges();
            // Tweet lost pet
            TwitterHandler.GetInstance().TweetLostPet(request);
        }

        [HttpGet]
        public List<LostPet> GetLostPets()
        {
            var context = GeoPetContext.GetInstance();
            return context.LostPets.ToList();
        }
    }
}
