using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace GeoPetClient.Controllers
{
    [Route("api/pet/[controller]")]
    public class OwnerController : Controller
    {
        [HttpGet]
        public OwnerModel Get(string mail)
        {
            return new Owner();
        }

        [HttpPost()]
        public string Create([FromBody]CreateOwnerRequest createOwnerRequest)
        {
            return "created";
        }
    }
}
