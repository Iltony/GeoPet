using GeoPetClient.Database;
using GeoPetClient.DataModels;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace GeoPetClient.Controllers
{
    [Route("api/Found")]
    [ApiController]
    public class FoundController : ControllerBase
    {
        [HttpPost]
        public void Create([FromBody] LostPet request)
        {
            var context = GeoPetContext.GetInstance();
            var lostPet = context.Pets.FirstOrDefault<Pet>(x =>
                x.Name.Equals(request.Name) &&
                x.Email.Equals(request.Email));

            if (lostPet != null)
            {
                lostPet.IsLost = false;
                context.LostPets.Remove(request);
            }

            context.SaveChanges();
        }
    }
}