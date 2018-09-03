using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GeoPetClient.Controllers
{
    [Route("api/PetController")]
    [ApiController]
    public class PetController : ControllerBase
    {
        [HttpGet]
        public string GetData()
        {
            return "hola mundo";
        }
    }
}