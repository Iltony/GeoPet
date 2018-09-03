using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
        public Owner Get(string mail)
        {
            if (owners.Count == 0)
            {
                owners.Add(new Owner { Mail = "mail@mail.com", Name = "Juan", Password = "pass1234", Phone = "099111111" });
            }
            return owners.FirstOrDefault((x => x.Mail.Equals(mail)));

        }

        [HttpPost()]
        public void Create([FromBody]Owner owner)
        {
            owners.Add((owner));
        }

    }
}
