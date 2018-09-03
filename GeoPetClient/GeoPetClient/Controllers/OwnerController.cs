using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GeoPetClient.Database;
using GeoPetClient.DataModels;
using Microsoft.AspNetCore.Mvc;

namespace GeoPetClient.Controllers
{
    [Route("api/OwnerController")]
    [ApiController]
    public class OwnerController : ControllerBase
    {
        private static List<Owner> owners = new List<Owner>();

        [HttpGet("byEmail")]
        public Owner Get(string email)
        {
            var context = GeoPetContext.GetInstance();
            return context.Owners.FirstOrDefault(x => x.Mail.Equals(email));
        }

        [HttpPost()]
        public void Create([FromBody]Owner owner)
        {
            var context = GeoPetContext.GetInstance();
            context.Owners.Add((owner));
            context.SaveChanges();
        }

    }
}
