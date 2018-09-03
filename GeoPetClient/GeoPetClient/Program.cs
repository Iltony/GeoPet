using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using GeoPetClient.Database;
using GeoPetClient.DataModels;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace GeoPetClient
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var context = GeoPetContext.GetInstance();
            GeoPetContextSeeder.Seed(context);

            context.SaveChanges();
            CreateWebHostBuilder(args).Build().Run();
            
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseUrls(urls: "http://localhost:10000")
                .UseStartup<Startup>();
    }
}
