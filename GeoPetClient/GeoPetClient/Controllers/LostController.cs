using GeoPetClient.Database;
using GeoPetClient.DataModels;
using Microsoft.AspNetCore.Mvc;
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
            var pet = context.Pets.FirstOrDefault<Pet>(p =>
                p.Name.Equals(request.Name) &&
                p.Email.Equals(request.Email));

            if (pet != null) pet.IsLost = true;

            context.SaveChanges();
        }
    }
}
